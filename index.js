const display = document.getElementById('display');
const buttonEl = document.querySelectorAll('button')
const ballEl = document.querySelector(".ball")
const h6El = document.querySelectorAll(".h6");
const spanEl = document.querySelectorAll(".span");
for(let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener('click',()=>{
        const buttonValue = buttonEl[i].textContent.toLocaleLowerCase()
       if(buttonValue === "reset"){
        clearDisplay()
       }else if(buttonValue ==="del"){
        deleteDigit();
       }
       else if(buttonValue === "="){
        calculateResults()
       }
       else{
        appendValue(buttonValue)
       }
    })
}

const clearDisplay = function(){
    display.value = ""
}

const deleteDigit = function(){
    let tempValue = display.value
    let newValue = tempValue.substring(0, tempValue.length-1)
    display.value = newValue
}

const appendValue = function(value){
    display.value += value
}

const calculateResults = function(){
    try {
        if(display.value.length > 0){
            display.value = eval(display.value)
        }else{
            throw new Error("Empty field")
        }
    } catch (error) {
        console.log(error.message)
    }
}

function toggler() {
    let count = 0; // Initial count
    ballEl.addEventListener("click", () => {
        count++
        if (count === 1) {
            ballEl.classList.add("mx-auto");
            ballEl.classList.remove("float-end"); // Ensure float-end is removed
            theme2()
            // count++;
        } else if (count === 2) {
            ballEl.classList.remove("mx-auto");
            ballEl.classList.add("float-end");
            theme3()
            // count++;
        } else {
            ballEl.classList.remove("mx-auto", "float-end"); // Reset to initial state
            count = 0; // Reset count to allow toggling cycle to restart
            removeMultipleProperties(document.querySelector("body").style, [
                "background-color"
              ]);
              removeMultipleProperties(document.querySelector(`input[type="text"]`).style, [
                "background-color",
                "color",
              ]);
              removeMultipleProperties(document.querySelector(".clear").style, [
                "background-color",
                "box-shadow",
              ]);
              removeMultipleProperties(document.querySelector(".del").style, [
                "background-color",
                "box-shadow",
              ]);
            document.querySelector(".toggler").style.removeProperty("background-color")
            document.querySelector(".buttons").style.removeProperty("background-color")
            h6El[0].classList.remove("text-black");
            h6El[1].classList.remove("text-black");
            buttonEl.forEach((btn)=>{
                removeMultipleProperties(btn.style, [
                    "background-color",
                    "box-shadow",
                    "color"
                  ]);
            })
            spanEl.forEach((span)=>{
                span.style.removeProperty("color")
            })
            h6El[0].classList.remove("text-warning");
            h6El[1].classList.remove("text-warning");
            document.querySelector(".ball").style.removeProperty("background-color");
        }
        console.log(count);
    });
}

function setMultipleProperties(styleObject, properties) {
    Object.keys(properties).forEach(property => {
      styleObject.setProperty(property, properties[property].value, properties[property].priority);
    });
  }
  
  function removeMultipleProperties(styleObject, properties) {
    properties.forEach(property => {
      styleObject.removeProperty(property);
    });
  }

  function theme2(){
    setMultipleProperties(document.querySelector("body").style,{
        "background-color": { value: "hsl(0, 0%, 90%)", priority: "important" }
    })
    
    h6El[0].classList.add("text-black");
    h6El[1].classList.add("text-black");
    setMultipleProperties(document.querySelector(`input[type="text"]`).style,{
        "background-color": { value: "hsl(0, 0%, 93%)", priority: "important" },
        "color": {value: "hsl(60, 10%, 19%)"}
    })
    document.querySelector(".toggler").style.setProperty("background-color", "hsl(0, 5%, 81%)");
    document.querySelector(".buttons").style.setProperty("background-color", "hsl(0, 5%, 81%)");
    document.querySelector(".ball").style.setProperty("background-color", "hsl(25, 98%, 40%)","important");
    setMultipleProperties(document.querySelector(".del").style,{
        "background-color": { value: " hsl(185, 42%, 37%)" },
        "box-shadow": {value: "0 5px hsl(185, 58%, 25%)"}
    })
    setMultipleProperties(document.querySelector(".clear").style,{
        "background-color": { value: " hsl(185, 42%, 37%)" },
        "box-shadow": {value: "0 5px hsl(185, 58%, 25%)"}
    })
    setMultipleProperties(document.querySelector(".equal").style,{
        "background-color": { value: " hsl(25, 98%, 40%)" },
        "box-shadow": {value: "0 5px hsl(25, 99%, 27%)"},
        "color": {value: "hsl(0, 0%, 100%)"}
    })
  }

  function theme3(){
    setMultipleProperties(document.querySelector("body").style,{
        "background-color": { value: " hsl(268, 75%, 9%)", priority: "important" }
    })
    h6El[0].classList.remove("text-black");
    h6El[1].classList.remove("text-black");
    h6El[0].classList.add("text-warning");
    h6El[1].classList.add("text-warning");
    setMultipleProperties(document.querySelector(`input[type="text"]`).style,{
        "background-color": { value: "hsl(268, 71%, 12%)", priority: "important" },
        "color": {value: "hsl(52, 100%, 62%)"}
    })
    document.querySelector(".toggler").style.setProperty("background-color", "hsl(268, 71%, 12%)");
    document.querySelector(".buttons").style.setProperty("background-color", "hsl(268, 71%, 12%)");
    document.querySelector(".ball").style.setProperty("background-color", "hsl(176, 100%, 44%)", "important");
    buttonEl.forEach((btn)=>{
        setMultipleProperties(btn.style,{
            "background-color": { value: "hsl(268, 47%, 21%)", priority: "important" },
            "color": {value: "hsl(52, 100%, 62%)"},
            "box-shadow": {value: "0 5px hsl(290, 70%, 36%)"}
        })
    })
    setMultipleProperties(document.querySelector(".del").style,{
        "background-color": { value: " hsl(281, 89%, 26%)" },
        "box-shadow": {value: "0 5px hsl(285, 91%, 52%)"}
    })
    setMultipleProperties(document.querySelector(".clear").style,{
        "background-color": { value: "hsl(281, 89%, 26%)" },
        "box-shadow": {value: "0 5px hsl(285, 91%, 52%)"}
    })
    setMultipleProperties(document.querySelector(".equal").style,{
        "background-color": { value: "hsl(176, 100%, 44%)" },
        "box-shadow": {value: "0 5px hsl(177, 92%, 70%)"},
        "color": {value: "hsl(268, 47%, 21%)"}
    })
    spanEl.forEach((span)=>{
        span.style.setProperty("color", "hsl(52, 100%, 62%)", "important");
    })
  }

toggler()