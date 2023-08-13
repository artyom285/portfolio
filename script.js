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

