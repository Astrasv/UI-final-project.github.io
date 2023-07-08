const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function formatText(input, splitperc) {
    // Trim the input text
    const trimmedInput = input.trim();
  
    // Split the input into an array of words
    const words = trimmedInput.split(" ");
  
    // Loop through each word and format the first few percentage of each letter in bold
    const formattedWords = words.map(word => {
      const splitWord = word.split("");
      const splitIndex = Math.ceil(splitWord.length * (splitperc / 100));
      splitWord.splice(splitIndex, 0, "</b></span>");
      splitWord.splice(0, splitIndex, "<span><b>" + splitWord.slice(0, splitIndex).join(""));
      return splitWord.join("");
    });
  
    // Join the formatted words back into a single string
    const output = formattedWords.join(" ");
  
    // Return the formatted output
    return output;
}
  
  


let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.innerHTML = formatText(item.joke,50);
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click",getJoke);
getJoke();