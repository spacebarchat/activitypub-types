import { APActivity } from "./activity.interface";
export type APOffer = APActivity & {
    type: "Offer";
};
export declare const ActivityIsOffer: (activity: APActivity) => activity is APOffer;
