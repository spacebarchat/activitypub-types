"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsDelete = void 0;
const ActivityIsDelete = (activity) => {
    return activity.type == "Delete";
};
exports.ActivityIsDelete = ActivityIsDelete;
