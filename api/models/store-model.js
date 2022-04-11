// const storeItems = require("./storeItems");

const db = require("../../db/db-config");

function getAllItems() {
  return db("store_items");
}

function getItemByID(id) {
  return db("store_items").where("item_id", id);
}

function updateItem(id, item) {
  return db("store_items").where("item_id", id).update(item);
}

function updateImage(id, img) {
  return db("store_items").where("item_id", id).update(img);
}

function getLineItems(order) {
  return order.map(async (item) => {
    const product = await getItemByID(item.id);
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
  getAllItems,
  getItemByID,
  updateItem,
  updateImage,
  getLineItems,
  getOrderTotal,
};
