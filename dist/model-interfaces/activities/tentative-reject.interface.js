"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsTentativeReject = void 0;
const ActivityIsTentativeReject = (activity) => {
    return activity.type == "TentativeReject";
};
exports.ActivityIsTentativeReject = ActivityIsTentativeReject;
