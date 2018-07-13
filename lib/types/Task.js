"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
class Task extends Entity_1.Entity {
    constructor(id, title, finished, priority) {
        super(id, title);
        this._finished = finished;
        this._priority = priority;
    }
    isFinished() {
        if (this._finished == true) {
            return true;
        }
        else
            return false;
    }
    set finished(finished) {
        this._finished = finished;
    }
    get priority() {
        return this._priority;
    }
    set priority(priority) {
        this._priority = priority;
    }
}
exports.Task = Task;
//# sourceMappingURL=Task.js.map