import { APActivity } from "./activity.interface";

export type APLeave = APActivity & { type: "Leave" };

export const ActivityIsLeave = (activity: APActivity): activity is APLeave => {
	return activity.type == "Leave";
};
