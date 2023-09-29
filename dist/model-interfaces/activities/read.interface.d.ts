import { APActivity } from "./activity.interface";
export type APRead = APActivity & {
    type: "Read";
};
export declare const ActivityIsRead: (activity: APActivity) => activity is APRead;
