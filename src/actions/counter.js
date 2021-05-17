

export function incrementValue(){
    console.log('-----IncrementValue-------------')
    return { type: 'INCREMENT' }
}

export function decrementValue() {
    console.log('-----DecrementValue-------------')
    return { type: 'DECREMENT' }
}