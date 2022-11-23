import callApi from '../api';
export const GET_ALL_CATEGORY_FOOD = 'GET_ALL_CATEGORY_FOOD';
export const GET_CATEGORY_FOOD_BY_ID = 'GET_CATEGORY_FOOD_BY_ID';
export const ADD_CATEGORY_FOOD = 'ADD_CATEGORY_FOOD';
export const UPDATE_CATEGORY_FOOD = 'UPDATE_CATEGORY_FOOD';
export const DELETE_CATEGORY_FOOD = 'DELETE_CATEGORY_FOOD';

export const actFetchCategoriesFoodRequest = () => {
    return (dispatch) => {
        return callApi('/categories-food', 'GET', null).then(res => {
            dispatch(GetAllCategoryFood(res.data));
        })
    }
}

// GET_ALL_CATEGORY_FOOD
export function GetAllCategoryFood( payload ) {
    return {
        type: 'GET_ALL_CATEGORY_FOOD',
        payload
    }
}

// GET_CATEGORY_FOOD_BY_ID
export function GetCategoryFoodById( payload ) {
    return {
        type: 'GET_CATEGORY_FOOD_BY_ID',
        payload
    }
}

// ADD_CATEGORY_FOOD
export function AddCategoryFood( payload ) {
    return {
        type: 'ADD_CATEGORY_FOOD',
        payload
    }
}

// UPDATE_CATEGORY_FOOD
export function UpdateCategoryFood( payload ) {
    return {
        type: 'UPDATE_CATEGORY_FOOD',
        payload
    }
}

// DELETE_CATEGORY_FOOD
export function DeleteCategoryFood( payload ) {
    return {
        type: 'DELETE_CATEGORY_FOOD',
        payload
    }
}