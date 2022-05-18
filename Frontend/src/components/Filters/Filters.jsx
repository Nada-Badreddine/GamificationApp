import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Filters({ pointFilter, handleChange }) {
    return (
        <Box sx={{ display: 'flex'}}>
            <FormControl  component="fieldset" variant="standard">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={pointFilter === "lessThan100"} onChange={() => handleChange("lessThan100")} name="lessThan100" />
                        }
                        label="less of 100"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={pointFilter === "between100And400"} onChange={() => handleChange("between100And400")} name="between100And400" />
                        }
                        label="Between 100 and 400"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={pointFilter === "moreThan400"} onChange={() => handleChange("moreThan400")} name="moreThan400" />
                        }
                        label="more than400"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
}