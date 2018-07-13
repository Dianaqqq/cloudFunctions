import { Request, Response} from "express";
import {Initialize} from "../initialize/Initialize";
// import {Project} from "../types";

export default (req: Request, res: Response) => {

    const projectId = req.body.projectId;
    const project = Initialize.initializeProjects().filter(p => p.id === projectId)[0];

    const stories = project.stories;

    console.log(stories);
    res.json(stories);

}