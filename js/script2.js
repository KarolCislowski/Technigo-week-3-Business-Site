function toggle() {
  this.classList.toggle("active")
}

let faqList = document.querySelectorAll(".question")

faqList.forEach(question => {
  question.addEventListener("click", toggle)
})
