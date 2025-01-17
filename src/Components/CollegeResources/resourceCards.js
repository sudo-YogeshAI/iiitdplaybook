import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const image_svg =
  'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/SVG_for_cards/teamwork.svg';

function SuppliesCards(supplyCardInfo) {
  const cardHeight = 280;
  const cardWidth = cardHeight * (4.5 / 3);

  let gradientColor_1;
  let gradientColor_2;
  let title;
  let description;
  let image;
  let pathLink;

  if (supplyCardInfo['title']) {
    gradientColor_1 = supplyCardInfo['gradientColor_1'];
    gradientColor_2 = supplyCardInfo['gradientColor_2'];
    title = supplyCardInfo['title'];
    description = supplyCardInfo['description'];
    image = supplyCardInfo['image'];
    pathLink = supplyCardInfo['pathLink'];
  } else {
    gradientColor_1 = '#e66465';
    gradientColor_2 = '#9198e5';
    title = 'No Title';
    description = 'N.A';
    image = image_svg;
    pathLink = 'explore';
  }

  const useStyles = makeStyles({
    root: {
      maxWidth: cardWidth,
      minWidth: cardWidth,
      maxHeight: cardHeight,
      background: `linear-gradient(45deg, ${gradientColor_1}, ${gradientColor_2})`,
      borderRadius: 10,
    },
    actionArea: {
      width: cardWidth,
      height: cardHeight,
    },
    a: {
      margin: '0%',
    },
    media: {
      minWidth: cardWidth / 3,
      maxWidth: cardWidth / 3,
      minHeight: cardHeight * (5 / 6),
      borderRadius: '10px',
      margin: '5%',
    },
    title: {
      fontSize: 15,
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#141414',
    },
    info: {
      fontSize: 12,
      textAlign: 'center',
      marginTop: '5%',
    },
    cardContainer: {
      height: cardHeight,
      width: cardWidth,
      display: 'flex',
      flexDirection: 'row',
    },
    contentContainer: {
      height: cardHeight,
      display: 'flex',
      flexDirection: 'column',
      width: '40%',
      justifyContent: 'center',
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <a href={pathLink} target='_blank' style={{ margin: '0%' }}>
        <CardActionArea className={classes.actionArea}>
          <div className={classes.cardContainer}>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent className={classes.contentContainer}>
              <Typography
                className={classes.title}
                style={{ whiteSpace: 'pre-line' }}
              >
                {title}
              </Typography>
              <Typography className={classes.info} color='textSecondary'>
                {description}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </a>
    </Card>
  );
}

export default SuppliesCards;
