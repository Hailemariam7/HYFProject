
/*Humburger menu function */

const icon = document.getElementById('icon');
icon.addEventListener('click', ()=> {
    var menu = document.getElementById("navMenu");


    if(menu.style.display==="none"){
        menu.style.display="block";
    } else{
        menu.style.display="none";
    }
});

/* Log in page function */

const login = document.getElementById("logIn");

login.addEventListener("click", ()=> {
    document.getElementById("logInPage").scrollIntoView(); /* this will display login page */
});
const log_in = document.getElementById("log-in"); /* this will help to display home page after successful login*/
log_in.addEventListener('click', function () {
    document.getElementById("home").style.display = "flex";
});




/* Sign up page function */

const signUp = document.getElementById("signUp");
signUp.addEventListener("click", () => {
    document.getElementById("registrationPage").scrollIntoView();
});
const sign_up = document.getElementById('sign-up');
sign_up.addEventListener('click', function () {
    document.getElementById('home').style.display = 'flex';
});


/* Scroll to top function */

const goUp = document.getElementById("scrollUpIcon");

window.addEventListener('scroll', iconVisibility);

function iconVisibility() {
      if (window.scrollY > 400) {
        goUp.style.display = "block";
    } else {
        goUp.style.display = "none";
    }
  }

goUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
});







   
/* Below everything is about making the navigation functional. */

const homee = document.getElementsByClassName("homes");
const fruitAndVegetable = document.getElementsByClassName("fruitsAndVegetables");
const grain = document.getElementsByClassName("grains");
const spice = document.getElementsByClassName("spices");
const clothAndShoes = document.getElementsByClassName("clothesAndShoes");
const trend = document.getElementById("trending");
const near = document.getElementById('nearby');
const recommend = document.getElementById('recommendation');


    for (i of homee) {
        i.addEventListener("click", displayHome);
        
}

     for (j of fruitAndVegetable) {
        j.addEventListener("click", displayFruitAndVegetables);
        
}

for (k of grain) {
    k.addEventListener("click", displayGrains);
        
}

     for (l of spice) {
        l.addEventListener("click", displaySpices);
        
}

   for (m of clothAndShoes) {
        m.addEventListener("click", displayClothsAndShoes);
        
}


function displayHome() {
    document.querySelectorAll(".trending").forEach(a=>a.style.display = "initial");
    document.querySelectorAll(".nearby").forEach(a => a.style.display = "initial");
    document.querySelectorAll(".recommendation").forEach(a => a.style.display = "initial");
    document.querySelectorAll(".homes").forEach(a => {
        a.style.backgroundColor = "rgb(61, 135, 214)";
        a.style.padding = "0 15px";
    });
    document.querySelectorAll(".fruitsAndVegetables").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".grains").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".spices").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".clothesAndShoes").forEach(a => a.style.backgroundColor = "initial");
    document.getElementById("trending").style.backgroundColor = "initial";
    document.getElementById("nearby").style.backgroundColor = "initial";
    document.getElementById("recommendation").style.backgroundColor = "initial";
    
}

function displayFruitAndVegetables() {
     document.querySelectorAll(".fruitsAndVegetables").forEach(a => {
         a.style.backgroundColor = "rgb(61, 135, 214)";
         a.style.padding = "0 15px";
    });
    document.querySelectorAll(".grain").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".spice").forEach(a => a.style.display = "none");
    document.querySelectorAll(".clothes-shoes").forEach(a => a.style.display = "none");
    document.querySelectorAll(".homes").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".grains").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".spices").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".clothesAndShoes").forEach(a => a.style.backgroundColor = "initial");
    document.getElementById("trending").style.backgroundColor = "initial";
    document.getElementById("nearby").style.backgroundColor = "initial";
    document.getElementById("recommendation").style.backgroundColor = "initial";
}

