import { Box, useTheme } from '@mui/material';
import Bg from './assets/CardMedia.png'
import Image from "mui-image"
import React from 'react';
import { makeStyles } from '@mui/styles'
import { Checkbox } from './Checkbox';

export interface IProps{
  img?: string,
}

export const Card = (props: IProps) => {

  const theme = useTheme();
  
  const useStyles = makeStyles(() => ({
    wrapper: {
      width: 230,
      height: 150,
      borderRadius: '10px',
      overflow: 'hidden',
      border: `1px solid ${theme.palette.border.light}`,  
      cursor: 'pointer',
      '&:focus' : {
        boxShadow: `0px 0px 0px 2px ${theme.palette.primary.main}`
      }
    },
    imageWrapper: {
      height: '100px'
    },
    checkBoxWrapper: {
      padding: '15px 18.25px'
    }
  }));

  const classes = useStyles();
  const [checked, setIsChecked] = React.useState(false);

  const useImg = () => {
    if(props.img) return props.img
    return Bg
  }

  return (
    <Box className={classes.wrapper} sx={{...(checked && {boxShadow: `0px 0px 0px 2px ${theme.palette.primary.main}`, border: `1px solid ${theme.palette.primary.dark}`})}} tabIndex={0} >
      <Box className={classes.imageWrapper}>
        <Image src={useImg()} style={{maxWidth: '100%', maxHeight: '100%', objectFit:'cover'}} />
      </Box>
      <Box className={classes.checkBoxWrapper}>
        <Checkbox checked={checked} setIsChecked={setIsChecked} label="Flood zone 3" />
      </Box>
    </Box>
  );
};
