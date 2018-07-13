"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Initialize_1 = require("../initialize/Initialize");
exports.default = (req, res) => {
    // console.log('Request Body', req.body);
    const response = Initialize_1.Initialize.initializeProjects();
    // const resp = JSON.stringify(response);
    // const respp = JSON.parse(resp);
    console.log("SDVFDVDg");
    return res.json(response);
};
//# sourceMappingURL=dGetProjects.js.map