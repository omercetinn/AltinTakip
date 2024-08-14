document.addEventListener('DOMContentLoaded', function() {
  fetch('https://malatyakuyumcular.net/')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const price = doc.querySelector('table').innerText; // Fiyatın bulunduğu HTML elementinin seçicisini buraya ekleyin
      const lines = price.split('\n');

	  const date = lines[lines.length - 124]
	  const altinAlis = lines[lines.length - 45];
	  const altinSatis = lines[lines.length - 44];
	  document.getElementById('date').innerHTML = date;
	  document.getElementById("altinAlis").innerHTML = altinAlis;
	  document.getElementById("altinSatis").innerHTML = altinSatis;
	  document.getElementById('price').innerText = price;
    })
    .catch(error => {
      document.getElementById('price').innerText = 'Fiyat alınamadı';
    });
});