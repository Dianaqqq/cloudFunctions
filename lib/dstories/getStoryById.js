"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Initialize_1 = require("../initialize/Initialize");
// import {Project} from "../types";
exports.default = (req, res) => {
    const storyId = req.body.storyId;
    const story = Initialize_1.Initialize.initializeStories().filter(s => s.id === storyId)[0];
    console.log(story);
    res.json(story);
};
//# sourceMappingURL=getStoryById.js.map