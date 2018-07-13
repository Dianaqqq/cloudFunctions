import { Request, Response} from "express";
// import {Message} from "firebase-functions/lib/providers/pubsub";
// import {event} from "firebase-functions/lib/providers/analytics";
// import SendMessageD from "./SendMessageD";
// import {Initialize} from "../initialize/Initialize";
import * as PubSub from '@google-cloud/pubsub';

export default async (req: Request, res: Response) => {
    // console.log('Request Body', req.body);

    // const name = req.body.name;
    // const age = req.body.age;
    // const locationName = req.body.location.name;
    // const locationId = req.body.location.id;

    const user: any = {
        name: req.body.name,
        age: req.body.age,
        locationName: req.body.location.name,
        locationId: req.body.location.id
    };
    user.checked = true;

    console.log("da");
    console.log(user);

    const topicName = 'SendMessage';
    const data = JSON.stringify(user);

    const dataBuffer = new Buffer(data);

    await PubSub()
        .topic(topicName)
        .publisher()
        .publish(dataBuffer)
        .then(results => {
            const messageId = results[0];
            console.log(`Message ${messageId} published.`);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });


    return res.json(user)
}