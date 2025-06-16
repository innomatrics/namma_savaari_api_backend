const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/city-list', async (req, res) => {
  try {
    const backendResponse = await axios.post(
      'http://65.0.115.185:8081/city-list',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': req.headers['authorization'], // optional token
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
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
