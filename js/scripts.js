window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (e) {
    e.preventDefault();

    let underAgeMessage = document.getElementById("underAge");
    underAgeMessage.setAttribute("class", "hidden");
    let ofAgeMessage = document.getElementById("ofAge");
    ofAgeMessage.setAttribute("class", "hidden");

    let age = parseInt(document.querySelector("input#age").value);

    if (age >= 18) {
      ofAgeMessage.removeAttribute("class");
    }
    else {
      underAgeMessage.removeAttribute("class")
    }
  }
  let likesCats = document.getElementById("cat-button");
  likesCats.setAttribute("class", "hidden");
  let likesDogs = document.getElementById("dog-button");
  likesDogs.setAttribute("class", "hidden");
  let likesSticks = document.getElementById("likes-sticks");
  likesSticks.setAttribute("class", "hidden")
  let dislikesSticks = document.getElementById("dislikes-sticks");
  dislikesSticks.setAttribute("class", "hidden")
  let chewieSnape = document.getElementById("chewie");
  chewieSnape.setAttribute("class","hidden")
  let jointP = document.getElementById("joint");
  jointP.setAttribute("class","hidden")
  let arrowR = document.getElementById("row");
  arrowR.setAttribute("class","hidden")
  let indyD = document.getElementById("Indy");
  indyD.setAttribute("class","hidden")
  
  if (age >= 18 && likesCats && likesSticks) {
    indyD.removeAttribute("hidden");

  } else if 
  (age >= 18 && likesCats && dislikesSticks) {
      arrowR.removeAttribute("hidden"); 
    
  } else if 
    (age >= 18 && likesDogs && likesSticks) {
      chewieSnape.removeAttribute("hidden");

  } else 
    (age >= 18 && likesDogs && dislikesSticks)
      jointP.removeAttribute("hidden");
    
};


//if => 18 && like cats result = indy and row



//if => 18 && like dogs result = chewie and joint

//if like cats && like sticks = indy and row
//if like dogs && like sticks = chewie and joint