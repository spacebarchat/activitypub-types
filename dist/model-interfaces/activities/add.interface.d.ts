import { APActivity } from "./activity.interface";
export type APAdd = APActivity & {
    type: "Add";
};
export declare const ActivityIsAdd: (activity: APActivity) => activity is APAdd;
