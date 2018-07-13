import { Request, Response} from "express";

export default (req: Request, res: Response) => {
    console.log('Request Body', req.body);

    const response = {
        data: {
            name: 'Diana',
        },
        succes: true,
        messaje: 'Succes fist function'
    }

    return res.json(response);

}