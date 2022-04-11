const db = require("../../db/db-config");

function getAllItems() {
  return db("store_items");
}

function updateItem(id, updatedItem) {
  return db("store_items").where("item_id", id).update(updatedItem);
}

function updateImage(id, image) {
  return db("store_items").where("item_id", id).update(image);
}

function insertImage(id, image) {
  return db("store_items").where("item_id", id).insert(image);
}

module.exports = {
  getAllItems,
  updateItem,
  updateImage,
  insertImage,
};
