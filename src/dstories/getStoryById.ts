import { Request, Response} from "express";
import {Initialize} from "../initialize/Initialize";
// import {Project} from "../types";

export default (req: Request, res: Response) => {

    const storyId = req.body.storyId;
    const story = Initialize.initializeStories().filter(s => s.id === storyId)[0];

    console.log(story);
    res.json(story);
}