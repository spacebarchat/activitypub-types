"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsDislike = void 0;
const ActivityIsDislike = (activity) => {
    return activity.type == "Dislike";
};
exports.ActivityIsDislike = ActivityIsDislike;
