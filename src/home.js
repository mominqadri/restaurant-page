import logoPicture from './images/logo.png'

function home(){

    const content = document.querySelector('#content')

    const details = document.createElement('div')
    details.classList.add('details')

    const detailsHeading = document.createElement('div')
    detailsHeading.classList.add('details-heading')
    const title = document.createElement('h1')
    title.textContent = "Sam's Steak and Grill"

    // tabHome = document.createElement()

    const pic = document.createElement('div')
    const logo = document.createElement('img')
    logo.id = 'logo'
    logo.src = logoPicture
    pic.appendChild(logo)

    const description = document.createElement('p')
    description.textContent = "Rockaway Avenue is now closed for outdoor dining from 4PM-11PM!"

    detailsHeading.appendChild(title)
    detailsHeading.appendChild(logo)
    details.appendChild(detailsHeading)
    details.appendChild(description)
    content.appendChild(details)    

}

export default home

