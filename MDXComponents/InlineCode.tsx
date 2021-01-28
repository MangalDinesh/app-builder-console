import React, {useEffect, useRef} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Typography, {TypographyProps} from '@material-ui/core/Typography';

const useStyles = makeStyles(
  createStyles({
    headingText: {
      display: 'inline-block',
      backgroundColor: '#F3F3F3',
      color: '#083EFC',
      paddingLeft: '4px',
      paddingRight: '4px',
      fontSize: 'inherit',
    },
  }),
);

const InlineCode = (props: TypographyProps) => {
  console.log(props);
  const classes = useStyles();
  return <Typography className={classes.headingText} {...props} />;
};

export default InlineCode;