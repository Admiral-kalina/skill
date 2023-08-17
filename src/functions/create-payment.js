const axios = require('axios');

exports.handler = async function (event, context) {
    try {
        const response = await axios.post(
            'https://api.mollie.com/v2/payments',
            {
                amount: {
                    currency: 'EUR',
                    value: event.body.amount,
                },
                description: event.body.description,
                redirectUrl: 'http://localhost:8000/payment-success', // Update this URL
                method: 'ideal', // Payment method (change as needed)
            },
            {
                headers: {
                    Authorization: `Bearer test_96m24F3ncSJyj7nFpmKP5pjSn3RzrD`,
                },
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentUrl: response.data._links.checkout.href }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An error occurred while creating the payment.' }),
        };
    }
};