export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_APPLY = "MEMORY_APPLY";
export const MEMORY_RESET = "MEMORY_RESET";


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = (number) => {
    return({type:CLEAR_DISPLAY, payload:number})
}
 
export const memoryAdd = () => {
    return({type:MEMORY_ADD})
}

export const memoryApply = () => {
    return({type:MEMORY_APPLY})
}

export const memoryReset = (number) => {
    return({type:MEMORY_RESET, payload:number})
}