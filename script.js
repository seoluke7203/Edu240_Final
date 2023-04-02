const bookBtn = document.querySelector('.bookmark-btt');
const section = document.querySelector('section');
const label = document.querySelector('label');

bookBtn.addEventListener('click', function () {
  section.style.left = 0;
  label.style.opacity = 0;
});

bookBtn.addEventListener('blur', function () {
  section.style.left = '-300px';
  label.style.opacity = 1;
});

const li = document.querySelectorAll('.Bookmark-lists li');

function getShow(id) {
  document.getElementsByClassName('content0')[0].style.display = 'none';
  document.getElementsByClassName('content1')[0].style.display = 'none';
  document.getElementsByClassName('content2')[0].style.display = 'none';
  document.getElementsByClassName('content3')[0].style.display = 'none';
  document.getElementsByClassName('content4')[0].style.display = 'none';
  document.getElementsByClassName('content5')[0].style.display = 'none';
  document.getElementsByClassName('content6')[0].style.display = 'none';
  document.getElementsByClassName('content7')[0].style.display = 'none';
  document.getElementsByClassName('content8')[0].style.display = 'none';
  document.getElementsByClassName('content9')[0].style.display = 'none';
  document.getElementsByClassName('content10')[0].style.display = 'none';
  document.getElementsByClassName('content11')[0].style.display = 'none';
  document.getElementsByClassName('content12')[0].style.display = 'none';
  document.getElementsByClassName('content' + id)[0].style.display = '';
}

function showAlert() {
  alert(
    'Sorry, there is no previous page to navigate to.   You are currently on the first page.'
  );
}
