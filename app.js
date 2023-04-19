let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let doc = [".com", ".es", ".ai", ".ru", ".col"];

let domain = [];

for (valuePro of pronoun) {
  for (valueAdj of adj) {
    for (valueNou of noun) {
      for (valueDoc of doc) {
        domain.push(valuePro + valueAdj + valueNou + valueDoc);
      }
    }
  }
}

console.log(domain);

let theList = document.querySelector("#domains");

domain.forEach((element) => {
  let list = document.createElement("li");

  list.innerText = element;

  theList.appendChild(list);
});
