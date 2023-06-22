export interface RespuestaCategoria {
    categories: Categoria[];
}

export interface Categoria {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}
export interface RespuestaMeal{
    meals: Meal[];
}
export interface Meal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}
