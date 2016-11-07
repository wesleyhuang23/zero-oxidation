angular.module('oracApp').service('service', function($http){

  this.oracData = [
    {
      name:"Sumac Bran, Raw",
      orac:"312,400",
      link:'https://www.superfoodly.com/orac-value/sumac-bran-raw/'
    },
    {
      name:"Ground Cloves",
      orac:"290,283",
      link:'https://www.superfoodly.com/orac-value/spices-cloves-ground/'
    },
    {
      name:"Indian Gooseberry",
      orac:"261,500",
      link:'Indian Gooseberry (Amla Berries), Dried'
    },
    {
      name:"Sorghum Bran, High-Tannin",
      orac:"240,000",
      link:'https://www.superfoodly.com/orac-value/sorghum-bran-hi-tannin/'
    },
    {
      name:"Oregano, dried",
      orac:"175,295",
      link:'https://www.superfoodly.com/orac-value/spices-oregano-dried/'
    },
    {
      name:"Rosemary, spice",
      orac:"165,280",
      link:'https://www.superfoodly.com/orac-value/spices-rosemary-dried/'
    },
    {
      name:"Peppermint Leaves, Dried",
      orac:"160,820",
      link:'https://www.superfoodly.com/orac-value/dried-peppermint/'
    },
    {
      name:"Thyme Spice, Dried",
      orac:"157,380",
      link:'https://www.superfoodly.com/orac-value/spices-thyme-dried/'
    },
    {
      name:"Cinnamon Spice, Ground",
      orac:"131,420",
      link:'https://www.superfoodly.com/orac-value/spices-cinnamon-ground/'
    },
    {
      name:"Turmeric",
      orac:"127,068",
      link:'https://www.superfoodly.com/orac-value/spices-turmeric-ground/'
    },
    {
      name:"Black Cohosh Root, Dried",
      orac:"126,495",
      link:'https://www.superfoodly.com/orac-value/black-cohosh/'
    },

    {
      name:"Vanilla Bean Spice, Dried",
      orac:"118,400",
      link:'https://www.superfoodly.com/orac-value/spices-vanilla-beans-dried/'
    },
    {
      name:"Sage Spice, Ground",
      orac:"119,929",
      link:'https://www.superfoodly.com/orac-value/spices-sage-ground/'
    },
    {
      name:"Szechuan Pepper Spice, Dried",
      orac:"118,400",
      link:'https://www.superfoodly.com/orac-value/spices-szechuan-pepper-dried/'
    },
    {
      name:"Parsley Spice, Dried",
      orac:"73,670",
      link:'https://www.superfoodly.com/orac-value/spices-parsley-dried/'
    },
    {
      name:"Red Sorghum Bran",
      orac:"71,000",
      link:'https://www.superfoodly.com/orac-value/sorghum-bran-red/'
    },
    {
      name:"Gotu Kola Leaves",
      orac:"69,978",
      link:'https://www.superfoodly.com/orac-value/gotu-kola/'
    },
    {
      name:"Nutmeg Spice, Ground",
      orac:"69,640",
      link:'https://www.superfoodly.com/orac-value/spices-nutmeg-ground/'
    },
    {
      name:"Tea Leaves, Dried",
      orac:"62,714",
      link:'https://www.superfoodly.com/orac-value/dried-tea-leaf/'
    },
    {
      name:"Basil Spice, Dried",
      orac:"61,063",
      link:'https://www.superfoodly.com/orac-value/spices-basil-dried/'
    },
    {
      name:"Cocoa Powder, Unsweetened",
      orac:"55,653",
      link:'https://www.superfoodly.com/orac-value/cocoa-dry-powder-unsweetened/'
    },
    {
      name:"Camu Camu Powder",
      orac:"52,000",
      link:'https://www.superfoodly.com/orac-value/camu-camu-powder/'
    },
    {
      name:"Cumin Seed Spice",
      orac:"50,372",
      link:'https://www.superfoodly.com/orac-value/spices-cumin-seed/'
    },
    {
      name:"Curry Powder",
      orac:"48,504",
      link:'https://www.superfoodly.com/orac-value/spices-curry-powder/'
    },
    {
      name:"White Pepper Spice",
      orac:"40,700",
      link:'https://www.superfoodly.com/orac-value/spices-pepper-white/'
    },
    {
      name:"Dutch Chocolate Powder",
      orac:"40,200",
      link:'https://www.superfoodly.com/orac-value/chocolate-dutched-powder/'
    },
    {
      name:"Ginger Spice, Ground",
      orac:"39,041",
      link:'https://www.superfoodly.com/orac-value/spices-ginger-ground/'
    },
    {
      name:"Black Pepper Spice",
      orac:"34,053",
      link:'https://www.superfoodly.com/orac-value/spices-pepper-black/'
    },
    {
      name:"Sage, Fresh",
      orac:"32,004",
      link:'https://www.superfoodly.com/orac-value/sage-fresh/'
    },
    {
      name:"Mistletoe, Dried",
      orac:"30,537",
      link:''
    },
    {
      name:"Yellow Mustard Seed Spice",
      orac:"29,257",
      link:'https://www.superfoodly.com/orac-value/mistletoe/'
    },
    {
      name:"Maqui Berry Powder",
      orac:"27,600",
      link:'https://www.superfoodly.com/orac-value/maqui-berry/'
    },
    {
      name:"Tyme, Fresh",
      orac:"27,426",
      link:'https://www.superfoodly.com/orac-value/thyme-fresh/'
    },
    {
      name:"Marjoram, Fresh",
      orac:"27,297",
      link:'https://www.superfoodly.com/orac-value/marjoram-fresh/'
    },
    {
      name:"Rice, Bran, Crude",
      orac:"24,287",
      link:'https://www.superfoodly.com/orac-value/rice-bran-crude/'
    },
    {
      name:"Chili Powder, Spice",
      orac:"23,636",
      link:'https://www.superfoodly.com/orac-value/spices-chili-powder/'
    },
    {
      name:"Paprika Spice",
      orac:"21,932",
      link:'https://www.superfoodly.com/orac-value/spices-paprika/'
    },
    {
      name:"Dark Chocolate Candies",
      orac:"20,816",
      link:'https://www.superfoodly.com/orac-value/candies-chocolate-dark/'
    },
    {
      name:"Saffron Spice, Whole",
      orac:"20,580",
      link:'https://www.superfoodly.com/orac-value/saffron-whole/'
    },
    {
      name:"Red Cayenne Pepper Spice",
      orac:"19,671",
      link:'https://www.superfoodly.com/orac-value/spices-pepper-red-or-cayenne/'
    },
    {
      name:"Black Raspberries, Raw",
      orac:"19,220",
      link:"https://www.superfoodly.com/orac-value/serviceberry-june-saskatoon-berries/"
    },
    {
      name:"Pecans, Nuts",
      orac:"17,940",
      link:'https://www.superfoodly.com/orac-value/nuts-pecans/'
    },
    {
      name:"Golden Apple",
      orac:"17,933",
      link:'https://www.superfoodly.com/orac-value/golden-apple-bael-fruit-aegle-marmelos/'
    },
    {
      name:"Astragalus Root, Dried",
      orac:"17,773",
      link:'https://www.superfoodly.com/orac-value/astragalus/'
    },
    {
      name:"Chokeberry, Raw",
      orac:"16,062",
      link:'https://www.superfoodly.com/orac-value/chokeberry-raw/'
    },
    {
      name:"Dandelion Root, Dried",
      orac:"15,200",
      link:''
    },
    {
      name:"Ginger Root, Raw",
      orac:"14,840",
      link:'https://www.superfoodly.com/orac-value/dandelion-root/'
    },
    {
      name:"Elderberries, Raw",
      orac:"14,697",
      link:'https://www.superfoodly.com/orac-value/elderberries-raw/'
    },
    {
      name:"Peppermint, Fresh",
      orac:"13,978",
      link:'https://www.superfoodly.com/orac-value/peppermint-fresh/'
    },
    {
      name:"Oregano, Fresh",
      orac:"13,978",
      link:'https://www.superfoodly.com/orac-value/oregano-fresh/'
    },
    {
      name:"English Walnuts",
      orac:"13,541",
      link:'https://www.superfoodly.com/orac-value/nuts-walnuts-english/'
    },
    {
      name:"Star Anise Spice",
      orac:"11,300",
      link:'https://www.superfoodly.com/orac-value/star-anise/'
    },
    {
      name:"Rosemary Leaves, Fresh",
      orac:"11,070",
      link:'https://www.superfoodly.com/orac-value/fresh-rosemary-leaves/'
    },
    {
      name:"Purple Corn, Raw",
      orac:"10,800",
      link:'https://www.superfoodly.com/orac-value/purple-corn/'
    },
    {
      name:"Black Raspberry Juice",
      orac:"10,460",
      link:'https://www.superfoodly.com/orac-value/juice-black-raspberry/'
    },
    {
      name:"Golden Raisins, Seedless",
      orac:"10,450",
      link:'https://www.superfoodly.com/orac-value/raisins-golden-seedless/'
    },
    {
      name:"Black Chia Seeds, Raw",
      orac:"9,800",
      link:'https://www.superfoodly.com/orac-value/black-chia-seeds/'
    },
    {
      name:"Dandelion Greens, Dried",
      orac:"9,666",
      link:'https://www.superfoodly.com/orac-value/dandelion-greens/'
    },
    {
      name:"Hazelnuts or Filberts",
      orac:"9,645",
      link:'https://www.superfoodly.com/orac-value/nuts-hazelnuts-or-filberts/'
    },
    {
      name:"Wild Blueberries, Raw",
      orac:"9,621",
      link:'https://www.superfoodly.com/orac-value/blueberries-wild-raw/'
    },
    {
      name:"Dried Pears",
      orac:"9,496",
      link:'https://www.superfoodly.com/orac-value/pears-dried-to-40-moisture-purchased-in-italy/'
    },
    {
      name:"Savory, Fresh",
      orac:"9,416",
      link:'https://www.superfoodly.com/orac-value/savory-fresh/'
    },
    {
      name:"Artichokes, Boiled",
      orac:"9,416",
      link:'https://www.superfoodly.com/orac-value/artichokes-ocean-mist-boiled/'
    },
    {
      name:"Reishi Mushrooms, Dried",
      orac:"9,244",
      link:'https://www.superfoodly.com/orac-value/reishi-mushroom/'
    },
    {
      name:"Cranberries, Raw",
      orac:"9,090",
      link:'https://www.superfoodly.com/orac-value/cranberries-raw/'
    },
    {
      name:"Red Kidney Beans, Raw",
      orac:"8,606",
      link:'https://www.superfoodly.com/orac-value/beans-kidney-red-mature-seeds-raw/'
    },
    {
      name:"Black Beans, Raw",
      orac:"8,494",
      link:'https://www.superfoodly.com/orac-value/beans-black-mature-seeds-raw/'
    },
    {
      name:"Pink Beans, Raw",
      orac:"8,320",
      link:'https://www.superfoodly.com/orac-value/beans-pink-mature-seeds-raw/'
    },
    {
      name:"Jalapeno Peppers, Dried",
      orac:"8,250",
      link:'https://www.superfoodly.com/orac-value/jalapeno/'
    },
    {
      name:"Prunes(Dried Plums), Uncooked",
      orac:"8,059",
      link:'https://www.superfoodly.com/orac-value/plums-dried-prunes-uncooked/'
    },
    {
      name:"Pinto Beans, Raw",
      orac:"8,033",
      link:'https://www.superfoodly.com/orac-value/beans-pinto-mature-seeds-raw/'
    },
    {
      name:"Pistachios, Nuts, Raw",
      orac:"7,675",
      link:'https://www.superfoodly.com/orac-value/nuts-pistachio-nuts-raw/'
    },
    {
      name:"Milk Chocolate Candies",
      orac:"7,519",
      link:'https://www.superfoodly.com/orac-value/candies-milk-chocolate/'
    },
    {
      name:"Lentils, Raw",
      orac:"7,282",
      link:'https://www.superfoodly.com/orac-value/lentils-raw/'
    },
    {
      name:"White Chia Seeds, Raw",
      orac:"7,000",
      link:'https://www.superfoodly.com/orac-value/white-chia-seeds/'
    },
    {
      name:"Garlic Powder Spice",
      orac:"6,665",
      link:'https://www.superfoodly.com/orac-value/spices-garlic-powder/'
    },
    {
      name:"Artichokes, Globe or French, Raw",
      orac:"6,552",
      link:'https://www.superfoodly.com/orac-value/artichokes-globe-or-french-raw/'
    },
    {
      name:"Black Turtle Beans",
      orac:"6,416",
      link:'https://www.superfoodly.com/orac-value/beans-black-turtle-soup-mature-seeds-raw/'
    },
    {
      name:"White Soraghum Bran",
      orac:"6,400",
      link:'https://www.superfoodly.com/orac-value/sorghum-bran-white/'
    },
    {
      name:"Chocolate Syrup",
      orac:"6,330",
      link:'https://www.superfoodly.com/orac-value/chocolate-syrup/'
    },
    {
      name:"Peach Babyfood",
      orac:"6,257",
      link:'https://www.superfoodly.com/orac-value/babyfood-fruit-peaches/'
    },
    {
      name:"Mulberries, Fresh",
      orac:"6,130",
      link:'https://www.superfoodly.com/orac-value/mulberries/'
    },
    {
      name:"Plums, Raw",
      orac:"6,100",
      link:'https://www.superfoodly.com/orac-value/plums-raw/'
    },
    {
      name:"Lemon Balm Leaves, Raw",
      orac:"5,997",
      link:'https://www.superfoodly.com/orac-value/lemon-balm-leaves-raw/'
    },
    {
      name:"Blackverries, Raw",
      orac:"5,905",
      link:'https://www.superfoodly.com/orac-value/blackberries-raw/'
    },
    {
      name:"Garlic, Raw",
      orac:"5,708",
      link:'https://www.superfoodly.com/orac-value/garlic-raw/'
    },
    {
      name:"Soybeans, Raw",
      orac:"5,409",
      link:'https://www.superfoodly.com/orac-value/soybeans-mature-seeds-raw/'
    },
    {
      name:"Cilantro Leaves (Coriander), Raw",
      orac:"5,065",
      link:'https://www.superfoodly.com/orac-value/coriander-cilantro-leaves-raw/'
    },
    {
      name:"Red Raspberries, Raw",
      orac:"5,065",
      link:'https://www.superfoodly.com/orac-value/raspberries-raw/'
    },
    {
      name:"Basil, Fresh",
      orac:"4,805",
      link:'https://www.superfoodly.com/orac-value/basil-fresh/'
    },
    {
      name:"Black Quinoa, Uncooked",
      orac:"4,800",
      link:'https://www.superfoodly.com/orac-value/black-quinoa/'
    },
    {
      name:"Artichokes, Canned",
      orac:"4,760",
      link:'https://www.superfoodly.com/orac-value/canned-artichoke/'
    },
    {
      name:"Chestnuts With Pellicle",
      orac:"4,670",
      link:'https://www.superfoodly.com/orac-value/chestnuts-with-pellicle/'
    },
    {
      name:"Blueberries, Raw",
      orac:"4,669",
      link:'https://www.superfoodly.com/orac-value/blueberries-raw/'
    },
    {
      name:"Cabernet Sauvignon Red Wine",
      orac:"4,523",
      link:'https://www.superfoodly.com/orac-value/alcoholic-beverage-wine-table-red-cabernet-sauvignon/'
    },
    {
      name:"Pomegranates, Raw",
      orac:"4,479",
      link:'https://www.superfoodly.com/orac-value/pomegranates-raw/'
    },
    {
      name:"Almonds, Nuts",
      orac:"4,454",
      link:'https://www.superfoodly.com/orac-value/nuts-almonds/'
    },
    {
      name:"Dill Weed, Fresh",
      orac:"4,392",
      link:'https://www.superfoodly.com/orac-value/dill-weed-fresh/'
    },
    {
      name:"Black Eyed Pease (Cowpeas), Raw",
      orac:"4,343",
      link:'https://www.superfoodly.com/orac-value/cowpeas-common-blackeyes-crowder-southern-mature-seeds-raw/'
    },
    {
      name:"Strawberries, Raw",
      orac:"4,302",
      link:'https://www.superfoodly.com/orac-value/strawberries-raw/'
    },
    {
      name:"Papa John's Cheese Pizza, Original Crust",
      orac:"300",
      link:'https://www.superfoodly.com/orac-value/papa-johns-pizza/'
    },
    {
      name:"Guiness Stout Beer",
      orac:"210",
      link:'https://www.superfoodly.com/orac-value/guinness-stout/'
    },
    {
      name:"Domino's Cheese Pizza, Classic Hand-Tossed",
      orac:"200",
      link:'https://www.superfoodly.com/orac-value/dominos-pizza/'
    },
    {
      name:"McDonald's Crispy Chicken Salad",
      orac:"180",
      link:'https://www.superfoodly.com/orac-value/mcdonalds-chicken-sandwich/'
    },
    {
      name:"Krispy Dreme Donuts, Plain",
      orac:"160",
      link:'https://www.superfoodly.com/orac-value/krispy-kreme-donuts-plain-doughnuts/'
    },
    {
      name:"Budweiser Beer",
      orac:"150",
      link:'https://www.superfoodly.com/orac-value/budweiser/'
    },
    {
      name:"Heineken Lager Beer",
      orac:"130",
      link:'https://www.superfoodly.com/orac-value/heineken-lager-beer/'
    },
    {
      name:"Miller Lite Beer",
      orac:"90",
      link:'https://www.superfoodly.com/orac-value/miller-lite/'
    },
    {
      name:"Red Bull Energy Drink",
      orac:"0",
      link:'https://www.superfoodly.com/orac-value/red-bull-energy-drink/'
    },
    {
      name:"Jello",
      orac:"0",
      link:'Jello / Gelatin, Strawberry Flavor'
    },

  ];

  console.log(this.oracData.length);
//Message
  var msgData = [];

  this.storeMsg = function(fn, ln, email, msg){
    var msgObj = {};
    msgObj.firstName = fn;
    msgObj.lastName = ln;
    msgObj.email = email;
    msgObj.message = msg;
    console.log(msgObj);
    msgData.push(msgObj);
    console.log(msgData);
  };

  this.getMessage = function(msgData){
    console.log(msgData);
    return msgData;
  };
//message

//AppleGate api

this.getFoods = function(){
  return $http({
    method: 'Get',
    url: 'http://api.nal.usda.gov/ndb/search/?format=json&q=organic&sort=n&max=100&offset=14&api_key=hDJWcpDR1mfOy7dSIoxMPlKmLDZwEpqiAnSVI1fA'
  }).then(function(response){
    console.log(response.data.list.item);
    return response.data.list.item;
  });
};



});
