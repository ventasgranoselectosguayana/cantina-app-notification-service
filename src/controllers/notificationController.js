import admin from '../config/firebase.js';

const sendNotification = async (tokens, data) => {
    return await admin.messaging().sendEachForMulticast({
        tokens,
        data
    });
};

export const sendNotificationHandler = async (req, res) => {
    const { token, data } = req.body;

    if (!token) {
        return res.status(400).json({
            message: 'Token not found'
        });
    }

    if (!data || !data.title || !data.body) {
        return res.status(400).json({
            message: 'Invalid data'
        });
    }

    try {
        const response = await sendNotification(Array.isArray(token) ? token : [token], {
            title: data.title,
            body: data.body,
        });

        return res.status(200).json({
            message: 'Notification sent successfully',
            response
        });
    } catch (error) {
        console.error(`Error on sending notification: ${error}`);
        return res.status(500).json({
            message: 'Error sending notification',
            error: error.message
        });
    }
};