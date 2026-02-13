console.log("Hey there");

let text = `{"employees":[{"name":"Vanshika","age":"20"}, {"name":"Vaishnavi","age":"50"}]}`

console.log(text);

const obj = JSON.parse(text);

console.log(obj);

const obj2 = JSON.stringify(text);

console.log(obj2);