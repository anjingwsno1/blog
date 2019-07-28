import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    article: ''
});

export default (state = defaultState, action ) => {
    switch(action.type) {  
        case constants.CHANGE_DETAIL:
             return state.merge({
                 article: action.article
             })
        default:
            return state;
    }
    
}