/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            padding: "15px",
            center: true,
            width: "100%",
            screens: {
                xs: "400px",
                sm: "600px",
                md: "728px",
                lg: "984px",
                xl: "1240px",
                "2xl": "1440px",
            },
        },
        fontFamily: {
            oxanium: ["Oxanium"],
        },
        test: {
            padding: "20px",
        },
        screens: {
            xs: { min: "200px", max: "480px" },
            sm: { min: "481px", max: "576px" },

            md: { min: "577px", max: "768px" },

            lg: { min: "769px", max: "992px" },

            xl: { min: "993px", max: "1200px" },

            "2xl": { min: "1201px", max: "1440px" },
        },
        extend: {},
    },
    plugins: [],
}
