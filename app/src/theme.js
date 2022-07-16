import { extendTheme } from "@chakra-ui/react";

export const newTheme = extendTheme({
    colors: {
        blue: "#354265",
        darkBlue: "#141D34",
        lightPink:"#FFCAD0",
        darkPink: "#EF839D",
        egg: "#FDF5ED",
    },
    fonts: {
        body: 'Inconsolata',
    },

    body: {
        color: 'egg',
    },

});