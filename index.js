// template_n1lk7va
// service_szzzk5d
// a0bRTsqcV4zb6R0LA

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY *scaleFactor;
    
    for(let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !==0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate( ${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
  // Flip the contrastToggle variable between true and false each time the function runs
  contrastToggle = !contrastToggle;

  // If true → add dark mode class
  if (contrastToggle) {
    document.body.classList.add("dark-theme");
  }
  // If false → remove dark mode class
  else {
    document.body.classList.remove("dark-theme");
  }
}


function contact (event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success= document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_szzzk5d',
            'template_n1lk7va',
            event.target,
            'a0bRTsqcV4zb6R0LA'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
                
            "The email service is temorarily unavailable. Please contact me directly."
        );
    })
}  

function toggleModal() {
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