function displayGrains() {
     document.querySelectorAll(".grains").forEach(a => {
         a.style.backgroundColor = "rgb(61, 135, 214)";
         a.style.padding = "0 15px";
    });
    document.querySelectorAll(".fruit-vegetable").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".spice").forEach(a => a.style.display = "none");
    document.querySelectorAll(".clothes-shoes").forEach(a => a.style.display = "none");
    document.querySelectorAll(".homes").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".fruitsAndVegetables").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".spices").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".clothesAndShoes").forEach(a => a.style.backgroundColor = "initial");
    document.getElementById("trending").style.backgroundColor = "initial";
    document.getElementById("nearby").style.backgroundColor = "initial";
    document.getElementById("recommendation").style.backgroundColor = "initial";
}

function displaySpices() {
      document.querySelectorAll(".spices").forEach(a => {
          a.style.backgroundColor = "rgb(61, 135, 214)";
          a.style.padding = "0 15px";
    });
    document.querySelectorAll(".fruit-vegetable").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".grain").forEach(a => a.style.display = "none");
    document.querySelectorAll(".clothes-shoes").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".homes").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".fruitsAndVegetables").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".grains").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".clothesAndShoes").forEach(a => a.style.backgroundColor = "initial");
    document.getElementById("trending").style.backgroundColor = "initial";
    document.getElementById("nearby").style.backgroundColor = "initial";
    document.getElementById("recommendation").style.backgroundColor = "initial";
}

function displayClothsAndShoes() {
    document.querySelectorAll(".clothesAndShoes").forEach(a => {
        a.style.backgroundColor = "rgb(61, 135, 214)";
        a.style.padding = "0 15px";
    });
    document.querySelectorAll(".fruit-vegetable").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".grain").forEach(a => a.style.display = "none");
    document.querySelectorAll(".spice").forEach(a => a.style.display = "none");
    document.querySelectorAll(".homes").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".fruitsAndVegetables").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".grains").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".spices").forEach(a => a.style.backgroundColor = "initial");
    document.getElementById("trending").style.backgroundColor = "initial";
    document.getElementById("nearby").style.backgroundColor = "initial";
    document.getElementById("recommendation").style.backgroundColor = "initial";
}


trend.addEventListener('click', () => {
    document.querySelectorAll(".nearby").forEach(a => a.style.display = "none");
    document.querySelectorAll(".recommendation").forEach(a => a.style.display = "none");
    
    trend.style.backgroundColor = "rgb(61, 135, 214)";
    trend.style.padding = "0 15px";
   
    document.querySelectorAll(".homes").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".fruitsAndVegetables").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".grains").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".spices").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".clothesAndShoes").forEach(a => a.style.backgroundColor = "initial");
    document.getElementById("nearby").style.backgroundColor = "initial";
    document.getElementById("recommendation").style.backgroundColor = "initial";
 });
    



near.addEventListener('click', () => {
    document.querySelectorAll(".trending").forEach(a => a.style.display = "none");
    document.querySelectorAll(".recommendation").forEach(a => a.style.display = "none");

    near.style.backgroundColor = "rgb(61, 135, 214)";
    near.style.padding = "0 15px";

    document.querySelectorAll(".homes").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".fruitsAndVegetables").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".grains").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".spices").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".clothesAndShoes").forEach(a => a.style.backgroundColor = "initial");
    document.getElementById("trending").style.backgroundColor = "initial";
    document.getElementById("recommendation").style.backgroundColor = "initial";

});


recommend.addEventListener('click', () => {

    document.querySelectorAll(".trending").forEach(a => a.style.display = "none");
    document.querySelectorAll(".nearby").forEach(a => a.style.display = "none");

    recommend.style.backgroundColor = "rgb(61, 135, 214)";
    recommend.style.padding = '0 15px';

    
    document.querySelectorAll(".homes").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".fruitsAndVegetables").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".grains").forEach(a => a.style.backgroundColor = "initial");
    document.querySelectorAll(".spices").forEach(a => a.style.backgroundColor = "initial");
    document.getElementById("trending").style.backgroundColor = "initial";
    document.getElementById("nearby").style.backgroundColor = "initial";
       
});





 
