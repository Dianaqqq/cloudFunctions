"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Initialize_1 = require("../initialize/Initialize");
// import {Project} from "../types";
exports.default = (req, res) => {
    const projectId = req.body.projectId;
    const project = Initialize_1.Initialize.initializeProjects().filter(p => p.id === projectId)[0];
    const stories = project.stories;
    console.log(stories);
    res.json(stories);
};
//# sourceMappingURL=getStoriesByProject.js.map