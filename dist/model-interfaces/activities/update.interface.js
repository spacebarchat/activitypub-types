"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsUpdate = void 0;
const ActivityIsUpdate = (activity) => {
    return activity.type == "Update";
};
exports.ActivityIsUpdate = ActivityIsUpdate;
