import { createStore } from 'redux';

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Define tus casos aquí
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
