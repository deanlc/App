console.log("firebase.js connected");

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCEEBTaBzYlDbXgPw-5dlThHg4tuF3r4oc",
    authDomain: "people-a9ce5.firebaseapp.com",
    databaseURL: "https://people-a9ce5.firebaseio.com",
    storageBucket: "people-a9ce5.appspot.com",
    messagingSenderId: "1007719139169"
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