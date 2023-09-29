import { APActivity } from "./activity.interface";

export type APAdd = APActivity & { type: "Add" };

export const ActivityIsAdd = (activity: APActivity): activity is APAdd => {
	return activity.type == "Add";
};
