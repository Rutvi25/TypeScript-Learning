"use strict";
exports.__esModule = true;
exports.Student = void 0;
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
exports.Student = Students;
//# sourceMappingURL=student.js.map