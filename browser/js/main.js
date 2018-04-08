(function(){
  let canvas = document.getElementById("canvas-screen"),
      context = canvas.getContext('2d'),
      currentShape = 'triangle',
      colorIndex = 0,
      currentRainbowColor = 'red',
      shapesArray = [];

    const rainbow =  ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].reverse(),
          length = 100;


    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('mousedown', createShape, false);

    function Shape (type, x, y) {
      this.type = type;
      this.xPosition = x;
      this.yPosition = y;
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // drawCanvas();
    }

    function getPosition(e) {
      return [e.clientX, e.clientY];
    }

    function nextShape() {
      if(currentShape === 'circle') {
        currentShape = 'square';
      }else if(currentShape === 'square'){
        currentShape = 'triangle';
      }else{
        currentShape = 'circle';
      }
    }

    function createShape(e) {
      let [xPosition, yPosition] = getPosition(e),
      newShape = new Shape(currentShape, xPosition, yPosition);
      shapesArray.push(newShape);

      drawShape(xPosition, yPosition);


      console.log(shapesArray);
      changeColor();
      nextShape();
    }

    function drawShape(x,y) {
      if(currentShape === 'circle') {
        drawCircle(x,y);
      }else if(currentShape === 'square'){
        drawSquare(x,y);
      }else{
        drawTriangle(x,y);
      }
    }

    function drawCircle(x, y) {
      context.fillStyle = currentRainbowColor;
      context.beginPath();
      context.arc(x, y, length, 0, 2 * Math.PI, false);
      context.fill();
    }

    function drawSquare(x, y) {
      context.fillStyle = currentRainbowColor;
      context.fillRect(x - length, y - length, 2*length, 2*length);
    }

    function drawTriangle(x, y) {
      context.fillStyle = currentRainbowColor;
      context.beginPath();
      context.moveTo(x - length, y + 0.5 * (3/2.0) * length );
      context.lineTo(x + length, y + 0.5 * (3/2.0) * length);
      context.lineTo(x , y - 0.5 * (3/2.0) * length);
      context.fill();
    }

    function changeColor() {
      colorIndex += 1;
      currentRainbowColor = rainbow[colorIndex % 7]


    }



resizeCanvas();
})();
