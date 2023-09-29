import { APActivity } from "./activity.interface";
export type APMove = APActivity & {
    type: "Move";
};
export declare const ActivityIsMove: (activity: APActivity) => activity is APMove;
