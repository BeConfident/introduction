
var amqp = require('amqplib/callback_api');


amqp.connect("amqp://ly:123@192.168.0.106:5672", function(err, conn) {
    conn.createChannel(function(err, ch) {
        ch.assertQueue('', {exclusive: true}, function(err, q) {
            var corr = generateUuid();
            var num = 20;
            console.log(' [x] Requesting fib(%d)', num);

            ch.consume(q.queue, function(msg) {
                if (msg.properties.correlationId == corr) {
                    console.log(' [.] Got %s', msg.content.toString());
                    setTimeout(function() { conn.close(); process.exit(0) }, 500);
                }
            }, {noAck: true});

            ch.sendToQueue('rpc_queue',
                new Buffer(num.toString()),
                { correlationId: corr, replyTo: q.queue });
        });
    });
});

function generateUuid() {
    return Math.random().toString() +
        Math.random().toString() +
        Math.random().toString();
}