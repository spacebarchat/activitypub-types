"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsReject = void 0;
const ActivityIsReject = (activity) => {
    return activity.type == "Reject";
};
exports.ActivityIsReject = ActivityIsReject;
