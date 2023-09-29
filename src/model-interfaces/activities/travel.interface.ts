import { APIntransitiveActivity } from "./intransitive-activity.interface";

export type APTravel = APIntransitiveActivity & { type: "Travel" };

export const ActivityIsTravel = (
	activity: APIntransitiveActivity,
): activity is APTravel => {
	return activity.type == "Travel";
};
