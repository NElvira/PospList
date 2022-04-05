import React from "react";
import style from "./styles.module.css";
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Collapse, Grid } from "@mui/material";
import { Favorite, MoreVert, ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import dayjs from "dayjs"; 
import "dayjs/locale/ru";
dayjs.locale("ru");

const ExpandMoreStyle = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
}));

export const Post = ({ image, likes, comments, title, author: { avatar, name, email }, text, created_at }) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const dataFormated = dayjs(created_at).format("dddd, DD-MMMM-YYYY hh:mm");

    return (
        <Grid className={style.grid} container item xs={12} sm={6} md={4}>
            <Card className={style.card} sx={{ maxWidth: 345 }}>
            <CardHeader
                    avatar={
                        <Avatar src={avatar && avatar} aria-label="recipe">
                            {!avatar && name.slice(0, 1)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title={email}
                    subheader={dataFormated}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        {title}
                    </Typography>
                    <Typography variant="body2" noWrap color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions sx={{marginTop: "auto"}} disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                    <ExpandMoreStyle
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </ExpandMoreStyle>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {text}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}