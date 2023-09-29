import { APActivity } from "./activity.interface";

export type APInvite = APActivity & { type: "Invite" };

export const ActivityIsInvite = (
	activity: APActivity,
): activity is APInvite => {
	return activity.type == "Invite";
};
