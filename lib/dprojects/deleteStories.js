"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Initialize_1 = require("../initialize/Initialize");
exports.default = (req, res) => {
    const projectId = req.body.projectId;
    const storyId = req.body.storyId;
    const project = Initialize_1.Initialize.initializeProjects().filter(p => p.id === projectId)[0];
    const story = project.stories.filter(s => s.id === storyId)[0];
    const stories = project.stories;
    let index = project.stories.indexOf(story);
    project.stories.splice(index, 1);
    console.log(project.stories);
    console.log(project);
    res.json(project.stories);
    console.log(story);
    res.json(story);
};
//# sourceMappingURL=deleteStories.js.map