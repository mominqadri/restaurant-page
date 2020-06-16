import logo from './images/logo.png'

function loadPage(){

    let content = document.querySelector('#content')

    let heading  = document.createElement('h1')
    heading.textContent = "Sam's Steak and Grill"

    content.appendChild(heading)

    const img = document.createElement('img')
    img.src = logo
    content.appendChild(img)

}

export default loadPage