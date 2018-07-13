"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
class Project extends Entity_1.Entity {
    constructor(id, title, archived, stories) {
        super(id, title);
        this._archived = archived;
        this._stories = stories;
    }
    isArchived() {
        if (this._archived == true) {
            return true;
        }
        else
            return false;
    }
    set archived(archived) {
        this._archived = archived;
    }
    addStory(story) {
        this._stories.push(story);
    }
    get stories() {
        return this._stories;
    }
    removeStory(story) {
        //remove from Array from Story
        let index = this._stories.indexOf(story);
        this._stories.splice(index, 1);
    }
}
exports.Project = Project;
//# sourceMappingURL=Project.js.map