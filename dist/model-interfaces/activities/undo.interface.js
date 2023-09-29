"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsUndo = void 0;
const ActivityIsUndo = (activity) => {
    return activity.type == "Undo";
};
exports.ActivityIsUndo = ActivityIsUndo;
