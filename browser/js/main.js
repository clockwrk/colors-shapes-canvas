(function(){
  let canvas = document.getElementById("canvas-screen"),
    m_canvas  = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    m_context = m_canvas.getContext('2d'),
    currentShape = 'triangle',
    colorIndex = 0,
    currentRainbowColor = 'violet',
    shapesArray = [];

  const rainbow =  ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].reverse(),
        length = 100;

  window.addEventListener('resize', resizeCanvas, false);
  window.addEventListener('click', createShape, false);

  function Shape (type, x, y, color) {
    this.type = type;
    this.xPosition = x;
    this.yPosition = y;
    this.color = color;
    this.speed = setSpeed();
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    m_canvas.width = canvas.width;
    m_canvas.height = canvas.height;
    draw();
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
        newShape = new Shape(currentShape, xPosition, yPosition, currentRainbowColor);

    shapesArray.push(newShape);
    changeColor();
    nextShape();
  }

   function drawShape(shape) {
     console.log(shape.type, 'is being passed in');
     if(shape.type === 'circle') {
       console.log('circle being created')
       drawCircle(shape);
     }else if(shape.type === 'square'){
       console.log('square being created')
       drawSquare(shape);
     }else{
       console.log('triangle being created')
       drawTriangle(shape);
     }
   }

    function drawCircle(shape) {
      m_context.fillStyle = shape.color;
      m_context.beginPath();
      m_context.arc(shape.xPosition, shape.yPosition, length, 0, 2 * Math.PI, false);
      m_context.fill();
    }

    function drawSquare(shape) {
      m_context.fillStyle = shape.color;
      m_context.fillRect(shape.xPosition - length, shape.yPosition - length, 2*length, 2*length);
    }

    function drawTriangle(shape) {
      m_context.fillStyle = shape.color;
      m_context.beginPath();
      m_context.moveTo(shape.xPosition - length, shape.yPosition + 0.5 * (3/2.0) * length );
      m_context.lineTo(shape.xPosition + length, shape.yPosition + 0.5 * (3/2.0) * length);
      m_context.lineTo(shape.xPosition , shape.yPosition - 0.5 * (3/2.0) * length);
      m_context.fill();
    }

    function changeColor() {
      colorIndex += 1;
      currentRainbowColor = rainbow[colorIndex % 7];
    }

    function draw() {
      m_context.clearRect(0, 0, canvas.width, canvas.height);
      shapesArray.forEach((shape) => {
        drawShape(shape);
        shape.yPosition -= 3 * shape.speed;
      });

      shapesArray = shapesArray.filter((shape) =>(shape.yPosition > 0));

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(m_canvas, 0, 0,canvas.width, canvas.height);

      window.requestAnimationFrame(draw);
    }

    function setSpeed() {
      return 2*Math.floor(Math.random() * 4) + 1;
    }

resizeCanvas();
})();
