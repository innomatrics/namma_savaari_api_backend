const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routers
const cityListRouter = require("./routes/city_list");
const balanceLog = require("./routes/balance_log");
const bookBus = require("./routes/book");
const cancelBooking = require("./routes/cancel_booking");
const getBoardingPoint = require("./routes/get_boarding_point");
const getSeatLayout = require("./routes/get_seat_layout");
const search = require("./routes/search");
const block = require("./routes/block");
const balance = require("./routes/balance");

app.use("/", cityListRouter);
app.use("/", balanceLog);
app.use("/bus-api", bookBus);   
app.use("/bus-api", block);     
app.use("/", cancelBooking);
app.use("/", getBoardingPoint);
app.use("/", getSeatLayout);
app.use("/", search);
app.use("/", balance);

app.get("/", (req, res) => {
  res.send("Hello from the proxy server");
});

app.listen(3000, () => console.log("Proxy server listening on port 3000"));

module.exports = app;
