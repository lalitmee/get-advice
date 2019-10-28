import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";
import makeStyles from "@material-ui/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Advice from "components/Advice/Advice";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    display: "flex",
    alignItems: "center",
    width: 800
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  searchedAdvice: {
    boxShadow: "0px 0px 5px rgba(0,0,0,.5)",
    cursor: "pointer"
  }
}));

function SearchAdvice() {
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = useState();
  const [advices, setAdvices] = useState();
  const [open, setOpen] = useState(false);
  const [modalAdvice, setModalAdvice] = useState({});

  const handleAdviceSearch = event => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://api.adviceslip.com/advice/search/${searchQuery}`)
      .then(advices => {
        const { data } = advices;
        setAdvices(data);
      });
  }, [searchQuery]);

  const getAdviceForModal = id => {
    axios.get(`https://api.adviceslip.com/advice/${id}`).then(advice => {
      const {
        data: { slip }
      } = advice;
      setModalAdvice(slip);
    });
    setOpen(true);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h3" component="h2">
        Search Advice
      </Typography>
      <Box padding={2}>
        <Paper className={styles.root}>
          <IconButton className={styles.iconButton} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            className={styles.input}
            placeholder="Search For Advice"
            inputProps={{ "aria-label": "search for advice" }}
            onChange={handleAdviceSearch}
          />
        </Paper>
      </Box>
      <Box display="flex" justifyContent="center" flexDirection="column">
        {advices &&
          advices.slips &&
          advices.slips.map(advice => {
            const { advice: searchedAdvice, slip_id } = advice;
            return (
              <Box
                className={styles.searchedAdvice}
                border={`1px solid ${grey[200]}`}
                margin={1}
                borderRadius={5}
                padding={2}
                bgcolor={grey[50]}
                width="100%"
                textAlign="center"
                onClick={() => getAdviceForModal(slip_id)}
              >
                <Typography variant="subtitle1">{searchedAdvice}</Typography>
              </Box>
            );
          })}
        {advices &&
          Object.keys(advices).forEach(key => {
            if (key === "message") {
              return (
                <Typography variant="overline">
                  {advices["message"].text}
                </Typography>
              );
            }
          })}
        <Dialog
          open={open}
          keepMounted
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <Box maxWidth={500} minWidth={500} width={500}>
            <DialogTitle>Advice</DialogTitle>
            <Divider />
            <DialogContent>
              <DialogContentText>
                <Typography variant="h5" component="h2" color="default">
                  {modalAdvice.advice}
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  onClick={() => setOpen(false)}
                  size="large"
                  color="secondary"
                  variant="outlined"
                >
                  <CloseRoundedIcon />
                </Button>
              </Box>
            </DialogActions>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
}

export default SearchAdvice;
