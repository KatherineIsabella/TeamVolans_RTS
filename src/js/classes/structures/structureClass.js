class Structure {

  constructor(name, id, health, cost, unitProduced, xLocation, yLocation) {
    this.name = name;
    this.id = id;
    this.health = health;
    this.cost = cost;
    this.unitProduced = unitProduced;
    this.xLocation = xLocation;
    this.yLocation = yLocation;
  }

  useSpecial() {
    console.log("special used");
  }
  makeUnit(){
    console.log(this.unitProduced + " made");
  }

}
