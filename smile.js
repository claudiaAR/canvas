window.addEventListener('load', draw)
window.addEventListener('resize', draw)

function draw() {
    const canvas = document.querySelector('canvas')
    const context = canvas.getContext('2d')

    //set canvas size to fullscreen
    resizeCanvasToFullscreen(canvas)

    // Draw somthing
    //face
    context.fillStyle = 'yellow'
    context.beginPath()
    context.arc(230,230,220,0,2*Math.PI)
    context.fill()
    context.closePath()
    
    //leftEye
    context.fillStyle = 'beige'
    context.beginPath()
    context.arc(120,180,50,0,2*Math.PI)
    context.fill()
    context.closePath()
    
    //innerEye
    context.beginPath()
    context.fillStyle = 'brown'
    context.arc(120,180,20,0,2*Math.PI)
    context.fill()
    context.stroke()

    //pupil
    context.beginPath()
    context.fillStyle = 'black'
    context.arc(115,180,5,0,2*Math.PI)
    context.fill()
  
    
    //RightEye
    context.fillStyle = 'beige'
    context.beginPath()
    context.arc(240,180,50,0,2*Math.PI)
    context.fill()
    context.closePath()

    //innerEye
    context.beginPath()
    context.fillStyle = 'brown'
    context.arc(240,180,20,0,2*Math.PI)
    context.fill()
    context.stroke()

    //pupil
    context.beginPath()
    context.fillStyle = 'black'
    context.arc(235,180,5,0,2*Math.PI)
    context.fill()
      
    //mouth
     context.beginPath()
     context.arc(180,300,50,0,Math.PI)
     context.stroke()
     context.fill()
     context.lineWidth = 20

    //beane
    context.beginPath()
    context.arc(230,110,180,Math.PI,Math.PI * 2)
    context.stroke()
    context.fill()
    context.lineWidth = 20

    context.fillStyle = 'brown'
    context.fillRect(380,110,40,320)

    context.beginPath()
    context.moveTo(100,75)
    context.lineTo(100,75)
    context.lineTo(75,50)
    context.filöl()
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