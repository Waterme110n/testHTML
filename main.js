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
const totalPages = Math.ceil(articles.length / articlesPerPage);

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
