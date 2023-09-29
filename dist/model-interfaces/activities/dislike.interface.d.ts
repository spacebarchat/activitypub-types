import { APActivity } from "./activity.interface";
export type APDislike = APActivity & {
    type: "Dislike";
};
export declare const ActivityIsDislike: (activity: APActivity) => activity is APDislike;
