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



//answer select
document.querySelectorAll('.quiz-container').forEach(container => {
  let questionNumber = container.id;
  let options = container.querySelectorAll('input[type="radio"]');
  options.forEach((radioInput) => {
    radioInput.addEventListener('click', () => {
      selectOption(radioInput, questionNumber);
    });
  });
});



const correctAnswers = {
  'question1': '0',
  'question2': '2', 
  'question3': '1', 
  'question4': '2', 
  'question5': '3'
};

function selectOption(selectedRadio, questionNumber) {

  //reset styles
  let labels = document.querySelectorAll('#' + questionNumber + ' .option');
  labels.forEach(label => {
      label.classList.remove('correct', 'incorrect');
  });

  //find the index of the selected radio button
  let selectedIndex = Array.from(labels).findIndex(label => label.querySelector('input[type="radio"]').checked);

  const correctOption = correctAnswers[questionNumber];

  if (selectedIndex.toString() === correctOption) {
      selectedRadio.parentElement.classList.add('correct');
  } else {
      selectedRadio.parentElement.classList.add('incorrect');
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

let closeBtns = document.getElementsByClassName('closeFeedback');
  Array.from(closeBtns).forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
      let questionNumber = this.id.replace('closeFeedback-', '');
      closeFeedback(questionNumber);
    });
  });


function closeFeedback(questionNumber) {
  document.getElementById('overlayQuiz-' + questionNumber).style.display = 'none';
  document.getElementById('feedback-' + questionNumber).style.display = 'none';
}


//submit answers
const submitButton = document.getElementById('submitAnswers');
submitButton.addEventListener('click', checkAnswersAndOpenPage);

function showAlertCard() {
  document.getElementById('alertCard-overlay').style.display = 'block';
  document.getElementById('alertCard').style.display = 'block';
}

function checkAnswersAndOpenPage() {
  let allCorrect = true;
  for (let question in correctAnswers) {
    const selectedOption = document.querySelector(`#${question} input[type="radio"]:checked`);
    if (!selectedOption || selectedOption.value !== correctAnswers[question]) {
      allCorrect = false;
      break;
    }
  }

  if (allCorrect) {
    window.location.href = 'completion.html';
  } else {
    showAlertCard();
  }
}

document.getElementById('alertCard-overlay').addEventListener('click', closeAlertCard);
document.getElementById('closeAlert').addEventListener('click', closeAlertCard);

function closeAlertCard() {
  document.getElementById('alertCard-overlay').style.display = 'none';
  document.getElementById('alertCard').style.display = 'none';
}