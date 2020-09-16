const carouselImages = document.querySelector('.carousel-images');
const carouselButtons = document.querySelectorAll('.carousel-btn');
const numberOfImages = document.querySelectorAll('.carousel-images img').length
//to tell us the image we are currently on 
let imageIndex = 1;
//to determine how far left or right we are to scrooll and initially set it to zero (it 
//is the same as the translate css defined )

let translateX = 0;

//then we loop over the carousel buttons

carouselButtons.forEach(button => {
    //to define a click event for each of the buttons
    button.addEventListener('click', event => {
        //to check the event target id
        if (event.target.id === 'previous') {
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += 300
            //300 because we are counting microseconds
            }
        } else {
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 300
            }
        }
        //
        carouselImages.style.transform = `translateX(${translateX}px)`
    });
})

//Passing the API

const loadUsers = async () => {
    await fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
        let carouselImag = ``
        data.map(_data => {
            carouselImag += `<img src="${_data.avatar_url}" width="300px" height="400px">`
        })
        carouselImages.innerHTML = carouselImag
    })
}

loadUsers()