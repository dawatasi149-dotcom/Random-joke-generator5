const joke = document.getElementById("meme");
const button = document.getElementById("button");
button.addEventListener("click", () => {
  
    const getUsers = async()=> {
        let response = await fetch(" https://official-joke-api.appspot.com/random_joke");
        let data = await response.json();
 joke.innerHTML=data.setup + "<br>" + data.punchline;
}

getUsers();
});
