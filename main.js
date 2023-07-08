const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
let uppass = [];
let inpass = [];

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});


signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
// adding and removing border
function upimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            uppass.splice(uppass.indexOf(element.id), 1);
            // console.log(element.id);
            // console.log(uppass);
        }
        else {
            Image.classList.add('clicked');
            uppass.push(element.id);
            // console.log(element.id);
            // console.log(uppass);
        }
    }
}

function inimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            inpass.splice(inpass.indexOf(element.id), 1);
            // console.log(element.id);
            // console.log(inpass);
        }
        else {
            Image.classList.add('clicked');
            inpass.push(element.id);
            // console.log(element.id);
            // console.log(inpass);
        }
    }
}


//Mobile number validation
function validateMobileNumber(number) {
    // Convert the number to a string
    var numberString = number.toString();
  
    // Check if the number is 10 digits long
    if (numberString!== "" && numberString.length !== 10) {
      return false;
    }
  
    // Check if the number starts with a valid prefix
    var validPrefixes = ['6','7', '8', '9']; // Assuming valid prefixes are 7, 8, and 9
    if (numberString!== "" && validPrefixes.indexOf(numberString.charAt(0)) === -1) {
      return false;
    }
  
    // If all checks pass, the number is considered valid
    return true;
}

function validateEmail(email){
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".com");
    if (atpos<1 || (dotpos-atpos)<2) {
        alert("Email is invalid. Please enter a valid email address.");
        return false;
    }
    return true
}

function validateUsername(username) {
    // Check if the username is at least 4 characters long
    if (username.length < 4) {
      alert("Username should be at least 4 characters long.");
      return false;
    }
  
    // Check if the username contains only alphanumeric characters
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      alert("Username should contain only letters and numbers.");
      return false;
    }
  
    // Check if the username starts with a letter
    if (!/^[a-zA-Z]/.test(username)) {
      alert("Username should start with a letter.");
      return false;
    }
  
    // Check if the username ends with a letter or number
    if (!/[a-zA-Z0-9]$/.test(username)) {
      alert("Username should end with a letter or number.");
      return false;
    }
  
    // Check if the username is not a common reserved word
    const reservedWords = ['admin', 'user', 'root']; // Add more reserved words if needed
    if (reservedWords.includes(username.toLowerCase())) {
      alert("Username cannot be admin, user, or root.");
      return false;
    }
  
    // All validation checks passed, the username is valid
    return true;
  }
  

// element image recognition
function signup() {
    sessionStorage.setItem("upname", document.getElementById('upmail').value);
    sessionStorage.setItem("uppass", uppass);
    var mobileNumber = document.getElementById("phoneno").value;
    var username = document.getElementById("username").value;
    console.log(validateUsername(username))

    if(mobileNumber == "" || username == ""){
        alert("Fill all required fields");
    }
    else if (!validateMobileNumber(mobileNumber)) {
        alert("Invalid mobile number");
    }

    else if (!validateUsername(username)){
       
    }
    else{
        var myText = "Account Created Succesfully";
        alert(myText);
    }
    
}
// image pattern authentication
var v2 = new Boolean(false);
function signin() {
    let str = document.getElementById('inmail').value;
    let array = sessionStorage.getItem("uppass");
    let check1 = array.localeCompare(inpass.toString());
    if ((!str.localeCompare(sessionStorage.getItem("upname"))) && !check1) {
        var myText = "Login is successful";
        alert(myText);
        NewTab();
        
    }
    else{
        var myText = "Login Failed";
        alert(myText);   
        sendMail3();
       

    }
}
 function sendMail3(){
    emailjs.send('service_gc7cjkw','template_m5xtdzv')
    .then(function(res){
        // console.log("Success", res.status);
        alert("Mail sent successfully");
    })
}
function sendMail2(){
    emailjs.send('service_gc7cjkw','template_inglwcm')
    .then(function(res){
        // console.log("Success", res.status);
        alert("Mail sent successfully");
    })
}

function NewTab() {
    window.open(
      "bionicpage/bionic.html", "_blank");
}


  
  
  
  
  
  
  
  