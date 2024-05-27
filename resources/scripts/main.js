// var client_id = 'b4d5907d03134b1895bcb5a1694331df';
// var client_secret = 'fd685abfdbc74334964c52e52187117f';
// var redirect_uri = 'http://localhost:3000/callback';

// const generateRandomString = (length) => {
//     return crypto
//     .randomBytes(60)
//     .toString('hex')
//     .slice(0,length);
// }


// var stateKey = 'spotify_auth_state';
// var app = express();

// app.use(express.static(__dirname + '/public'))
//     .use(cors())
//     .use(cookieParser());

// app.get('/login', function(req, res) {

//     var state = generateRandomString(16);
//     res.cookie(stateKey, state);

//     var scope = 'user-modify-playback-state';
//     res.redirect('https://acounts.spotify.com/authorize?' +
//         querystring.stringify({
//             response_type: 'code',
//             client_id: client_id,
//             scope: scope,
//             redirect_uri: redirect_uri,
//             state: state
//         }));
// });

// app.get('/callback', function(req, res) {
//     var code = req.query.code || null;
//     var state = req.query.state || null;
//     var storedState = req.cookies ? req.cookies[stateKey] : null;

//     if (state === null || state !== storedState) {
//         res.redirect('/#' + 
//             querystring.stringify({
//                 error: 'state_mismatch'
//             }));
//     } else {
//         res.clearCookie(stateKey);
//         var authOptions = {
//             url: 'https://accounts.spotify.com/api/token',
//             form: {
//                 code: code,
//                 redirect_uri: redirect_uri,
//                 grant_type: 'authorization_code'
//             },
//             headers: {
//                 'content-type': 'application/x-www-form-urlencoded',
//                 Authorization: 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//             },
//             json: true
//         };

//         request.post(authOptions, function(error, response, body) {
//             if (!error && response.statusCode === 200) {
//                 var access_token = body.access_token,
//                     refresh_token = body.refresh_token;

//                 var options = {
//                     url: 'https://api.spotify.com/v1/me',
//                     headers: { 'Authorization': 'Bearer ' + access_token },
//                     json: true
//                 };

//                 // use access token to access the Spotify Web API
//                 request.get(options, function(error, response, body) {
//                     console.log(body);
//                 });

//                 // we can also pass the token to the browser to make requests from there
//                 res.redirect('/#' +
//                     querystring.stringify({
//                         access_token: access_token,
//                         refresh_token: refresh_token
//                     }));
//             } else {
//                 res.redirect('/#' +
//                     querystring.stringify({
//                         error: 'invalid_token'
//                     }));
//             }
//         });
//     }
// });

// app.get('/refresh_token', function(req, res) {
//     var refresh_token = req.query.refresh_token;
//     var authOptions = {
//         url: 'https://accounts.spotify.com/api/token',
//         headers: { 
//             'content-type': 'application/x-www-form-urlencoded',
//             'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')) 
//         },
//         form: {
//             grant_type: 'refresh_token',
//             refresh_token: refresh_token
//         },
//         json: true
//     };
  
//     request.post(authOptions, function(error, response, body) {
//         if (!error && response.statusCode === 200) {
//             var access_token = body.access_token,
//                 refresh_token = body.refresh_token;
//             res.send({
//             'access_token': access_token,
//             'refresh_token': refresh_token
//             });
//         }
//     });
// });

// console.log('Listening on 3000');
// app.listen(3000);


const postData = {
    grant_type: 'client_credentials',
    client_id: 'b4d5907d03134b1895bcb5a1694331df',
    client_secret: 'fd685abfdbc74334964c52e52187117f',
    redirect_uri: 'http://192.168.1.17:3000/'
};
//let access_token = ''

const artistCheckbox = document.querySelector("#artistCheck");
const artistText = document.querySelector("#artist");
artistText.style.visibility = "hidden";

artistCheckbox.addEventListener("change", () => {
    if (artistCheckbox.checked) {
        artistText.style.visibility = "visible";
    } else {
        artistText.style.visibility = "hidden";
        artistText.value = "";
    }
})

const artC = document.querySelector("#artNameCheck");
const artV = document.querySelector("#art");
const artB = document.querySelector("#addArt");
const artL = document.querySelector("#artList");
artV.style.visibility = "hidden";
artB.style.visibility = "hidden";
artL.style.visibility = "hidden";

artC.addEventListener("change", () => {
    if (artC.checked) {
        artV.style.visibility = "visible";
        artB.style.visibility = "visible";
        artL.style.visibility = "visible";
    } else {
        artV.style.visibility = "hidden";
        artB.style.visibility = "hidden";
        artL.style.visibility = "hidden";
        artV.value = "";
    }
})
artV.addEventListener("change", () => {
    searchArt();
})

