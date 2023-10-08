let navStatus = 0;

let screen_resize = () => {
    if (parseInt(window.innerWidth)>550){
        document.getElementById('small_navbar').style.display = "none";
        navStatus = 0;
    }
}

let toggle = () => {
    console.log("hello world")
    if (navStatus==0){
        document.getElementById('small_navbar').style.display = "block";
        navStatus = 1;
    }
    else{
        document.getElementById('small_navbar').style.display = "none";
        navStatus = 0;
    }
}

let hamburgerImg = document.getElementById('hamburger_img');
hamburgerImg.onclick = toggle;

document.getElementsByTagName('body')[0].onresize = screen_resize;