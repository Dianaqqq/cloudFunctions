"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Initialize_1 = require("../initialize/Initialize");
exports.default = (req, res) => {
    // console.log('Request Body', req.body);
    const response = Initialize_1.Initialize.initializeStories();
    return res.json(response);
};
//# sourceMappingURL=getStories.js.map