window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
         document.getElementById("my_audio").play();
        localStorage.setItem("hasCodeRunBefore", true);
    }
}


/*witch*/
 document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        witch = document.querySelector('.witch');
        witch.classList.add('animatewitch');
        setTimeout(() => {
            witch.classList.remove('animatewitch')
        }, 700);
    }
    if (e.keyCode == 39) {
        witch = document.querySelector('.witch');
        witchX = parseInt(window.getComputedStyle(witch, null).getPropertyValue('left'));
        witch.style.left = witchX + 112 + "px";
    }
    if (e.keyCode == 37) {
        witch = document.querySelector('.witch');
        witchX = parseInt(window.getComputedStyle(witch, null).getPropertyValue('left'));
        witch.style.left = (dinoX - 112) + "px";
    }
}
