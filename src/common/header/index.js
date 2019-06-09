import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>download</NavItem>
                    <NavItem className='right'>login</NavItem>
                    <NavItem className='right'>
                        <i calssName='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch></NavSearch>
                        <i calssName='iconfont'>&#xe624;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                <Button className='write'>
                    <i calssName='iconfont'>&#xe65d;</i>
                    Write a blog
                </Button>
                <Button className='reg'>Register</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;