const startBtn = document.querySelector(".answer-poll");

const poll = {
    question: "What is your favourite programming language?",
    option: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    
   
    displayResults : function(type){
        // let typeNew = Object.values(type);
        // console.log(typeof(typeNew)); //this returns object!!!!!!
        // if (typeof(typeNew) === "string"){
        //     console.log(`The poll results are: ${typeNew}`);
        // }
        // else if(typeof(typeNew) === "array"){
        //     console.log(`${typeNew}`);
        // }
        // else{
        //     console.log(`There is an error in the program`);
        //     console.log(typeNew);
        // }
        console.log(`Poll results are ${type}`)
    },
  
    registerNewAnswer : function(){
     let go = true;
    const [a,b,c,d] = this.option;
    while(go){
     const userInput = prompt(`${this.question}\n \n ${a} \n ${b} \n ${c}  \n ${d} \n 4:Quit Program  \n  (Write option number)`);
    
    if (userInput in [0,1,2,3,4]){
        let userInputNum = Number(userInput);
       if (userInputNum === 0){
        this.answers[0]++;
        console.log(this.answers);
       }
       else if(userInputNum === 1){
        this.answers[1]++;
        console.log(this.answers);
       }
       else if(userInputNum ===2){
        this.answers[2]++;
        console.log(this.answers);
       }
       else if(userInputNum===3){
        this.answers[3]++;
        console.log(this.answers);
       }
       else if(userInputNum === 4){
        go = false;
        this.displayResults(this.answers);
        // console.log(`The final poll numbers are : ${this.answers}`);
        break;
       }
       
    }
    else{
        alert('Please enter an integer between 0 and 4');
    }
        }
    }
    
    
    
}
startBtn.addEventListener("click",function(){
    return poll.registerNewAnswer();
});








//1. Create a method called 'registerNewAnswer' on the 'poll' object.The method does 
//2 things...
//1.1. Display a prompt window for the user to input the number of 
//the selected option. The prompt should look like this:
//What is your favorite programming language?
//0: Javascript 1: python 2: Rust 3 : C++(write option number)