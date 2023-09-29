import { APIntransitiveActivity } from "./intransitive-activity.interface";
export type APTravel = APIntransitiveActivity & {
    type: "Travel";
};
export declare const ActivityIsTravel: (activity: APIntransitiveActivity) => activity is APTravel;
