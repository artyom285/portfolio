function showFunc() {
    var button = document.querySelector("#active");
    var button2 = document.querySelector("#active2");
    var portfolio = document.querySelector(".portfolio");
    var skills = document.querySelector(".skills");
    portfolio.classList.toggle("none");
    skills.classList.toggle("show");
    button.classList.toggle("fade");
    button2.classList.toggle("up");
}

function darkMode() {
    var moon = document.querySelector(".bx-moon");
    moon.classList.toggle("moon");

    var body = document.querySelector("body");
    body.classList.toggle("dark");

    var name = document.querySelector(".name");
    name.classList.toggle("white");

    var sn = document.querySelectorAll(".sn-a");
    for (let i = 0; i < sn.length; i++) {
        sn[i].classList.toggle("sn-white");
     }

    var message = document.querySelectorAll(".message-a");
    for (let i = 0; i < message.length; i++) {
        message[i].classList.toggle("message-white");
     }

     var buttons_block = document.querySelector(".showcase-links");
     buttons_block.classList.toggle("showcase-grey");

     var btn_active = document.querySelector("#active");
     btn_active.classList.toggle('active-grey');

     var btn_activ2 = document.querySelector("#active2");
     btn_activ2.classList.toggle('active-grey2');

     var skills_block = document.querySelector(".skills-block");
     skills_block.classList.toggle("skills_block-grey");

     var skill_p = document.querySelectorAll(".skill-p");
     for (let i = 0; i < skill_p.length; i++) {
        skill_p[i].classList.toggle("skill-white");
     }
}

