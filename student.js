"use strict";
exports.__esModule = true;
var Students = /** @class */ (function () {
    function Students(lName, fName) {
        this._lName = lName;
        this._fName = fName;
    }
    Students.prototype.GetFullName = function () {
        return this._lName + "..." + this._fName;
    };
    return Students;
}());
exports["default"] = Students;
// export {Students as Student} //alias
//# sourceMappingURL=student.js.map