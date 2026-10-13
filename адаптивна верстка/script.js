function updateStyle(){
    const title= document.getElementById("main-title");
    const screenWidth = window.innerWidth;

    if (screenWidth<=768){
        title.textContent = "Mobile";
        title.style.color = "beige";
        document.body.style.backgroundColor = "beige";
    }else if (screenWidth <= 1024) {
        title.textContent = "Tablet";
        title.style.color = "white";
        document.body.style.backgroundColor = "lightblue"
    }else{
        title.textContent = "Desktop";
        title.style.color = "pink";
        document.body.style.backgroundColor = "pink";
    } 
}

updateStyle();
window.onresize = updateStyle;
