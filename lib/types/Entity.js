"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Entity {
    constructor(id, title) {
        this._title = title;
        this._id = id;
        this._creationDate = new Date();
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get getCreationDate() {
        return this._creationDate;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map