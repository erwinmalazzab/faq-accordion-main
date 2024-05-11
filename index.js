function click1(){
  p1.classList.toggle("text-active");
  p2.classList.remove("text-active");
  p3.classList.remove("text-active")
  p4.classList.remove("text-active")
  btn2.setAttribute("src", "./assets/images/icon-plus.svg");
  btn3.setAttribute("src", "./assets/images/icon-plus.svg");
  btn4.setAttribute("src", "./assets/images/icon-plus.svg");
  if (btn1.getAttribute("src").includes("./assets/images/icon-minus.svg")) {
    btn1.setAttribute("src", "./assets/images/icon-plus.svg");
  } else {
    btn1.setAttribute("src", "./assets/images/icon-minus.svg");
  }
  

};
 
function click2(){
  p2.classList.toggle("text-active");
  p1.classList.remove("text-active");
  p3.classList.remove("text-active")
  p4.classList.remove("text-active")
  btn1.setAttribute("src", "./assets/images/icon-plus.svg");
  btn3.setAttribute("src", "./assets/images/icon-plus.svg");
  btn4.setAttribute("src", "./assets/images/icon-plus.svg");
  if (btn2.getAttribute("src").includes("./assets/images/icon-minus.svg")) {
    btn2.setAttribute("src", "./assets/images/icon-plus.svg");
  } else {
    btn2.setAttribute("src", "./assets/images/icon-minus.svg");
  }
};
 
function click3(){
  p3.classList.toggle("text-active");
  p1.classList.remove("text-active");
  p2.classList.remove("text-active")
  p4.classList.remove("text-active")
  btn1.setAttribute("src", "./assets/images/icon-plus.svg");
  btn2.setAttribute("src", "./assets/images/icon-plus.svg");
  btn4.setAttribute("src", "./assets/images/icon-plus.svg");
  if (btn3.getAttribute("src").includes("./assets/images/icon-minus.svg")) {
    btn3.setAttribute("src", "./assets/images/icon-plus.svg");
  } else {
    btn3.setAttribute("src", "./assets/images/icon-minus.svg");
  }
};
 
function click4(){
  p4.classList.toggle("text-active");
  p1.classList.remove("text-active");
  p2.classList.remove("text-active")
  p3.classList.remove("text-active")
  btn1.setAttribute("src", "./assets/images/icon-plus.svg");
  btn2.setAttribute("src", "./assets/images/icon-plus.svg");
  btn3.setAttribute("src", "./assets/images/icon-plus.svg");
  if (btn4.getAttribute("src").includes("./assets/images/icon-minus.svg")) {
    btn4.setAttribute("src", "./assets/images/icon-plus.svg");
  } else {
    btn4.setAttribute("src", "./assets/images/icon-minus.svg");
  }
};
 