function setup() {
    var buttons = document.getElementsByClassName("remove");

    for(var i=0;i<buttons.length;i++){
        document.getElementsByClassName("remove")[i].addEventListener("click", function(){
            this.parentElement.remove();
            }
        )
    }
  }
  
  // Example case. 
  document.body.innerHTML = `
  <div class="image">
    <img src="https://goo.gl/kjzfbE" alt="First">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="https://goo.gl/d2JncW" alt="Second">
    <button class="remove">X</button>
  </div>`;
  
  setup();
  
//   document.getElementsByClassName("remove")[0].click();
  console.log(document.body.innerHTML);