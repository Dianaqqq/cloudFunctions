"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Initialize_1 = require("../initialize/Initialize");
// import {Project} from "../types";
exports.default = (req, res) => {
    const projectId = req.body.projectId;
    const projectt = Initialize_1.Initialize.initializeProjects().filter(project => project.id === projectId)[0];
    console.log(projectt);
    res.json(projectt);
};
//# sourceMappingURL=getProjectById.js.map