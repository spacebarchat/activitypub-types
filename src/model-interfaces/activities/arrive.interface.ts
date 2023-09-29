import { APIntransitiveActivity } from "./intransitive-activity.interface";

export type APArrive = APIntransitiveActivity & { type: "Arrive" };

export const ActivityIsArrive = (
	activity: APIntransitiveActivity,
): activity is APArrive => {
	return activity.type == "Arrive";
};
