import { APActivity } from "./activity.interface";
export type APCreate = APActivity & {
    type: "Create";
};
export declare const ActivityIsCreate: (activity: APActivity) => activity is APCreate;
