const fetch = require('node-fetch');

exports.handler = async (event) => {
    try {
        const response = await fetch(event.body).then(res => res.text())
        return {
            statusCode: 200,
            body: JSON.stringify(response),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500, body: JSON.stringify(err),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        }
    }
};


