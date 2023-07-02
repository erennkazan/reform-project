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
    window.addEventListener('scroll', function() {
      var navbar = document.getElementById('navbar');
      var scrollPosition = window.scrollY;
      var bgSlate = 'bg-blue-500';
      var bgTransparent = 'bg-transparent';
  
      if (scrollPosition > 0) {
        navbar.classList.add(bgSlate);
        navbar.classList.remove(bgTransparent);
      } else {
        navbar.classList.remove(bgSlate);
        navbar.classList.add(bgTransparent);
      }
    });