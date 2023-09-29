import { APActivity } from "./activity.interface";
export type APIgnore = APActivity & {
    type: "Ignore";
};
export declare const ActivityIsIgnore: (activity: APActivity) => activity is APIgnore;
