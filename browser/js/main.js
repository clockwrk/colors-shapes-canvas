(function(){
  let canvas = document.getElementById("canvas-screen");

    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('mousedown', getPosition, false);


    function drawCanvas () {

    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawCanvas();
    }

    function getPosition(e) {
      console.log([e.clientX, e.clientY])
      return [e.clientX, e.clientY];
    }

resizeCanvas();
})();
