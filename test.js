const form = document.querySelector('form');
const content = document.querySelector('.content');
const piLingkaran = document.querySelector('.pi');
const innerRadius = document.querySelector('.r');

form.addEventListener('submit', (event) => {
  const r = document.getElementById('radius').value;
  event.preventDefault();

  const hitungLingkaran = (r, pi = r % 7 === 0 ? 22 / 7 : 3.14) => {
    let luasLingkaran = pi * r ** 2;
    return luasLingkaran;
  };

  const determinePi = () => {
    if (r % 7 === 0) {
      piLingkaran.innerHTML = '<sup>22</sup>&frasl;<sub>7</sub>';
    } else {
      piLingkaran.innerText = '3.14';
    }
  };

  innerRadius.innerText = r;

  determinePi();
  content.innerText = hitungLingkaran(r);
});
