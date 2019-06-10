import * as constants from './constants';

const defeultState = {
    focused: false
};

export default (state = defeultState, action ) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === constants.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}