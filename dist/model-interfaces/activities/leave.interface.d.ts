import { APActivity } from "./activity.interface";
export type APLeave = APActivity & {
    type: "Leave";
};
export declare const ActivityIsLeave: (activity: APActivity) => activity is APLeave;
