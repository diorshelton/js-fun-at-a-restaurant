class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(name, isMornining) {
    if (isMornining) {
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`
    }
  }
  checkForFood(foodItem) {
    var orderName = foodItem.name;
    var menuItemType = foodItem.type;
    if (!this.restaurant.menus[menuItemType].includes(foodItem)) {
      return `Sorry, we aren't serving ${orderName} today.`
    } else {
      return `Yes, we're serving ${orderName} today!`
    }
  }
}

module.exports = Chef;