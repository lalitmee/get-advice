import React, { useEffect, useState } from "react";
import Img from "react-image";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import axios from "axios";

const useStyles = makeStyles({
  card: {
    maxWidth: 800,
    width: 800
  },
  media: {
    height: 400
  },
  imageIconFontSize: {
    fontSize: 50
  }
});

const access_key =
  "deda7f943505696ee9e3bf5d7c8cef86a35ec22d102ed66609f389c62a7e1003";
const collection_id_list = [
  1004170,
  3980985,
  825815,
  3145271,
  364956,
  608288,
  2309637,
  759172,
  1714979,
  1915337
];
const collection_id =
  collection_id_list[Math.round(Math.random() * collection_id_list.length)];

function Advice({ advice }) {
  const [adviceImageURL, setAdviceImageURL] = useState("");
  const page = Math.round(Math.random() * 20);
  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.unsplash.com/collections/${collection_id}/photos?page=${page}`,
    //     {
    //       headers: {
    //         Authorization: `Client-ID ${access_key}`
    //       }
    //     }
    //   )
    //   .then(res => {
    //     const { data } = res || {};
    //     const imageURL = data[Math.round(Math.random() * 10)].urls.full;
    //     setAdviceImageURL(imageURL);
    //   });
    const image = `https://picsum.photos/800/500`;
    setAdviceImageURL(image);
  }, [advice]);

  const classes = useStyles();

  const { slip } = advice || {};
  const { advice: currentAdvice } = slip || {};

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={adviceImageURL}
        src={adviceImageURL}
        title="Advice"
      />
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

export default Advice;
