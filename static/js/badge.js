/* 
    badge.js
    
    generic, should be replaced per site
    to draw and update the badge
*/

var canvas,
    context,
    step,
    steps,
    frames,
    delay;
var centerX,
    centerY,
    radius,
    direction;
var counter;

function badge_init() {
    var badge = document.getElementById("badge");
    canvas = badge.getElementsByTagName("canvas")[0];
    context = canvas.getContext("2d");

    // set canvas size based on container
    // canvas is always a square of the minimum dimension
    var computed_width = window.getComputedStyle(badge, null).getPropertyValue('width');
    var computed_width = parseFloat(computed_width, 10)
    var computed_height = window.getComputedStyle(badge, null).getPropertyValue('height');
    var computed_height = parseFloat(computed_height, 10)
    var min_ = Math.min(computed_width, computed_height);
    context.canvas.width = min_;
    context.canvas.height = min_;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    // debug
    console.log('computed_width = ' + computed_width);
    console.log('computed_height = ' + computed_height);
    console.log('canvas.width = ' + canvas.width);
    console.log('canvas.height = ' + canvas.height);
    console.log('centerX = ' + centerX);
    console.log('centerY = ' + centerY);

    context.fillStyle = "#FFFFFF";
    context.lineWidth = 8;
    context.strokeStyle = '#000';

    // load sprite sheet
    sprite_sheet = new Image();
    sprite_sheet.src = '/media/png/T-clear.png';
    sprite_height = 253;
    sprite_width = 480;
    sprite_computed_width = context.canvas.width ;
    sprite_computed_height = (sprite_computed_width * 253) / 480;
    sprite_X = (context.canvas.width - sprite_computed_width) / 2;;
    sprite_Y = (context.canvas.height - sprite_computed_height) / 2;
    frames = 30;    // frames in sprite_sheet

    counter = 0;
    delay = 50; 
    badge_animate();
}

function badge_animate() {
    counter++;
    context.clearRect(0, 0, canvas.width, canvas.height);
    // context.drawImage(sprite_sheet, sprite_width * (counter % frames), 0, 480, 253, topX, topY, 480, 253);

    // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    context.drawImage(sprite_sheet, sprite_width * (counter % frames), 0, sprite_width, sprite_height, sprite_X, sprite_Y, sprite_computed_width, sprite_computed_height);

    counter++;
    t = setTimeout('badge_animate()', delay);
}

function badge_start_stop() {
    if (t) {
        clearTimeout(t);
        t = null;
    } else {
        setTimeout('badge_animate()', delay);
    }
}
