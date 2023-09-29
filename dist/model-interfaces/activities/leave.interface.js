"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsLeave = void 0;
const ActivityIsLeave = (activity) => {
    return activity.type == "Leave";
};
exports.ActivityIsLeave = ActivityIsLeave;
