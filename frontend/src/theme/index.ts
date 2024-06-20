import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        button: {
            textTransform: "capitalize",
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                onClick: (e) => e.stopPropagation(),
                variant: "contained",
                disableElevation: true,
            },
        },
    },
});
export default theme;
