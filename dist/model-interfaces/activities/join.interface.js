"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsJoin = void 0;
const ActivityIsJoin = (activity) => {
    return activity.type == "Join";
};
exports.ActivityIsJoin = ActivityIsJoin;
