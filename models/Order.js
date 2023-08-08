<<<<<<< HEAD
const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema(
  {
    products: {
      type: Object,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      default: "processing",
    },
    total: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
    date: {
      type: String,
      default: new Date().toISOString().split("T")[0],
    },
    phonenumber: {
      type: String,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { minimize: false }
);

const Order = mongoose.model("Order", OrderSchema);
=======
const mongoose = require('mongoose');
const OrderSchema = mongoose.Schema({
  products: {
    type: Object
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    default: 'processing'
  },
  total : {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    default: new Date().toISOString().split('T')[0]
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  }
}, {minimize: false});

const Order = mongoose.model('Order', OrderSchema);
>>>>>>> 5b3d7232c41fa07004a987f46d8731de935125e7

module.exports = Order;
