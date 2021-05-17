
import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { incrementValue, decrementValue } from '../actions/counter'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ContainedButtons =(props) => {
  const classes = useStyles();
  console.log( props )

  return (

    <div className={classes.root}>      
      <Button variant="contained" color="primary" onClick = { props.decrementValue }>
        -
      </Button>
      <Button variant="contained" color="primary" onClick = { props.incrementValue }>
        +
      </Button>   

      <div>Count:{ props.count } </div>
    </div>
  )
}

const mapDispatchToProps =  {
    
        incrementValue:  incrementValue,
        decrementValue:  decrementValue
      
}

const mapStateToProps = state => {
    console.log( state )
    
        return{
            count: state
        }
    
    
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainedButtons)