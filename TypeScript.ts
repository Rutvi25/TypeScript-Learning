console.log("Hello TypeScript!")
// variable types
let a = 18;
console.log(a)  //>>>18
//let a = "Rutvi" 
// It will show an error. Block scoped variables can't be declared 
//again with different datatype.
let b: boolean = true;
let c: string = "Rutvi";
let d: Number = 100
// variable with type "any"
let x;
x = 100;
console.log(">>> Any Type variable: x=", x, typeof x);
x = "Rutvi"
console.log(">>> Any Type variable: x=", x, typeof x);
// Enum
enum LanguagesKnown { English, Hindi, Tamil}
// Arrays
let students = {
  Name: "Rutvi Patel",
  Age: 21,
  Phone: 1234567890,
  Language: LanguagesKnown[LanguagesKnown.English]
}
let studentlist = [
  {Name: "John", Age: 20, Phone: 1023456789, Language: LanguagesKnown[LanguagesKnown.Hindi]},
  {Name: "Mark", Age: 22, Phone: 1203456789, Language: LanguagesKnown[LanguagesKnown.Tamil]}
]
studentlist.push(students);
for (var index = 0; index < studentlist.length; index++) {
  var element = studentlist[index];
  console.log("Age: " + element.Age + " with Name " + element.Name + " has Phone: " + element.Phone + " knows language " + element.Language);
}
