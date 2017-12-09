function check(sender) {
  var input = $('#input').val();
  input = input.toLowerCase();

  switch(sender) {
    case 'holiday':
      if (input == "red panda" || input == "red pandas" || input == "redpanda" || input == "redpandas") {
        alert("I'm impressed- you got it.");
        $('#next').show();
      }
      else alert("Nope.");
      break;

    case 'goodwill':
      if (input == "snakes" || input == "snake") {
        alert("Amazing- you got it.");
        $('#next').show();
      }
      else alert("Nope.");
      break;

    default:
      alert("Nope.");
      break;
  }
}

$(document).ready(function() {
  $('#next').hide();
});
