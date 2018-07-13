"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Initialize_1 = require("../initialize/Initialize");
// import {Project} from "../types";
exports.default = (req, res) => {
    const storyId = req.body.storyId;
    const story = Initialize_1.Initialize.initializeStories().filter(s => s.id === storyId)[0];
    const tasks = story.tasks;
    console.log(tasks);
    res.json(tasks);
};
// const router: Router = Router();
//
// router.get('/', (req: Request, res: Response) => {
//     // const reqq = new Request('https://api.darksky.net/forecast/d5c6a119a01d422c9dd66275fe455184/42.3601,-71.0589');
//
//     let temperature: number = 0;
//     let timezone: string = '';
//
//     request('https://api.darksky.net/forecast/d5c6a119a01d422c9dd66275fe455184/42.3601,-71.0589', function (err: any, resp: any, body: any) {
//         console.log(body);
//         console.log(JSON.parse(body));
//         let bodyJson = JSON.parse(body);
//
//         temperature = bodyJson.currently.temperature;
//         timezone = bodyJson.timezone;
//
//         res.json(`'temperature: '${temperature}, 'timezone: ' ${timezone}`);
//     });
//
//
//     // res.json(" ");
//
// });
//# sourceMappingURL=getTasksByStory.js.map