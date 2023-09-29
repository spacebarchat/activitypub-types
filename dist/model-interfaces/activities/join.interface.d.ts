import { APActivity } from "./activity.interface";
export type APJoin = APActivity & {
    type: "Join";
};
export declare const ActivityIsJoin: (activity: APActivity) => activity is APJoin;
