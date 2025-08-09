import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
// Domain Name Generator
// This script generates all possible domain combinations from arrays of pronouns, adjectives, and nouns

let pronoun = ['the', 'our', 'my', 'your'];
let adj = ['great', 'big', 'small', 'fast', 'smart'];
let noun = ['jogger', 'racoon', 'developer', 'teacher', 'artist'];
let extensions = ['.com', '.net', '.org', '.io'];

console.log("🌐 Domain Name Generator");
console.log("========================");

// Generate all possible combinations
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            let domain = pronoun[i] + adj[j] + noun[k] + ".com";
            domainList.innerHTML += `<li>${domain}</li>`;
        }
    }
}

console.log("========================");
console.log(`Total domains generated: ${pronoun.length * adj.length * noun.length}`);