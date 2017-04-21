const CronJob = require('cron').CronJob;
const commands = require('node-milight-promise').commandsV6;

exports.setupJob = function(light, lightZone = 0, cronTime = '* * * * *'){
    return new CronJob({
        cronTime: cronTime,
        onTick: function() {
            console.log(`Started turning off lights at ${new Date()}`);
            light.sendCommands(commands.fullColor.off(lightZone));
            console.log(`Finished turning off lights at ${new Date()}`);
        },
        start: false
    });
}
