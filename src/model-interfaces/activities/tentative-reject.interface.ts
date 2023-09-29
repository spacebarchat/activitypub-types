import { APActivity } from "./activity.interface";

export type APTentativeReject = APActivity & { type: "TentativeReject" };

export const ActivityIsTentativeReject = (
	activity: APActivity,
): activity is APTentativeReject => {
	return activity.type == "TentativeReject";
};
