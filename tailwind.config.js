export const theme = {
    extend: {
        backdropFilter: {
            "none": "none",
            "blur": "blur(20px)",
        },
    },
};
export const plugins = [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/backdrop-filter"),
    // eslint-disable-next-line no-undef
    require("@tailwindcss/line-clamp"),
    // eslint-disable-next-line no-undef
    require("@react-three/fiber"),
];