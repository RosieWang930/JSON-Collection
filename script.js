//Get the div needed JSON infomation
let contentMenu = document.getElementById('contentGrid');

//Create a JSON
let myJSON = [
  {
    "title" : "Pearl Milk Tea",
    "picture_url" : "https://www.yummywok.com.au/wp-content/uploads/2018/12/Taiwan-Milk-Tea.jpg",
    "price" : "M:$4.75 L:$5.50",
    "calories" : "265-315 Cal"
  },
  {
    "title" : "Black Milk Foam",
    "picture_url" : "http://www.ttob.ca/images/drinks/TTOB_drinks_milkfoam_green.jpg",
    "price" : "M:$4.50 L:$5.5",
    "calories" : "190-270 Cal"
  },
  {
    "title" : "Mango Milk",
    "picture_url" : "https://www.simplyrecipes.com/wp-content/uploads/2006/11/mango-lassi-vertical-a-1200.jpg",
    "price" : "M:$5.75 L:$6.45",
    "calories" : "215-270 Cal"
  },
  {
    "title" : "Green Tea",
    "picture_url" : "https://cdn2.stylecraze.com/wp-content/uploads/2013/02/20-Benefits-Of-Green-Tea-That-You-Should-Definitely-Know-1.jpg.webp",
    "price" : "M:$4.75 L:$5.50",
    "calories" : "100-290 Cal"
  },
  {
    "title" : "Taro Milk Tea",
    "picture_url" : "https://i1.wp.com/livingfreshdaily.com/wp-content/uploads/2019/07/taro-bubble-milk-tea-recipe.jpg?fit=1497%2C1503&ssl=1",
    "price" : "M:$5 L:$5.75",
    "calories" :"250-310 Cal"
  },
  {
    "title" : "Caramel Chocolate",
    "picture_url" : "https://www.unexpectedelegance.com/wp-content/uploads/2016/09/Hot-Chocolate-salted-caramel-1.jpg",
    "price" : "M:$5 L:$5.75",
    "calories" :"270-313 Cal"
  },
  {
    "title" : "Matcha Milk",
    "picture_url" : "https://images.japancentre.com/recipes/pics/16/main/matcha-latte.jpg?1469572822",
    "price" : "M:$5.75 L:$6.45",
    "calories" :"135-190 Cal"
  }
]

//Tranport the JSON infomation to the page
//Use for-loop to add the elements in JSON list
for(var i=0; i<myJSON.length; i++){
  applyJSON(myJSON[i]);
}


function applyJSON(incomingJSON){
  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');


  /// Create & add footer image
  let newImageContainer = document.createElement("DIV");
  newImageContainer.classList.add("ImageContainer");
  let newImage = document.createElement("IMG");
  newImage.src = incomingJSON['picture_url'];
  newImageContainer.appendChild(newImage);
  newContentElement.appendChild(newImageContainer);

  /// Create HEADLINE h2, set class, set content
  let newContentHeading = document.createElement("H2");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerHTML = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add price to the item
  let newContentPrice = document.createElement("p");
  newContentPrice.innerHTML = incomingJSON['price'];
  newContentElement.appendChild(newContentPrice);

  /// Create & add calories to the item
  let newContentCalories = document.createElement("p");
  newContentCalories.innerHTML = incomingJSON['calories'];
  newContentElement.appendChild(newContentCalories);

  let newContentButton = document.createElement("button");
  newContentButton.innerHTML = "+";
  newContentButton.classList.add('buttons');
  newContentElement.appendChild(newContentButton);


  contentMenu.appendChild(newContentElement);
}
