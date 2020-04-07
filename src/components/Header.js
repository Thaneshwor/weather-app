import React, { Component } from 'react';
import Titles from './Titles';

export class Header extends Component {
    render() {
        return (

            <div className='header-wrapper'>
                <div className='container-max-width'>
                    <div className='header'>
                        <Titles />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
