import { APActivity } from "./activity.interface";

export type APDislike = APActivity & { type: "Dislike" };

export const ActivityIsDislike = (
	activity: APActivity,
): activity is APDislike => {
	return activity.type == "Dislike";
};
