// QUESTION 4
// From the above two files, we need to get the symptom name from the symptoms.json for each
// goal.
// Write a function to get the value of symptom for each goal in goals.json from symptoms.json

const goals = require("./goals.json");
const symptoms = require("./symtoms.json");

function solution(goal)
 {
    const goalData = goals[goal]
    
    console.log("Before",goalData);
    console.log("");
    goalData["symptoms"] = goalData["symptoms"].map(data => symptoms[data])
    return goalData
}

console.log("After",solution('yoga'))