import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        // topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        // recommendList: fromJS(action.recommendList)
    })
}


export default (state = defaultState, action ) => {
    switch(action.type) {   
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case constants.TOGGLE_SCROLL_SHOW:
        return state.set('showScroll', action.show);
        default:
            return state;
    }
    
}