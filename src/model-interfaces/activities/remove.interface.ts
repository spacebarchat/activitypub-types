import { APActivity } from "./activity.interface";

export type APRemove = APActivity & { type: "Remove" };

export const ActivityIsRemove = (
	activity: APActivity,
): activity is APRemove => {
	return activity.type == "Remove";
};
