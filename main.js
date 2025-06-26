function toggleDropdown(button) {
  var dropdown = button.nextElementSibling;

  if (dropdown.classList.contains('dropdown-content-off')) {
    dropdown.classList.remove('dropdown-content-off');
    dropdown.classList.add('dropdown-content');
    button.classList.add('pressed');
  } else {
    dropdown.classList.add('dropdown-content-off');
    dropdown.classList.remove('dropdown-content');
    button.classList.remove('pressed');
  }
}

var dropdownContents = document.querySelectorAll('.dropdown-content');
dropdownContents.forEach(function (dropdown) {
  dropdown.classList.remove('dropdown-content');
  dropdown.classList.add('dropdown-content-off');
});

var buttons = document.querySelectorAll('.ButtProduct');
buttons.forEach(function (button) {
  button.classList.remove('pressed');
});

/*pagination*/

const articles = document.querySelectorAll('.recent-activity-card');
let currentPage = 0;
const articlesPerPage = 3;

showPage(currentPage);

function showPage(page) {
  articles.forEach((article, index) => {
    if (index >= page * articlesPerPage && index < (page + 1) * articlesPerPage) {
      article.classList.add('recent-activity-card');
      article.classList.remove('display-none');
    } else {
      article.classList.remove('recent-activity-card');
      article.classList.add('display-none');
    }
  });
}

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

document.getElementById('next').addEventListener('click', () => {
  if ((currentPage + 1) * articlesPerPage < articles.length) {
    currentPage++;
    showPage(currentPage);
  }
});

/*view more*/
const articles2 = document.querySelectorAll('.featured-topics-card');
let currentPage2 = 0;
let articlesPerPage3 = 3;

showPage2(currentPage2);

function showPage2(page) {
  articles2.forEach((article, index) => {
    if (index >= page * articlesPerPage3 && index < (page + 1) * articlesPerPage3) {
      article.classList.add('featured-topics-card');
      article.classList.remove('display-none');
    } else {
      article.classList.remove('featured-topics-card');
      article.classList.add('display-none');
    }
  });
}

let viewAll = document.getElementById('view-all')
viewAll.addEventListener('click', () => {
  if( viewAll.textContent == "+ View all"){
    viewAll.textContent = "Close"
    articlesPerPage3 = 6;
  } else{
    viewAll.textContent = "+ View all"
    articlesPerPage3 = 3;
  }
  showPage2(currentPage2);  
});

/*back to top*/

const backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    let scrolled = window.scrollY || window.pageYOffset;
    if (scrolled > 350) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

/*burger*/

const nav = document.querySelector('.navigation');
const actions = document.querySelector('.actions');

function burgerMenu(){
  if (nav.classList.contains('navigation')) {
    nav.classList.remove('navigation');
    nav.classList.add('navigation-open');
    actions.classList.remove('actions');
    actions.classList.add('actions-open');
    document.body.classList.add('no-scroll')


  } else {
    nav.classList.add('navigation');
    nav.classList.remove('navigation-open');
    actions.classList.add('actions');
    actions.classList.remove('actions-open');
    document.body.classList.remove('no-scroll')
  }
}