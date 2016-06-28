var openMenuBtn = document.querySelector('.open-menu-btn');

openMenuBtn.addEventListener('click', function(){
    var mainMenu = document.querySelector('.main-menu');
    
    mainMenu.classList.toggle('unhide-menu');
});


var i = 0;
var mobilePersentage = document.querySelector('.mobile-users span');
var mobileTimer = function(){
    
    
    if(i < 61){
        mobilePersentage.innerHTML = i + "%";
        setTimeout(mobileTimer, 20);
    }

    i++;
    
};

var startMobileTimer = setTimeout(mobileTimer, 20);

var b = 99;
var desctopPersentage = document.querySelector('.desctop-users span');
var desctopTimer = function(){
    
    
    if(b > 39){
        desctopPersentage.innerHTML = b + "%";
        setTimeout(desctopTimer, 20);
    }

    b--;    
};  

var startDesctopTimer = setTimeout(desctopTimer, 20);

    