import { APActivity } from "./activity.interface";

export type APReject = APActivity & { type: "Reject" };

export const ActivityIsReject = (
	activity: APActivity,
): activity is APReject => {
	return activity.type == "Reject";
};
