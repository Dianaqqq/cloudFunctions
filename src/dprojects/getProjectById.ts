import { Request, Response} from "express";
import {Initialize} from "../initialize/Initialize";
// import {Project} from "../types";

export default (req: Request, res: Response) => {

    const projectId = req.body.projectId;
    const projectt = Initialize.initializeProjects().filter(project => project.id === projectId)[0];

    console.log(projectt);
    res.json(projectt);
}