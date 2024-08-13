
let btn = document.querySelector(".login-Btn") // Hearder Login box 
console.log(btn);
let x = document.querySelector('.login-container');
console.log(x);
btn.addEventListener("click", function () {
    x.style.display = 'block';
})

// login close box

let close = document.querySelector("#close-login")  
console.log(close);
let y = document.querySelector(".login-container");
console.log(y);
close.addEventListener("click", function () {
    y.style.display = 'none'

})
// login box to signup


    let signup = document.querySelector(".signup")
    // console.log(close);
    let z = document.querySelector(".buttom-link");
    // console.log(y);
    close.addEventListener("click", function () {
        y.style.display = 'none'

 })

//  signup to login 

    let signupLink = document.querySelector(".signup");
    let loginContainer = document.querySelector(".login-container2");
    let loginContainer2 = document.querySelector(".login-container");
    let closeLogin = document.querySelector("#close-login2");
    // console.log(closeLogin);

    signupLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link action
        loginContainer.style.display = 'block';
        loginContainer2.style.display = 'block';
    });

    closeLogin.addEventListener("click", function () {
        loginContainer.style.display = 'none';
        loginContainer2.style.display = 'none'

});

// login to login 

let LogIn = document.getElementById('login-Btn');
let container2 = document.getElementById('container2')
let container1 = document.getElementById('contianer1')
LogIn.onclick = () => {
    container2.style.display = 'none'
    container1.style.display = 'block'
};

// ( search to optional )

let selector =document.querySelector(".optional");
// console.log(selector);
let search = document.querySelector(".login-container")
// console.log(search);
selector.addEventListener('click', function(){
    let arr = ["upsc", "ssc", "ibps so", "bpsc", "p.c.s","c.u.t" , "others" , "college" ];
    if (arr.includes(selector.value)){
        // console.log(arr.includes.value);
        search.style.display = 'block'
        // return x;
    }else{
            search.style.display = 'none'
            
    }
});


// (informetion box )

let infolink = document.querySelector("#Info-Btn")
    // console.log(infolink);
    let news = document.querySelector('.newsInformetion');
    // console.log(news);
    infolink.addEventListener('click', function () {
        news.style.display = 'block'

    });

// ( informetion close )

document.addEventListener('DOMContentLoaded', function() {
    let closeinfo = document.querySelector('#close-info');
    let cibx = document.querySelector('.newsinformetion');

    closeinfo.addEventListener('click', () => {
        // Toggle the display property between 'block' and 'none'
        if (cibx.style.display === 'block') {
            cibx.style.display = 'none';
        } else {
            cibx.style.display = 'block';
        }
    });
});

// ----------------------------------