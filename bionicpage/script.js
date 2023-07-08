//Get input of split percentage from users
var perc = document.getElementById("perc");
var percval = document.getElementById("percval");
percval.innerHTML = perc.value + "%";

// Display the value at each instant of input
perc.oninput = function() {
  percval.innerHTML = this.value + "%" ;
}

function formatText() {
    // Get the input text from the textbox
    const input = document.getElementById("input-text").value.trim();
    var splitperc = perc.value;
    
    // Split the input into an array of words
    const words = input.split(" ");
    
    // Loop through each word and format the first few percentage of each letter in bold
    const formattedWords = words.map(word => {
      const splitWord = word.split("");
      const splitIndex = Math.ceil(splitWord.length * (splitperc/100));
      splitWord.splice(splitIndex, 0, "</b></span>");
      splitWord.splice(0, splitIndex, "<span><b>" + splitWord.slice(0, splitIndex).join(""));
      return splitWord.join("");
    });

    // Join the formatted words back into a single string and display it
    const output = formattedWords.join(" ");
    document.getElementById("output-text").innerHTML = output;
  }



// Apply colors to root variable
function applyColor(){
  var firstbg = document.getElementById("colorpicker1").value;
  var secondbg = document.getElementById("colorpicker2").value;
  var maintext = document.getElementById("colorpicker3").value;
  var biotext = document.getElementById("colorpicker4").value;

  // Chnage root variables
  document.documentElement.style.setProperty('--bg-color', firstbg);
  document.documentElement.style.setProperty('--second-bg-color',secondbg);
  document.documentElement.style.setProperty('--text-color', maintext);
  document.documentElement.style.setProperty('--main-color', biotext); 

}

// Reset color to original pallet
function resetColor(){
  var firstbg = document.getElementById("colorpicker1").defaultValue;
  var secondbg = document.getElementById("colorpicker2").defaultValue;
  var maintext = document.getElementById("colorpicker3").defaultValue;
  var biotext = document.getElementById("colorpicker4").defaultValue;

  // Reset to default value
  document.documentElement.style.setProperty('--bg-color', firstbg);
  document.documentElement.style.setProperty('--second-bg-color',secondbg);
  document.documentElement.style.setProperty('--text-color', maintext);
  document.documentElement.style.setProperty('--main-color', biotext);  

  // Changing color inside color picker
  document.getElementById("colorpicker1").value = firstbg;
  document.getElementById("colorpicker2").value = secondbg;
  document.getElementById("colorpicker3").value = maintext;
  document.getElementById("colorpicker4").value = biotext;
}


/*Navbar active section*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top>=offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');



};