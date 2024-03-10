const buttons = document.querySelectorAll(".button");
let user_choice;
let user_score = 0;
let comp_choice;
let comp_score = 0;
document.querySelector("#user-score").innerText = user_score;
document.querySelector("#comp-score").innerText = comp_score;

document.querySelector(".comp-img").innerHTML = "<img src='assets/default.png'>";

function comp_display(){
    let a = Math.floor(1 + 3*Math.random());
    if (a == 1){
        comp_choice = "Rock";
    }else if (a == 2){
        comp_choice = "Paper";
    }else{
        comp_choice = "Scissors";
    }
    document.querySelector(".comp-img").innerHTML = `<img src='assets/${comp_choice}.png'>`;
    document.querySelector(".comp-text").innerText = `${comp_choice}`;
}

function handleButtonClick(event) {
  comp_display();
  user_choice = event.target.innerText;
  document.querySelector(".user-img").innerHTML = `<img src='assets/${user_choice}.png'>`;
  win(user_choice, comp_choice);
}

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

function win(a, b){
    if (a == b){
        return
    }else if ((a == "Rock" && b == "Scissors") || (a == "Scissors" && b == "Paper") || (a == "Paper" && b == "Rock")){
        user_score++;
        document.querySelector("#user-score").innerText = user_score;
    }else{
        comp_score++;
        document.querySelector("#comp-score").innerText = comp_score;
    }
}

function reset(){
    if(user_score > comp_score){
        alert("You have won!!");
    }else if(user_score < comp_score){
        alert("You have lost!!");
    }else{
        alert("It's a draw!!")
    }
    location.reload();
}
