import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core"
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles"
import { createActivity } from "../../actions/activities";

const Form = () => {
    const [activityData, setActivityData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    })
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createActivity(activityData))
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a New Activity</Typography> 
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={activityData.creator} onChange={(e) => setActivityData({ ...activityData, creator: e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={activityData.title} onChange={(e) => setActivityData({ ...activityData, title: e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={activityData.message} onChange={(e) => setActivityData({ ...activityData, message: e.target.value})}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={activityData.tags} onChange={(e) => setActivityData({ ...activityData, tags: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setActivityData({ ...activityData, selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;