/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menuCard = document.getElementById('menu-card');
    const overlay = document.getElementById('overlay');
  
    // open mene
    menuIcon.addEventListener('click', function() {
      overlay.classList.toggle('visible');
      menuCard.classList.toggle('visible');
    });
  
    // close menu
    overlay.addEventListener('click', function() {
      overlay.classList.remove('visible');
      menuCard.classList.remove('visible');
    });
  });


function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}  

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('startQuizBtn').addEventListener('click', function() {
      window.location.href = 'questions.html'; 
  });
});

document.getElementById('redBtn').addEventListener('click', function() {
  document.getElementById('red-wines').style.display = 'flex'; 
  document.getElementById('white-wines').style.display = 'none'; 
});

document.getElementById('whiteBtn').addEventListener('click', function() {
  document.getElementById('red-wines').style.display = 'none'; 
  document.getElementById('white-wines').style.display = 'flex'; 
});



function showQuestion(questionId) {
  
  document.querySelectorAll('.quiz-container').forEach(function (element) {
    element.style.display = 'none';
  });

  document.getElementById(questionId).style.display = 'flex';
}

