const {balance} = require("../global_variable");
const axios = require("axios");

exports.balance = async (req, res) => {
    const body = req.body;

    try {
        const response = await axios.post(balance, body,           {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': req.headers['api-token'],
            }
          });

        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            error: 'Proxy failed',
            backendMessage: error.response?.data || {},
            details: error.message,
        })
    }
}