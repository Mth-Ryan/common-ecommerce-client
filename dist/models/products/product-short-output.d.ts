import { BaseContentShortModel } from "../core/base-content-short-model";
export type ProductShortOutput = BaseContentShortModel & {
    thumbnailUrl: string;
    brand: string;
    price: number;
    totalDiscount: number;
    finalPrice: number;
    inventory: number;
};
