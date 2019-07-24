import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        const res = {
            "success": true,
            "data": {
                "title": "Facebook’s Libra pitches to be the future of money",
                "content": "<img src='//upload-images.jianshu.io/upload_images/9142500-cd496cff2ecf9a87.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp' /><p><b>The message is this is not some little side project a small team at the Facebooks Menlo Park headquarters will try out for a few months before moving on to something else - this is both the future of Facebook and the future of money, an initiative that has seen an alliance of big players in payments such as Paypal and Visa, Silicon Valley players such as Uber and Lyft and major venture capital firms, a kind of Avengers: Endgame of technology and finance superheroes come together to make the world a better place.</b></p><p>The message is this is not some little side project a small team at the Facebooks Menlo Park headquarters will try out for a few months before moving on to something else - this is both the future of Facebook and the future of money, an initiative that has seen an alliance of big players in payments such as Paypal and Visa, Silicon Valley players such as Uber and Lyft and major venture capital firms, a kind of Avengers: Endgame of technology and finance superheroes come together to make the world a better place.</p><p>The message is this is not some little side project a small team at the Facebooks Menlo Park headquarters will try out for a few months before moving on to something else - this is both the future of Facebook and the future of money, an initiative that has seen an alliance of big players in payments such as Paypal and Visa, Silicon Valley players such as Uber and Lyft and major venture capital firms, a kind of Avengers: Endgame of technology and finance superheroes come together to make the world a better place.</p><p>The message is this is not some little side project a small team at the Facebooks Menlo Park headquarters will try out for a few months before moving on to something else - this is both the future of Facebook and the future of money, an initiative that has seen an alliance of big players in payments such as Paypal and Visa, Silicon Valley players such as Uber and Lyft and major venture capital firms, a kind of Avengers: Endgame of technology and finance superheroes come together to make the world a better place.</p>"
            }
        }
        const result = res.data;
        dispatch(changeDetail(result.title, result.content))
    }
}