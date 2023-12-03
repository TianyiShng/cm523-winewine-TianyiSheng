/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */


//pagination button, show question
document.querySelectorAll('.pagination button').forEach(function(button, index) {
  button.addEventListener('click', function() {
    showQuestion('question' + (index + 1));
  });
});

function showQuestion(questionId) {
  
  document.querySelectorAll('.quiz-container').forEach(function (element) {
    element.style.display = 'none';
  });

  document.getElementById(questionId).style.display = 'flex';
}

//quiz answer selected
document.querySelectorAll('.quiz-container').forEach(container => {
  let questionNumber = container.id;
  let options = container.querySelectorAll('.option');
  options.forEach((button, index) => {
    button.addEventListener('click', () => {
      selectOption(button, index, questionNumber);
    });
  });
});

function selectOption(selectedButton, selectedIndex, questionNumber) {
  const correctAnswers = {
      'question1': 0,
      'question2': 2, 
      'question3': 1, 
      'question4': 2, 
      'question5': 3
  };

  const correctOption = correctAnswers[questionNumber];

  document.querySelectorAll('#' + questionNumber + ' .option').forEach(button => {
      button.classList.remove('correct', 'incorrect');
  });

  if (selectedIndex === correctOption) {
      selectedButton.classList.add('correct');
  } else {
      selectedButton.classList.add('incorrect');
      document.getElementById('overlayQuiz-' + questionNumber).style.display = 'block';
      document.getElementById('feedback-' + questionNumber).style.display = 'block';
  }
}


let overlays = document.getElementsByClassName('overlay');
  Array.from(overlays).forEach(function(overlay) {
    overlay.addEventListener('click', function() {
      let questionNumber = this.id.replace('overlayQuiz-', '');
      closeFeedback(questionNumber);
    });
  });


function closeFeedback(questionNumber) {
  document.getElementById('overlayQuiz-' + questionNumber).style.display = 'none';
  document.getElementById('feedback-' + questionNumber).style.display = 'none';
}

const submitButton = document.getElementById('submitAnswers');
submitButton.addEventListener('click', checkAnswersAndOpenPage);

function checkAnswersAndOpenPage() {
  const correctAnswers = {
      'question1': 0,
      'question2': 2, 
      'question3': 1, 
      'question4': 2, 
      'question5': 3
  };

  let allCorrect = true;
  for (let question in correctAnswers) {
    const options = document.querySelectorAll('#' + question + ' .option');
    const selectedOptionIndex = Array.from(options).findIndex(el => el.classList.contains('correct'));
        
    if (selectedOptionIndex !== correctAnswers[question]) {
      allCorrect = false;
      break;
    }
  }

  if (allCorrect) {
    window.location.href = 'completion.html';
  } else {
    alert("Some answers are incorrect, please check your answers.");
  }
}