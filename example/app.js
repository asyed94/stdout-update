const { UpdateManager } = require('../lib/update-manager');
const manager = UpdateManager.getInstance();

const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const messages = ['Swapping time and space...', 'Have a good day.', "Don't panic...", 'Updating Updater...', '42'];
let i = (j = 0);
let ticks = 60;

manager.hook().then(() => {
    console.log(' - log message');
    console.error(' - error message');
    console.warn(' - warn message');

    const id = setInterval(() => {
        if (--ticks < 0) {
            clearInterval(id);
            manager.update('✔ Success');
            manager.update(['', 'Messages:'].join(UpdateManager.EOL), 1);
            manager.unhook();
        } else {
            const frame = frames[(i = ++i % frames.length)];
            const message = messages[(j = Math.round(ticks / 10) % messages.length)];

            manager.update([`${frame} Some process...`, message].join(UpdateManager.EOL));
        }
    }, 80);
});
