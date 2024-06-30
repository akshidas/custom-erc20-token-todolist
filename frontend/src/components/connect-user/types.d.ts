type ButtonColor =
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";

type ButtonState = {
    label: string;
    color: ButtonColor;
};
type ConnectionStatus = "CONNECTING" | "CONNECTED" | "FAILED" | "NOT_CONNECTED";
