var popup=document.querySelector(".popup"),popupError=document.querySelector(".popup--error"),openPopupButton=document.querySelector(".feedback-form__btn"),closePopupButton=popup.querySelector(".popup__btn");openPopupButton.addEventListener("click",function(o){o.preventDefault(),popup.classList.add("popup--show")}),closePopupButton.addEventListener("click",function(){popup.classList.remove("popup--show"),popupError.classList.remove("popup--show")});