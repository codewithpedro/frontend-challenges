const btn = document.querySelector("button");
const post = document.querySelector(".post-card");
const ratingCard = document.querySelector(".rating-card");


btn.onclick = () => {
  const radioSelected = document.querySelector('input[name="rate"]:checked');
  const cardReportEl = document.querySelector(".post-card--report");

  if (radioSelected !== null) {
    const reportEl = document.createElement('p');
    reportEl.innerHTML = `You selected ${radioSelected.value} out of 5`
    cardReportEl.appendChild(reportEl);
    ratingCard.style.display = "none";
    post.style.display = "block";
  }  
}