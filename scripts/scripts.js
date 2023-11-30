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
  function closeMenu() {
    overlay.classList.remove('visible');
    menuCard.classList.remove('visible');
  }

  overlay.addEventListener('click', closeMenu);

  // 遍历所有的菜单项
  document.querySelectorAll('#menu-card a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // 阻止默认的锚点跳转行为
      let targetId = this.getAttribute('href'); // 获取锚点的href属性，即目标id

      // 根据href的值判断是红葡萄酒还是白葡萄酒
      if (targetId.startsWith("#white-")) {
        document.getElementById('white-wines').style.display = 'flex'; 
        document.getElementById('red-wines').style.display = 'none'; 
      } else if (targetId.startsWith("#red-")) {
        document.getElementById('red-wines').style.display = 'flex'; 
        document.getElementById('white-wines').style.display = 'none'; 
      }

      closeMenu();
      
      window.location.hash = targetId;

    });
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
  for (let question in correctAnswers) {
      const selectedOption = document.querySelector('#' + question + ' .option.correct');
      if (!selectedOption || selectedOption.textContent.charAt(0) !== correctAnswers[question]) {
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

