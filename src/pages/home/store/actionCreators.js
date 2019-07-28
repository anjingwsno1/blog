import * as constants from './constants';
import { fromJS } from 'immutable';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('18f65b0c88494fcaab206b3dae8ca52f');

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    articleList: result
})

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        newsapi.v2.topHeadlines({
            category: 'technology',
            language: 'en',
            country: 'au'
          }).then(response => {
            const res = response;
            const result = res.articles;
            dispatch(changeHomeData(result));
          });
        
    }
}



export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_SHOW,
    show
})