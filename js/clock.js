const clock = document.querySelector('.js-clock');

function getColck() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}

getColck();
setInterval(getColck, 1000); //실시간