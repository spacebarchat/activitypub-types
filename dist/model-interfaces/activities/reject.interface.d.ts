import { APActivity } from "./activity.interface";
export type APReject = APActivity & {
    type: "Reject";
};
export declare const ActivityIsReject: (activity: APActivity) => activity is APReject;
