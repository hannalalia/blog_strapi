module.exports = {
    //...
    settings: {
      cors: {
        enabled: true, 
        headers: [
            'Content-Type',
            'Authorization',
            'X-Frame-Options',
            'Origin',
            'Access-Control-Allow-Headers',
            'access-control-allow-origin',
          ],
          origin: '*',
        // origin: ["http://localhost", 'https://hannalalia.netlify.app'],
      },
    },
  };