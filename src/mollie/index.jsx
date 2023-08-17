import axios from "axios";


export const payment = axios.post('https://api.mollie.com/v2/payments',{
    amount: {
        value:    '10.00',
        currency: 'EUR'
    },
    description: 'My first API payment',
    redirectUrl: 'https://yourwebshop.example.org/order/123456',
    webhookUrl:  'https://yourwebshop.example.org/webhook'
})


