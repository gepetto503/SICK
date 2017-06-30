var apiKey = require('./../.env').apiKey;

// object
Patient = function(){
}


var displayDocs = function(docArray) {
  $('.results').empty();
  console.log(docArray);
  for (var i = 0; i < docArray.length; i++) {
    $('.results').append(
    '<div class="doc">' +
      '<h3>' + docArray[i].profile.first_name + ' ' + docArray[i].profile.last_name + '</h3>' +
    '</div>');
  }
};


// prototype
Patient.prototype.getDocs = function (medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
      displayDocs(response.data);//sending doc array to display docs

    })
   .fail(function(error){
      console.log("fail");
      $('.results').empty().append("<h3>No Docs specialize in your sickness</h3><p><Reflect in darkness./p>")
    });
};


exports.formModule = Patient;
