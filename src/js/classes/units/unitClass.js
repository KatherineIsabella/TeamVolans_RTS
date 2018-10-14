class Unit {

  constructor(name, id, health, cost, attack, range, buildingProduced, xLocation, yLocation, currentState) {
    this.name = name;
    this.id = id;
    this.health = health;
    this.cost = cost;
    this.buildingProduced = buildingProduced;
    this.attack = attack;
    this.range = range;
    this.xLocation = xLocation;
    this.yLocation = yLocation;
    this.currentState = currentState;
  }

setCurrentState(state){
  this.currentState = state;
}
getCurrentState(){
  return this.currentState;
}
attackState(){
    console.log("unit attacked for " +this.attack + " points");
}
  guard(){
    console.log("unit guarded");
  }
  move(xLocation, yLocation){
    console.log("unit is moving to" +xLocation +","+ yLocation);
  }
  idle(){
    console.log( this.name + " with id " +this.id+ " is idle");
  }
  makeBuilding(){
    console.log(this.buildingProduced + " made");
  }

}
