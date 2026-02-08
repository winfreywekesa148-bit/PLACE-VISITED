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

totalLabel.innerText = placeList.length;

if(placeList.length === 0) {
    gridDisplay.innerHTML = `
    <div class="empty-state">
                <h2>Hope you enjoy *-*</h2>
                <p>Suggest new places!!</p>
    </div>`;
return;
}

placeList.forEach(place => {
    let icon = "🌴 🛫";
    if(place.name === "Mombasa") icon = "🏖";
    if(place.name === "Nairobi") icon = "🏢";
    if(place.name === "Nakuru") icon = "🦩";
    if(place.name === "Naivasha") icon = "🍹";
    if(place.name === "Kisumu") icon = "🐙";
    if(place.name === "Lamu") icon = "☕";
    if(place.name === "Kitale") icon = "🦁";

const card = document.createElement('div');
        card.Name = 'place-card';
        card.innerHTML = `
                <span class="id">ID: ${place.id}</span>
                <span class="icon">${icon}</span>
                <h3 class="name">${place.name}</h3>
                
                <button class="btn-search" onclick="handleSearch(${place.id})">Search place</button>
        `;
    gridDisplay.appendChild(card);
});

}

const p1 = new Place("Mombasa", "beach", 2020, "Beautiful sunset");
const p2 = new Place("Kisumu", "Lake-victoria", 2024, "Amazing fish");

myPlaceVisited.addPlace(p1);
myPlaceVisited.addPlace(p2);
renderPlace();



