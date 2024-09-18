//  console.log("Hello!");

document.getElementById('btn-login')
    .addEventListener('click', (event) => {
        event.preventDefault();                   // prevent reloading the page
        // console.log("Login button clicked!");

        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);

        const pinNumber = document.getElementById('pin-number').value;
        console.log(pinNumber);

        // temporary uses
        if(phoneNumber !== '' && pinNumber !== '')
        {
            console.log("You are logged in");
            window.location.href = '/home.html';
        }
        else
        {
            alert("Please enter your Phone & Pin number!");
        }
    })