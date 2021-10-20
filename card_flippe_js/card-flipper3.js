document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('flip-card-btn-turn-to-back3').style.visibility = 'visible';
  document.getElementById('flip-card-btn-turn-to-front3').style.visibility = 'visible';

  document.getElementById('flip-card-btn-turn-to-back3').onclick = function() {
  document.getElementById('flip-card3').classList.toggle('do-flip');
  };

  document.getElementById('flip-card-btn-turn-to-front3').onclick = function() {
  document.getElementById('flip-card3').classList.toggle('do-flip');
  };

});