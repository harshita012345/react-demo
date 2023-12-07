import { SELECT_HOUR, UPDATE_DOG_TYPES } from "./type";

export const selectHour = (hour) => ({
    type: SELECT_HOUR,
    payload: hour,
});

export const updateDogTypes = (dogTypes) => ({
    type: UPDATE_DOG_TYPES,
    payload: dogTypes,
});