var 

    // Constants
    SERVER_PORT = 3000,

    // Module imports
    express = require('express'),
    exec = require('child_process').exec,

    // Create a webserver.
    app = express()
;

// Attach the URL root (e.g. http://10.0.1.15/) to our www directory.
//app.use('/media', express.static(__dirname + '/media'));

app.get('/api/garage', function(request, response) {
    exec('sudo python trigger.py', function (error, stdout, stderr) {
        if (error) {
            response.send('ERROR: ' + stderr.toString());
        } else {
            response.send('OK: ' + stdout.toString());
        }
    });
});

app.use(express.static(__dirname + '/www'));

app.listen(SERVER_PORT, function() {
    console.log('listening');
});
