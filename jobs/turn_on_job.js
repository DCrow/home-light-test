const CronJob = require('cron').CronJob;
const commands = require('node-milight-promise').commandsV6;

exports.setupJob = function(light, lightZone = 0, cronTime = '*/5 * * * *'){
    return new CronJob({
        cronTime: cronTime,
        onTick: function() {
            console.log(`Started turning on lights at ${new Date()}`);

            light.sendCommands(commands.fullColor.on(lightZone));
            light.pause(1000).then(() => {
                console.log(`Finished turning on lights at ${new Date()}`);
            });
        },
        start: false
    });
}
