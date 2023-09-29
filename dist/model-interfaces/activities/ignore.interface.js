"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsIgnore = void 0;
const ActivityIsIgnore = (activity) => {
    return activity.type == "Ignore";
};
exports.ActivityIsIgnore = ActivityIsIgnore;
