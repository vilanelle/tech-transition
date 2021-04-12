export interface Category {
    id: categoryId;
    name: string;
    text: string;
}

export type categoryId = 'learn' | 'jobs' | 'resources'

export type categoriesModel = {
    [key in categoryId]: Category
}
