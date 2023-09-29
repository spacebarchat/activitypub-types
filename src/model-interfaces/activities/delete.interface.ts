import { APActivity } from "./activity.interface";

export type APDelete = APActivity & { type: "Delete" };

export const ActivityIsDelete = (
	activity: APActivity,
): activity is APDelete => {
	return activity.type == "Delete";
};
