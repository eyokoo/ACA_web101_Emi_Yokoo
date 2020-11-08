const callMeFunction = ()=> {
  document.getElementById("callMe").innerHTML = "Call Me!"
}

const fadeOut = () => {
  document.getElementById("picture").style.opacity = "0" 
}

const fadeIn = () => {
  document.getElementById("picture").style.opacity = "1" 
}

const textColor = () => {
  document.getElementById("title").style.color = "pink"
}
const ani1 = () => {
  const element = document.getElementById("p-tag")
  element.classList.add("animate__animated", "animate__bounce")
  }