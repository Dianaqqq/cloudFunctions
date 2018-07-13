"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const firstFunction_1 = require("./firstFunction");
const getProjects_1 = require("./dprojects/getProjects");
// import {Request, Response} from "express";
const getProjectById_1 = require("./dprojects/getProjectById");
const getStoriesByProject_1 = require("./dprojects/getStoriesByProject");
const changeStoriesStatus_1 = require("./dprojects/changeStoriesStatus");
const deleteStories_1 = require("./dprojects/deleteStories");
const getStories_1 = require("./dstories/getStories");
const getStoryById_1 = require("./dstories/getStoryById");
const getTasksByStory_1 = require("./dstories/getTasksByStory");
const AddUserD_1 = require("./AddUserD");
const SendMessageD_1 = require("./SendMessageD");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.first = functions.https.onRequest(firstFunction_1.default);
exports.getProjects = functions.https.onRequest(getProjects_1.default);
exports.projectById = functions.https.onRequest(getProjectById_1.default);
exports.storiesByProject = functions.https.onRequest(getStoriesByProject_1.default);
exports.changeStatus = functions.https.onRequest(changeStoriesStatus_1.default);
exports.deleteStories = functions.https.onRequest(deleteStories_1.default);
exports.getStories = functions.https.onRequest(getStories_1.default);
exports.storyById = functions.https.onRequest(getStoryById_1.default);
exports.tasksByStory = functions.https.onRequest(getTasksByStory_1.default);
exports.AddUserD = functions.https.onRequest(AddUserD_1.default);
// exports.AddUserD = functions.pubsub.topic('SendMessage').onPublish((message) => {
//     console.log('Salut');
// });
exports.SendMessageD = functions.pubsub.topic('SendMessage').onPublish(SendMessageD_1.default);
//# sourceMappingURL=index.js.map