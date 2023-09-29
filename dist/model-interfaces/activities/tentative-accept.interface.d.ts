import { APActivity } from "./activity.interface";
export type APTentativeAccept = APActivity & {
    type: "TentativeAccept";
};
export declare const ActivityIsTentativeAccept: (activity: APActivity) => activity is APTentativeAccept;
