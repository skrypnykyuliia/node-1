const fs = require('fs');

const logMessage = (message) => {
    const logEntry = `${new Date().toISOString()} - ${message}\n`;

    fs.appendFile('log.txt', logEntry, { encoding: 'utf8' }, (err) => {
        if (err) {
            console.error('Ошибка при записи в лог файл:', err);
        } else {
            console.log('Сообщение успешно записано в лог.');
        }
    });
};

module.exports = { logMessage };




