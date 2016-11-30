// select HTML elements
var home = jQuery('#home_section');
var search_jobs = jQuery('#search_jobs');
var find_jobs = jQuery('#find_jobs');
var jobs_button = $('#jobs');
var job_dropdown = $('#select_job');
var search = jQuery('#search_section');
var jobs = jQuery('#jobs_section');
var results = jQuery('#results');
var details = jQuery('#details');
var find_button = $('#find_button');
var students_button = $('#students');
var back_home = $('#back_home');
var home_dropdown = $('#select');
var back_results = $('#back_results');
var logo_link = $('#logo_link');
var detailsInfo = $('#details #info');
var resultsOL = $('#results ol');
var jobResultsOL = $('#results ol');
var results_message = $('#results_message');
var resultsLI = jQuery('#results li');
var search_term = $('#search_term');
var person_1 = $('#person_1');
var signUpButton = $('#sign_up_button');
var signup = $('#sign_up');
var signUpStudent = $('#studentSignUpButton');
var signUpJobsButton = $('#jobSignUpButton');
var signUpJobs = $('#jobs_sign_up');
var peopleSignUp = $('#people_sign_up');
var signUpHome = $('#sign_up_home');

// fade in home
home.hide();
home.fadeIn(500);
// reset the page
logo_link.click(function () {
    home.fadeIn(500);
    results.hide();
    details.hide();
    search.hide();
    jobs.hide();
    search_jobs.hide();
    signup.hide();
    signUpHome.hide();
    peopleSignUp.hide();
    signUpJobs.hide();
});
students_button.click(function () {
    home.hide();
    search.fadeIn(500);
});
jobs_button.click(function () {
    home.hide();
    search_jobs.fadeIn(500);
});
// button clicks
find_button.click(function () {
    // capture the user chosen option
    var selectedOption = home_dropdown.val();
    
    var selectedName;
    
    if (selectedOption == 'webMedia') {
        var selectedName = 'Web Media';
    } if (selectedOption == 'animation') {
        var selectedName = 'Animation';
    } if (selectedOption == 'fashion') {
        var selectedName = 'Fashion';
    } if (selectedOption == 'photography') {
        var selectedName = 'Photography';
    } if (selectedOption == 'soundDesign') {
        var selectedName = 'Sound Design';
    } if (selectedOption == 'musicMedia') {
        var selectedName = 'Music for Media';
    } if (selectedOption == 'graphicDesign') {
        var selectedName = 'Graphic Design';
    } 
    
    
    console.log("You picked " + selectedOption);
    search_term.text("Results for " + selectedName);
    results_message.text("These people might be able to help you:");
    // filter+sort people by user selection
    var resultsList = filterAndSortList(peopleList, selectedOption);
    console.log(resultsList);
    showList(resultsList, resultsOL);
    home.hide();
    search.hide();
    results.fadeIn(500);
    $("#results li").click(function () {
        // grab the id from the clicked item
        var resultId = $(this).attr('id');
        // use the id to get the right data
        var resultData = resultsList[resultId]
            // call the function showDetails()
        showDetails(resultData, detailsInfo);
        console.log(resultData);
        // show the details!
        results.hide();
        details.show();
    });
});
find_jobs.click(function () {
    var selectedJob = job_dropdown.val();
    var selectedName;
    
    if (selectedJob == 'webMedia') {
        var selectedName = 'Web Media';
    } if (selectedJob == 'animation') {
        var selectedName = 'Animation';
    } if (selectedJob == 'fashion') {
        var selectedName = 'Fashion';
    } if (selectedJob == 'photography') {
        var selectedName = 'Photography';
    } if (selectedJob == 'soundDesign') {
        var selectedName = 'Sound Design';
    } if (selectedJob == 'musicMedia') {
        var selectedName = 'Music for Media';
    } if (selectedJob == 'graphicDesign') {
        var selectedName = 'Graphic Design';
    } 
    search_term.text("Results for " + selectedName);
    results_message.text("You might be interested in these jobs:");
    
    console.log("Course: " + jobs.course);
    var jobsResults = filterAndSortJobs(jobsList, selectedJob);
    console.log(jobsResults);
    showJobs(jobsResults, jobResultsOL);
    
    home.hide();
    search_jobs.hide();
    results.fadeIn(500);
    
    $("#results li").click(function () {
        // grab the id from the clicked item
        var jobResultId = $(this).attr('id');
        // use the id to get the right data
        var jobResultData = jobsResults[jobResultId]
            // call the function showDetails()
        showJobDetails(jobResultData, detailsInfo);
        console.log(jobResultData);
        // show the details!
        results.hide();
        details.show();
    });
});

signUpButton.click(function () {
    results.hide();
    signUpHome.fadeIn(500);
    signup.fadeIn(500);
});


function showDetails(data, interfaceElement) {
    var detailsHTML = makeDetailsHTML(data)
    interfaceElement.html(detailsHTML)
}
function showJobDetails(data, interfaceElement) {
    var jobDetailsHTML = makeJobDetailsHTML(data)
    interfaceElement.html(jobDetailsHTML)
}
var resultsToggleButton = $('#results .toggle')
var resultsMap = $('#map')
resultsToggleButton.click(function () {
    // list or map?
    // let's check the current state of the list
    // if it's 'block' then we want to show the map
    // otherwise we want to show the list
    var state = resultsOL.css('display') == 'block' ? 'map' : 'list'
    if (state == 'list') {
        resultsOL.show()
        resultsMap.hide()
        resultsToggleButton.html('Map')
    }
    else {
        resultsOL.hide()
        resultsMap.show()
        resultsToggleButton.html('List')
    }
});
back_home.click(function () {
    home.show();
    results.hide();
});
back_results.click(function () {
    results.show();
    details.hide();
});

signUpStudent.click(function () {
    peopleSignUp.fadeIn(500);
    signUpHome.hide();
});
signUpJobsButton.click(function () {
    signUpJobs.fadeIn(500);
    signUpHome.hide();
});



//person_1.click( function () 
//{
//    results.hide();
//    details.show();
//    
//});

var databaseListJob = database.ref( 'jobs' );

// use jQuery to select the <form>
var form = jQuery( 'form' );

// we'll use jQuery to grab the data from the <form> and store it inside dataUnit
var dataUnit = {}; 

// when you submit the form...
form.submit( function( event ) 
{
  var today = new Date();
  /*
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd
  } 
  if(mm<10){
    mm='0'+mm
  } 
  today = dd+'/'+mm+'/'+yyyy;
  */
  document.getElementById("date").value = today;
  
  // stop this from reloading
  event.preventDefault();

  // put the form data inside dataUnit 
  dataUnit = form.serializeJSON( {parseBooleans: true, parseNumbers: true, checkboxUncheckedValue: "false"} );

  // log what's inside dataUnit
  console.log( dataUnit );

  // send dataUnit to databaseListJob
  databaseListJob.push( dataUnit )
  .then(function() 
  {
    alert('Success!');
    // form[0].reset(); // un-comment this line if you want the form to be cleared from previous values
  })
  .catch(function(error) 
  {
    console.error( error );
    alert('Something went wrong, try again!');
  });
  
});