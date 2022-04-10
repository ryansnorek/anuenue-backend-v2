const store = require("./store-data");

function getAllItems() {
  return store;
}

function getItemByID(id) {
  return store.find((item) => item.id === id);
}

function getLineItems(order) {
  return order.map((item) => {
    const product = getItemById(item.id);
    const lineItem = {
      price: product.price,
      quantity: item.qty,
    };
    return lineItem;
  });
}

function getOrderTotal(orderItems) {
  return orderItems.reduce((total, item) => {
    return (total += item.price);
  }, 0);
}

module.exports = {
  getOrderTotal,
  getLineItems,
  getItemByID,
  getAllItems,
};
