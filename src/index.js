import express from 'express';
import { PORT } from './config';
// import {
//     errorMiddleware,
//     loggerMiddleware,
//     parserMiddleware,
//     securityMiddleware,
//     sessionMiddleware,
//     passportMiddleware
// } from './middlewares';
import apiRouter from './routes/router';
import path from 'path';
import log4js from 'log4js';
// import cron from 'node-cron';
// import cashdrop from './triggers/cashdropTrigger'
// import { createHistoricRank, calculateRanking, createHistoricProductRank } from './triggers/rankingTrigger';
//initialize
const app = express();
global.__dirname = path.resolve();

log4js.configure(__dirname + '/src/config/log4js.json')
//settings
app.set('port', PORT);

//middlewares
// await securityMiddleware(app);
// await parserMiddleware(app);
// await loggerMiddleware(app); // app.use(morgan('dev'));
// await errorMiddleware(app);
// await sessionMiddleware(app);
// await passportMiddleware(app);
// Set the api starting point
app.use('/', apiRouter);

// Static files
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'trace' }));

//Jobs
// At 00:00.00
// cron.schedule('0 0 * * *', () => {
//     cashdrop();
//     createHistoricRank();
//     createHistoricProductRank();
// });
// //every 10 seconds
// cron.schedule('*/10 * * * * *', () => {
//     calculateRanking();// Calculate ranking using movemements.
//     // createHistoricProductRank()
// });

//start server
app.listen(PORT, () => {
    console.log('Server on port ' + PORT);
});
