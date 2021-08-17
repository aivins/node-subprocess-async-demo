#!/usr/bin/env node
const { exec } = require('child_process');


function go() {
    const process1 = exec('./process1.sh');
    process1.stdout.on('data', (data) => {
        console.log(data.toString().trim());
        if (data.includes('running for 5 seconds')) {
            const process2 = exec('./process2.sh');
            process2.stdout.on('data', (data) => {
                console.log(data.toString().trim())
            })
            process2.on('close', () => {
                console.log('Process2 finished, killing process1')
                process1.kill();
            })
        }
    });
};

go();

