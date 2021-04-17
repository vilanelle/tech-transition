export interface Category {
    id: CategoryId;
    name: string;
    text: string;
}

export type CategoryId = 'learn' | 'jobs' | 'resources'

export type CategoriesModel = {
    [key in CategoryId]: Category
}
