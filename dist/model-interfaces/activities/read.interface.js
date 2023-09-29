"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsRead = void 0;
const ActivityIsRead = (activity) => {
    return activity.type == "Read";
};
exports.ActivityIsRead = ActivityIsRead;
