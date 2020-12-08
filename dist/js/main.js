let hamburgerDIV = document.querySelector(`.menu-toggle`)
let expandedDIV = document.querySelector(`.expanded`)
let expandedStyles = window.getComputedStyle(expandedDIV)

hamburgerDIV.addEventListener(`click`, function(){
    if(expandedStyles.getPropertyValue(`display`) === `none`) {expandedDIV.style.display = `flex`}
    else expandedDIV.style.display = `none`
})