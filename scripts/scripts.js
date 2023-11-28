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



function selectOption(selectedButton, selectedOption, questionNumber) {
  const correctAnswers = {
      'question1': 'A',
      'question2': 'C', 
      'question3': 'B', 
      'question4': 'C', 
      'question5': 'D'
  };

  const correctOption = correctAnswers[questionNumber];

  document.querySelectorAll('#' + questionNumber + ' .option').forEach(button => {
      button.classList.remove('correct', 'incorrect');
  });

  if (selectedOption === correctOption) {
      selectedButton.classList.add('correct');
  } else {
      selectedButton.classList.add('incorrect');
      document.getElementById('overlayQuiz-' + questionNumber).style.display = 'block';
      document.getElementById('feedback-' + questionNumber).style.display = 'block';
  }
}

function closeFeedback(questionNumber) {
  document.getElementById('overlayQuiz-' + questionNumber).style.display = 'none';
  document.getElementById('feedback-' + questionNumber).style.display = 'none';
}

function checkAnswersAndOpenPage() {
  const correctAnswers = {
      'question1': 'A',
      'question2': 'C', 
      'question3': 'B', 
      'question4': 'C', 
      'question5': 'D'
  };

  let allCorrect = true;
  for (var question in correctAnswers) {
      const selectedOption = document.querySelector('#' + question + ' .option.correct');
      if (!selectedOption || selectedOption.textContent.trim().charAt(0) !== correctAnswers[question]) {
          allCorrect = false;
          break;
      }
  }

  if (allCorrect) {
      //window.open('completion.html'); 
      window.location.href = 'completion.html';
  } else {
      alert("Some answers are incorrect, please check your answers.");
  }
}

