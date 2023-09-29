import { APActivity } from "./activity.interface";
export type APAccept = APActivity & {
    type: "Accept";
};
export declare const ActivityIsAccept: (activity: APActivity) => activity is APAccept;
