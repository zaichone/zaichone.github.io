import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link';


import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import Socials from './Socials';

import cover from '../assets/cover.jfif';

function Bio({ profile }) {


    return (
        <Card style={{width:'100%'}}>
            <CardActionArea style={{flexDirection:'column', alignItems:'flex-start'}}>
                <CardMedia
                    component="img"
                    image={cover}
                    title={profile.name}
                    height="350"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                        {profile.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {profile.bio}
                    </Typography>
                </CardContent>
                <Socials />
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default Bio
