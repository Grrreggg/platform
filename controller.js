console.log('%c BLEAT','color:green;');


document.addEventListener("DOMContentLoaded", init);

window.addEventListener("resize", on_resize);
onmousemove = function(e){move_base(e.clientX, e.clientY)}
var base
var screen_w, screen_h

function init() {
    screen_w = document.body.clientWidth
    screen_h = window.screen.height
    base = document.getElementById('base')
}

function move_base(w, h) {
    var calc_dif_w =  ((screen_w/2) - w)/100
    var calc_dif_h =  ((screen_h/2) - h)/100

    calc_dif_w = get_normal(calc_dif_w)
    calc_dif_h = get_normal(calc_dif_h)

    base.style.transform = 'rotateZ(' + calc_dif_w + 'deg) rotateX(' + calc_dif_h + 'deg)'
}


function on_resize() {
    init()
}

function get_normal(arg) {
    if (arg > 5){
       return 5
    }else if(arg < - 5){
        return -5
    }else{
        return arg
    }
}