// select HTML elements
var home = jQuery('#home_section');
var results = jQuery('#results');
var details = jQuery('#details');
var find_button = $('#find_button');
var back_home = $('#back_home');
var home_dropdown = $('#select');
var back_results = $('#back_results');
var logo_link = $('#logo_link');
var detailsInfo = $('#details #info');
var resultsOL = $('#results ol');
var resultsLI = jQuery('#results li');

var person_1 = $('#person_1');

// fade in home
home.hide();
home.fadeIn(3000);

// reset the page
logo_link.click( function () 
{   
    home.fadeIn(3000);
    results.hide();
    details.hide();
    
});

// button clicks
find_button.click(function(){
    // capture the user chosen option
    var selectedOption = home_dropdown.val();
    console.log("You picked " + selectedOption);
    
    // filter+sort people by user selection
    var resultsList = filterAndSortList(peopleList, selectedOption);
    console.log(resultsList);
    
    showList(resultsList, resultsOL);
    
    home.hide();
    results.show();
});

function showDetails (data, interfaceElement) 
{
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}

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