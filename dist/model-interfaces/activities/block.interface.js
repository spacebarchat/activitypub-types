"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsBlock = void 0;
const ActivityIsBlock = (activity) => {
    return activity.type == "Block";
};
exports.ActivityIsBlock = ActivityIsBlock;
