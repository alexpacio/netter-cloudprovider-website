document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('flip-card-btn-turn-to-back1').style.visibility = 'visible';
  document.getElementById('flip-card-btn-turn-to-front1').style.visibility = 'visible';

  document.getElementById('flip-card-btn-turn-to-back1').onclick = function() {
  document.getElementById('flip-card1').classList.toggle('do-flip');
  };

  document.getElementById('flip-card-btn-turn-to-front1').onclick = function() {
  document.getElementById('flip-card1').classList.toggle('do-flip');
  };

});