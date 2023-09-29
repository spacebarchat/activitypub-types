import { APActivity } from "./activity.interface";

export type APTentativeAccept = APActivity & { type: "TentativeAccept" };

export const ActivityIsTentativeAccept = (
	activity: APActivity,
): activity is APTentativeAccept => {
	return activity.type == "TentativeAccept";
};
