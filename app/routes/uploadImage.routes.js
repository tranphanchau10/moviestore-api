module.exports = (app) => {
    const image = require('../controllers/uploadImage.controller.js');

    
    app.post('/resizeImageGlobal', image.resizeImageGlobal);

    app.post('/resizeImageOneSection', image.resizeImageOneSection);

    app.post('/dowloadImage', image.dowloadImage);

    app.get('/fileImage/:folder/:filename/:width/:height', image.resizeImagePublic);

}