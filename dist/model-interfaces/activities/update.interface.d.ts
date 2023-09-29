import { APActivity } from "./activity.interface";
export type APUpdate = APActivity & {
    type: "Update";
};
export declare const ActivityIsUpdate: (activity: APActivity) => activity is APUpdate;
