const { search } = require("../global_variable");
const axios = require("axios");

exports.search = async (req, res) => {
  try {
    const response = await axios.post(search, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers['api-token'],
      },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Search proxy error:", error?.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: 'Proxy failed',
      backendMessage: error.response?.data || {},
      details: error.message,
    });
  }
};