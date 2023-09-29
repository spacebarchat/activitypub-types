import { APActivity } from "./activity.interface";
export type APTentativeReject = APActivity & {
    type: "TentativeReject";
};
export declare const ActivityIsTentativeReject: (activity: APActivity) => activity is APTentativeReject;
