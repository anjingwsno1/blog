import * as constants from './constants';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('18f65b0c88494fcaab206b3dae8ca52f');


const changeDetail = (article) => ({
    type: constants.CHANGE_DETAIL,
    article

})

export const getDetail = (id) => {
    return (dispatch) => {
        newsapi.v2.topHeadlines({
            category: 'technology',
            language: 'en',
            country: 'au'
          }).then(response => {
            const res = response;
            const result = res.articles;
            dispatch(changeDetail(result[id]));
          });
    }
}