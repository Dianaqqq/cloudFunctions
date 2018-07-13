import * as functions from 'firebase-functions';
import firstFunction from "./firstFunction";
import dGetProjects from './dprojects/getProjects';
// import {Request, Response} from "express";
import getProjectById from "./dprojects/getProjectById";
import getStoriesByProject from "./dprojects/getStoriesByProject";
import changeStoriesStatus from "./dprojects/changeStoriesStatus";
import deleteStories from "./dprojects/deleteStories";
import getStories from "./dstories/getStories";
import getStoryById from "./dstories/getStoryById";
import getTasksByStory from "./dstories/getTasksByStory";
import AddUserD from "./AddUserD";
import SendMessageD from "./SendMessageD";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.first = functions.https.onRequest(firstFunction);


exports.getProjects = functions.https.onRequest(dGetProjects);

exports.projectById = functions.https.onRequest(getProjectById);

exports.storiesByProject = functions.https.onRequest(getStoriesByProject);

exports.changeStatus = functions.https.onRequest(changeStoriesStatus);

exports.deleteStories = functions.https.onRequest(deleteStories);

exports.getStories = functions.https.onRequest(getStories);

exports.storyById = functions.https.onRequest(getStoryById);

exports.tasksByStory = functions.https.onRequest(getTasksByStory);

exports.AddUserD = functions.https.onRequest(AddUserD);

// exports.AddUserD = functions.pubsub.topic('SendMessage').onPublish((message) => {
//     console.log('Salut');
// });

exports.SendMessageD = functions.pubsub.topic('SendMessage').onPublish(SendMessageD);
