import { APActivity } from "./activity.interface";

export type APJoin = APActivity & { type: "Join" };

export const ActivityIsJoin = (activity: APActivity): activity is APJoin => {
	return activity.type == "Join";
};
