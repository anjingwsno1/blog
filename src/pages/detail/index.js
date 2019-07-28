import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content, Author } from './style';
import { actionCreators } from './store';
class Detail extends PureComponent {
    render() {
        const { article } =this.props;
        return (
            <DetailWrapper>
                <Header>{article.title}</Header>
                <Author>{article.author}</Author>
                <Header><p>Write{article.description}</p></Header>
                <Content><img alt='' className='pic' src={article.urlToImage} /></Content>
                <Content dangerouslySetInnerHTML={{__html: article.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    article: state.getIn(['detail', 'article'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));