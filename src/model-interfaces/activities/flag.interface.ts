import { APActivity } from "./activity.interface";

export type APFlag = APActivity & { type: "Flag" };

export const ActivityIsFlag = (activity: APActivity): activity is APFlag => {
	return activity.type == "Flag";
};
