import { GlobalKeyboardListener } from '@futpib/node-global-key-listener'
import { exec } from 'node:child_process'
const v = new GlobalKeyboardListener()

const APPS = {
    notes: 'Notes',
    chrome: '"Google Chrome"',
    vsCode: '"Visual Studio Code"',
    slack: 'Slack',
    brave: '"Brave Browser"',
    iterm: 'iTerm'
}

const isPressed = (e, down, x) => {
    return (
        e.state == 'DOWN' &&
        e.name == x &&
        // (down['LEFT ALT'] || down['RIGHT ALT']) &&
        (down['LEFT CTRL'] || down['RIGHT CTRL']) //&&
        // (down['LEFT META'] || down['RIGHT META'])
    )
}
function select(e, down, key, app) {
    if (isPressed(e, down, key)) {
        exec('open -a ' + app)
        return true
    }
}

v.addListener(function (e, down) {
    select(e, down, '1', APPS.slack)
    select(e, down, '2', APPS.brave)
    select(e, down, '3', APPS.iterm)
    select(e, down, '4', APPS.chrome)
})
