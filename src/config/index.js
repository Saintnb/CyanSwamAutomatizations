import dotenv from 'dotenv';
import path from 'path';

const env = dotenv.config({ path: path.join('./', '.env') });
if (!env || env.error) {
    console.log(JSON.stringify(env.error, null, 2));
    throw new Error("Couldn't find .env file");
}

export const ENV = process.env.NODE_ENV ?? 'development';
export const APP_VERSION = process.env.APP_VERSION ?? '1.0';
export const APP_FRONTED_URL = ENV !== 'local' && process.env.APP_FRONTED_URL ? process.env.APP_FRONTED_URL : 'http://localhost:3000';
export const APP_BACKEND = process.env.APP_BACKEND && ENV !== 'local' ? process.env.APP_BACKEND : 'http://localhost';
export const PORT = ENV === 'local' && process.env.PORT_LOCAL ? process.env.PORT_LOCAL : process.env.PORT ?? '4000';
export const APP_BACKEND_URL = `${APP_BACKEND}`;
export const ALLOWED_ORIGINS = `${process.env.ALLOWED_ORIGINS},${APP_FRONTED_URL}`.split(',').map((o) => o.trim());
// export const ALLOWED_ORIGINS = [APP_FRONTED_URL];
export const DB_HOSTNAME = process.env.DB_HOSTNAME;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_DIALECT = process.env.DB_DIALECT || 'postgres';
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_PORT = process.env.DB_PORT;
export const DB_SCHEMA = process.env.DB_SCHEMA;
export const BODY_SIZE_LIMIT = process.env.BODY_SIZE_LIMIT;
export const AWS = { REGION: process.env.AWS_REGION };
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const BASE_SERVER_URL = process.env.BASE_SERVER_URL || 'http://localhost:4000'
export const ACCESS_TOKEN = {
    SECRET: process.env.ACCESS_TOKEN_SECRET ?? 'fiCTF+KeZeAx5dhzQJ/sJd/25641qfufaAvfsMAWAM+P/nkiAQiSrm1SDL8dPVipf42/UeK9X/1xOweF04XIvQ==',
    LIFE: process.env.ACCESS_TOKEN_LIFE ?? '30m',
    REFRESH_SECRET: process.env.ACCESS_TOKEN_REFRESH_SECRET ?? 'REFRESH+ZeAx5dhzQJ/sJd/25641qfufaAvfsMAWAM+P/nkiAQiSrm1SDL8dPVipf42/UeK9X/1xOweF04XIvQ==',
    REFRESH_LIFE: process.env.ACCESS_TOKEN_REFRESH_LIFE ?? '60m',
};

export const VERIFYEMAIL_TOKEN = {
    SECRET: process.env.VERIFYEMAIL_TOKEN_SECRET ?? 'fiCTF+KeZeAx5dhzQJ/sJd/25641qfufaAvfsMAWAM+P/nkiAQiSrm1SDL8dPVipf42/UeK9X/1xOweF04XIvQ==',
    LIFE: process.env.VERIFYEMAIL_TOKEN_LIFE ?? '1h',
};
export const VERIFYEMAIL_URL = `${APP_FRONTED_URL}${process.env.VERIFYEMAIL_URL}`;

export const RECOVERPASS_TOKEN = {
    SECRET: process.env.RECOVERPASS_TOKEN_SECRET ?? 'fiCTF+KeZeAx5dhzQJ/sJd/25641qfufaAvfsMAWAM+P/nkiAQiSrm1SDL8dPVipf42/UeK9X/1xOweF04XIvQ==',
    LIFE: process.env.RECOVERPASS_TOKEN_LIFE ?? '24h',
};
export const RECOVERPASS_URL = `${APP_FRONTED_URL}${process.env.RECOVERPASS_URL}`;

export const COOKIE_PREFIX = process.env.COOKIE_PREFIX ?? 'cadijwt';
export const COOKIE_PREFIX_REFRESH = process.env.COOKIE_PREFIX_REFRESH ?? 'cadijwt_refresh';
// export const FRONTEND_URL = process.env.FRONTEND_URL;

//SWELL
export const SWELL_STORE_ID = process.env.SWELL_STORE_ID;
export const SWELL_KEY = process.env.SWELL_KEY;
export const SWELL_URL = process.env.SWELL_URL ?? 'https://api.swell.store';//`https://client_id:${SWELL_KEY}@${SWELL_STORE_ID}`;
export const SWELL_PUBLIC_KEY = process.env.SWELL_PUBLIC_KEY;

export const FACEBOOK_TOKEN = {
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET
}

export const TWITTER_TOKEN = {
    TWITTER_APP_KEY: process.env.TWITTER_APP_KEY,
    TWITTER_APP_SECRET: process.env.TWITTER_APP_SECRET
}

export const GOOGLE_TOKEN = {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
}

export const GOOGLE_FAILURE_REDIRECT = `${APP_FRONTED_URL}${process.env.GOOGLE_FAILURE_REDIRECT}`;
export const GOOGLE_SUCCESS_REDIRECT = `${APP_FRONTED_URL}${process.env.GOOGLE_SUCCESS_REDIRECT}`;
export const GOOGLE_CALLBACK_URL = `${APP_BACKEND_URL}${process.env.GOOGLE_CALLBACK_URL}`;

export const FACEBOOK_FAILURE_REDIRECT = `${APP_FRONTED_URL}${process.env.FACEBOOK_FAILURE_REDIRECT}`;
export const FACEBOOK_SUCCESS_REDIRECT = `${APP_FRONTED_URL}${process.env.FACEBOOK_SUCCESS_REDIRECT}`;
export const FACEBOOK_CALLBACK_URL = `${APP_BACKEND_URL}${process.env.FACEBOOK_CALLBACK_URL}`;

export const TWITTER_FAILURE_REDIRECT = `${APP_FRONTED_URL}${process.env.TWITTER_FAILURE_REDIRECT}`;
export const TWITTER_SUCCESS_REDIRECT = `${APP_FRONTED_URL}${process.env.TWITTER_SUCCESS_REDIRECT}`;
export const TWITTER_CALLBACK_URL = `${APP_BACKEND_URL}${process.env.TWITTER_CALLBACK_URL}`;
//EMAIL
export const EMAIL_CONFIG = {
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_SECURE: process.env.EMAIL_SECURE,
    EMAIL_AUTH_USER: process.env.EMAIL_AUTH_USER,
    EMAIL_AUTH_PASSWORD: process.env.EMAIL_AUTH_PASSWORD,
    EMAIL_FROM: process.env.EMAIL_FROM
}

export const AWS_TOKEN = {
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
}
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME

export const EMAIL_SUPPORT_TO = process.env.EMAIL_SUPPORT_TO

console.log('ENV: ', ENV)
console.log('BACKEND_URL: ', APP_BACKEND_URL)
console.log('FRONTED_URL: ', APP_FRONTED_URL)
console.log('ACCESS_TOKEN.LIFE: ', ACCESS_TOKEN.LIFE)
console.log('ACCESS_TOKEN.REFRESH_LIFE: ', ACCESS_TOKEN.REFRESH_LIFE)
console.log('ALLOWED_ORIGINS: ', ALLOWED_ORIGINS)