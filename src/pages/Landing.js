import React from 'react';
import './landing.css';
import { Link } from "react-router-dom";
import { Stack, TextField, colors } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SendIcon from '@mui/icons-material/Send';
import '@fontsource/roboto/500.css';
import './weather.css';
import Cities from '../Cities';

const randomBackgroundImage = () => {
    const images = [
        '/backgrounds/backgroundweather1.png',
        '/backgrounds/backgroundweather2.png',
        '/backgrounds/backgroundweather3.png'
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
};

const Landing = () => {
    return (
        <div className="background">
            <div className='backgroundImage'>

                <Container maxWidth="md" align="center" >
                    <div className="App">
                        <Typography variant="h1" fontFamily="Playfair Display" style={{ marginBottom: '30px', color: '#90caf9', marginTop: '30px' }}>
                            WeatherNow
                        </Typography>
                    </div>
                </Container>
                <Container className="centered-container">
                    <div className="textsection">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '-300px', marginTop: '200px' }}>
                            <Cities className='citienames' />
                            <img src={process.env.PUBLIC_URL + randomBackgroundImage()} alt="Background" style={{ maxWidth: '100%', marginRight: '-350px', marginTop: '-100px' }} />
                        </div>
                        <Link to='/WeatherNow/Weather'>
                        <Button variant="contained" size="medium" style={{ marginRight: '20px', marginTop: '-500px', marginLeft: '-300px', backgroundColor: '#90caf9', color: '#051625', borderRadius: '10px'}} >
                            Jetzt das Wetter in deiner Stadt suchen
                        </Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Landing;
