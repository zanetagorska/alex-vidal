$( function() {
  new WOW().init();

  // Collapse menu
  $('.navbar .fa').click(function() {
    $('.navbar ul').slideToggle();
  });

  // Jeśli ktoś zamknie menu na małym ekranie i zmieni rozmiar okna to menu nie zniknie
  $(window).resize(function() {
    if($(window).width()>992) {
      $('.navbar ul').css('display', 'block');
    };
  });


 // Animated Progress Bar

  $('#skills').one('inview', function(event, isInView) {
    if (isInView) {
      $('.inner-bar').each(function(){
        $(this).animate({
          width: $(this).attr('data-value') +'%'
        },2000);
      });
    }
  });

  // Menu tło na scroll
  function init() {
    window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 1,
      navbar = document.querySelector('.navbar');
      if (distanceY > shrinkOn) {
        classie.add(navbar,'smaller');
      } else {
        if (classie.has(navbar,'smaller')) {
          classie.remove(navbar,'smaller');
        }
      }
    });
  }
  window.onload = init();

  $('#fun-facts').one('inview', function(event, isInView) {
    if (isInView) {
      $('.counter-number').each(function () {
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });

  // scroll btn
  $('.scroll-top-btn').click(function(e) {
    $('html,body').animate({
        scrollTop: 0,
    }, 1000);
  });

  // portfolio btn
  $("#load-more-btn").click(function(e) {
    e.preventDefault();
  })
});

// Ajax gallery
var portfolioGallery = document.getElementById("portfolio-gallery");
var loadMoreBtn = document.getElementById("load-more-btn");
var photoNr =  1;

function addItems() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://zanetagorska.github.io/alex-vidal/photo.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      if(photoNr < 12) {
         photoNr += 3;
       } else {
          loadMoreBtn.style.display='none';
       }
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };
  ourRequest.send();
}

addItems();
addItems();
loadMoreBtn.addEventListener("click", addItems );

function showOverlay(){
  var oldImg = document.querySelectorAll(".portfolio-item");
  for (i=0; i < oldImg.length; i++) {
    oldImg[i].addEventListener("mouseover", function(){
      this.querySelector(".overlay").style.opacity = "1";
    });
    oldImg[i].addEventListener("mouseout", function(){
      this.querySelector(".overlay").style.opacity = "0";
    });
  }
}

function renderHTML(data) {
  for (i = photoNr; i < photoNr + 3; i++) {
    var colSm4 = document.createElement("div");
    var portfolioItem = document.createElement("div");
    var galleryImg = document.createElement("img");
    var overlay = document.createElement("div");
    var rectangle = document.createElement("div");
    var textBox = document.createElement("div");
    var projectTitle = document.createElement("h3");
    var iconLink = document.createElement("a");

    iconLink.href = "#";
    projectTitle.textContent = data[i-1].projectTitle;
    textBox.className = "text-box";
    rectangle.className = "rectangle";
    overlay.className = "overlay";
    galleryImg.src = 'https://zanetagorska.github.io/alex-vidal/docs/assets/img/portfolio/' + i + '.jpg';
    galleryImg.className= "img-responsive";
    portfolioItem.className = "portfolio-item";
    colSm4.className = "col-xs-6 col-sm-4";

    portfolioGallery.appendChild(colSm4);
    colSm4.appendChild(portfolioItem);
    portfolioItem.appendChild(galleryImg);
    galleryImg.after(overlay);
    overlay.appendChild(rectangle);
    overlay.appendChild(textBox);
    textBox.appendChild(projectTitle);
    textBox.appendChild(iconLink);    

    for(j = 0; j<3; j++) {
      var iconClasses = ["fa-eye", "fa-link", "fa-share-alt"];
      var iconImg = document.createElement("i");
      iconImg.className = "fa " + iconClasses[j];
      iconLink.appendChild(iconImg);
    }
    
  }
  showOverlay();
}