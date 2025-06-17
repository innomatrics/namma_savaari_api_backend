const {commonIp} = require("../global_variable");
const axios = require("axios");
exports.cityList = async (req, res) => {
      try {
        const backendResponse = await axios.post(
          `${commonIp}/city-list`,
          req.body,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': req.headers['authorization'],
            }
          }
        );
    
        res.status(backendResponse.status).json(backendResponse.data);
      } catch (error) {
        res.status(error.response?.status || 500).json({
          error: 'Proxy failed',
          backendMessage: error.response?.data || {},
          details: error.message,
        });
      }
}