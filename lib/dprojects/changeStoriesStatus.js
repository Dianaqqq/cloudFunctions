"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Initialize_1 = require("../initialize/Initialize");
exports.default = (req, res) => {
    const projectId = req.body.projectId;
    const storyId = req.body.storyId;
    const finished = req.body.finished;
    const project = Initialize_1.Initialize.initializeProjects().filter(p => p.id === projectId)[0];
    const story = project.stories.filter(s => s.id === storyId)[0];
    const stories = project.stories;
    const tasks = story.tasks;
    tasks.forEach(t => t.finished = finished);
    console.log(story);
    res.json(story);
};
//# sourceMappingURL=changeStoriesStatus.js.map