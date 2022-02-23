import React from 'react';
import {Card} from 'react-bootstrap'; 

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <Card style={{ width: '50rem'}} align="center">
                <Card.Header className='bg-light'>
                <Card.Text className='text-dark'>
                    Dashboard
                </Card.Text>
                </Card.Header>
                <Card.Body>
                <Card.Text>
                    Selamat Datang di Pembayaran SPP
                </Card.Text>
                </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Dashboard;  