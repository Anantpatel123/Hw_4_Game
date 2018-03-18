var targetarray = [];
  for (var i = 19; i <= 120; i++) {
    targetarray.push(i);
  }

  var targetNumber = targetarray[Math.floor(Math.random() * targetarray.length)];

  $("#number-to-guess").text(targetNumber);

  var crystals = $("#crystals");

  var counter = 0;
  var win = 0;
  var lose = 0;


  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include 12 options.
  
  var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  var crystal1 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  var crystal2 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  var crystal3 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  var crystal4 = numberOptions[Math.floor(Math.random() * numberOptions.length)];  
  

  // Next we create a for loop to create crystals for every numberOption.
  //for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal1 = $("<img>");
    var imageCrystal2 = $("<img>");
    var imageCrystal3 = $("<img>");
    var imageCrystal4 = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal1.addClass("crystal-image");
    imageCrystal2.addClass("crystal-image");
    imageCrystal3.addClass("crystal-image");
    imageCrystal4.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal1.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal2.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal3.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal4.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    
    imageCrystal1.attr("data-crystalvalue", crystal1);
    imageCrystal2.attr("data-crystalvalue", crystal2);
    imageCrystal3.attr("data-crystalvalue", crystal3);
    imageCrystal4.attr("data-crystalvalue", crystal4);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    crystals.append(imageCrystal1);
    crystals.append(imageCrystal2);
    crystals.append(imageCrystal3);
    crystals.append(imageCrystal4);
 // }

  // This time, our click event applies to every single crystal on the page. Not just one.
  crystals.on("click", ".crystal-image", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    // $("#score").text(counter);
    // $("#win-counter").text(win);
    // $("#lose-counter").text(lose);    
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    
    $("#score").text(counter);
    

    if (counter === targetNumber) {      
      win++,
      alert("You win!");
      $("#score").empty(),
      $("#number-to-guess").empty();
    }

    else if (counter >= targetNumber) {      
      lose++;
      alert("You lose!!");
      $("#score").empty(),
      $("#number-to-guess").empty();
    }
    
    $("#win-counter").text(win);
    $("#lose-counter").text(lose);

  });