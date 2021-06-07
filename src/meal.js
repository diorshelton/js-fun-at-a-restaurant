function nameMenuItem(name) {
  var menuItemName = `Delicious ${name}`;
  return menuItemName;
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name:name,
    price:price,
    type:type
  };
  return menuItem;
};

function addIngredients(ingredient
  , list) {
  if (!list.includes(ingredient)) {
    list.push(ingredient)}
  return list;
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
};

function decreasePrice(menuItem) {
  var discountAmount = (menuItem * .10);
  var discountedPrice = (menuItem - discountAmount);
  return discountedPrice;
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


 