import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 650px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    padding-top: 30px;  
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 10px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendItem = styled.div`
    cursor: pointer;
    .pic {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
        vertical-align: middle;
        box-sizing: border-box;
    }
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 30px;
    line-height: 40px;
    margin：30px 0;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px
    width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 3px;
`;