const popC = document.querySelector("#popularityCheck");
const popV = document.querySelector("#popularity");
popV.style.visibility = "hidden";

popC.addEventListener("change", () => {
    if (popC.checked) {
        popV.style.visibility = "visible";
    } else {
        popV.style.visibility = "hidden";
    }
})

const engC = document.querySelector("#energyCheck");
const engV = document.querySelector("#energy");
engV.style.visibility = "hidden";

engC.addEventListener("change", () => {
    if (engC.checked) {
        engV.style.visibility = "visible";
    } else {
        engV.style.visibility = "hidden";
    }
})

const valC = document.querySelector("#valenceCheck");
const valV = document.querySelector("#valence");
valV.style.visibility = "hidden";

valC.addEventListener("change", () => {
    if (valC.checked) {
        valV.style.visibility = "visible";
    } else {
        valV.style.visibility = "hidden";
    }
})

const tempC = document.querySelector("#tempoCheck");
const tempV = document.querySelector("#tempo");
tempV.style.visibility = "hidden";

tempC.addEventListener("change", () => {
    if (tempC.checked) {
        tempV.style.visibility = "visible";
    } else {
        tempV.style.visibility = "hidden";
    }
})

const qC = document.querySelector("#quantCheck");
const qV = document.querySelector("#quant");
qV.style.visibility = "hidden";

qC.addEventListener("change", () => {
    if (qC.checked) {
        qV.style.visibility = "visible";
    } else {
        qV.style.visibility = "hidden";
    }
})

fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(postData)
})
.then(response => response.json())
.then(data => {
    accessToken = data.access_token;
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
})

let artistID='';
function searchArt() {
    let searchURL = 'https://api.spotify.com/v1/search?access_token='+accessToken+'&type=artist';
    let searchQuery = encodeURIComponent(artV.value);
    searchURL += '&q='+searchQuery;
    fetch(searchURL)
    .then(response => response.json())
    .then(data => {
        if (artistID != '') {artistID += ','};
        artistID += data.artists.items[0].id;
        let artistInList = '<li>' + '<img src=\"' + data.artists.items[0].images[2].url + '\" width=\"60px\" height=\"auto\"> ' + data.artists.items[0].name
        + '</li>';
        artL.innerHTML += artistInList;
    })
}

function getRecs() {
    let recommendURL = 'https://api.spotify.com/v1/recommendations?access_token='+accessToken;
    if (artistCheckbox.checked) {recommendURL += '&seed_artists='+artistText.value.match(/artist\/(\w+)/)[1]}
    if (artC.checked) {recommendURL += '&seed_artists='+artistID}
    if (popC.checked) {recommendURL += '&target_popularity='+popV.value}
    if (engC.checked) {recommendURL += '&target_energy='+engV.value}
    if (valC.checked) {recommendURL += '&target_valence='+valV.value}
    if (tempC.checked) {recommendURL += '&target_tempo='+tempV.value}
    if (qC.checked) {recommendURL += '&limit='+qV.value}
    fetch(recommendURL)
    .then(response => response.json())
    .then(data => {
        let songList = document.getElementById("recs");
        let listText = '';
        for(let i = 0; i < data.tracks.length; i++) {
            listText += '<li>' + '<img src=\"' + data.tracks[i].album.images[0].url + '\" width=\"60px\" height=\"auto\"> ' + data.tracks[i].name + ' (by ' + data.tracks[i].artists[0].name + ') </li>';
        }
        songList.innerHTML = listText;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })
}

async function requestAccess() {
    const generateRandomString = (Length) => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const values = crypto.getRandomValues(new Uint8Array(length));
        return values.reduce((acc,x) => acc + possible[x % possible.length], "");
    }

    const codeVerifier = generateRandomString(64);

    const sha256 = async (plain) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(plain);
        document.getElementById('header').textContent = 'hehe';
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
        document.getElementById('header').textContent = 'hehe';
        return hashBuffer
    }

    const base64encode = (input) => {
        return btoa(String.fromCharCode(...new Uint8Array(input)))
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    }

    //const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);

    const scope = 'user-modify-playback-state';
    const authUrl = new URL("https://accounts.spotify.com/authorize")

    window.localStorage.setItem('code_verifier', codeVerifier);

    const params = {
        response_type: 'code',
        client_id: postData.client_id,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: "http://192.168.1.17:3000/"
    }

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    let codeVerifier2 = localStorage.getItem('code_verifier');

    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: postData.client_id,
            grant_type: 'authorization_code',
            code,
            redirect_uri: postData.redirect_uri,
            code_verifier: codeVerifier2,
        }),
    }

    const body = await fetch(url, payload);
    const response = await body.json();

    localStorage.setItem('access_token', response.access_token);
    fetch('https://api.spotify.com/v1/me/player/next&access_token='+localStorage.getItem('access_token'));
}


