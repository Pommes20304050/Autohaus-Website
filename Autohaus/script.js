let searchInput = document.querySelector('#Jetzt Endecken');
let carsSection = document.querySelector('.cars');

searchInput.addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let carBoxes = document.querySelectorAll('.cars-container .box');

    carBoxes.forEach(box => {
        let carName = box.querySelector('h2').innerText.toLowerCase();
        
        if (carName.includes(searchTerm)) {
            box.style.display = 'flex';
        } else {
            box.style.display = 'none';
        }
    });

    // Scroll zum Auto-Abschnitt, wenn ein Ergebnis gefunden wurde
    let firstVisibleCarBox = document.querySelector('.cars-container .box[style="display: flex;"]');
    if (firstVisibleCarBox) {
        carsSection.scrollIntoView({ behavior: 'smooth' });
    }
});