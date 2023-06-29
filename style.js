window.addEventListener('scroll', function() {
  var scrollTexts = document.getElementsByClassName('scroll-text');
  var scrollPosition = window.scrollY;

  for (var i = 0; i < scrollTexts.length; i++) {
    if (scrollPosition > 500) { // Scroll 500 piksel geçtiğinde
      scrollTexts[i].style.color = 'black'; // Yazının rengini değiştir
    } else {
      scrollTexts[i].style.color = 'white'; // Yazının rengini başlangıç rengine geri döndür
    }
  }
});