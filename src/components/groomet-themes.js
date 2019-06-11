import { grommet } from "grommet/themes";



let newTheme = {
    global: {
        colors: {
            text: {
                light: "grey",
                dark: "grey"
            }
        }

    },
    button: {
        color: {
            light: "white",
            dark: "white"
        }
    }
};

export const customTheme = { ...grommet , ...newTheme};
