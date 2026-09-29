//Tehtävä 1

// Haetaan tarvittavat elementit
const taskOneHeading = document.querySelector("#taskOneHeading");
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

//vaihdetaan otsikkoa 
changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});
//vaihdetaan tyyliä
changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});
//vaihdetaan eläintekstiä
changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Kirahvit ovat maailman korkeimpia eläimiä.";
});

//Tehtävä 2

// Luodaan uusi sisältöosio
const animalContent = document.querySelector("#animalContent");
//tehdään otsikko
const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");
//tehdään kappale
const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
//tehdään kuva
const animalImage = document.createElement("img");
animalImage.src = "images/elephant.png";
animalImage.alt = "Elefantti";
// Lisätään luodut elementit sisältöosioon käyttäen appendia
animalContent.append(animalHeading, animalParagraph, animalImage);
// Haetaan piilota ja näytä painikkeet
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "block";
});

// TEHTÄVÄ 3
// Haetaan tarvittavat elementit
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImageSelect = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");
// Lisätään tapahtumankuuntelija valintalistalle
animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;
//jos valinta on elefantti 
    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti";
        animalImageSelect.src = "images/elephant.png";
        animalImageSelect.alt = "Elefantti";
        animalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
    }
//jos valinta on tiikeri
    else if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImageSelect.src = "images/tiger.png";
        animalImageSelect.alt = "Tiikeri";
        animalDescription.textContent = "Tiikeri on maailman suurin kissaeläin.";
    }
//jos valinta on pingviini
    else if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        animalImageSelect.src = "images/penguin.png";
        animalImageSelect.alt = "Pingviini";
        animalDescription.textContent = "Pingviinit ovat lentokyvyttömiä lintuja.";
    }
//jos valinta on panda
    else if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImageSelect.src = "images/panda.png";
        animalImageSelect.alt = "Panda";
        animalDescription.textContent = "Panda tunnetaan mustavalkoisesta turkistaan.";
    }
});
// Lisätään hoverefekti kuvalle
animalImageSelect.addEventListener("mouseenter", function () {
    animalImageSelect.classList.add("image-highlight");
});
// Poistetaan hoverefekti kun hiiri poistuu kuvan päältä
animalImageSelect.addEventListener("mouseleave", function () {
    animalImageSelect.classList.remove("image-highlight");
});

// TEHTÄVÄ 4
// Haetaan tarvittavat elementit
const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");
// Lisätään kun painetaan lisää havainto
animalForm.addEventListener("submit", function (event) {
    // Estetään uudelleenlataus
    event.preventDefault();
//otetaan syötetyt arvot talteen
    const animal = observationAnimal.value;
    const location = observationLocation.value;
    const date = observationDate.value;
// tarkistetaan että kaikki kentät on täytetty
    if (animal === "" || location === "" || date === "") {
        alert("Täytä kaikki kentät.");
        return;
    }
//luodaan uus rivi taulukkoon
    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animal;

    const locationCell = document.createElement("td");
    locationCell.textContent = location;

    const dateCell = document.createElement("td");
    dateCell.textContent = date;
// Lisätään solut uuteen riviin ja lisätään rivi taulukkoon
    newRow.append(animalCell, locationCell, dateCell);
    observationTableBody.append(newRow);
//lopuksi tyhjennetään lomake
    animalForm.reset();
});