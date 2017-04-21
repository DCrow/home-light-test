const Milight = require('node-milight-promise').MilightController;
const turnOnJob = require('./jobs/turn_on_job.js');
const turnOffJob = require('./jobs/turn_off_job.js');


const light = new Milight({
    ip: '192.168.1.4',
    type: 'v6'
});
const lightZone = 0;

turnOnJob.setupJob(light, lightZone, '10 20 * * *').start();
turnOffJob.setupJob(light, lightZone, '30 20 * * *').start();
