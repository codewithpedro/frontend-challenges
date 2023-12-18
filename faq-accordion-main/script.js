const question = document.querySelectorAll('card-section');

question.forEach((element) => {
    const imgSelector = element.querySelector("img");
    const answerSelector = element.querySelector("card-answer");
    imgSelector.addEventListener("click", () => {
        if (imgSelector.className === "plus"){
            imgSelector.className = 'minus';
            imgSelector.src = "./assets/images/icon-minus.svg"
            answerSelector.style.display = "block";
        } else {
            imgSelector.className = "plus";
            imgSelector.src = "./assets/images/icon-plus.svg"
            answerSelector.style.display = "none";
        }
    })
});