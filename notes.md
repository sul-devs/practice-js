const list = document.querySelector("#list");
const url = "https://cat-fact.herokuapp.com/facts";
const data = fetch(url);
console.log(data);