import { APActivity } from "./activity.interface";
export type APInvite = APActivity & {
    type: "Invite";
};
export declare const ActivityIsInvite: (activity: APActivity) => activity is APInvite;
