import { fork, takeEvery, put, all, call, takeLatest } from 'redux-saga/effects'

export function* rootSaga() {
    yield all([
        actionWatcher(),
        decrement()
    ])
}

function* actionWatcher() {
    yield takeLatest( 'INCREMENT', incrementCounter)
  }

function* watchFetchTasks(){
    console.log('Watching!')
}

function* watchSomethingElse() {
    console.log(' Watch Something Else !')
}



function * incrementCounter() {
    const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json());

  yield put({ type: "NEWS_RECEIVED", json: json.articles || [{ error: json.message }] });
    
    yield put({type: 'INCREMENT'})
}

function * decrement() {
    console.log('Decrement Clicked !')
    yield call({type: 'DECREMENT'})
}