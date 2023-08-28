import { BaseContentModel } from "../core/base-content-model";
import { MajorCategoryShortOutput } from "../major-categories/major-category-short-output";

export type SubCategoryOutput = BaseContentModel & {
    majorCategory: MajorCategoryShortOutput,
}
