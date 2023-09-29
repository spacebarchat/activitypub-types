import { APActivity } from "./activity.interface";

export type APOffer = APActivity & { type: "Offer" };

export const ActivityIsOffer = (activity: APActivity): activity is APOffer => {
	return activity.type == "Offer";
};
