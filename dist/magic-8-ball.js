//
// Where the magic happens
//

// Array of responses

var responses = [
  "It is certain",
  "It is decidedly<br>so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most<br>likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you<br>now",
  "Cannot predict<br>now",
  "Concentrate and ask again",
  "Don\’t count on it",
  "My reply<br>is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

// Magic 8 Ball function

function magicEightBall() {
  var randomiser = Math.floor(Math.random() * (responses.length));
  var response = document.getElementById('response');
  var className = 'response--done';

  // Output random response
  response.innerHTML = responses[randomiser];

  // Add class to the container
  if (response.classList)
    response.classList.add(className);
  else
    response.className += ' ' + className;

  // (Optional) Randomise the values for 3D transform
  var xDeg = Math.floor(Math.random() * 20);
  var yDeg = Math.floor(Math.random() * 20);
  var zDeg = Math.floor(Math.random() * 20);
  var deg = Math.floor(Math.random() * 80);

  // Create style tag to populate
  var style = (function() {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return style;
  })();

  // Populate style tag with dynamic property
  style.sheet.insertRule('@keyframes responseAnimation { 0% { opacity: 0; transform-origin: 50% 50%; transform: rotate3d(' + xDeg + ', -' + yDeg + ',' + zDeg + ',' + deg + 'deg) scale3d(.8, .8, .8); } 50% { opacity: .4; } 100% { opacity: 1; } }', 0);

}

// Run the Magic 8 Ball function
document.addEventListener('DOMContentLoaded', magicEightBall(), false);
