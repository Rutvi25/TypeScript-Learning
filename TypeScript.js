console.log("Hello TypeScript!");
// variable types
var a = 18;
console.log(a); //>>>18
//let a = "Rutvi" 
// It will show an error. Block scoped variables can't be declared 
//again with different datatype.
var b = true;
var c = "Rutvi";
var d = 100;
// variable with type "any"
var x;
x = 100;
console.log(">>> Any Type variable: x=", x, typeof x);
x = "Rutvi";
console.log(">>> Any Type variable: x=", x, typeof x);
// Enum
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["Hindi"] = 1] = "Hindi";
    LanguagesKnown[LanguagesKnown["Tamil"] = 2] = "Tamil";
})(LanguagesKnown || (LanguagesKnown = {}));
// Arrays
var students = {
    Name: "Rutvi Patel",
    Age: 21,
    Phone: 1234567890,
    Language: LanguagesKnown[LanguagesKnown.English]
};
var studentlist = [
    { Name: "John", Age: 20, Phone: 1023456789, Language: LanguagesKnown[LanguagesKnown.Hindi] },
    { Name: "Mark", Age: 22, Phone: 1203456789, Language: LanguagesKnown[LanguagesKnown.Tamil] }
];
studentlist.push(students);
for (var index = 0; index < studentlist.length; index++) {
    var element = studentlist[index];
    console.log("Age: " + element.Age + " with Name " + element.Name + " has Phone: " + element.Phone + " knows language " + element.Language);
}
//# sourceMappingURL=TypeScript.js.map