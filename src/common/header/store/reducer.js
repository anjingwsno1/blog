import * as constants from './constants';
import { fromJS } from 'immutable';
const defeultState = fromJS({
    focused: false
});

export default (state = defeultState, action ) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}