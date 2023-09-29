import { APActivity } from "./activity.interface";
export type APView = APActivity & {
    type: "View";
};
export declare const ActivityIsView: (activity: APActivity) => activity is APView;
