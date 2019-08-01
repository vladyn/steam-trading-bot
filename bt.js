const SteamUser = require('steam-user');
const credentials = require('./config');
const client = new SteamUser();

const loginOptions = {
  accountName: credentials.username,
  password: credentials.password,
};

client.logOn(loginOptions);
client.on('loggedOn', () => {
  console.log('logon success');
  client.setPersona(SteamUser.Steam.EPersonaState.Online);
});
