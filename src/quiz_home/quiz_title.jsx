import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img1.wsimg.com/isteam/ip/63b04b47-d65a-4207-a58c-3e58f38419ef/IMG_20201017_204202.jpg/:/rs=w:1280"
        title="Kashmiri Gate"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quiz Town
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Guess the place! Earn 5 points per correct answer, lose 1 for wrong or skipped in 30 seconds!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Play</Button>
        <Button size="small">Leadboard</Button>
      </CardActions>
    </Card>
  );
}
