export class Snakee {
    
  constructor(dx = 1, dy = 0) {
    const canvas = document.getElementById("snakeCanvas");
    const ctx = canvas.getContext("2d");
    this.body =[
      {x: 8, y: 1},
      {x: 7, y: 1},
      {x: 6, y: 1},
      {x: 5, y: 1},
      {x: 4, y: 1},
      {x: 3, y: 1},
      {x: 2, y: 1},
      {x: 1, y: 1}
    ];
    // Direção inicial da cobra
    this.dx = dx;
    this.dy = dy;
    // Função que desenha a cobra na tela
    this.drawSnake = function() {

  
      this.body.forEach(function(block, index) {
        if(index % 2== 0)
        ctx.fillStyle = "#ff753a";
        else
        ctx.fillStyle = "#ff0000";
    
        ctx.fillRect(block.x * blockSize, block.y * blockSize, blockSize, blockSize);
      });
      
      
    }

    this.moveSnake = function() {
      // Cria um novo bloco na frente da cobra
      const head = {x: this.body[0].x + this.dx, y: this.body[0].y + this.dy};
       
      this.body.unshift(head);
    
      // Verifica se a cobra comeu a comida
     //existe alguma food com essa posicao se sim, come se nao nova
      let food = foods.find(food=> head.x === food.location.x && head.y === food.location.y)
      
      if (food) {
        // Cria uma nova comida em uma posição aleatória
        food.location.x =  Math.floor(Math.random() * width);
        food.location.y =  Math.floor(Math.random() * height);
        // food = {
        //   x: Math.floor(Math.random() * width),
        //   y: Math.floor(Math.random() * height)
        // };
      } else {
        // Remove o último bloco da cobra
        var rabo = this.body[this.body.length - 1];
      
    
       ctx.clearRect(rabo.x* blockSize, rabo.y* blockSize, blockSize, blockSize);
        
       this.body.pop();
      
      }

    
    }

    this.moving = function(x, y){
      this.dx = x;
      this.dy = y;
    }
    this.size = function(){
      return this.body.length;
    }
    
  
  }


}

  



  