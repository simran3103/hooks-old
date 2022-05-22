import React, { Component } from 'react';
import '../styles/index';

class CardDetails extends Component {
    render() {
        console.log(this.props.data.data)
        console.log(typeof (this.props.data.data))
        return (
            <div className='card'>
                <div className='cdata' style={{ fontSize: '1.25rem' }}>
                    {this.props.data.Header}
                </div><br />
                {this.props.data.data.map((data, index) => {
                    return <div className='cdata' key={index} >{data}</div>
                })
                }
            </div>
        )
    }
}

export default CardDetails