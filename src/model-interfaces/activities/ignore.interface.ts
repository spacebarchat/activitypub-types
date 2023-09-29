import { APActivity } from "./activity.interface";

export type APIgnore = APActivity & { type: "Ignore" };

export const ActivityIsIgnore = (
	activity: APActivity,
): activity is APIgnore => {
	return activity.type == "Ignore";
};
