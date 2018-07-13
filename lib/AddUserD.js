"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {Message} from "firebase-functions/lib/providers/pubsub";
// import {event} from "firebase-functions/lib/providers/analytics";
// import SendMessageD from "./SendMessageD";
// import {Initialize} from "../initialize/Initialize";
const PubSub = require("@google-cloud/pubsub");
exports.default = (req, res) => __awaiter(this, void 0, void 0, function* () {
    // console.log('Request Body', req.body);
    // const name = req.body.name;
    // const age = req.body.age;
    // const locationName = req.body.location.name;
    // const locationId = req.body.location.id;
    const user = {
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
    yield PubSub()
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
    return res.json(user);
});
//# sourceMappingURL=AddUserD.js.map