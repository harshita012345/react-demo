import { DogWalker } from "../dogType";
import { SELECT_HOUR, UPDATE_DOG_TYPES } from "./type";

const initialState = {
    selectedHour: null,
    selectedDogTypes: {},
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_HOUR:
            return { ...state, selectedHour: action.payload };
        case UPDATE_DOG_TYPES:
            const { dogTypeIndex, actionType } = action.payload;
            const updatedDogTypes = { ...state.selectedDogTypes };
            const dogType = DogWalker[1]?.data?.[dogTypeIndex];
            updatedDogTypes[dogType.title] = updatedDogTypes[dogType?.title] || { quantity: 0, price: dogType?.price };
            if (actionType === "increment") {
                updatedDogTypes[dogType.title].quantity += 1;
            } else if (actionType === "decrement" && updatedDogTypes[dogType?.title].quantity > 0) {
                updatedDogTypes[dogType.title].quantity -= 1;
            }
            return { ...state, selectedDogTypes: updatedDogTypes };
        default:
            return state;
    }
};