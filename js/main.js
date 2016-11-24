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
var resultsLI = jQuery('#results li');
var search_term = $('#search_term');

var person_1 = $('#person_1');

// fade in home
home.hide();
home.fadeIn(500);

// reset the page
logo_link.click( function () 
{   
    home.fadeIn(500);
    results.hide();
    details.hide();
    search.hide();
    jobs.hide();
    search_jobs.hide();
    
});

students_button.click( function () 
{   
    home.hide();
    search.fadeIn(500);
});

jobs_button.click( function () 
{   
    home.hide();
    search_jobs.fadeIn(500);
});

// button clicks
find_button.click(function(){
    // capture the user chosen option
    var selectedOption = home_dropdown.val();
    console.log("You picked " + selectedOption);
    
    search_term.text("Results for " + selectedOption);
    
    // filter+sort people by user selection
    var resultsList = filterAndSortList(peopleList, selectedOption);
    console.log(resultsList);
    
    showList(resultsList, resultsOL);
    
    home.hide();
    search.hide();
    results.fadeIn(500);
    
    $("#results li").click(function() {
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

find_jobs.click(function(){
    var selectedJob = job_dropdown.val();
    console.log("You picked " + selectedJob);
    
    home.hide();
    search_jobs.hide();
    results.fadeIn(500);
});

function showDetails (data, interfaceElement) 
{
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}

var resultsToggleButton = $('#results .toggle')
var resultsMap = $('#map')

resultsToggleButton.click( function()
{
    // list or map?
    // let's check the current state of the list
    // if it's 'block' then we want to show the map
    // otherwise we want to show the list
    var state = resultsOL.css('display') == 'block' ? 'map' : 'list'
    if (state == 'list')
    {
        resultsOL.show()
        resultsMap.hide()
        resultsToggleButton.html('Map')
    } 
    else
    {
        resultsOL.hide()
        resultsMap.show() 
        resultsToggleButton.html('List')
    }
});

back_home.click( function () 
{
    home.show();
    results.hide();
    
});

back_results.click( function () {
    results.show();
    details.hide();
    
});

//person_1.click( function () 
//{
//    results.hide();
//    details.show();
//    
//});

