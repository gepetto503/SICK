var apiKey = require('./../.env').apiKey;

// object
Patient = function(){
};

//


// prototypes
Patient.prototype.getSpecs = function (displaySpecsFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=' + apiKey).then(function(response){
    displaySpecsFunction(response.data);
  });
}

Patient.prototype.getDocs = function (symptoms, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptoms +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&best-match-ascskip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
      displayFunction(response.data);//sending doc array to display docs

    })
   .fail(function(error){
      console.log("fail");
      $('.results').empty().append("<h3>No Docs specialize in your sickness</h3><p><Reflect in darkness./p>")
    });
};


exports.formModule = Patient;
