import React, { PureComponent } from 'react';
import { RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <RecommendItem key={item.get('id')}>
                                <img className='pic' src={item.get('imgUrl')} alt='' />
                            </RecommendItem>
                        )
                    })
                }
            </div>
            
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);