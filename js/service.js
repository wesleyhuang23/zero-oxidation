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
//message

//AppleGate api

this.getAG = function(){
  return $http({
    Method: 'Get',
    url: 'http://api.nal.usda.gov/ndb/search/?format=json&q=applegate+bacon&sort=n&max=25&offset=0&api_key=hDJWcpDR1mfOy7dSIoxMPlKmLDZwEpqiAnSVI1fA'
  }).then(function(response){
    console.log(response.data.list.item);
    return response.data.list.item;
  });
};

this.getAG();


});
