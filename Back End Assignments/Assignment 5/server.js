const express = require('express');
const mongoose = require('mongoose');
const PORT = 8000

const app = express();
app.use(express.json({ extended: false }));
const DB = 'mongodb+srv://hamza:Hamzadb101@cluster0.77c93bv.mongodb.net/Ecommerce?retryWrites=true&w=majority';

mongoose.connect(DB, {
  // useCreateIndex:true,
  useNewUrlParser: true,
  useUnifiedTopology: true,

}).then(() => {
  console.log("Successfuly Connected With Database");
}).catch((error) => {
  console.log("No Connection");
});


app.get('/', (req, res) => {
  res.send("express started from today")

})

const userRouter = require('./routes/user.Route');
const productRouter = require('./routes/product.Route');
const orderRouter = require('./routes/order.Route');

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})


