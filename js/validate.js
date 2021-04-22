function createText(text) {
  var textNode = document.createTextNode(text);
  return textNode;
}

function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var latitude=document.getElementById("latitude");
  var longitude=document.getElementById("longitude");
  var latLabel=document.getElementById("latLabel");
  var longLabel=document.getElementById("longLabel");

  var submit=true;//decides whether to submit

  if (latLabel.childNodes[1])//remove error message if it exists
  {
    latLabel.removeChild(latLabel.childNodes[1]);
  }
  if (isNaN(latitude.value) || latitude.value < -90 || latitude.value > 90)//display error if invalid value entered
  {
    submit=false;
    latLabel.appendChild(createText(" must be a valid Latitude (-90 to 90)"));
  }

  if (longLabel.childNodes[1])//remove error message if it exists
  {
    longLabel.removeChild(longLabel.childNodes[1]);
  }
  if (isNaN(longitude.value) || longitude.value < -180 || longitude.value > 180)//display error if invalid value entered
  {
    submit=false;
    longLabel.appendChild(createText(" must be a valid Longitude (-180 to 180)"));
  }


  return submit;
  
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
