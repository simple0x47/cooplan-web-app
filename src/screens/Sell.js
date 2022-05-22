import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';

function Sell() {
    return (
        <div className='Sell'>
            <h1>Sell</h1>
            <div className='Category'>

            </div>
            <div className='Details'>

            </div>
            <div className='Growing method'>

            </div>
            <div className='(Nth) Specific details'>

            </div>
            <div className='Actions'>
                <Button size={'lg'}>Sell</Button>
                <Button size={'lg'}>Save As Draft</Button>
                <Link to='/'><Button size={'lg'}>Back</Button></Link>
            </div>
        </div>
    );
}

export default Sell;
