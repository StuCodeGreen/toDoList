var li = document.querySelectorAll("li");


function click (){
  for(i=0; i < li.length; i++){
    li[i].addEventListener("click",function(){
// using css class to toggle done/undone

      this.classList.toggle("completed")

// using javascript to toggle done/undone

      // if(this.style.color === "red"){
      //   this.style.color = "black"
      //   this.style.textDecoration = "none";
      // }
      // else {
      //   this.style.color = "red";
      //   this.style.textDecoration = "line-through";
      //
      // }

    });
  }
}
click();
