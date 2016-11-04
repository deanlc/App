console.log("firebase.js connected");

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqCowWm_tfPP6BlQZIWiRCWzSwsD1dnFM",
    databaseURL: "https://dynamic-web-template-e91d4.firebaseio.com"
  };
  firebase.initializeApp(config);

// DB variable (the whole db)
var database = firebase.database();

// only people part of DB
var peopleData = database.ref('people');

// list of people

var peopleList = []; // empty af

// load all the children of "people"
// keep listening for new children
peopleData.on('child_added', function(childData){
    // run these instructions for each child
    console.table( childData.val());
    
    var person = childData.val(); // extract the data about the person
    peopleList.push( person ); //add the person to the peopleList
}); 

//peopleData.on('child_added', function( firebaseObject ) 
//{
//    var person = firebaseObject.val(); 
//    peopleList.push(person);
//    // "push" is JavaScript's lingo for "add to a list"
//})

//