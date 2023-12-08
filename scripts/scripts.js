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

// 遍历所有的菜单项
document.querySelectorAll('#menu-card a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认的锚点跳转行为
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



