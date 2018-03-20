
var targetarray = [];
for (var i = 19; i <= 120; i++) {
  targetarray.push(i);
}

var targetNumber = targetarray[Math.floor(Math.random() * targetarray.length)];
//var targetNumber = [Math.floor(Math.random() * 102)+19];

$("#number-to-guess").text(targetNumber);

var crystals = $("#crystals");

var counter = 0;
var win = 0;
var lose = 0;

//var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//var crystal1 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
var crystal1 = Math.floor(Math.random() * 12)+1;
var crystal2 = Math.floor(Math.random() * 12)+1;
var crystal3 = Math.floor(Math.random() * 12)+1;
var crystal4 = Math.floor(Math.random() * 12)+1; 

  var imageCrystal1 = $("<img>");
  var imageCrystal2 = $("<img>");
  var imageCrystal3 = $("<img>");
  var imageCrystal4 = $("<img>");

  imageCrystal1.addClass("crystal-image");
  imageCrystal2.addClass("crystal-image");
  imageCrystal3.addClass("crystal-image");
  imageCrystal4.addClass("crystal-image");

  //imageCrystal2.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
 
  imageCrystal1.attr("src", "assets/images/Diamond.jpg");
  imageCrystal2.attr("src", "assets/images/Diamond.jpg");
  imageCrystal3.attr("src", "assets/images/Diamond.jpg");
  imageCrystal4.attr("src", "assets/images/Diamond.jpg");

  imageCrystal1.attr("data-crystalvalue", crystal1);
  imageCrystal2.attr("data-crystalvalue", crystal2);
  imageCrystal3.attr("data-crystalvalue", crystal3);
  imageCrystal4.attr("data-crystalvalue", crystal4);

  crystals.append(imageCrystal1);
  crystals.append(imageCrystal2);
  crystals.append(imageCrystal3);
  crystals.append(imageCrystal4);


crystals.on("click", ".crystal-image", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  
  counter += crystalValue;

  $("#score").text(counter);
  
  if (counter === targetNumber) {      
    win++,
    alert("You win!");
    reset();
  }
  else if (counter >= targetNumber) {      
    lose++;
    alert("You lose!!");
    reset();
  }
  
  $("#win-counter").text(win);
  $("#lose-counter").text(lose);

  function reset() {
    targetNumber = targetarray[Math.floor(Math.random() * targetarray.length)];
    $("#number-to-guess").text(targetNumber);
    crystal1 = Math.floor(Math.random() * 12)+1;
    crystal2 = Math.floor(Math.random() * 12)+1;
    crystal3 = Math.floor(Math.random() * 12)+1;
    crystal4 = Math.floor(Math.random() * 12)+1;  
    imageCrystal1.attr("data-crystalvalue", crystal1);
    imageCrystal2.attr("data-crystalvalue", crystal2);
    imageCrystal3.attr("data-crystalvalue", crystal3);
    imageCrystal4.attr("data-crystalvalue", crystal4);

    counter = 0;
    $("#score").text(counter);
  }

});


