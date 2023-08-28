import { BaseContentModel } from "../core/base-content-model"
import { DiscountShortOutput } from "../discounts/discount-short-output"
import { SubCategoryShortOutput } from "../sub-categories/sub-category-short-output"

export type ProductOutput = BaseContentModel & {
    thumbnailUrl: string,
    extraImagesUrls: string[],
    brand: string,
    price: number,
    singularDiscount: number,
    totalDiscount: number,
    finalPrice: number,
    inventory: number,
    width: number,
    height: number,
    length: number,
    weight: number,
    category: SubCategoryShortOutput,
    discount?: DiscountShortOutput,
}
