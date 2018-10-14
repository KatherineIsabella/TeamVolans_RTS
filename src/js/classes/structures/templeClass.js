class Temple extends Structure {

  constructor(name, id, health, cost, unitProduced, xLocation, yLocation) {
    super(name, id, health, cost, unitProduced, xLocation, yLocation);
  }

  makeUnit(id, currentState){
    super.makeUnit();
    return new Priest("Priest", id, 30, 50, 5, 2, "Temple", this.xLocation, this.yLocation, currentState);
  }

}
