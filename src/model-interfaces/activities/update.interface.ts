import { APActivity } from "./activity.interface";

export type APUpdate = APActivity & { type: "Update" };

export const ActivityIsUpdate = (
	activity: APActivity,
): activity is APUpdate => {
	return activity.type == "Update";
};
