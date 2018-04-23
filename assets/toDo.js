var li = document.querySelectorAll("li");
var ul = document.querySelector("ul");
var inp = document.querySelector("input");
var newUl = document.createElement("ul")
// var newLi = document.createElement("li");
var ul = document.querySelector("ul")
var deleteButton = document.querySelectorAll("span");

inp.addEventListener("keypress", (event) => {
  // const keyName = event.key;
  if(event.which === 13 && inp.value != ""){
    //grabbing new todo text from input
    var todoText = inp.value;
    inp.value = "";
    // create new li and add to ul
    var newLi = document.createElement("li");
    newLi.innerHTML = " <span><i class='fas fa-trash-alt' ></i></span> "+todoText;" "
    ul.append(newLi);
  }
})
// without fade out animation
// ul.addEventListener("click",function(event){
//   if(event.target.tagName.toLowerCase() === "span") {
//     // event.stopPropagation();
//     event.target.parentNode.parentNode.removeChild(event.target.parentNode)
//   }
//   else if (event.target.tagName.toLowerCase() === "li"){
//     event.target.classList.toggle("completed")
//   }
// })
// document.querySelector(".fa-plus").addEventListener("click",function(){
//   inp.classList.toggle("inpHide")})

// Solution using FX function from http://jsfiddle.net/LzX4s/ and referencing code from  Tarun Kumar Jain.
ul.addEventListener("click",function(event){

  if(event.target.tagName.toLowerCase() === "span"){
    FX.fadeOut(event.target.parentNode,{
      duration: 300,
      complete: function(){event.target.parentNode.parentNode.removeChild(event.target.parentNode);}
    });
  }
  else if(event.target.tagName.toLowerCase() === "i"){
    FX.fadeOut(event.target.parentNode.parentNode,{
      duration: 300,
      complete: function(){event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);}
    });
  }
  else if (event.target.tagName.toLowerCase() === "li"){
    event.target.classList.toggle("completed");

  }

});



(function() {
  var FX = {
    easing: {
      linear: function(progress) {
        return progress;
      },
      quadratic: function(progress) {
        return Math.pow(progress, 2);
      },
      swing: function(progress) {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      },
      circ: function(progress) {
        return 1 - Math.sin(Math.acos(progress));
      },
      back: function(progress, x) {
        return Math.pow(progress, 2) * ((x + 1) * progress - x);
      },
      bounce: function(progress) {
        for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
          if (progress >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
          }
        }
      },
      elastic: function(progress, x) {
        return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
      }
    },
    animate: function(options) {
      var start = new Date;
      var id = setInterval(function() {
        var timePassed = new Date - start;
        var progress = timePassed / options.duration;
        if (progress > 1) {
          progress = 1;
        }
        options.progress = progress;
        var delta = options.delta(progress);
        options.step(delta);
        if (progress == 1) {
          clearInterval(id);
          options.complete();
        }
      }, options.delay || 10);
    },
    fadeOut: function(element, options) {
      var to = 1;
      this.animate({
        duration: options.duration,
        delta: function(progress) {
          progress = this.progress;
          return FX.easing.swing(progress);
        },
        complete: options.complete,
        step: function(delta) {
          element.style.opacity = to - delta;
        }
      });
    },
    fadeIn: function(element, options) {
      var to = 0;
      this.animate({
        duration: options.duration,
        delta: function(progress) {
          progress = this.progress;
          return FX.easing.swing(progress);
        },
        complete: options.complete,
        step: function(delta) {
          element.style.opacity = to + delta;
        }
      });
    }
  };
  window.FX = FX;
})()


// function click (){
//   for(i=0; i < li.length; i++){
//     ul.addEventListener("click",function(e){
// // using css class to toggle done/undone
// // this function needs if statment to fix bug which caused by ul.addEventListener.
//       e.target.classList.toggle("completed")
//
//     });
//   }
// }
// click();
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
