import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        button: {
            textTransform: "capitalize",
        },
    },
    components: {
        MuiStack: {
            defaultProps: {
                spacing: "16px",
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: "16px",
                },
            },
            defaultProps: {
                variant: "outlined",
            },
        },
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
