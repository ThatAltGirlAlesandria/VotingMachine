window.onload = function(){
  const form = document.querySelector("form");
  form.onsubmit = function(e) {
    e.preventDefault();

    let underAgeMessage = document.getElementById("underAge");
    underAgeMessage.setAttribute("class", "hidden");
    let ofAgeMessage = document.getElementById("ofAge");
    ofAgeMessage.setAttribute("class", "hidden");

    let age = parseInt(document.querySelector("input#age").value);

    if(age >=18){
      ofAgeMessage.removeAttribute("class");
    }
    else{
      underAgeMessage.removeAttribute("class")
    }
  }
    let likesCats = document.getElementById("cat-button");
    let likesDogs = document.getElementById("dog-button");
    let likesSticks = document.getElementById("likes-sticks");
    let dislikesSticks = document.getElementById("dislikes-sticks");
    if (age >=18 || likesCats &&  likes-sticks) {
      
  
    }
}

//if => 18 && like cats result = indy and row



//if => 18 && like dogs result = chewie and joint

//if like cats && like sticks = indy and row
//if like dogs && like sticks = chewie and joint