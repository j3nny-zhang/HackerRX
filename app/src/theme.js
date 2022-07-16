import { extendTheme } from "@chakra-ui/react";

export const newTheme = extendTheme({
    colors: {
        brand: {
            50: "#354265",
            100: "#141D34",
            200:"#FFCAD0",
            300: "#EF839D",
            400: "#FDF5ED",
        }
    },

    fonts: {
        body: 'Inconsolata',
    },

    body: {
        color: 'egg',
    },
 
});