module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: "babel-eslint",
    extends: ["eslint-config-airbnb-base", "eslint-config-prettier"],
    rules: {
        "import/prefer-default-export": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-param-reassign": [2, {
            "props": false
        }],
        "no-plusplus": "off",
        "no-restric": "off",
        "func-names": "off",
        "no-alert": "off",
        "no-console": "off",
    },
    settings: {
        "import/resolver": {
            webpack: { config: "webpack.config.js" }
        }
    }
};