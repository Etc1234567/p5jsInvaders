function Projectile(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;
    
    this.show = function() {
      noStroke();
      fill(150, 0, 255);
      ellipse(this.x, this.y, this.r*2, this.r*2);
    }
    
    this.disappear = function() {
      this.toDelete = true;
    }
    
    this.hits = function(enemyship) {
      var d = dist(this.x, this.y, enemyship.x, enemyship.y);
      
  //     This formula uses math to determine if images are overlapping (diameter and radius)
      if (d < this.r + enemyship.r) {
        return true;
          } else {
            return false;
          }
      }
    
    this.move = function(){
      this.y = this.y - 10;
    }
    
  }
