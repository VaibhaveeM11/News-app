import  { put , all, takeLatest } from 'redux-saga/effects';

function* fetchNews () {
     const data = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=680b52b3605346e096558d9b316f5ff0')
          .then(response => response.json(),);
          console.log(data)
          yield put({type: 'NEWS_RECEIVED', data:data.articles})
 }
 function* actionWatcher () {
     yield takeLatest('GET_NEWS',fetchNews)
     
 }
export default function* rootSaga() {
    yield all([actionWatcher()]);
}