// get a reference to the database service
var database = firebase.database();
var databaseList = database.ref( 'people' );

// use jQuery to select the <form>
var form = jQuery( 'form' );

// we'll use jQuery to grab the data from the <form> and store it inside dataUnit
var dataUnit = {}; 

// when you submit the form...
form.submit( function( event ) 
{
  // stop this from reloading
  event.preventDefault();

  // put the form data inside dataUnit 
  dataUnit = form.serializeJSON( {parseBooleans: true, parseNumbers: true, checkboxUncheckedValue: "false"} );

  // log what's inside dataUnit
  console.log( dataUnit );

  // send dataUnit to databaseList
  databaseList.push( dataUnit )
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