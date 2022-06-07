//Apply class one-third to figures

function addOneThird() {
    figures = document.getElementsByTagName("figure");
    for (var i = 0 ; i < figures.length; i++) {
        figures[i].classList.add('one-third');
    }
}

window.addEventListener('load' , addOneThird );


//Remove the footer

footerElement = document.getElementsByTagName("footer")[0];
footerElement.addEventListener('click' , function() {
    footerElement.remove();
} );


//Hide figure 5

figure5 = document.getElementsByTagName("figure")[4];
figure5.addEventListener('dblclick' , function() {
    figure5.style.visibility = "hidden"; 
} );


//cursive on mouseover and restore

figCap1 = document.getElementsByTagName("figcaption")[0];
tagColor = window.getComputedStyle(figCap1, null).getPropertyValue("font-family");


figCap1.addEventListener('mouseover' , function() {
    figCap1.style.fontFamily = "cursive";
} );

figCap1.addEventListener('mouseout' , function() {
    figCap1.style.fontFamily = tagColor;
} );


//cursive on tab focus and restore

figCap1.setAttribute("tabindex", "1")

figCap1.addEventListener('focus', function() {
    figCap1.style.fontFamily = "cursive";
    });
    
figCap1.addEventListener('blur', function() {
    figCap1.style.fontFamily = tagColor;
    });    




