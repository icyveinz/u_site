const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        main: [
            "./src/js/js_scripts/bar-loader.js",
            "./src/js/js_scripts/age_verification_main.js",
            "./src/js/js_scripts/visual_activators.js",
            "./src/js/js_scripts/hovered-links-footer.js",
            "./src/js/js_scripts/network_worker.js",
            "./src/js/js_scripts/main_styler.js",
            "./src/js/js_scripts/burger_menu.js",
            "./src/js/js_scripts/walgreen-redirect.js",
            "./src/js/js_scripts/top_page_presentation_gsap.js"
        ],
        user_agreement: [
            "./src/js/js_scripts/bar-loader.js",
            "./src/js/js_scripts/check_if_age_confirmed.js",
            "./src/js/js_scripts/visual_activators.js",
            "./src/js/js_scripts/hovered-links-footer.js",
            "./src/js/js_scripts/burger_menu.js",
            "./src/js/js_scripts/agreement_redirect.js",
            "./src/js/js_scripts/legal_gsap_animation.js"
        ]
    },
    output: {
        filename: 'bundled_[name].js',
        path: path.resolve(__dirname, 'dist/js/js_scripts'),
    }
};

// npx webpack to run
