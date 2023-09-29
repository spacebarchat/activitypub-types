import { APActivity } from "./activity.interface";

export type APListen = APActivity & { type: "Listen" };

export const ActivityIsListen = (
	activity: APActivity,
): activity is APListen => {
	return activity.type == "Listen";
};
