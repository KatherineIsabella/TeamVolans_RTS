//an ai unit
AI_Unit = function (index, game){
   this.unit = game.add.sprite(index*50, 150, 'square_unit', 'unit1');
   this.unit.id=index;
   this.unit.goUp=true;
}

//occurs when the ai unit hits the moving button
//puts the unit at location 50,150
AI_Unit.prototype.unitHit=function(){
  this.unit.x = 50;
  this.unit.y = 150;
  this.unit.goUp=true;
};

//updates the ai unit (moves it up and down)
AI_Unit.prototype.update=function(playerXIndex, playerYIndex){

//if the unit is within a certain range of the block, then the unit is hit
 if((this.unit.x > playerXIndex - 20 && this.unit.x < playerXIndex+20)
 && (this.unit.y > playerYIndex - 20 && this.unit.y < playerYIndex+20)){
   this.unitHit();
 }

//moves the block up and down the screen
 else{
   if(this.unit.goUp){
     this.unit.y--;
   }
   else{
     this.unit.y++;
    }

    //switches the direction of the block's movement
    if(this.unit.y == 400 || this.unit.y == 100){
       this.unit.goUp = !this.unit.goUp;
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
    this.image = this.add.image(400,300,'button');

    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    aiUnits=[];
    for(var i = 1; i < 10; i++){
      aiUnits.push(new AI_Unit(i, this));
    }

  }

  update(){

    //clicking d and a moves the block left and right
    if(this.key_D.isDown){
      this.image.x --;
    }
    else if(this.key_A.isDown){
      this.image.x ++;
    }
    
    //updates the units
    for(var i = 0; i < aiUnits.length; i++ ){
      aiUnits[i].update(this.image.x, this.image.y);
    }
  }
}
