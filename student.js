"use strict";
class Students {
    constructor(lName, fName) {
        this._lName = lName;
        this._fName = fName;
    }
    GetFullName() {
        return this._lName + "..." + this._fName;
    }
}
module.exports = Students;
//# sourceMappingURL=student.js.map