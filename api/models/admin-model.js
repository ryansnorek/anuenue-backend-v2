const db = require("../../db/db-config");

function getAllItems() {
  return db("store_items");
}

function updateItem(id, updatedItem) {
  return db("store_items").where("item_id", id).update(updatedItem);
}

module.exports = {
  getAllItems,
  updateItem,
};
