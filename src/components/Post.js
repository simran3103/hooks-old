import React, { Component } from 'react';
import { anushka, girl } from '../assets/index';
import '../styles/index'

class Post extends Component {
    render() {
        const { data } = this.props
        console.log(data, 'postdata')
        return (
            <div className='post' >
                <div><img src={girl} alt='girl' className='kohli' /></div>
                <div className='name-1'>
                    <span style={{ fontWeight: 'bold' }}>
                        Gaurav Chaudhary </span>
                    <span style={{ color: 'rgb(96,96,96)' }}>
                        @TechnicalGuruji-20m
                    </span>
                    <div>
                        This Crazy Charger Has A Hidden Spy Camera
                    </div>
                    <div style={{ color: 'rgb(0, 128, 255)' }}>
                        youtu.be/guH4ochyF7E <span style={{ color: 'white' }}>
                            via </span>
                        @YoutubeIndia
                    </div>
                    <div className='mpost'>
                        <div className='anush'>
                            <img src={anushka}
                                alt='anush'
                                style={{ width: '6rem', borderTopLeftRadius: '1rem', borderEndStartRadius: '1rem' }} />
                        </div>
                        <div className='m1post' style={{ color: 'white' }}>
                            {data}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post