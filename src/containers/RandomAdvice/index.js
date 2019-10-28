import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Advice from "components/Advice/Advice";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  nextIcon: {
    fontSize: 50,
    width: 100
  }
}));

function RandomAdvice() {
  const [randomAdvice, setRandomAdvice] = useState();
  const styles = useStyles();
  useEffect(() => {
    getRandomAdvice();
  }, []);

  function getRandomAdvice() {
    axios.get("https://api.adviceslip.com/advice").then(advice => {
      const { data } = advice;
      setRandomAdvice(data);
    });
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Advice advice={randomAdvice} />
      <Box display="flex" justifyContent="center" alignItems="center" py={2}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={getRandomAdvice}
        >
          <NavigateNextRoundedIcon className={styles.nextIcon} />
        </Button>
      </Box>
    </Box>
  );
}

export default RandomAdvice;
