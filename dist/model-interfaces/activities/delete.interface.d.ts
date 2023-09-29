import { APActivity } from "./activity.interface";
export type APDelete = APActivity & {
    type: "Delete";
};
export declare const ActivityIsDelete: (activity: APActivity) => activity is APDelete;
