"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
class Story extends Entity_1.Entity {
    constructor(id, title, finished, responsible, tasks) {
        super(id, title);
        this._finished = finished;
        this._responsible = responsible;
        this._tasks = tasks;
    }
    isFinished() {
        if (this._finished == true) {
            return true;
        }
        else
            return false;
    }
    get tasks() {
        return this._tasks;
    }
    set finished(finished) {
        this._finished = finished;
    }
    get responsible() {
        return this._responsible;
    }
    set responsible(responsible) {
        this._responsible = responsible;
    }
    removeTask(task) {
        let index = this._tasks.indexOf(task);
        this._tasks.splice(index, 1);
    }
}
exports.Story = Story;
//# sourceMappingURL=Story.js.map