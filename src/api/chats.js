const axios = require('axios');

const api = 'http://localhost:4848'

module.exports.sendChatMessage = function sendChatMessage(message, user) {
    return axios.post(`${api}/api/chats`, {})
}