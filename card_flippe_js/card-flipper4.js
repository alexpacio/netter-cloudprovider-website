document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('flip-card-btn-turn-to-back4').style.visibility = 'visible';
  document.getElementById('flip-card-btn-turn-to-front4').style.visibility = 'visible';

  document.getElementById('flip-card-btn-turn-to-back4').onclick = function() {
  document.getElementById('flip-card4').classList.toggle('do-flip');
  };

  document.getElementById('flip-card-btn-turn-to-front4').onclick = function() {
  document.getElementById('flip-card4').classList.toggle('do-flip');
  };

});