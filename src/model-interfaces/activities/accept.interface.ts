import { APActivity } from "./activity.interface";

export type APAccept = APActivity & { type: "Accept" };

export const ActivityIsAccept = (
	activity: APActivity,
): activity is APAccept => {
	return activity.type == "Accept";
};
