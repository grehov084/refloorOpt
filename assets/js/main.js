let menuToggle, toggleElem, menuContent;
menuToggle = document.querySelector(".site-header-burger");
menuContent = document.querySelector(".site-header-mobile");
toggleElem = document.querySelector(".site-header-burger span");
menuToggle.addEventListener("click", ()=>{
    if(menuContent.classList.contains("on")){
        menuContent.classList.remove("on");
        toggleElem.style.setProperty("--rotateUp", "0");
        toggleElem.style.setProperty("--rotateDown", "0");
        toggleElem.style.setProperty("--top", "-10px");
        toggleElem.children[0].style.display = "block";
    }
    else{
        menuContent.classList.add("on");
        toggleElem.style.setProperty("--rotateUp", "45deg");
        toggleElem.style.setProperty("--rotateDown", "-45deg");
        toggleElem.style.setProperty("--top", "-2px");
        toggleElem.children[0].style.display = "none";
    }
});