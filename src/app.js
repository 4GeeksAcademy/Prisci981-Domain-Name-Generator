// Arrays of words
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

// Grab the <ul> element from HTML
let domainList = document.getElementById("domain-list");

// Generate all combinations
for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let e of extensions) {
        let domain = p + a + n + e;

        // Create list item
        let li = document.createElement("li");
        li.textContent = domain;
        domainList.appendChild(li);
      }
    }
  }
}
