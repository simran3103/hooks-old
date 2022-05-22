import React, { Component } from 'react';
import { CardData } from '../data/CardData';
import CardDetails from './CardDetails';
import '../styles/index';
import { search } from '../assets/index'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            data: CardData
        }, () => { console.log(this.state.data, 'CardData') })
    }

    render() {
        const { data } = this.state
        console.log(data.length)
        return (
            <div>
                <div className='inpdiv'>
                    <div className='searcht'>
                        <img src={search} alt='search' style={{ verticalAlign: 'middle', width: '1.5rem' }} />
                        <input type='text'
                            placeholder="Search Twitter"
                            onChange={this.changeHandler}
                            className='cardinp' />
                    </div>
                </div>
                {
                    data.length > 0 ? data.map((d1, idx) => <CardDetails key={idx} data={d1} />) : null
                }
            </div>
        )
    }
}

export default Card