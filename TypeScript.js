"use strict";
exports.__esModule = true;
var student_1 = require("./student");
console.log("Hello TypeScript!");
// variable types
var a = 18;
console.log(a);
//>>>18
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
// >>> Any Type variable: x= 100 number
x = "Rutvi";
console.log(">>> Any Type variable: x=", x, typeof x);
// >>> Any Type variable: x= Rutvi string
// If number is starting with 0 in typescript, then it will consider that number as an octal number,
// except the immediate number after 0 is 8 or 9.
// let y = 02.34 // this will also show an error because octal numbers must be integer.
var y = "02.34";
var z = parseFloat(y);
console.log(">>> parse the string as a float", z);
//>>> parse the string as a float 2.34
// Enum
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["Hindi"] = 1] = "Hindi";
    LanguagesKnown[LanguagesKnown["Tamil"] = 2] = "Tamil";
})(LanguagesKnown || (LanguagesKnown = {}));
// Arrays
// declaring student
var students = {
    Name: "Rutvi",
    Age: 21,
    Phone: 1234567890,
    Language: LanguagesKnown[LanguagesKnown.English]
};
//List of students
var studentlist = [
    {
        Name: "John",
        Age: 20,
        Phone: 1023456798,
        Language: LanguagesKnown[LanguagesKnown.Hindi]
    },
    {
        Name: "Mark",
        Age: 22,
        Phone: 1203456789,
        Language: LanguagesKnown[LanguagesKnown.Tamil]
    },
];
var studentlistG = [
    {
        Name: "John",
        Age: 20,
        Phone: 1023456798,
        Language: LanguagesKnown[LanguagesKnown.Hindi]
    },
    {
        Name: "Mark",
        Age: 22,
        Phone: 1203456789,
        Language: LanguagesKnown[LanguagesKnown.Tamil]
    },
];
studentlist.push(students);
for (var index = 0; index < studentlist.length; index++) {
    var element = studentlist[index];
    console.log("Age: " +
        element.Age +
        " with Name " +
        element.Name +
        " has Phone: " +
        element.Phone +
        " knows language " +
        element.Language);
}
/*
  Age: 20 with Name John has Phone: 1023456798 knows language Hindi
  Age: 22 with Name Mark has Phone: 1203456789 knows language Tamil
  Age: 21 with Name Rutvi has Phone: 1234567890 knows language English
*/
// Array Objects
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(">>> Array object", arr_names[i]);
}
// Multi-dimensional array
var multiDimensional = [
    [1, 2, 3],
    [23, 24, 25],
];
console.log(multiDimensional[0][0]); // 1
console.log(multiDimensional[0][1]); // 2
// Passing Arrays to Functions
var names = new Array("Mary", "Tom", "Jack", "Jill");
function display(arr_names) {
    for (var i = 0; i < arr_names.length; i++) {
        console.log(">>> Passing arrays to function", names[i]);
    }
}
display(names);
// Function returning an array
function disp() {
    return new Array("Mary", "Tom", "Jack", "Jill");
}
var nums = disp();
console.log(nums);
// Functions
// function declaration
function GetStudentsList(students) {
    students.forEach(function (element) {
        console.log("Age: " +
            element.Age +
            " with Name " +
            element.Name +
            " has Phone: " +
            element.Phone +
            " knows language " +
            element.Language);
    });
}
GetStudentsList(studentlist);
//Rest Parameter
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Number: " + element);
    });
}
GetNumbers(1, 2, 3, 4);
// Default Parameter
function GetInfo(info) {
    if (info === void 0) { info = "Happy"; }
    console.log(info);
}
GetInfo("Very Happy ");
// Anonymous Function
var StudentName = function (lName, fName) {
    return fName + "..." + lName;
};
console.log(">>> Anonymous Functions ", StudentName("Patel", "Rutvi"));
// Arrow Function
var StudentFullName = function (lName, fName) {
    return fName + "..." + lName;
};
console.log(StudentFullName("Patel", "Rutvi"));
// Class
var s = new student_1.Student("Patel", "Rutvi");
console.log(">>>classes:", s.GetFullName());
// Generics
function GetStudentsListGenerics(students) {
    students.forEach(function (element) {
        console.log(">>> Generics: " + "Age: " +
            element.Age +
            " with Name " +
            element.Name +
            " has Phone: " +
            element.Phone +
            " knows language " +
            element.Language);
    });
}
GetStudentsListGenerics(studentlistG);
//# sourceMappingURL=TypeScript.js.map