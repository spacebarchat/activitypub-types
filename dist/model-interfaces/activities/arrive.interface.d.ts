import { APIntransitiveActivity } from "./intransitive-activity.interface";
export type APArrive = APIntransitiveActivity & {
    type: "Arrive";
};
export declare const ActivityIsArrive: (activity: APIntransitiveActivity) => activity is APArrive;
