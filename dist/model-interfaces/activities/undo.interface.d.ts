import { APActivity } from "./activity.interface";
export type APUndo = APActivity & {
    type: "Undo";
};
export declare const ActivityIsUndo: (activity: APActivity) => activity is APUndo;
