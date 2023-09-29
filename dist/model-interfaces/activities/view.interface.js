"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsView = void 0;
const ActivityIsView = (activity) => {
    return activity.type == "View";
};
exports.ActivityIsView = ActivityIsView;
