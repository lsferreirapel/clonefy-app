// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "16ded20121f2453c8173b8690eaffb27";
// just to debug !! REMOVE after finished developing...
// const redirectUri = "http://localhost:3000/";
const redirectUri = "https://clonefy.vercel.app/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// https://accounts.spotify.com/
// pt-BR/authorize?client_id=16ded20121f2453c8173b8690eaffb27
// &redirect_uri=http:%2F%2Flocalhost:3000%2F
// &scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state
// &response_type=token&show_dialog=true