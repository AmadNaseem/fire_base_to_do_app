import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express'; 
import cors from 'cors';

admin.initializeApp();

import controller from './controller';
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.use('/todos', controller);

exports.api = functions.https.onRequest(app);
export default app;