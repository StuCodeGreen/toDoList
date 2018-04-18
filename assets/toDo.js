var li = document.querySelectorAll("li");
var deleteButton = document.querySelectorAll("span");

function click (){
  for(i=0; i < li.length; i++){
    li[i].addEventListener("click",function(){
// using css class to toggle done/undone
      this.classList.toggle("completed")

    });
  }
}
click();

for(i=0; i<deleteButton.length;i++) {
  deleteButton[i].addEventListener("click",function(event){
    // this.remove();
    this.parentNode.remove(this);
    event.stopPropagation();
    alert("deleted");

  })
}
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
