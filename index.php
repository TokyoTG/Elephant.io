<?php

require("vendor/autoload.php");

use ElephantIO\Client;
use ElephantIO\Engine\SocketIO\Version2X;


exec("node server.js");
// $version = new Version2X('http://localhost:8000');
// $client = new Client($version);

// $client->initialize();
// $client->emit('hello', ['foo' => 'bar']);
// $client->close();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Welcome</h1>
    <button id="alert">Alert Everyone</button>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
    <!-- <script src="."></script> -->
    <script>
        let btn = document.getElementById('alert');
        console.log(location.port);
        var socket = io();
        btn.addEventListener('click', () => {
            socket.emit("alert", "someone clicked alert");
        })
        socket.emit("hi", "I just got here")
        socket.on('alert_all', data => {
            alert(data);
        })
    </script>
</body>

</html>