import React, { Component } from 'react';
import { SideData } from '../data/SideData.js';
import { bird } from '../assets/index.js';
import '../styles/index.js'
// import axios from 'axios'

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sdata: []
        }
    }

    componentDidMount() {
        this.setState({
            sdata: SideData
        }, () => {
            console.log(this.state.sdata, 'Sdata')
        })
    }

    render() {
        return (
            <div style={{ color: 'white' }} className='side' >
                <div>
                    <div className='bird'><img src={bird} alt={bird} /></div>
                    <div>
                        {
                            this.state.sdata.map((sdt, idx) => <div className='sdt' key={idx}>{sdt}</div>)
                        }
                    </div>
                    <button className='btn'>Tweet</button>
                </div>
                <div className='details'>
                    <span className='name'>Parv Saini</span>
                    <span className='name'>@ParvSaini16</span>
                </div>
            </div>
        )
    }
}

export default SideNav