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

function Place(name, landmark, year, notes) {}

