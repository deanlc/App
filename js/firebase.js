console.log("firebase.js connected");
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCEEBTaBzYlDbXgPw-5dlThHg4tuF3r4oc"
    , authDomain: "people-a9ce5.firebaseapp.com"
    , databaseURL: "https://people-a9ce5.firebaseio.com"
    , storageBucket: "people-a9ce5.appspot.com"
    , messagingSenderId: "1007719139169"
};
firebase.initializeApp(config);
// DB variable (the whole db)
var database = firebase.database();
//
//People
//
// only people part of DB
var peopleData = database.ref('people');
// list of people
var peopleList = []; // empty af
// load all the children of "people"
// keep listening for new children
peopleData.on('child_added', function (childData) {
    // run these instructions for each child
    console.table(childData.val());
    var person = childData.val(); // extract the data about the person
    peopleList.push(person); //add the person to the peopleList
});
//
//Jobs
//
// only jobs part of the database
var jobsData = database.ref('jobs');
//list of jobs
var jobsList = [];
// load all the children of "jobs"
// keep listening for new children
jobsData.on('child_added', function (childData) {
    // run these instructions for each child
    console.table(childData.val());
    var jobs = childData.val(); // extract the data about the job
    jobsList.push(jobs); //add the person to the jobsList
});