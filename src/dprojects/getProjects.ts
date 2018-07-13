import { Request, Response} from "express";
import {Initialize} from "../initialize/Initialize";

export default (req: Request, res: Response) => {
    // console.log('Request Body', req.body);

    const response = Initialize.initializeProjects();

    return res.json(response);


}