function loadPage(){

    let content = document.querySelector('#content')

    let heading  = document.createElement('h1')
    heading.textContent = "Sam's Steak and Grill"

    content.appendChild(heading)

}

export default loadPage