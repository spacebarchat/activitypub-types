import { APActivity } from "./activity.interface";
export type APAnnounce = APActivity & {
    type: "Announce";
};
export declare const ActivityIsAnnounce: (activity: APActivity) => activity is APAnnounce;
