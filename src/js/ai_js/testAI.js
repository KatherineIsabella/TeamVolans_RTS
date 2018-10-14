
//keeps track of current unit id
//need a better method!!!
index = 1;

//Controls the AI
AI_Controller = function (){
   this.unitAmount = 0;
   this.buildingAmount=1;
   this.buildings = [new Temple("Temple", index, 50, 225, "Priest", 10, 10)];
   this.units = [];
   this.gold = 2000;
}

//updates the AI
AI_Controller.prototype.update=function(){

//goes through the list of buildings to perform special effects and/or make units
  for(var i =0; i < this.buildingAmount; i++){
    if(this.buildings[i].name == "Temple"){
      this.gold++;
    }

    //makes a priest if the gold is available and there aren't 10 yet
    if(this.gold > 50 && this.unitAmount < 10){
      this.units.push(this.buildings[i].makeUnit(index, "Idle"));
      this.unitAmount++;
      this.gold -=50;
      index++;
    }
  }

//goes through the list of units to perform actions
  for(var i = 0; i < this.unitAmount; i++){

    //if the unit if a priest performs specific actions
    if(this.units[i].name == "Priest"){

      //makes a temple if the priest is Idle an dthe gold is available
      if(this.gold>225 && this.buildingAmount < 5 && this.units[i].getCurrentState()== "Idle"){
        this.buildings.push(this.units[i].makeBuilding(index));
        this.gold-=225;
        this.buildingAmount++;
        index++;
        this.units[i].setCurrentState("Heal");
      }

      //if the priest state is Heal, heals units
      else if(this.units[i].getCurrentState()== "Heal"){
        this.units[i].attackState();
        this.units[i].setCurrentState("Idle");
      }
      else if(this.units[i].getCurrentState()=="Idle"){
        this.units[i].idle();
      }
    }
  }
};

var aiUnits;

class TestAI extends Phaser.Scene {

  constructor() {
    super({key:'TestAI'});
  }


  preload() {
    this.load.image('square_unit','assets/units/blue_square.png');
    this.load.image('title_l','assets/sample1.jpg');
    this.load.image('button', 'assets/button/button.png');
  }


  create() {

    aiUnits = new AI_Controller();
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  }

  update(){
    aiUnits.update();
  }
}
