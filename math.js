window.addEventListener('load', draw)
/**
 * Empty array that 
 */
let dot=[]

// Vi definerar nåra globla variabler för enkelhetens skull
// Lägg till fler om du behöver
let nrOfDots = 173;
let multiplier = 78;

const dotSize = 2
const radius = 220
const centerPoint = {
    x: 370,
    y: 370
};

function draw() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    //set canvas size to fullscreen
    resizeCanvasToFullscreen(canvas)
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCirce(context);
    drawDots(context);
    drawLines(context);
}

/**
 * Draws the outline circle for this projekt.
 * @param {CanvasRenderingContext2D} context
 */
function drawCirce(context) {
    context.beginPath()
    // x, y, radius
    context.arc(centerPoint.x,centerPoint.y,radius,0,2*Math.PI)
    context.stroke()
    context.closePath()
}

/**
 * Draws each dot onto the outline circle.
 * @param {CanvasRenderingContext2D} context
 */
function drawDots(context) {
       //red dot
       context.beginPath()
       context.fillStyle = 'red'
       
    for(let i = 0; i < nrOfDots; i++){
        const angle = 2 * Math.PI / nrOfDots * i
        const x = centerPoint.x + radius * Math.cos(angle)
        const y = centerPoint.y + radius * Math.sin(angle)

        context.moveTo(x,y)
        context.arc(x,y,dotSize,0,2 * Math.PI)
        //an array med två objkekt x:x, y:y
        dot[i] = { x, y }
      
    }
       context.fill()
       context.closePath()
}


/**
 * Draws a line from each dot to another based on the multiplier value.
 * @param {CanvasRenderingContext2D} context
 */
function drawLines(context) {
    context.beginPath()
    for(let i = 0; i < nrOfDots; i++){
        const startDot = dot[i]
        const endDot = dot[i * multiplier % nrOfDots]

        // context.strokeStyle = `hsl(${360 / nrOfDots * i}, 100%, 40%)`
        context.beginPath()
        context.moveTo(startDot.x, startDot.y)
        context.lineTo(endDot.x, endDot.y)
        context.stroke()
        context.closePath()
    }
    
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