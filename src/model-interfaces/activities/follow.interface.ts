import { APActivity } from "./activity.interface";

export type APFollow = APActivity & { type: "Follow" };

export const ActivityIsFollow = (
	activity: APActivity,
): activity is APFollow => {
	return activity.type == "Follow";
};
