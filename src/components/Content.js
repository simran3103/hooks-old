import React, { Component } from 'react';
import { home } from '../assets/index';
import Post from './Post';
import '../styles/index';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: '',
            tdata: []
        }
    }

    handletweet = (event) => {
        this.setState({ tweet: event.target.value }, () => {
            console.log(this.state.tweet)
        });
    }

    clickHandler = (event) => {
        event.preventDefault();
        if (this.state.tweet === '' || this.state.tweet === ' ') {
            alert('please enter message')
        }
        else {
            let tdataCopy = [...this.state.tdata]
            tdataCopy.push(this.state.tweet)
            this.setState({
                tdata: tdataCopy,
                tweet: ''
            }, () => {
                console.log(this.state.tdata)
            })
        }
    }

    render() {
        const { tdata, tweet } = this.state
        console.log(tweet, 'tweet')
        return (
            <div style={{ color: 'white' }}>
                <div className='head'>
                    Home
                </div>
                <div className='input1' >
                    <span><img src={home} alt='home' />
                        <input type='text'
                            value={this.state.tweet}
                            placeholder="What's happening"
                            className='input2'
                            onChange={(e) => this.handletweet(e)} />
                    </span>
                    <div style={{ color: 'white' }} className='imgbtn'>
                        <span>images</span>
                        <span>
                            <input type="file" id="myfile" name="myfile" /><br />
                        </span>
                        <button className='Tbtn' onClick={(e) => this.clickHandler(e)}>
                            Tweet
                        </button>
                    </div>
                </div>
                <div style={{ color: 'white' }}>
                    {
                        tdata.length > 0 ? tdata.reverse().map((d1) => (<Post data={d1} />)) : null
                    }
                </div>
            </div>
        )
    }
}

export default Content