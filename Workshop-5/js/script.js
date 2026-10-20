// WS05 student starter / opiskelijan aloituspohja
// Complete the TODOs. This file is intentionally unfinished.
// Täydennä TODO-kohdat. Tämä tiedosto on tarkoituksella keskeneräinen.

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

 // Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // TODO: Clear previous errors / Tyhjennä edelliset virheet.
    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    formResult.textContent = "";

    // TODO: Read and trim values / Lue ja trimmaa kenttien arvot.
    // Otetaan kenttien arvot ja poistetaan ylimääräiset välilyönnit
    const name = animalName.value.trim();
    const species = animalSpecies.value.trim();
    const note = careNote.value.trim();

    let isValid = true;

    // TODO: Validate and show errors / Validoi ja näytä virheet.
    if (name === "") {
        nameError.textContent = "Anna eläimen nimi.";
        isValid = false;
    }

    if (species === "") {
        speciesError.textContent = "Anna eläimen laji.";
        isValid = false;
    }

    if (note.length < 1 || note.length > 150) {
        noteError.textContent = "Hoitomuistion pitää olla 1–150 merkkiä.";
        isValid = false;
    }


    // TODO: If valid, show the result / Näytä hyväksytty tulos.
    if (isValid) {
        formResult.textContent = name + " / " + species + " / " + note;
        console.log(name, species, note);

        // TODO: Create { name, species, note } and save it as JSON.
        // TODO: Luo { name, species, note } ja tallenna se JSON-tekstinä.
        const animal = {
            name: name,
            species: species,
            note: note
        };

        localStorage.setItem("ws05Animal", JSON.stringify(animal));
    }
});



// Exercise 2 / Harjoitus 2

 // Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // TODO: Convert input values with Number().
    // TODO: Muunna syötteet numeroiksi Number()-funktiolla.
    const price = Number(animalType.value);
    const years = Number(yearsInput.value);

    // Tarkistetaan, että vuodet ovat positiivinen kokonaisluku
    if (!Number.isInteger(years) || years <= 0) {
        cost.textContent = "Anna positiivinen kokonaisluku.";
        discountMessage.textContent = "";
        return;
    }

    // TODO: Calculate the price and apply discounts.
    // TODO: Laske hinta ja alennukset.
    let total = price * years;
    let discount = "";

    // Yli kahdesta vuodesta saa 20 % alennuksen
    if (years > 2) {
        total = total * 0.8;
        discount = "Sait 20 % alennuksen!";
    }

    // Vähintään viidestä vuodesta vielä 5 € lisäalennus
    if (years >= 5) {
        total = total - 5;
        discount = "Sait 20 % alennuksen ja 5 € lisäalennuksen!";
    }

    // TODO: Show the result / Näytä tulos.
    cost.textContent = "Kokonaishinta: " + total.toFixed(2) + " €";
    discountMessage.textContent = discount;
});


 // Exercise 4 / Harjoitus 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {
    // TODO: Read ws05Animal. Handle null before using JSON.parse().
    // TODO: Lue ws05Animal. Tarkista null ennen JSON.parse()-muunnosta.
    const saved = localStorage.getItem("ws05Animal");

    // Jos mitään ei ole tallennettu, näytetään ilmoitus
    if (saved === null) {
        savedAnimal.textContent = "Ei vielä tallennettua eläintä";
        return;
    }

    // TODO: Display name, species and note with textContent.
    // TODO: Näytä nimi, laji ja muistio textContent-ominaisuudella.
    const animal = JSON.parse(saved);

    savedAnimal.textContent = animal.name + " / " + animal.species + " / " + animal.note;
}

loadButton.addEventListener("click", loadAnimal);

clearButton.addEventListener("click", function () {
    // TODO: Remove ws05Animal and update the displayed result.
    // TODO: Poista ws05Animal ja päivitä sivulla näkyvä tulos.
    localStorage.removeItem("ws05Animal");
    savedAnimal.textContent = "Ei vielä tallennettua eläintä";
});

// TODO: Call loadAnimal() here to restore data when the page opens.
// TODO: Kutsu loadAnimal() tässä, jotta tiedot palautuvat sivun avautuessa.
loadAnimal();
