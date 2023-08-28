import { BaseContentShortModel } from "../core/base-content-short-model";

export type DiscountShortOutput = BaseContentShortModel & {
    percent: number,
    active: boolean,
}
