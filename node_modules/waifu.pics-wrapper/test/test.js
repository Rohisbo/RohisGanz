const { getSFWImage } = require('../index');

getSFWImage('waifu').then(result => {
    console.log(result);
}).catch(e => console.log(e));

