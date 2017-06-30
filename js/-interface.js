var Patient = require('./../js/sick.js').formModule;

$(function() {
  var newPatient = new Patient();
  $('#sick-form').submit(function(event){
    event.preventDefault();
    var symptoms = $('#symptoms').val();
    var location =$('#location').val();

    newPatient.getDocs(symptoms);
  });

});
