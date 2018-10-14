class Priest extends Unit {

  constructor(name, id, health, cost, attack, range, buildingProduced, xLocation, yLocation, currentState) {
    super(name, id, health, cost, attack, range, buildingProduced, xLocation, yLocation, currentState);
  }

  makeBuilding(id){
    super.makeBuilding();
    return new Temple("Temple", id, 50, 225, "Priest", this.xLocation, this.yLocation);
  }

}
