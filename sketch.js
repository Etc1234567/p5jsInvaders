var ship;
var enemyships = [];
var projectiles = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  
//   Enemy ships are put into an array
  for (var i = 0; i < 6; i++) {
//     the arguments in Enemyship constructor determine their location
    enemyships[i] = new Enemyship(i*80+80, 60);
  }
  
}

function draw() {
  background(51);
  ship.show();
  ship.move();
  
  for (var i = 0; i < projectiles.length; i++) {
    projectiles[i].show();
    projectiles[i].move();
    
      for (var j = 0; j < enemyships.length; j++) {
        if (projectiles[i].hits(enemyships[j])){
          enemyships[j].react();
          projectiles[i].disappear();
        }
      }
  }
  
  var edge = false;
  
  for (var i = 0; i < enemyships.length; i++) {
    enemyships[i].show();
    enemyships[i].move();
    
    if (enemyships[i].x > width || enemyships[i].x < 0)
      {
        edge = true;
      }
  }
  
  if (edge) {
    for (var i = 0; i < enemyships.length; i++) {
      enemyships[i].shiftDown();
    }
  }
  
  for (var i = projectiles.length - 1; i >= 0; i--) {
    if (projectiles[i].toDelete) {
      projectiles.splice(i, 1);
    }
  }
  
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if (key === ' ') {
    var projectile = new Projectile(ship.x, height);
    projectiles.push(projectile); 
  }
  
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  }
  else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
