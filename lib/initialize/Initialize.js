"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromTypes = require("../types/index");
class Initialize {
    static initializeTasks() {
        const tasks = [new fromTypes.Task(1, "First Task", false, 2),
            new fromTypes.Task(2, "Second Task", true, 3),
            new fromTypes.Task(3, "Third Task", false, 4)];
        return tasks;
    }
    static initializeStories() {
        const stories = [new fromTypes.Story(4, "4th Task", true, "yes", this.initializeTasks()),
            new fromTypes.Story(5, "5th Task", false, "no", this.initializeTasks())];
        return stories;
    }
    static initializeProjects() {
        const projects = [new fromTypes.Project(6, "6th Task", true, this.initializeStories()),
            new fromTypes.Project(7, "7th Task", false, this.initializeStories())
        ];
        return projects;
    }
    static initializeEntities() {
        const entities = [new fromTypes.Entity(8, "8th Task"),
            new fromTypes.Entity(9, "9th Task")];
        return entities;
    }
}
exports.Initialize = Initialize;
//# sourceMappingURL=Initialize.js.map