import reducer, { initialState } from "./reducer";

describe(`the reducer module`, () => {
    it(`should have the following initialState`, () => {
        expect(initialState).toHaveProperty('customers');
        expect(initialState.customers).toHaveProperty('size', 0);
    });

    it(`should return the initialState on the default case`, () => {
        // Given
        const action = {
            type: 'TEST'
        };

        // When
        const result = reducer(undefined, action);

        // Then
        expect(result).toEqual(initialState)
    });
});
