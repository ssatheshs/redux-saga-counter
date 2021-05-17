const initialState = {}


export const count = ( state= initialState, action ) => {
    console.log('Simple Reducers!' + action.type)
    switch( action.type ) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'INCREMENT_IF_ODD':
            return ( state %  2 !== 0 )? state + 1 : state
        default:
            return state
    }
}