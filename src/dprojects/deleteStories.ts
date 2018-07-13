import { Request, Response} from "express";
import {Initialize} from "../initialize/Initialize";
import {Project, Story, Task} from "../types";

export default (req: Request, res: Response) => {

    const projectId = req.body.projectId;
    const storyId = req.body.storyId;

    const project = Initialize.initializeProjects().filter(p => p.id === projectId)[0];

    const story = project.stories.filter(s => s.id === storyId)[0];

    const stories = project.stories;

    let index = project.stories.indexOf(story);
    project.stories.splice(index, 1);
    console.log(project.stories);
    console.log(project);
    res.json(project.stories);

    console.log(story);
    res.json(story);

}