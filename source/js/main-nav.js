var navMain=document.querySelector(".main-nav"),navButton=document.querySelector(".main-nav__button");navMain.classList.remove("main-nav--nojs"),navButton.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))});