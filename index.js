const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', (qr) => {
    console.log('QR_CODE_START');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('🚀 بوت SICRO متصل بنجاح!');
});

client.on('message', async (msg) => {
    if (msg.body.toLowerCase() === '!بنك') {
        msg.reply('🏦 أهلاً بك في بنك SICRO! رصيدك الحالي 100,000 عملة.');
    }
});

client.initialize();
