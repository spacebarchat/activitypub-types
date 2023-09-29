import { APActivity } from "./activity.interface";
export type APFollow = APActivity & {
    type: "Follow";
};
export declare const ActivityIsFollow: (activity: APActivity) => activity is APFollow;
