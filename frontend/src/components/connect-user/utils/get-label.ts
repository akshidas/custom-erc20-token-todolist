const genButtonState = (label: string, color: ButtonColor): ButtonState => {
    return {
        label,
        color,
    };
};

const getLabel = (type: ConnectionStatus): ButtonState => {
    switch (type) {
        case "CONNECTED": {
            return genButtonState("connected", "success");
        }
        case "CONNECTING": {
            return genButtonState("connecting", "info");
        }
        case "FAILED": {
            return genButtonState("failed", "error");
        }
        case "NOT_CONNECTED": {
            return genButtonState("click to connect", "primary");
        }
        default: {
            return genButtonState("click to connect", "primary");
        }
    }
};
export default getLabel;
