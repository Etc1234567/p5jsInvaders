function Ship() {
    // starts ship in center of window  
      this.x = width/2;
      this.xdir = 0;
      
      this.show = function() {
        fill(255);
        rectMode(CENTER);
    //     Places rectangle at center (x) and sets the size
        rect(this.x, height-20,20,60);
      }
      
    //   dir is the direction of the ship
      this.move = function(dir) {
        this.x += this.xdir*5;
      }
      
      this.setDir = function(dir) {
        this.xdir = dir;
      }
      
    }
