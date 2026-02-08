function PlaceVisit() {
    this.place = {};
    this.currentId = 0;
};

PlaceVisit.prototype.generatedId = function() {
    this.currentId +=1;
    return this.currentId;
};

PlaceVisit.prototype.addPlace = function(place) {
    place.id = this.generateId();
        this.places[place.id] = place;
        console.log(`[LOG] ${place.name} enrolled with ID: ${place.id}`);
};

function Place(name, landmark, year, notes) {
    this.name = name;
    this.landmark = landmark;
    this.year = year;
    this.notes = notes;
    this.id = null;
};

const myPlaceVisited = new PlaceVisit();

const gridDisplay = document.getElementById(`place-display`);
const totalRate = document.getElementById(`total-rate`);

function handleSearch() {
    const namIn = document.getElementById(`name`);
    const landIn = document.getElementById(`landmark`);
    const yrIn = document.getElementById(`year`)
    const notIn = document.getElementById(`notes`)
    
if (namIn.value.trim() === "") {
            alert("Please enter name.");
            return;
        };

const newPlace = new Place(
    namIn.value,
    landIn.value,
    yrIn.value,
    notIn.value,
);

myPlaceVisited.addPlace(newPlace);

renderPlace();

namIn.value = "";
};

function renderPlace() {
        gridDisplay.innerHTML = "";

const placeList = Object.values(myPlaceVisited.places);



}



