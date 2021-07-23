const fetch = require('node-fetch');

exports.handler = async (event) => {

    const data = await fetch(event.body, {
        headers: {
            'User-Agent': 'Twitterbot/1.0'
        }
    }).then(res => res.text())

    try {
        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            },
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify(err),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",

            },
        };
    }
};
