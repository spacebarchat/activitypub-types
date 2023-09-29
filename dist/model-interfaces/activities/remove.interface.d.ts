import { APActivity } from "./activity.interface";
export type APRemove = APActivity & {
    type: "Remove";
};
export declare const ActivityIsRemove: (activity: APActivity) => activity is APRemove;
