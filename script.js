
// Fade out #part1 on scroll
$(window).scroll(function(){
    $("#part1").css("opacity", 1 - $(window).scrollTop() / 200);
  });

  // Fade out #part1 on scroll
  $(window).scroll(function(){
      $("#part2").css("opacity", $(window).scrollTop()/370 - 1);
    });

  // Image disappear / reappear
  var hidden = false;
  var hidden2 = false;
  var hidden3 = false;
  var hidden4 = false;
  var hidden5 = false;


    setInterval(function(){
      setTimeout(function(){
        document.getElementById("image1").style.visibility= hidden ? "visible" : "hidden";
        hidden = !hidden;
        document.getElementById("image1").style.zIndex = 1;
      }, 500);
    }, 2000);

    setInterval(function(){
      setTimeout(function(){
        document.getElementById("image2").style.visibility= hidden2 ? "visible" : "hidden";
        hidden2 = !hidden2;
        document.getElementById("image2").style.zIndex = 1;
      }, 1000);
    }, 2000);

    setInterval(function(){
      setTimeout(function(){
        document.getElementById("image3").style.visibility= hidden3 ? "visible" : "hidden";
        hidden3 = !hidden3;
        document.getElementById("image3").style.zIndex = 1;
      }, 1500);
    }, 2000);

    setInterval(function(){
      setTimeout(function(){
        document.getElementById("image4").style.visibility= hidden4 ? "visible" : "hidden";
        hidden4 = !hidden4;
        document.getElementById("image4").style.zIndex = 1;
      }, 2000);
    }, 2000);

    setInterval(function(){
      setTimeout(function(){
        document.getElementById("image5").style.visibility= hidden5 ? "visible" : "hidden";
        hidden5 = !hidden5;
        document.getElementById("image5").style.zIndex = 1;
      }, 2500);
    }, 2000);
