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

// Solution using FX function from http://jsfiddle.net/LzX4s/ and referencing code from  Tarun Kumar Jain.
document.querySelector("ul").addEventListener("click", function(event){
	if(event.target.tagName.toLowerCase() === "span"){
		FX.fadeOut(event.target.parentNode,{
			duration: 500,
			complete: function(){event.target.parentNode.parentNode.removeChild(event.target.parentNode);}
		});
	}else if(event.target.tagName.toLowerCase() === "i"){
		FX.fadeOut(event.target.parentNode.parentNode,{
			duration: 500,
			complete: function(){event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);}
		});
	}else{
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




// for(i=0; i<deleteButton.length;i++) {
//   deleteButton[i].addEventListener("click",function(event){
//       this.parentNode.classList.toggle("fade")
//
//
//       event.stopPropagation();
//       setTimeout(5000),this.parentNode.remove()
//   })
// }


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
