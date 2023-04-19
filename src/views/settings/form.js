import React from "react";
// import { SettingsContext } from "context/settings";
import { Grid, Box } from "@mui/material";

function SettingsForm() {
  // const context = useContext(SettingsContext);

  return (
    <Box component="form">
      <Grid>
        <Grid item>
          <Grid item>
            {/* <Form.Check
              type="switch"
              id="custom-switch"
              label="Show how much is left"
              onChange={context.toggleShowCompleted}
            /> */}
          </Grid>
        </Grid>

        <Grid item>
          <Grid item>
            <>What to do first</>
            {/* 
            <Form.Check onClick={context.sortBy} name="sort" type="radio" label="Doesn't matter" value={0} />
            <Form.Check onClick={context.sortBy} name="sort" type="radio" label="Difficult stuff" value={-1} />
            <Form.Check onClick={context.sortBy} name="sort" type="radio" label="Easy stuff" value={1} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default SettingsForm;
