window.addEventListener('load', draw)
window.addEventListener('resize', draw)

function draw() {
    const canvas = document.querySelector('canvas')
    const context = canvas.getContext('2d')

    //set canvas size to fullscreen
    resizeCanvasToFullscreen(canvas)

    // Draw some rectagles
    context.fillStyle = 'green'
    context.strokeStyle = 'purple'
    context.fillRect(25,25,100,100)
    context.clearRect(50,50,50,50)
    context.strokeRect(60,60,30,30)

    context.fillStyle = 'blue'
    context.fillRect(150,25,100,100)
}

/**
 * Resize canvas to full screen
 * @param {HTMLCanvasElement} canvas 
 */
function resizeCanvasToFullscreen(canvas){
      // Set canvas size to fullscreen
      canvas.width = window.innerWidth
      canvas.height = window.innerWidth
}