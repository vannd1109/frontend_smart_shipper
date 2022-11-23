import { combineReducers } from 'redux';
import { GET_ALL_CATEGORY_FOOD, GET_CATEGORY_FOOD_BY_ID, ADD_CATEGORY_FOOD, UPDATE_CATEGORY_FOOD, DELETE_CATEGORY_FOOD } from '../actions';

const initCategoryFood = {
    CategoriesFood: [],
    _categoryFood: []
}

function todoCategoryFood(state = initCategoryFood, action) {
    switch (action.type) {
        case GET_ALL_CATEGORY_FOOD:
            return {
                ...state,
                _categoriesFood: action.payload
            }
        case GET_CATEGORY_FOOD_BY_ID:
            return {
                ...state
            }
        
        case ADD_CATEGORY_FOOD:
            return {

            }
        
        case UPDATE_CATEGORY_FOOD:
            return {

            }

        case DELETE_CATEGORY_FOOD:
            return {

            }
        default:
            return state;
    }
}

const Category = combineReducers({
    _todoCategoryFood: todoCategoryFood
})

export default Category;