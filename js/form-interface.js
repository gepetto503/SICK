//variables
var Patient = require('./../js/sick.js').formModule;

//display functions
var displayDocs = function(docArray) {
  $('.results').empty();
  for (var i = 0; i < docArray.length; i++) {
    $('.results').append(
    '<div class="doc">' +
      '<h3>' + docArray[i].profile.first_name + ' ' + docArray[i].profile.last_name + '</h3>' +
      '<div class="doc-deets">' +
        '<img src=" ' + docArray[i].profile.image_url + ' ">' +
        '<h4>Specialties:</h4>' +
        '<p>' + docArray[i].specialties[0].actor + '</p>' +
      '</div>' +
    '</div>');
  }
};

var displaySpecs = function(specs){//passing in response.data, an array of doctor objects?
  for (var i = 0; i < specs.length; i++) {
    $('.specs').append(
      '<option>' + specs[i].actor + '</option>'
    );
  }
};

//document ready
$(function() {

  //first thing, establish new patient object
  var newPatient = new Patient();

  //once we've established a patient object, we can call it's method
  //this runs the api call in the back end to get the list of specialties. we pass our displaySpecs function to the backend so it has access to it.
  newPatient.getSpecs(displaySpecs);

  //dropdown form
  $('#dropdown-form').submit(function(event){
    event.preventDefault();
    var selection = $(".specs").val();
    newPatient.getDocs(selection, displayDocs);

  });

  //search form
  $('#search-form').submit(function(event){
    event.preventDefault();
    //gather symptoms from search
    var symptoms = $('#symptoms').val();
    //pass them to backend function, along with display docs function from above
    newPatient.getDocs(symptoms, displayDocs);

  });

});
