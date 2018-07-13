"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res) => {
    console.log('Request Body', req.body);
    const response = {
        data: {
            name: 'Diana',
        },
        succes: true,
        messaje: 'Succes fist function'
    };
    return res.json(response);
};
//# sourceMappingURL=firstFunction.js.map