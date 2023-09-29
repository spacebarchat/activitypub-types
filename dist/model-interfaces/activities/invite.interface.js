"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsInvite = void 0;
const ActivityIsInvite = (activity) => {
    return activity.type == "Invite";
};
exports.ActivityIsInvite = ActivityIsInvite;
