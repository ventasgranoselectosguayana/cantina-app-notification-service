import admin from 'firebase-admin';
require('dotenv').config();

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_CONFIG);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin;