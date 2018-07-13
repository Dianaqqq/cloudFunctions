import { Request, Response} from "express";
import {Initialize} from "../initialize/Initialize";
import {Project, Story, Task} from "../types";

export default (req: Request, res: Response) => {

    const projectId = req.body.projectId;
    const storyId = req.body.storyId;
    const finished = req.body.finished;


    const project = Initialize.initializeProjects().filter(p => p.id === projectId)[0];
    const story = project.stories.filter(s => s.id === storyId)[0];

    const stories = project.stories;

    const tasks: Task[] = story.tasks;

    tasks.forEach(t => t.finished = finished);

    console.log(story);
    res.json(story);

}