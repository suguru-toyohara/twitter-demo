import { Box, CircularProgress } from "@mui/material";
import "./main.css"
export const ProgressCircle = (props) => {
    return (
        <>
            <CircularProgress
                variant="determinate"
                sx={{color: "#CCC"}}
                value={100}
                size={props.size}
                className="items"
            />
            <CircularProgress
                variant="determinate"
                value={props.value}
                size={props.size}
                className="items"
            />
        </>
    );
}