"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsTentativeAccept = void 0;
const ActivityIsTentativeAccept = (activity) => {
    return activity.type == "TentativeAccept";
};
exports.ActivityIsTentativeAccept = ActivityIsTentativeAccept;
