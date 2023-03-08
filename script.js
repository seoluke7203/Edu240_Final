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

// for (let i = 0; i < li.length; i++) {
//   li[i].addEventListener('click', (e) => {
//     console.log(e.target.innerText);
//   });

function getShow(id) {
  document.getElementsByClassName('content0')[0].style.display = 'none';
  document.getElementsByClassName('content1')[0].style.display = 'none';
  document.getElementsByClassName('content2')[0].style.display = 'none';
  document.getElementsByClassName('content3')[0].style.display = 'none';
  document.getElementsByClassName('content4')[0].style.display = 'none';
  document.getElementsByClassName('content' + id)[0].style.display = '';
}
