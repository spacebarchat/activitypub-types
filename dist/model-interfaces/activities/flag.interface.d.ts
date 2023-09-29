import { APActivity } from "./activity.interface";
export type APFlag = APActivity & {
    type: "Flag";
};
export declare const ActivityIsFlag: (activity: APActivity) => activity is APFlag;
