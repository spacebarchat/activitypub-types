"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsAnnounce = void 0;
const ActivityIsAnnounce = (activity) => {
    return activity.type == "Announce";
};
exports.ActivityIsAnnounce = ActivityIsAnnounce;
