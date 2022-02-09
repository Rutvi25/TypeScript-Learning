import {IStudentInfo} from "./IStudentInfo"
import Student = require("./student")
console.log("Hello TypeScript!");
// variable types
let a = 18;
console.log(a);
//>>>18
//let a = "Rutvi"
// It will show an error. Block scoped variables can't be declared
//again with different datatype.
let b: boolean = true;
let c: string = "Rutvi";
let d: Number = 100;
// variable with type "any"
let x;
x = 100;
console.log(">>> Any Type variable: x=", x, typeof x);
// >>> Any Type variable: x= 100 number
x = "Rutvi";
console.log(">>> Any Type variable: x=", x, typeof x);
// >>> Any Type variable: x= Rutvi string
// If number is starting with 0 in typescript, then it will consider that number as an octal number,
// except the immediate number after 0 is 8 or 9.
// let y = 02.34 // this will also show an error because octal numbers must be integer.
let y = "02.34";
let z = parseFloat(y);
console.log(">>> parse the string as a float", z);
//>>> parse the string as a float 2.34
// Enum
enum LanguagesKnown {
  English,
  Hindi,
  Tamil,
}
// Arrays
// declaring student
let students:IStudentInfo = {
  Name: "Rutvi",
  Age: 21,
  Phone: 1234567890,
  Language: LanguagesKnown[LanguagesKnown.English],
};
//List of students
let studentlist:IStudentInfo[] = [
  {
    Name: "John",
    Age: 20,
    Phone: 1023456798,
    Language: LanguagesKnown[LanguagesKnown.Hindi],
  },
  {
    Name: "Mark",
    Age: 22,
    Phone: 1203456789,
    Language: LanguagesKnown[LanguagesKnown.Tamil],
  },
];
let studentlistG:Array<IStudentInfo> = [
  {
    Name: "John",
    Age: 20,
    Phone: 1023456798,
    Language: LanguagesKnown[LanguagesKnown.Hindi],
  },
  {
    Name: "Mark",
    Age: 22,
    Phone: 1203456789,
    Language: LanguagesKnown[LanguagesKnown.Tamil],
  },
];

studentlist.push(students);
for (let index = 0; index < studentlist.length; index++) {
  let element = studentlist[index];
  console.log(
    "Age: " +
      element.Age +
      " with Name " +
      element.Name +
      " has Phone: " +
      element.Phone +
      " knows language " +
      element.Language
  );
}
/*
  Age: 20 with Name John has Phone: 1023456798 knows language Hindi
  Age: 22 with Name Mark has Phone: 1203456789 knows language Tamil
  Age: 21 with Name Rutvi has Phone: 1234567890 knows language English
*/
// Array Objects
let arr_names: number[] = new Array(4);
for (let i = 0; i < arr_names.length; i++) {
  arr_names[i] = i * 2;
  console.log(">>> Array object", arr_names[i]);
}
// Multi-dimensional array
let multiDimensional: number[][] = [
  [1, 2, 3],
  [23, 24, 25],
];
console.log(multiDimensional[0][0]); // 1
console.log(multiDimensional[0][1]); // 2
// Passing Arrays to Functions
let names: string[] = new Array("Mary", "Tom", "Jack", "Jill");
function display(arrNames: string[]) {
  for (let i = 0; i < arrNames.length; i++) {
    console.log(">>> Passing arrays to function", names[i]);
  }
}
display(names);
// Function returning an array
function disp(): string[] {
  return new Array("Mary", "Tom", "Jack", "Jill");
}
let nums: string[] = disp();
console.log(nums);
// Functions
// function declaration
function GetStudentsList(students: IStudentInfo[]) {
  students.forEach((element) => {
    console.log(
      "Age: " +
        element.Age +
        " with Name " +
        element.Name +
        " has Phone: " +
        element.Phone +
        " knows language " +
        element.Language
    );
  });
}
GetStudentsList(studentlist);
//Rest Parameter
function GetNumbers(...nums: number[]) {
  nums.forEach((element) => {
    console.log("Number: " + element);
  });
}
GetNumbers(1, 2, 3, 4);
// Default Parameter
function GetInfo(info: string = "Happy") {
  console.log(info);
}
GetInfo("Very Happy ");
// Anonymous Function
let StudentName = function (lName: string, fName: string) {
  return fName + "..." + lName;
};
console.log(">>> Anonymous Functions ", StudentName("Patel", "Rutvi"));
// Arrow Function
let StudentFullName = (lName: string, fName: string) => {
  return fName + "..." + lName;
};
console.log(StudentFullName("Patel", "Rutvi"));
// Class

let s = new Student("Patel", "Rutvi");
console.log(">>>classes:", s.GetFullName());
// Generics
function GetStudentsListGenerics(students: Array<IStudentInfo>) {
  students.forEach((element) => {
    console.log(
      ">>> Generics: " + "Age: " +
        element.Age +
        " with Name " +
        element.Name +
        " has Phone: " +
        element.Phone +
        " knows language " +
        element.Language
    );
  });
}
GetStudentsListGenerics(studentlistG)
// tuples
let tuple: [number, string, number] = [
  123,
  "Ahmedabad",
  3800
]
tuple = [0, "India", 2]
console.log(tuple)
// Intersection Types
export interface HasPhoneNumber {
  name: string;
  phone: number;
}
export interface HasEmail {
  name: string;
  email: string;
}
let contactInfo =
  Math.random() > 0.5
    ?{
      name: "John",
      phone: 1234567890
    }
    : {
      name: "John",
      email: "john@gmail.com"
    };
console.log(">>> Intersection: ", contactInfo);
// Union Types
let otherContactInfo: HasEmail & HasPhoneNumber = {
  name: "John",
  email: "john@gmail.com",
  phone: 1234567890
}
console.log(">>> Union: ", otherContactInfo)
// Type Aliases
type StringOrNumber = string | number;
type HasNAme = {name:string}
const alias : StringOrNumber = 25
const alias1 : StringOrNumber = "25"
console.log(">>> Type Aliases", alias)    //25
console.log(">>> Type Aliases", alias1)   //25
// Interface
interface PhoneNumberDict {
  [numberName: string]: undefined | {
    areaCode: number;
    num: number;
  };
}
const phoneDict: PhoneNumberDict = {
  office: {areaCode: 321, num: 123456},
}
console.log(phoneDict.office.areaCode)