import { APActivity } from "./activity.interface";
export type APLike = APActivity & {
    type: "Like";
};
export declare const ActivityIsLike: (activity: APActivity) => activity is APLike;
