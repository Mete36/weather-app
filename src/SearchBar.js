import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const styles = theme => ({
    root:{
        ...theme.typography.display4,
        // backgroundColor: theme.palette.common.white,
        padding: theme.spacing.unit,
        // fontSize: '5rem',
        // textTransform: 'uppercase'
    }
});

const SearchBar = (props) => {

    const { classes } = props;
        
    return(
        <div>
            <form onSubmit={props.onSubmit}>
            <TextField
                InputProps={{
                    classes: {
                        input: classes.root
                    }
                }}
                name="city"
                placeholder="Enter City Name"
            />
            </form>
        </div>
    )
}

export default withStyles(styles)(SearchBar);