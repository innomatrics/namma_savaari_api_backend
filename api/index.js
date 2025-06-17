const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//routers
const cityListRouter = require("../routes/city_list");
const balanceLog = require("../routes/balance_log");
const bookBus = require("../routes/book");
const cancelBooking = require("../routes/cancel_booking");
const getBoardingPoint = require("../routes/get_boarding_point");
const getSeatLayout = require("../routes/get_seat_layout");
const search = require("../routes/search");
const block = require("../routes/block");
const balance = require("../routes/balance");


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use("/api", cityListRouter);
app.use("/api", balanceLog);
app.use("/api", bookBus);
app.use("/api", cancelBooking);
app.use("/api", getBoardingPoint);
app.use("/api", getSeatLayout);
app.use("/api", search);
app.use("/api", block);
app.use("/api", balance);

app.get("/", (req, res) => {
  res.send("Hello from the proxy server");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
