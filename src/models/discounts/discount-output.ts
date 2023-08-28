import { BaseContentModel } from "../core/base-content-model";

export type DiscountOutput = BaseContentModel & {
    description: string,
    thumbnailUrl: string,
    percent: number,
    active: boolean
}
