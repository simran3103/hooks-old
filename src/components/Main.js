import React, { Component } from 'react';
import Card from './Card';
import '../styles/index';
import SideNav from './SideNav';
import Content from './Content';

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <div className='cols cols-1'><SideNav /></div>
                <div className='cols cols-2'><Content /></div>
                <div className='cols cols-3'><Card /></div>
            </div>
        )
    }
}

export default Main