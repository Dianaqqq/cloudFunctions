// import {Message} from "firebase-functions/lib/providers/pubsub";


import {Message} from "firebase-functions/lib/providers/pubsub";
import {EventContext} from "firebase-functions";

export default (message: Message, context?: EventContext) => {
    console.log("salut");
};