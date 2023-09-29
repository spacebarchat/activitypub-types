import { APActivity } from "./activity.interface";

export type APRead = APActivity & { type: "Read" };

export const ActivityIsRead = (activity: APActivity): activity is APRead => {
	return activity.type == "Read";
};
