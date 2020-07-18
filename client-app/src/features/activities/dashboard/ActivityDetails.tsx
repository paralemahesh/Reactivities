import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles, Paper, Theme, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    details: {
      justifyContent: 'center',
      alignContent: 'flex-start',
    //   maxHeight: '195px',
    //   backgroundColor: '#FFF'
    },
    detailsItem: {
        padding: '10px'
    },
    editForm: {
        marginTop: '10px'
    },
    formControl: {
        // display: 'block'
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        display: 'flex',
      },
    },
}));

export const ActivityDetails = () => {
    const classes = useStyles();
    const activity = {category:''};

    return (
        <Grid className={classes.details} item xs={12} md={6} container>
            <Grid container item xs={12}>
                <Paper elevation={3}>
                    <Grid item className={classes.detailsItem}>
                        <img className={classes.img} alt="complex" src={`/assets/categoryImages/${activity.category}.jpg`} />
                    </Grid>
                    <Grid className={classes.detailsItem} item container justify="flex-start" alignItems="flex-start">
                        <Grid item container spacing={2}>
                            <Grid item>
                                <Typography gutterBottom variant="h5">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                            </Grid>
                            <Grid item>
                                <ButtonGroup color="primary" aria-label="outlined primary button group">
                                    <Button>Edit</Button>
                                    <Button>Cancel</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            {/* <Paper className={classes.editForm} elevation={3}> */}

{/* //   const [value, setValue] = React.useState('Controlled'); */}

{/* //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(event.target.value);
//   }; */}
                <Grid container item xs={12}>
                    <Paper elevation={3}>

                    <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax={4}
                        //   value={value}
                        //   onChange={handleChange}
                        />
                        <TextField
                        id="standard-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        />
                        <TextField
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        />
                    </div>
                    <div>
                        <TextField
                        id="filled-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax={4}
                        //   value={value}
                        //   onChange={handleChange}
                        variant="filled"
                        />
                        <TextField
                        id="filled-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        variant="filled"
                        />
                        <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax={4}
                        //   value={value}
                        //   onChange={handleChange}
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="outlined"
                        />
                    </div>
                    </form>
            </Paper>
                </Grid>

{/* <FormControl className={classes.formControl} component="fieldset">
                        <FormLabel component="legend">Title</FormLabel>
                        <TextField id="standard-basic" label="Title" />
                    </FormControl>
                    <FormControl className={classes.formControl} component="fieldset">
                        <FormLabel component="legend">Title</FormLabel>
                        <TextField id="standard-basic" label="Title" />
                    </FormControl>
                    <FormControl className={classes.formControl} component="fieldset">
                        <FormLabel component="legend">Title</FormLabel>
                        <TextField id="standard-basic" label="Title" />
                    </FormControl>
                    <FormControl className={classes.formControl} component="fieldset">
                        <FormLabel component="legend">Title</FormLabel>
                        <TextField id="standard-basic" label="Title" />
                    </FormControl>
                    <FormControl className={classes.formControl} component="fieldset">
                        <FormLabel component="legend">Title</FormLabel>
                        <TextField id="standard-basic" label="Title" />
                    </FormControl>
                    <FormControl className={classes.formControl} component="fieldset">
                        <FormLabel component="legend">Title</FormLabel>
                        <TextField id="standard-basic" label="Title" />
                    </FormControl> */}
        </Grid>
    )
}
