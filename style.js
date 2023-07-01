var prevScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove("hidden");
      } else {
        navbar.classList.add("hidden");
      }

      prevScrollPos = currentScrollPos;
    };