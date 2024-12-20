import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const Pokemon = () => {
    const [blublu, setblublu] = useState([]);

    useEffect(() => {
        axios.get("https://dummyapi.online/api/pokemon")
            .then((response) => {
                console.log(response.data);
                setblublu(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                {blublu.map((lo) => (
                    <Grid item xs={6} md={4} key={lo.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={lo.image_url}
                                title={lo.pokemon} // Corrected here
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {lo.pokemon} // Corrected here
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {lo.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Pokemon;