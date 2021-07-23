const fetch = require('node-fetch');

exports.handler = async (event) => {
    try {
        const response = await fetch(event.body)
        const responseStream = await response.text()
        return {
            statusCode: 200,
            body: JSON.stringify(responseStream),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }

        }
    } catch (err) {

        return {
            statusCode: 500, body: JSON.stringify(err),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        }
    }
};


