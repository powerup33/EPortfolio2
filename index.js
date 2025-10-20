// template_n1lk7va
// service_szzzk5d
// a0bRTsqcV4zb6R0LA

/*
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "a0bRTsqcV4zb6R0LA",
      });
   })();
</script>
*/

// function contact (event) {
//     event.preventDefault();
//     // emailjs
//     //     .sendForm(
//     //         'service_szzzk5d',
//     //         'template_n1lk7va',
//     //         event.target,
//     //         'a0bRTsqcV4zb6R0LA'

//         // ).then(() => {
//         //     console.log ('this worked')
//         // })
//     const loading = document.querySelector(".modal__overlay--loading");
//     const success= document.querySelector(".modal__overlay--success");
//     loading.classList += " modal__overlay--visible"
//     setTimeout (() => {
//         console.log ('it worked')
//     }, 500);

// }

function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  // Show spinner
  loading.classList.add("modal__overlay--visible");

  // Simulate send delay
  setTimeout(() => {
    console.log("it worked");

    // Hide spinner, show success message
    loading.classList.remove("modal__overlay--visible");
    success.classList.add("modal__overlay--visible");
  }, 1500);
}