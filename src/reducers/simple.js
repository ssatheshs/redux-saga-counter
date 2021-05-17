
const initialState = 0
export const simple = ( state= initialState, action ) => {
    console.log('Simple Reducers!  ' + action.type)
    debugger
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