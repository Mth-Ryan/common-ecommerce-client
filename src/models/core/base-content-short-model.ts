import { BaseModel } from "./base-model";

export type BaseContentShortModel = BaseModel & {
    title: string,
    titleSlug: string,
    createdAt: string,
    updatedAt: string,
}
