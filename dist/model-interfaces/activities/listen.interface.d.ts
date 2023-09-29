import { APActivity } from "./activity.interface";
export type APListen = APActivity & {
    type: "Listen";
};
export declare const ActivityIsListen: (activity: APActivity) => activity is APListen;
