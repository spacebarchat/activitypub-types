"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIsOffer = void 0;
const ActivityIsOffer = (activity) => {
    return activity.type == "Offer";
};
exports.ActivityIsOffer = ActivityIsOffer;
