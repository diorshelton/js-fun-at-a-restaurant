function createRestaurant(name) {
  var restaurant = {
    name:name,
    menus:{
      breakfast:[],
      lunch:[],
      dinner:[]
    },
  }
  return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  var menuItemType = menuItem.type;
  if(!restaurant.menus[menuItemType].includes(menuItem)) {
    restaurant.menus[menuItemType].push(menuItem)
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}