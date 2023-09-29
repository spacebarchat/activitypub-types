import { APActivity } from "./activity.interface";

export type APAnnounce = APActivity & { type: "Announce" };

export const ActivityIsAnnounce = (
	activity: APActivity,
): activity is APAnnounce => {
	return activity.type == "Announce";
};
