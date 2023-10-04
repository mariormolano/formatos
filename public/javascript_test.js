
function EleClick(event){
    console.log(event.id)
    const IdElement = event.id+"";
    const NameDiv = IdElement.substring(0,IdElement.length-1) //.substring(0, IdElement.length -1);
    console.log(NameDiv);
    const e1 = document.getElementById(NameDiv + "1");
    const e2 = document.getElementById(NameDiv + "2");
    const e3 = document.getElementById(NameDiv + "3");
    let e1_style = getComputedStyle(e1).display;
    let e2_style = getComputedStyle(e2).display;
    let e3_style = getComputedStyle(e3).display;

    let e1_status = () => {if (e1_style == "none" && e3_style == "none") { return "flex" } else { return "none" }};
    let e2_status = () => {if (e2_style == "none" && e1_style == "none") { return "flex" } else { return "none" }};
    let e3_status = () => {if (e3_style == "none" && e2_style == "none") { return "flex" } else { return "none" }};

    e1.style.display = e2_status();
    e2.style.display = e3_status();
    e3.style.display = e1_status();
}


//d1.addEventListener("click",EleClick)
//d2.addEventListener("click",EleClick)
//d3.addEventListener("click",EleClick)


