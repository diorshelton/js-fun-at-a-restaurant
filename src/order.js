function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
  return deliveryOrders
};

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      var orderIndex = deliveryOrders[i];
    }
  }
  deliveryOrders.splice(orderIndex, 1);
};

function listItems(deliveryOrders) {
  var list = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
   list.push(deliveryOrders[i].item);
  };
  return list.join(", ");
};

function searchOrder(deliveryOrders) {
  
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}