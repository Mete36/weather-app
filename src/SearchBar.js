import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const styles = theme => ({
    root:{
        ...theme.typography.display4,
        padding: theme.spacing.unit,
    }
});

const SearchBar = (props) => {

    const { classes } = props;
        
    return(
        <div>
            <TextField
                onChange={props.onSubmit}
                InputProps={{
                    classes: {
                        input: classes.root
                    }
                }}
                name="city"
                placeholder="Enter City Name"
            />
        </div>
    )
}

export default withStyles(styles)(SearchBar);