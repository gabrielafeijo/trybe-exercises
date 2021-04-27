function setBackgroundColor(color) {
  let content = document.querySelector(".content")
  content.style.backgroundColor = color
  const setItem = localStorage.setItem("backgroundColor", color)
}
setBackgroundColor();
localStorage.getItem('backgroundColor')

function changeColorBody() {
  const buttonBackground = document.querySelectorAll("#background-color>button");  
  for (let index = 0; index < buttonBackground.length; index +=1) {
    buttonBackground[index].addEventListener('click', function(event) {
      setBackgroundColor(event.target.innerHTML);
    })
  }
}
changeColorBody();



/* function changeColorBody() {
  const backgroundColors = document.querySelectorAll("#background-color>button");
  backgroundColors.forEach(index => {
    backgroundColors[index].addEventListener('click', event => {
      event.target.style.backgroundColor = backgroundColors.innerTEXT
    })
  })
}
changeColorBody();
 */