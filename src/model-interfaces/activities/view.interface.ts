import { APActivity } from "./activity.interface";

export type APView = APActivity & { type: "View" };

export const ActivityIsView = (activity: APActivity): activity is APView => {
	return activity.type == "View";
};
