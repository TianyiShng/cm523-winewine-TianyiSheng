/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */


const menuIcon = document.getElementById('winesMenu');
const menuCard = document.getElementById('menu-card');
const overlay = document.getElementById('overlay');
  
// open mene
winesMenu.addEventListener('click', function() {
  overlay.style.display = 'block';
  menuCard.style.display = 'block';
});
  
// close menu
function closeMenu() {
  overlay.style.display = 'none';
  menuCard.style.display = 'none';
}

overlay.addEventListener('click', closeMenu);

document.querySelectorAll('#menu-card a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the link event
    let targetId = this.getAttribute('href'); // get the id

    // red or white
    if (targetId.startsWith("#white-")) {
      document.getElementById('white-wines').style.display = 'flex'; 
      document.getElementById('red-wines').style.display = 'none'; 
    } else if (targetId.startsWith("#red-")) {
      document.getElementById('red-wines').style.display = 'flex'; 
      document.getElementById('white-wines').style.display = 'none'; 
    }

    closeMenu();
      
    location.hash = targetId;

  });
});



function flipCard(event) {
  event.currentTarget.classList.toggle('flipped');
}  

// Get all the cards
let cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
// Attach a click event listener to each card
  card.addEventListener('click', flipCard);
});




document.getElementById('startQuizBtn').addEventListener('click', function() {
    window.location.href = 'questions.html'; 
});


document.getElementById('redBtn').addEventListener('click', function() {
  document.getElementById('red-wines').style.display = 'flex'; 
  document.getElementById('white-wines').style.display = 'none'; 
  document.getElementById('red-wines').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('whiteBtn').addEventListener('click', function() {
  document.getElementById('red-wines').style.display = 'none'; 
  document.getElementById('white-wines').style.display = 'flex'; 
  document.getElementById('white-wines').scrollIntoView({ behavior: 'smooth' });
});



