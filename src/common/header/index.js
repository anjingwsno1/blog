import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    SearchWrapper
} from './style';

const getListArea = (show) => {
    if(show) {
        return(
            <SearchInfo>
                <SearchInfoTitle>
                    Popular Search
                    <SearchInfoSwitch>Change</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>education</SearchInfoItem>
                    <SearchInfoItem>education</SearchInfoItem>
                    <SearchInfoItem>education</SearchInfoItem>
                    <SearchInfoItem>education</SearchInfoItem>
                    <SearchInfoItem>education</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null;
    }
}

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>Home</NavItem>
                <NavItem className='left'>download</NavItem>
                <NavItem className='right'>login</NavItem>
                <NavItem className='right'>
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused':''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe624;</i>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
            <Button className='write'>
                <i className='iconfont'>&#xe65d;</i>
                Write a blog
            </Button>
            <Button className='reg'>Register</Button>
            </Addition>
        </HeaderWrapper>
    );
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);