import { fromJS } from 'immutable';
const defeultState = fromJS({
    topicList: [{
        id: 1,
        title: "society",
        imgUrl: 'https://tb1.bdstatic.com/tb/%E6%80%AA%E7%89%A9%E7%8C%8E%E4%BA%BA%E4%B8%96%E7%95%8C.jpg'
    },{
        id: 2,
        title: "people",
        imgUrl: 'https://tb1.bdstatic.com/tb/%E6%80%AA%E7%89%A9%E7%8C%8E%E4%BA%BA%E4%B8%96%E7%95%8C.jpg'
    }]
});

export default (state = defeultState, action ) => {
    switch(action.type) {       
        default:
            return state;
    }
    
}