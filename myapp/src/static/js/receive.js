/*var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
        var q = 'hello';

        ch.assertQueue(q, {durable: false});
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(q, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {noAck: true});
    });
});*/
var amqp = require('amqplib/callback_api');

amqp.connect( "amqp://ly:123@192.168.0.106:5672", function(err, conn) {
    conn.createChannel(function(err, ch) {
        var q = 'rpc_queue';

        ch.assertQueue(q, {durable: false});
        ch.prefetch(1);
        console.log(' [x] Awaiting RPC requests');
        ch.consume(q, function reply(msg) {
            var n = parseInt(msg.content.toString());

            console.log(" [.] fib(%d)", n);

            var r = fibonacci(n);

            ch.sendToQueue(msg.properties.replyTo,
                new Buffer(r.toString()),
                {correlationId: msg.properties.correlationId});

            ch.ack(msg);
        });
    });
});

function fibonacci(n) {
    if (n == 0 || n == 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

