function makeListItemHTML(data, index) {
    /*
      This function creates some nice HTML around data for the #home section
      Return something like this:
      <li>
          <img src="https://ma.tteo.me/assets/surprise.png">
          <h2>Matteo</h2>
      </li>
    */
    // li = List Item
    var li = '<li id="' + index + '">' + '<img src="' + data.image + '"><br>' + '<h2>' + data.name + '</h2><br>' + '<p>' + data.about + '</p>' + '</li><hr>'
    return li;
}

function makeJobListItemHTML(data, index) {
    /*
      This function creates some nice HTML around data for the #home section
      Return something like this:
      <li>
          <img src="https://ma.tteo.me/assets/surprise.png">
          <h2>Matteo</h2>
      </li>
    */
    
    var date = moment(data.date).endOf('day').fromNow();
    
    // li = List Item
    var li = '<li id="' + index + '">' 
    + '<h2 class="title">' + data.title 
    + '</h2><br>Posted by ' + data.name + ', ' + date
 + '.</p>'
    + '<br>' + '<p>' + data.description 
    + '</p><img src="' + data.image + '"></li><hr>' 
    return li;
}

function makeDetailsHTML(data) {
    /*
      This function creates some nice HTML around data for the #details section
      Return something like this:
      <h2>Matteo</h2>
      <img src="https://ma.tteo.me/assets/surprise.png">
      <p>I teach people aged 6 to 60+ how to be creative with code.
      </p>
      <a class="contact button">Contact Matteo</a>
    */
    var html = '<table><tbody><tr><h1><b>' + data.name + '</b></h1><hr><br>' + '<td id="profileImg"><img src="' + data.image + '"></td>' + '<td><p class="blue"><b>About Me</b><br> ' + data.about + '</p>' + '<p class="blue"><b>My Skills</b><br>' + data.skills + '</p></td></tr></tbody></table><hr>' + '<button><a type="submit" class="contact button" href="mailto:' + data.email + '">Contact ' + data.name + '</button></a>'
    return html;
}

function makeJobDetailsHTML(data) {
    /*
      This function creates some nice HTML around data for the #details section
      Return something like this:
      <h2>Matteo</h2>
      <img src="https://ma.tteo.me/assets/surprise.png">
      <p>I teach people aged 6 to 60+ how to be creative with code.
      </p>
      <a class="contact button">Contact Matteo</a>
    */
    var date = moment(data.date).endOf('day').fromNow();
    var longDate = moment(data.date).format('L');    // 12/02/2016


    
    var jobHtml = '<table><tbody><tr><h1>' + data.title + '</h1><p>Posted by <b>' + data.name + '</b> on <b>' + longDate + ', ' + date + '.</b></p><hr><br>' + '<td id="profileImg"><img src="' + data.image + '"></td>' + '<td><p class="blue"><b>Job Description</b><br>' + data.description + '</p>' + '<p class="blue"><b>Skills Required</b><br>' + data.skills + '</p></td></tr></tbody></table><hr>' + '<button><a type="submit" class="contact button" href="mailto:' + data.email + '">Contact ' + data.name + '</button></a>'
    return jobHtml;
}

function showList(dataList, interfaceList) {
    // update the ul content with the result of makeListHTML(list)
    // html is a jQuery function
    interfaceList.html(makeListHTML(dataList));
}

function showJobs(dataList, interfaceList) {
    // update the ul content with the result of makeListHTML(list)
    // html is a jQuery function
    interfaceList.html(makeJobListHTML(dataList));
}
/*function showDetails (data) 
{
  var $info = $('.info'); // tell jQuery to select the <div class="info"></div>
  if ($info.length == 0) console.error('You are missing a <div class="info"></div> in your index.html, inside <section id="details"> ... </section>');
  var detailsHTML = makeDetailsHTML(data);
  $info.html(detailsHTML);
  
  $('#home').hide();
  $('#details').show();
}*/
function makeListHTML(list) {
    var html = ''; // empty for now, we'll add HTML as we loop through the list 
    var total = list.length;
    // loop through list
    var counter = 0;
    while (counter < total) {
        var data = list[counter];
        var li = makeListItemHTML(data, counter);
        // add the list item to the html
        html += li;
        // update the counter, to avoid infinite loops!
        counter = counter + 1;
    }
    return html;
} function makeJobListHTML(list) {
    var html = ''; // empty for now, we'll add HTML as we loop through the list 
    var total = list.length;
    // loop through list
    var counter = 0;
    while (counter < total) {
        var data = list[counter];
        var li = makeJobListItemHTML(data, counter);
        // add the list item to the html
        html += li;
        // update the counter, to avoid infinite loops!
        counter = counter + 1;
    }
    return html;
}