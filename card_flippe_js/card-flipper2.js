document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('flip-card-btn-turn-to-back2').style.visibility = 'visible';
  document.getElementById('flip-card-btn-turn-to-front2').style.visibility = 'visible';

  document.getElementById('flip-card-btn-turn-to-back2').onclick = function() {
  document.getElementById('flip-card2').classList.toggle('do-flip');
  };

  document.getElementById('flip-card-btn-turn-to-front2').onclick = function() {
  document.getElementById('flip-card2').classList.toggle('do-flip');
  };

});