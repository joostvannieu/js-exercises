(function () {
    let userInput, computerChoice, userOldInput;
    let numberOfStraightWins = 0;
    let numberOfStraightLoses = 0;
    let numberOfGamesPlayed = 0;
    let userSum = 0;
    let numWins = 0;
    let numLoss = 0;
    let userStates = "";
    let last2States = "";
    let usReverse;
    let last2Reverse;
    let trainingString = "";
    const statesToEnglish = ["rock", "paper", "scissors"];
    const buttons = Array.from(document.getElementsByTagName("button"));

    function createTrainingString() {
        for (let x = 0; x < 50; x++)
            trainingString += Math.floor(Math.random()*3);
        //console.log(trainingString);
        userStates = trainingString;
        last2States = userStates.substr(-2, 2);
    }


    function lookForOccurences() {
        let regEx = new RegExp()
    }



    function getCompChoice() {
        computerChoice = Math.floor(Math.random()*3);
        /* //first attempt at improving winrate of pc above random chance
        if (numberOfGamesPlayed === 0)
            computerChoice = Math.round(0.33 *((Math.floor(Math.random()*3)+Math.floor(Math.random()*3)+Math.floor(Math.random()*3))));
        else if (numberOfStraightLoses > 0){
            if (userOldInput<2)
                computerChoice = Math.round(0.33*((userOldInput + 1) + (Math.round(userSum / numberOfGamesPlayed)) + Math.floor(Math.random()*3)));
            else
                computerChoice = Math.round(0.33*((0) + (Math.round(userSum / numberOfGamesPlayed)) + Math.floor(Math.random()*3)));
        }
        else if (numberOfStraightWins > 0){
            if (userOldInput<2)
                computerChoice = Math.round(0.33*((userOldInput + 1) + (Math.round(userSum / numberOfGamesPlayed)) + Math.floor(Math.random()*3)));
            else
                computerChoice = Math.round(0.25*((userSum / numberOfGamesPlayed) + Math.floor(Math.random()*3)));
        }
        else
            computerChoice = Math.round(0.33 *((userSum / numberOfGamesPlayed) + (userSum / numberOfGamesPlayed) + (Math.floor(Math.random()*3))));
    */
        //second attempt at improving winrate of pc above random chance

        //console.log(userStates.indexOf(last2States), userStates[userStates.indexOf(last2States)+2]);
        //computerChoice = parseInt(userStates[userStates.indexOf(last2States)+2])+1;
        usReverse = userStates.split("").reverse().join("");
        last2Reverse = last2States.split("").reverse().join("");
        computerChoice = parseInt(usReverse[usReverse.indexOf(last2Reverse)-2])+1;
        if (isNaN(computerChoice) || computerChoice === undefined) {computerChoice = Math.floor(Math.random()*3);}
        console.log("pc: ",computerChoice);
        if (computerChoice === 3){computerChoice = 0;}

        if (last2States.charAt(0) === last2States.charAt(1) && numberOfGamesPlayed !== 0){
            //console.log("repeater");
            computerChoice = Math.round(0.33 *(Math.floor(Math.random()*3)+ userOldInput + userOldInput))+1;
            if (computerChoice === 3){computerChoice = 0;}
        }


        console.log(computerChoice , numberOfGamesPlayed);
        return computerChoice;
    }
    function compareResults() {
        getCompChoice();
        //console.log("pc: "+computerChoice);
        if (computerChoice === userInput){
            numberOfStraightWins = 0;
            numberOfStraightLoses = 0;
            document.getElementById("compChoice").innerText = "Computer choice: " + statesToEnglish[computerChoice];
            document.getElementById("result").innerText = "draw";
        }
        else if (computerChoice === userInput+1 || computerChoice === userInput-2) {
            numberOfStraightWins = 0;
            numberOfStraightLoses++;
            numLoss++;
            document.getElementById("compChoice").innerText = "Computer choice: " + statesToEnglish[computerChoice];
            document.getElementById("result").innerText = "computer wins";
        }
        else{
            numberOfStraightWins++;
            numWins++;
            numberOfStraightLoses = 0;
            document.getElementById("compChoice").innerText = "Computer choice: " + statesToEnglish[computerChoice];
            document.getElementById("result").innerText = "you've won " + numberOfStraightWins + " times in a row";
        }
    }
    function doUpkeep() {
        userStates = userStates.concat(userInput);
        //console.log(userStates);
        last2States = userStates.substr(-2, 2);
        //console.log(last2States);
        numberOfGamesPlayed++;
        userSum += userInput;
        document.getElementById("gameInfo").innerText = "games played: " + numberOfGamesPlayed + ", user winrate: " + Math.round(100/numberOfGamesPlayed*numWins) + "%, computer winrate: " + Math.round(100/numberOfGamesPlayed*numLoss) + "%";
    }
//Start game
    createTrainingString();
    for (const button of buttons){
        button.addEventListener("click", function () {
            userOldInput  = userInput;
            userInput = buttons.indexOf(button);
            //console.log("user: "+userInput);
            compareResults();
            doUpkeep();
        })
    }
})();