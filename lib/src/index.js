"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const firstFunction_1 = require("./firstFunction");
const getProjects_1 = require("../dprojects/getProjects");
const getProjectById_1 = require("../dprojects/getProjectById");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.first = functions.https.onRequest(firstFunction_1.default);
exports.getProjects = functions.https.onRequest(getProjects_1.default);
exports.projectById = functions.https.onRequest(getProjectById_1.default);
// router.get('/:projectId', (req: Request, res: Response) => {
//     console.log('Path Params ', req.params);
//
//
//     const projectId = parseInt(req.params.projectId);
//
//     const project: Project = Initialize.initializeProjects().filter(project => project.id === projectId)[0];
//
//     console.log(project);
//     res.json(project);
// });
//
//
// router.get('/:projectId/stories', (req: Request, res: Response) => {
//     console.log('Path Params ', req.params);
//
//     const projectId = parseInt(req.params.projectId);
//     const project: Project = Initialize.initializeProjects().filter(project => project.id === projectId)[0];
//
//     const stories = project.stories;
//
//     console.log(stories);
//     res.json(stories);
// });
//
// router.post('/:projectId/stories/:storyId/finished', (req: Request, res: Response) => {
//     console.log('Path Params ', req.params);
//
//     const projectId = parseInt(req.params.projectId);
//     const storyId = parseInt(req.params.storyId);
//     const finished = req.body.finished;
//
//     console.log(req.body.finished);
//     let project: Project;
//     let story: Story;
//     let tasks: Task[];
//     project = utils.findProject(projectId); //proiectul dorit
//     story = utils.findStoryforProject(project, storyId);
//     tasks = story.tasks;
//
//     tasks.forEach(task => {
//         task.finished = finished;
//     });
//
//     //changing story status cf storyId
//     story.finished = finished;
//
//     console.log(tasks);
//     console.log(story);
//
//     res.json(story);
//
//     // console.log(story);
//
// });
//
// router.post('/:projectId/stories/delete', (req: Request, res: Response) => {
//     console.log('Path Params ', req.params);
//
//     const projectId = parseInt(req.params.projectId);
//     const storyId = req.body.storyId;
//
//     console.log(req.body.storyId);
//
//     //delete story by the id from the the project (projectId)
//
//     let project = utils.findProject(projectId);
//
//     let story = utils.findStoryforProject(project, storyId);
//
//     let index = project.stories.indexOf(story);
//     project.stories.splice(index, 1);
//     console.log(project.stories);
//     console.log(project);
//     res.json(project.stories);
// });
//
//
//
//
//
//
// export const ProjectsController = router;
//# sourceMappingURL=index.js.map