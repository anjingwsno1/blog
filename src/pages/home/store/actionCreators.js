import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        const res = {
            "success": true,
            "data": {
                "topicList": [{
                    "id": 1,
                    "title": "society",
                    "imgUrl": "https://tb1.bdstatic.com/tb/%E6%80%AA%E7%89%A9%E7%8C%8E%E4%BA%BA%E4%B8%96%E7%95%8C.jpg"
                },{
                    "id": 2,
                    "title": "people",
                    "imgUrl": "https://tb1.bdstatic.com/tb/%E6%80%AA%E7%89%A9%E7%8C%8E%E4%BA%BA%E4%B8%96%E7%95%8C.jpg"
                }],
                "articleList": [{
                    "id": 1,
                    "title": "Facebook’s Libra pitches to be the future of money",
                    "desc": "It is a hugely ambitious - some might say megalomaniacal - project to create a new global currency. Facebook's David Marcus tells me it is about giving billions of people more freedom with money and righting the many wrongs of the present system.",
                    "imgUrl": "//upload-images.jianshu.io/upload_images/13736615-bee7bb444006771f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                },{
                    "id": 2,
                    "title": "Facebook’s Libra pitches to be the future of money",
                    "desc": "It is a hugely ambitious - some might say megalomaniacal - project to create a new global currency. Facebook's David Marcus tells me it is about giving billions of people more freedom with money and righting the many wrongs of the present system.",
                    "imgUrl": "//upload-images.jianshu.io/upload_images/13736615-bee7bb444006771f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                },{
                    "id": 3,
                    "title": "Facebook’s Libra pitches to be the future of money",
                    "desc": "It is a hugely ambitious - some might say megalomaniacal - project to create a new global currency. Facebook's David Marcus tells me it is about giving billions of people more freedom with money and righting the many wrongs of the present system.",
                    "imgUrl": "//upload-images.jianshu.io/upload_images/13736615-bee7bb444006771f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                },{
                    "id": 4,
                    "title": "Facebook’s Libra pitches to be the future of money",
                    "desc": "It is a hugely ambitious - some might say megalomaniacal - project to create a new global currency. Facebook's David Marcus tells me it is about giving billions of people more freedom with money and righting the many wrongs of the present system.",
                    "imgUrl": "//upload-images.jianshu.io/upload_images/13736615-bee7bb444006771f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                }],
                "recommendList": [{
                    "id": 1,
                    "imgUrl": "//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
                },{
                    "id": 2,
                    "imgUrl": "//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
                },{
                    "id": 3,
                    "imgUrl": "//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
                },{
                    "id": 4,
                    "imgUrl": "//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
                }]
            }
        }
        const result = res.data;
        dispatch(changeHomeData(result));
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        const res = {
            "success": true,
            "data": [{
                    
                "id": 5,
                "title": "Facebook’s Libra pitches to be the future of money",
                "desc": "It is a hugely ambitious - some might say megalomaniacal - project to create a new global currency. Facebook's David Marcus tells me it is about giving billions of people more freedom with money and righting the many wrongs of the present system.",
                "imgUrl": "//upload-images.jianshu.io/upload_images/13736615-bee7bb444006771f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            },{
                "id": 6,
                "title": "Facebook’s Libra pitches to be the future of money",
                "desc": "It is a hugely ambitious - some might say megalomaniacal - project to create a new global currency. Facebook's David Marcus tells me it is about giving billions of people more freedom with money and righting the many wrongs of the present system.",
                "imgUrl": "//upload-images.jianshu.io/upload_images/13736615-bee7bb444006771f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            },{
                "id": 7,
                "title": "Facebook’s Libra pitches to be the future of money",
                "desc": "It is a hugely ambitious - some might say megalomaniacal - project to create a new global currency. Facebook's David Marcus tells me it is about giving billions of people more freedom with money and righting the many wrongs of the present system.",
                "imgUrl": "//upload-images.jianshu.io/upload_images/13736615-bee7bb444006771f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            },{
                "id": 8,
                "title": "Facebook’s Libra pitches to be the future of money",
                "desc": "It is a hugely ambitious - some might say megalomaniacal - project to create a new global currency. Facebook's David Marcus tells me it is about giving billions of people more freedom with money and righting the many wrongs of the present system.",
                "imgUrl": "//upload-images.jianshu.io/upload_images/13736615-bee7bb444006771f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            }]
        }
        const result = res.data;
        dispatch(addHomeList(result, page + 1))
    }
}


export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_SHOW,
    show
})