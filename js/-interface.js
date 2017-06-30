//variables
var Patient = require('./../js/sick.js').formModule;




//document ready
$(function() {

  //new patient constructor
  var newPatient = new Patient();

  //form submit function
  $('#sick-form').submit(function(event){
    event.preventDefault();
    var symptoms = $('#symptoms').val();
    var location =$('#location').val();

    //run api call function
    newPatient.getDocs(symptoms);
  });

});
