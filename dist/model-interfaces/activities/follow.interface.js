"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsFollow = void 0;
const ActivityIsFollow = (activity) => {
    return activity.type == "Follow";
};
exports.ActivityIsFollow = ActivityIsFollow;
