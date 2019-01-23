import { List } from 'immutable';

export const initialState = {
    customers: List.of()
};

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
