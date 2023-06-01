window.onload = function(){
  const form = document.querySelector("form");
  form.onsubmit = function(e) {
    e.preventDefault();

    let underAgeMessage = document.getElementById("underAge");
    underAgeMessage.setAttribute("class", "hidden");
    let ofAgeMessage = document.getElementById("ofAge");
    ofAgeMessage = setAttribute("class", "hidden");

    let age = parseInt(document.querySelector("input#age").value);

    if(age >=18){
      ofAgeMessage.removeAttribute("class");
    }
    else{
      underAgeMessage.removeAttribute("class")
    }
  }
}