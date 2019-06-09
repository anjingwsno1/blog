import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
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
                    <NavItem className='right'>Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                <Button className='write'>Write a blog</Button>
                <Button className='reg'>Register</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;