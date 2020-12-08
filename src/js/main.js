let hamburderDIV = document.querySelector(`.menu-toggle`)
let expanedDIV = document.querySelector(`.expanded`)
let expandedStyles = window.getComputedStyle(expandedDIV)

console.log(`yo`)

hamburgerDIV.addEventListener(`click`, function(){
    if(expandedStyles.getPropertyValue(`display`) === `none`) {expandedDIV.style.display = `flex`}
    else expandedDIV.style.display = `none`
})