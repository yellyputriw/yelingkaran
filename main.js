const form = document.querySelector('form');
const content = document.querySelector('.content');

form.addEventListener('submit', (event) => {
  const r = document.getElementById('r').value;
  event.preventDefault();

  const hitungLingkaran = (r, phi = r % 7 === 0 ? 22 / 7 : 3.14) => {
    let luasLingkaran = phi * r ** 2;
    return luasLingkaran;
  };

  content.innerText = hitungLingkaran(r);
});
