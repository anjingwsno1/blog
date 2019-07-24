import * as constants from './constants';
import { fromJS} from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 5)
})

export const searchFocus = () => ({
    type : constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type : constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type : constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type : constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type : constants.CHANGE_PAGE,
    page
});

export const getList= () => {
    return (dispatch) => {
        const data = {
            "success": true,
            "data": ["education","sport","music","frm","cfa", "Facebook", "Youtube", "Google", "Gmail", "Hotmail", "amazon", "translator", "SEO", "yahoo", "ebay", "weather", "netflix", "target", "instagram", "msn"]
        }
        dispatch(changeList(data.data))
    }
}