import { APActivity } from "./activity.interface";

export type APCreate = APActivity & { type: "Create" };

export const ActivityIsCreate = (
	activity: APActivity,
): activity is APCreate => {
	return activity.type == "Create";
};
