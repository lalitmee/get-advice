import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactImageAppear from 'react-image-appear';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import axios from 'axios';

import ProgressiveImage from './ProgressiveImage';

const useStyles = makeStyles({
  card: {
    maxWidth: 800,
    width: 800,
  },
  media: {
    height: 400,
  },
  imageIconFontSize: {
    fontSize: 50,
  },
});

const accessKey =
  'deda7f943505696ee9e3bf5d7c8cef86a35ec22d102ed66609f389c62a7e1003';
const collectionIdsList = [
  1004170,
  3980985,
  825815,
  3145271,
  364956,
  608288,
  2309637,
  759172,
  1714979,
  1915337,
];
const collectionId =
  collectionIdsList[Math.round(Math.random() * collectionIdsList.length)];

function Advice({ advice }) {
  const [adviceImageURL, setAdviceImageURL] = useState('');
  const page = Math.round(Math.random() * 20);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/collections/${collectionId}/photos?page=${page}`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        },
      )
      .then(res => {
        const { data } = res || {};
        const imageURL = data[Math.round(Math.random() * 10)].urls.full;
        setAdviceImageURL(imageURL);
      });
    // const image = `https://picsum.photos/800/500`;
    // setAdviceImageURL(image);
  }, [advice]);

  const classes = useStyles();

  const { slip } = advice || {};
  const { advice: currentAdvice } = slip || {};

  return (
    <Card className={classes.card}>
      <Box className={classes.media}>
        {/* <ReactImageAppear
          src={adviceImageURL}
          animation="zoomIn"
          animationDuration="1s"
          // loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
          placeholder
        /> */}
        <ProgressiveImage
          className={'cover'}
          alt={'woman'}
          overlaySrc={
            'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5'
          }
          src={
            'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          }
        />
      </Box>
      <CardContent>
        <Box height="auto">
          <Typography gutterBottom variant="h4" component="h2" align="center">
            {currentAdvice}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

Advice.propTypes = {
  advice: PropTypes.object,
};

export default Advice;
