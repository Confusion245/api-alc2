
__path = process.cwd()

//var aexm = require('@lolikillers/aexm-api');
var express = require('express');
var db = require(__path + '/database/db');
try {
var kuhong = db.get('ojan'); 
} catch (e) {
	console.log('WELCOME TO MY API!') 
}


var axios = require('axios');
var qs = require('qs');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var fs = require('fs')
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var ytsd = require('ytsr')
var yts = require('yt-search')
var request = require('request');
var xa = require('xfarr-api')

var fs = require('fs');

var router  = express.Router();
var creator = 'ConfuMods'
const listkey = ["Hent","Hiro-Be","ConfuMods","T2FzaXNCT1Q=","Bot-Tiburon","XavyKey","sofff"]; 
const listkeyp = ["Confu1209","Hiro"]
////////////////KEYS

const alpha = ['Alphabot']
const alc = ['ConfuMods']     
const lolh = ['ConfuKeyLolhuman']

////////////////
var { otakudesu, covid, ongoing, komiku, tebakgambar, surah, sholat, lirik, chara,wattpad, playstore, linkwa, pinterest ,igdl,igstory, igstalk,twitter,fbdown,youtube,ttdownloader} = require(__path + '/lib/scrape.js');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var { getBuffer } = require(__path + '/lib/functions.js');
var { mediafireDl } = require(__path + '/lib/mediafire.js')
var { wikiSearch } = require(__path + '/lib/wiki.js')
var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

_ = require('lodash')
__path = process.cwd();

loghandler = {
    error: {
        status: false,
        code: 503,
        message: 'Servicio no disponible/en mantenimiento',
        maintanied_by: `${creator}`
    },
    apikey: {
    	status: false,
    	code: 403,
    	message: 'Error, apikey no válida, contácteme en whatsapp para obtener una apikey',
    	maintanied_by: `${creator}`
    },
        apikeyp: {
N: '╭──────「 *𝗦𝗘𝗥𝗩𝗜𝗖𝗘* 」',
O: `│+ Lo siento no cuentas con una Apikey Premiun [❌]`,
P: '╰──────「 𝗣𝗥𝗘𝗠𝗜𝗨𝗡 」────'   
    },

    noturl: {
    	status: false,
    	code: 403,
    	message: 'Error, URL no válida, ingrese parámetro url',
    	maintanied_by: `${creator}`,
    }
    } 

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Apriliya-Putri-Fatmawati'+'LOLI--KILLERS';
        
 
 async function cekApiKey(api) {
 	ap = await lolkill.findOne({apikey:api})
 return ap;
 }
 
 
router.get('/keys', async (req, res, next) => {               	       
var apikey = req.query.apikey
    if(listkeyp.includes(apikey)){
res.json({
lolhuman: `${lolh}`
})
} else {
res.json({
Creador: `${creator}`,
alpha: `${alpha}`,
alc: `${alc}` 
})
}
})
 
 
 router.get('/awa', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
       	        if(listkeyp.includes(apikey)){
       
          
res.json({
listkey   
})
} else {
  res.json(loghandler.apikeyp)
}
})

 
 
 router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email;

    if (!apikey) return res.json(loghandler.apikey)
    if (!(apikeyInput && email)) return res.json(loghandler.notAddApiKey)
    if (apikey != `${keyapi}`) return res.json(loghandler.invalidKey)

    try {
        lolkill.insert({
            apikey: apikeyInput,
            email: email
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'datos agregados con éxito, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})
router.get('/encode-decode/encode-32', async (req, res, next) => {
          var apikey = req.query.apikey
          var text1 = req.query.text
        if (!apikey) return res.json(loghandler.apikey)
                if(listkey.includes(apikey)){
        	       if (!text1) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
try {
var base32 = require('base-32').default;
var sttr = text1;
var enocde = base32.encode(sttr); 
        var result = enocde;
             res.json({
                 result
             })

    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
                 } else {
  res.json(loghandler.apikey)
}
})

router.get('/encode-decode/decode-32', async (req, res, next) => {
          var apikey = req.query.apikey
          var text1 = req.query.text
        if (!apikey) return res.json(loghandler.apikey)
                if(listkey.includes(apikey)){
        	       if (!text1) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
try {
var base32 = require('base-32').default;
var encodedString = text1;
var deocde = base32.decode(encodedString);
        var result = deocde;
             res.json({
                 result
             })

    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
                 } else {
  res.json(loghandler.apikey)
}
})







router.get('/encode-decode/encode-64', async (req, res, next) => {
          var apikey = req.query.apikey
          var text1 = req.query.text
        if (!apikey) return res.json(loghandler.apikey)
                if(listkey.includes(apikey)){
        	       if (!text1) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
try {
var base64 = require('base-64');
var utf8 = require('utf8');
 
var texto = text1;
var bytes = utf8.encode(texto);
var encoded = base64.encode(bytes);
        var result = encoded;
             res.json({
                 result
             })

    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
                 } else {
  res.json(loghandler.apikey)
}
})
router.get('/encode-decode/decode-64', async (req, res, next) => {
          var apikey = req.query.apikey
          var text1 = req.query.text
        if (!apikey) return res.json(loghandler.apikey)
                        if(listkey.includes(apikey)){
        	       if (!text1) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
try {
var base64 = require('base-64');
var utf8 = require('utf8');
 
var texto = text1;;
var bytes = base64.decode(texto);
var decoded = utf8.decode(bytes);
        var result = decoded;
             res.json({
                 result
             })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
                     } else {
  res.json(loghandler.apikey)
}
})






router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.apikey)
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `No te olvides de seguirme en ig https://instagram/confumods`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})

/////////CHICAS
router.get('/chicas/muslos', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        muslo = ['https://i.ibb.co/Ks9pb1W/9f275380edf9dc880dcb0d5a3dbca6a3.jpg','https://i.ibb.co/gjWXmLC/3533226e711339839b60209457671490.jpg','https://i.ibb.co/Df0zdtS/6ef792e23a344133d949d93b1a1aad6c.jpg','https://i.ibb.co/bFfmLkK/eb8c5decd4d48b8b7badf53ed347548f.jpg','https://i.ibb.co/Cs7xCYb/e705e7ef851fd1ef28f5c5c82503d5a8.jpg','https://i.ibb.co/CQmGxrK/4fd449e4e7e204a325c46463c1317641.jpg','https://i.ibb.co/nrYJF36/f74f9dcd3ce561498aec4b286fe4aac9.jpg','https://i.ibb.co/nkDHBTb/2ad1fec7d236cf75824f85befc500041.jpg','https://i.ibb.co/vz8q1qt/6f565b5df7569ed4f7eda640f75ed36f.jpg','https://i.ibb.co/ftVqRqM/3e13d6cd29484e3ab0a6a0a1ae65ae5f.jpg','https://i.ibb.co/bLXgpMJ/fa9d739c1a74a16e6519ef4dd139d9b9.jpg','https://i.ibb.co/Qf279kq/2694e690c81b422228983d87958bc709.jpg','https://i.ibb.co/x3nmQgV/d72e49c3eeffc55ba2429b04073fa19f.jpg','https://i.ibb.co/PjbnGTp/471a10c0c619ff7702704d5a0febdb16.jpg','https://i.ibb.co/Ks2KKqv/c37311806fb683ad5a49addb1102f3cb.jpg','https://i.ibb.co/S61JVWX/db541d80edf7f4a4ab4f81732e54a4f2.jpg','https://i.ibb.co/sP6sVdk/FB-IMG-1642689411976.jpg','https://i.ibb.co/NTSV58v/FB-IMG-1642689388533.jpg','https://i.ibb.co/3TVnhxj/FB-IMG-1642689192131.jpg','https://i.ibb.co/BfkFZWC/FB-IMG-1642689182522.jpg','https://i.ibb.co/3TVnhxj/FB-IMG-1642689192131.jpg','https://i.ibb.co/Dpjk4dK/FB-IMG-1642689178538.jpg','https://i.ibb.co/HNLKhqt/FB-IMG-1642689287403.jpg','https://i.ibb.co/y6GQ9Bm/FB-IMG-1642689278174.jpg','https://i.ibb.co/XSKcYxr/FB-IMG-1642689166950.jpg','https://i.ibb.co/bKQcq1g/FB-IMG-1642689269847.jpg','https://i.ibb.co/cvPYWJ4/FB-IMG-1642689245092.jpg','https://i.ibb.co/gSQnrGt/FB-IMG-1642689052853.jpg','https://i.ibb.co/kHJys56/FB-IMG-1642689230981.jpg','https://i.ibb.co/44PY1Zk/IMG-20220120-WA0040.jpg','https://i.ibb.co/9NpYdHb/FB-IMG-1642689225093.jpg','https://i.ibb.co/7zqM19Q/FB-IMG-1642689431145.jpg','https://i.ibb.co/W6JpfjS/FB-IMG-1642689213385.jpg','https://i.ibb.co/z2VCcZL/36.jpg','https://i.ibb.co/bQV5L57/19.jpg','https://i.ibb.co/r7SLyW9/44.jpg','https://i.ibb.co/X88smdC/52.jpg','https://i.ibb.co/M6Y8r1J/28.jpg','https://i.ibb.co/McYdssM/37.jpg','https://i.ibb.co/C8rXsvn/2.jpg','https://i.ibb.co/86vLPkV/29.jpg','https://i.ibb.co/LNWqFkN/46.jpg','https://i.ibb.co/59qq440/43.jpg','https://i.ibb.co/WpqFBZF/51.jpg','https://i.ibb.co/tqVskKX/34.jpg','https://i.ibb.co/GM0JJqB/1.jpg','https://i.ibb.co/947G8YP/38.jpg','https://i.ibb.co/8dkVGhd/5.jpg','https://i.ibb.co/Yp6tY14/33.jpg','https://i.ibb.co/Wsz4z67/26.jpg','https://i.ibb.co/z2nhgp1/20.jpg','https://i.ibb.co/n08nQp9/13.jpg','https://i.ibb.co/0Zy8yKt/4.jpg','https://i.ibb.co/30fXMPs/50.jpg','https://i.ibb.co/tDR6fP7/39.jpg','https://i.ibb.co/FW0RXMh/32.jpg','https://i.ibb.co/6rdkMwz/45.jpg','https://i.ibb.co/10Jjk7t/3.jpg','https://i.ibb.co/Sr9wqjJ/27.jpg','https://i.ibb.co/2jVPfhn/14.jpg','https://i.ibb.co/XsJ8JQ7/7.jpg','https://i.ibb.co/4MgmmWQ/31.jpg','https://i.ibb.co/mc37mfg/8.jpg','https://i.ibb.co/GVqcd8J/15.jpg','https://i.ibb.co/nsF78RH/22.jpg','https://i.ibb.co/vj0By92/24.jpg','https://i.ibb.co/0XhzZN9/6.jpg','https://i.ibb.co/q03wSgZ/16.jpg','https://i.ibb.co/ZfdNQW8/30.jpg','https://i.ibb.co/Gs15rLT/9.jpg','https://i.ibb.co/WVWCT7f/21.jpg','https://i.ibb.co/gZs87zq/25.jpg','https://i.ibb.co/yqcwyv1/12.jpg','https://i.ibb.co/ydYvKzm/17.jpg','https://i.ibb.co/kD4X4y0/42.jpg','https://i.ibb.co/whxxqNv/47.jpg','https://i.ibb.co/4JZy1R3/11.jpg','https://i.ibb.co/cr2McHR/35.jpg','https://i.ibb.co/CsnjVHF/48.jpg','https://i.ibb.co/LYM5ZDx/41.jpg','https://i.ibb.co/4WScd2W/18.jpg','https://i.ibb.co/R6HVC5g/40.jpg','https://i.ibb.co/1GT0dVg/49.jpg','https://i.ibb.co/XbYMYxL/53.jpg','https://i.ibb.co/RS27hgF/23.jpg','https://i.ibb.co/92BxN3c/10.jpg']
        var result = muslo[Math.floor(Math.random() * muslo.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

///////////////pentol

router.get('/other/pentol', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/wallpaper/pentol?apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

///////////////Dibujos animados

router.get('/other/cartoon', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/wallpaper/kartun?apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

////////////////CyberSpace

router.get('/other/cyberspace', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/wallpaper/cyberspace?apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

////////////////////Gaming

router.get('/other/gaming', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/wallpaper/gaming?apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
/////////////////Programing
router.get('/other/programing', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/wallpaper/programing?apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

///////////////////Wallpaper aesterhic

router.get('/other/wallpaper-aesthetic', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/wallpaper/wallhp?apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

//////////////////////cosplay anime

router.get('/anime/cosplay', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/random/cosplay?apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

/////////////////gfx
router.get('/edit/gfx', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       if(!text) return res.json({ status : false, creador : `${creator}`, message : "Falta el parámetro text!"})
          
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/canvas/gfx1?text=${text}&apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})


/////////////////gfx2

router.get('/edit/gfx2', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       if(!text) return res.json({ status : false, creador : `${creator}`, message : "Falta el parámetro text!"})
          
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/canvas/gfx2?text=${text}&apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

///////////////gfx3

router.get('/edit/gfx3', async (req, res, next) => {
          var apikey = req.query.apikey
          var text1 = req.query.text1
          var text2 = req.query.text2
       if(!text1) return res.json({ status : false, creador : `${creator}`, message : "Falta el parámetro text!"})
       if(!text2) return res.json({ status : false, creador : `${creador}`, message : "Falta el parámetro text2!"})     
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/canvas/gfx3/?text=${text1}&text2=${text2}&apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

////////////////===welcome1

router.get('/other/welcome', async (req, res, next) => {
          var apikey = req.query.apikey
          var nombre = req.query.nombre
          var grupo = req.query.grupo
          var grupoft = req.query.grupoft
          var miembros = req.query.miembros
          var perfilft = req.query.perfilft
          var fondo = req.query.fondo
          
       if(!nombre) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de usuario!"})
       if(!grupo) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de el grupo!"})
       if(!grupoft) return res.json({ status : false, creador : `${creator}`, message : "Falta la foto de el grupo!"})
       if(!miembros) return res.json({ status : false, creador : `${creator}`, message : "Falta la cantidad de miembros de el grupo!"})
       if(!perfilft) return res.json({ status : false, creador : `${creator}`, message : "Falta la foto de perfil de el participante!"})
       if(!fondo) return res.json({ status : false, creador : `${creator}`, message : "Falta la imagen para el fondo!"})

       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://hadi-api.herokuapp.com/api/card/welcome3?username=${nombre}&memberCount=${miembros}&gcname=${grupo}&bg=${fondo}&pp=${perfilft}&gcicon=${grupoft}`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})


////////////////////

router.get('/other/verify', async (req, res, next) => {
          var apikey = req.query.apikey
          var nombre = req.query.nombre
          var grupo = req.query.grupo
          var grupoft = req.query.grupoft
          var miembros = req.query.miembros
          var perfilft = req.query.perfilft
          var fondo = req.query.fondo
          
       if(!nombre) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de usuario!"})
       if(!grupo) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de el grupo!"})
       if(!grupoft) return res.json({ status : false, creador : `${creator}`, message : "Falta la foto de el grupo!"})
       if(!miembros) return res.json({ status : false, creador : `${creator}`, message : "Falta la cantidad de miembros de el grupo!"})
       if(!perfilft) return res.json({ status : false, creador : `${creator}`, message : "Falta la foto de perfil de el participante!"})
       if(!fondo) return res.json({ status : false, creador : `${creator}`, message : "Falta la imagen para el fondo!"})

       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://hadi-api.herokuapp.com/api/card/verify2?name=${nombre}&memverify=${miembros}&gcname=${grupo}&gcicon=${grupoft}&pp=${perfilft}&bg=${fondo}`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

//////////////////

router.get('/other/verify2', async (req, res, next) => {
          var apikey = req.query.apikey
          var nombre = req.query.nombre
          var serial = req.query.serial
          var miembros = req.query.miembros
          var perfilft = req.query.perfilft
          var fondo = req.query.fondo
          
       if(!nombre) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de usuario!"})
       if(!miembros) return res.json({ status : false, creador : `${creator}`, message : "Falta la cantidad de miembros de el grupo!"})
       if(!serial) return res.json({ status : false, creador : `${creator}`, message : "Falta el serial de verificación!"})
       if(!perfilft) return res.json({ status : false, creador : `${creator}`, message : "Falta la foto de perfil de el participante!"})
       if(!fondo) return res.json({ status : false, creador : `${creator}`, message : "Falta la imagen para el fondo!"})

       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://hadi-api.herokuapp.com/api/card/verify?nama=${nombre}&member=${miembros}&seri=${serial}&pp=${perfilft}&bg=${fondo}`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

///////////////welcome 2

router.get('/other/welcome3', async (req, res, next) => {
          var apikey = req.query.apikey
          var nombre = req.query.nombre
          var grupo = req.query.grupo
          var miembros = req.query.miembros
          var perfilft = req.query.perfilft
          var fondo = req.query.fondo
          
       if(!nombre) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de usuario!"})
       if(!grupo) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de el grupo!"})
       if(!miembros) return res.json({ status : false, creador : `${creator}`, message : "Falta la cantidad de miembros de el grupo!"})
       if(!perfilft) return res.json({ status : false, creador : `${creator}`, message : "Falta la foto de perfil de el participante!"})
       if(!fondo) return res.json({ status : false, creador : `${creator}`, message : "Falta la imagen para el fondo!"})

       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://api.reysekha.xyz/api/canvas/welcome2?username=${nombre}&groupname=${grupo}&membercount=${miembros}&profile=${perfilft}&background=${fondo}&apikey=apirey`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})




///////////

router.get('/other/welcome2', async (req, res, next) => {
          var apikey = req.query.apikey
          var nombre = req.query.nombre
          var grupo = req.query.grupo
          var miembros = req.query.miembros
          var perfilft = req.query.perfilft
          var fondo = req.query.fondo
          var descriminator = req.query.descriminator
       if(!descriminator) return res.json({ status : falss, creador : `${creator}`, message : "Falta el parámetro descriminator!"})   
       if(!nombre) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de usuario!"})
       if(!grupo) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de el grupo!"})
       if(!miembros) return res.json({ status : false, creador : `${creator}`, message : "Falta la cantidad de miembros de el grupo!"})
       if(!perfilft) return res.json({ status : false, creador : `${creator}`, message : "Falta la foto de perfil de el participante!"})
       if(!fondo) return res.json({ status : false, creador : `${creator}`, message : "Falta la imagen para el fondo!"})

       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://hadi-api.herokuapp.com/api/card/Welcome?nama=${nombre}&descriminator=${descriminator}&memcount=${miembros}&gcname=${grupo}&pp=${perfilft}&bg=${fondo}`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

/////////

///////////k

router.get('/other/goodbye', async (req, res, next) => {
          var apikey = req.query.apikey
          var nombre = req.query.nombre
          var grupo = req.query.grupo
          var miembros = req.query.miembros
          var perfilft = req.query.perfilft
          var fondo = req.query.fondo
          var grupoft = req.query.grupoft

       if(!grupoft) return res.json({ status : false, creador : `${creator}`, message : "Falta la foto de el grupo!"})
       if(!nombre) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de usuario!"})
       if(!grupo) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de el grupo!"})
       if(!miembros) return res.json({ status : false, creador : `${creator}`, message : "Falta la cantidad de miembros de el grupo!"})
       if(!perfilft) return res.json({ status : false, creador : `${creator}`, message : "Falta la foto de perfil de el participante!"})
       if(!fondo) return res.json({ status : false, creador : `${creator}`, message : "Falta la imagen para el fondo!"})

       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://hadi-api.herokuapp.com/api/card/goodbye3?username=${nombre}&memberCount=${miembros}&gcname=${grupo}&bg=${fondo}&pp=${perfilft}&gcicon=${grupoft}`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

/////////

///////////

router.get('/other/goodbye2', async (req, res, next) => {
          var apikey = req.query.apikey
          var nombre = req.query.nombre
          var grupo = req.query.grupo
          var miembros = req.query.miembros
          var perfilft = req.query.perfilft
          var fondo = req.query.fondo
          var descriminator = req.query.descriminator
       if(!descriminator) return res.json({ status : falss, creador : `${creator}`, message : "Falta el parámetro descriminator!"})   
       if(!nombre) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de usuario!"})
       if(!perfilft) return res.json({ status : false, creador : `${creator}`, message : "Falta la foto de perfil de el participante!"})
       if(!grupo) return res.json({ status : false, creador : `${creator}`, message : "Falta el nombre de el grupo!"})
       if(!miembros) return res.json({ status : false, creador : `${creator}`, message : "Falta la cantidad de miembros de el grupo!"})
       if(!fondo) return res.json({ status : false, creador : `${creator}`, message : "Falta la imagen para el fondo!"})

       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        try {
        var result = (`https://hadi-api.herokuapp.com/api/card/goodbye?nama=${nombre}&descriminator=${descriminator}&memcount=${miembros}&gcname=${grupo}&pp=${perfilft}&bg=${fondo}`)
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

/////////
router.get('/awa', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
       	        if(listkeyp.includes(apikey)){
       
          
res.json({
listkey   
})
} else {
  res.json(loghandler.apikeyp)
}
})

////////////////


router.get('/chicas/random-girls', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
grils = ['https://i.ibb.co/X7w1R0P/0b9312cfda11d8eb01bfdab91f01431019.jpg','https://i.ibb.co/pdT2T4x/7c5ceceb0f70de2f518b637d04eb35eb.jpg','https://i.ibb.co/1vcHm1b/c13a19b41edd88d69088f55f73bd7ce1.jpg','https://i.ibb.co/QKGTYYb/62b781bcaaba5d53eb11e5f3de4b14d0.jpg','https://i.ibb.co/X7w1R0P/0b9312cfda11d8eb01bfdab91f01431019.jpg','https://i.ibb.co/tbBL2v8/b08fd6521b56934a51a23bb334cb2f17.jpg','https://i.ibb.co/vc6SpMS/d534c742180e431351649414804143f3.jpg','https://i.ibb.co/RpxDNcP/2c7d7aaffa9e1298a593221b36ef70c4.jpg','https://i.ibb.co/LQGLYSn/f6a05cfd68995124b03d88765d50e1a3.jpg','https://i.ibb.co/m8b4SXP/5406365a590efd13b573fd5ccb59d5ef.jpg','https://i.ibb.co/X7w1R0P/0b9312cfda11d8eb01bfdab91f01431019.jpg','https://i.ibb.co/tJSYt8n/fbbfe61d8a76ca71bd2d4602d01b08ab.jpg','https://i.ibb.co/JFrG7XQ/d3398420127740e8579b5044e2e14940.jpg','https://i.ibb.co/jLFmn7j/d5cd73d5ed220e8a9d195fd465bc2cec.jpg','https://i.ibb.co/54jVvz5/df3e7e6bb8f91665fa636ec75f02406d.jpg','https://i.ibb.co/NYVnxPj/df1e5264ad9104aadea399ae677899ec.jpg','https://i.ibb.co/2F9LRH5/64d3e0da8143c3092680a913da851c7e.jpg','https://i.ibb.co/YXLw5rh/f47f18a47562646d0f3a57568492ae08.jpg','https://i.ibb.co/qJK9yLj/4ec6a2536f46b4585ddc5e37cfcd5123.jpg','https://i.ibb.co/XCqH2ck/aef0d698c9a543463584b7d2ac235037.jpg','https://i.ibb.co/X7w1R0P/0b9312cfda11d8eb01bfdab91f01431019.jpg','https://i.ibb.co/G30CqpL/e7a97d15d3324fa12706dc8613262a2b.jpg','https://i.ibb.co/Dgq2T87/eefa2549a0ff340d8eff9005d948e23a.jpg','https://i.ibb.co/5WKqqtJ/ed7f3e73d062bb0109e2a7565f7ca0d5.jpg','https://i.ibb.co/tJCdJqM/7788fd2f8ade0c1f8a59796375f36086.jpg','https://i.ibb.co/dK6rvy9/9d0a7c3a98499b78e47aca0dfb8af9db.jpg','https://i.ibb.co/9Tdb6T5/e378c273aacde4c93bfc28e68aab4d03.jpg','https://i.ibb.co/WzHCSy3/00f62ca627e8992208bb30f359654c55.jpg','https://i.ibb.co/C0ZqWJk/89e1f64823d9ef57f446ff8dda1b3515.jpg','https://i.ibb.co/YRX4cNc/294713f05aa3999db542caaccee31987.jpg','https://i.ibb.co/zmy7xmc/eed27497c23578161034e26b99a45dbc.jpg','https://i.ibb.co/PGKKyRZ/02cb5c8d503ca25acb622863997d202e.jpg','https://i.ibb.co/3hysF4G/6c6fce3846b27289ebe2173385ab13c5.jpg','https://i.ibb.co/1qysRxx/edc4c8248c2522e56fef9265d136c39f.jpg','https://i.ibb.co/HgS6Sgk/6c6d790d3227217357d0814bb28066f5.jpg','https://i.ibb.co/6r7X5Ds/2385b5a3610210f47449dfdf24ad67e5.jpg','https://i.ibb.co/qNW03KK/a7292a8c64fd5c5628aff225debebbad.jpg','https://i.ibb.co/HDfvgML/714f552aec70fd79ed0b4c68cb8e73e5.jpg','https://i.ibb.co/99rJT44/c0b5b89dd24cecd83261b710b503a6a9.jpg','https://i.ibb.co/cN9wyfs/156483dcd2e9869a06c8b34ba2477d53.jpg','https://i.ibb.co/smMhLww/97984aef1a22f17804b964f498d736ca.jpg','https://i.ibb.co/nP6m20J/10b0db857f134c50fe057d3813174960.jpg','https://i.ibb.co/z298YNc/7e97f2f041887e6a9433a1d99b265d0b.jpg','https://i.ibb.co/DgMVC6k/d5d57f82e2b957a9b042ee51a55eafc8.jpg','https://i.ibb.co/yB2dXrM/ed8255e587876a260b0eedfa406c2a32.jpg','https://i.ibb.co/pWyGSmP/ccb6afcfc2b70e029b7ee6c5b824ea8f.jpg','https://i.ibb.co/D1q3mQz/18c52b958ed3d9ef6be8d836ae95df1f.jpg','https://i.ibb.co/gwmDwcG/2af15b7b80de5678b3c5060cae54d15e.jpg','https://i.ibb.co/ZfKK2S8/4b5f689569d8e47b712f92993eaf6cdb.jpg','https://i.ibb.co/x2V6SBW/7201282cfad651c3a0d42f81f232fe9c.jpg','https://i.ibb.co/GWHz5wY/9bf37d6c89b4fd07007306debd21a49a.jpg','https://i.ibb.co/fQPsKk5/b5ca0588564dfc09ce7cad0e41a11657.jpg','https://i.ibb.co/C9qS3Pm/0835624bf9816ad33372b681b8c395ec.jpg','https://i.ibb.co/TmPmRGD/c75799dac3beb182d6f6de631da40344.jpg','https://i.ibb.co/TrtkmmX/eb5f44c707a8e8bf7c39df683cf06fa2.jpg','https://i.ibb.co/QpCVrgt/52e633d6e73fe9544262b2ee62f02ca1.jpg','https://i.ibb.co/zRfzb50/47868ae5d1357c6a554dadc8e8ecb7f4.jpg','https://i.ibb.co/frX3f4Z/98b198c3a84588a71c7a6aec334ede8c.jpg','https://i.ibb.co/HgVYnx7/d5346c3e71135345f7aa9729fe491201.jpg','https://i.ibb.co/FD9dwf3/9542669046a90d061e387438d8b61e47.jpg','https://i.ibb.co/ft3CvQ6/c232223d1a4fafdd644cbc5e3d81185d.jpg','https://i.ibb.co/k3JtqFt/90a591dfdb1d1cf4881b4f6511a58771.jpg','https://i.ibb.co/GQR0SwV/ea80bbf0deaa9447164f5309e0583692.jpg','https://i.ibb.co/5kz4jg6/c11f093169cbafe36ee78d55eeaa40e6.jpg','https://i.ibb.co/JQMfYsv/8c23e71b98441ad6514a0ca3020b5df0.jpg','https://i.ibb.co/LRdSkZw/acdac723300bd1e66487dc5d9c1d4e1a.jpg','https://i.ibb.co/VVpK6kh/bb6a045c95ca977df5bbd7cb55f497bc.jpg','https://i.ibb.co/McjKfHQ/dcf349ea4a06404bb2f8e6d6bb5c03da.jpg','https://i.ibb.co/hgM3Zrh/fcc00fc612920988e9a57433a50ea6a6.jpg','https://i.ibb.co/jwsW7CZ/fd53811402c385c67eea3dd514ccdaca.jpg','https://i.ibb.co/BfkZq4c/05a5a1813829b8e718c73a09ee9686fd.jpg','https://i.ibb.co/L9TqL9c/e4a11333437f8ce9216df7e5d9c59bdc.jpg','https://i.ibb.co/g3nYrN0/c905e0a2eb42af0378681755edb2a1ea.jpg','https://i.ibb.co/sRyKQyx/1b69e061d89f496a8c9f8181458a38e7.jpg','https://i.ibb.co/xq8xgKV/7ee058d71d82df89ea2bdefdfe592bb7.jpg','https://i.ibb.co/kDCb6DY/db98b6872b4193a527bbc8b71324c5d6.jpg','https://i.ibb.co/n7stXM0/2e03de770489d10baa838f26da7bc814.jpg','https://i.ibb.co/swpB3PJ/2ecdea57af612946ed8e541beab6ad96.jpg','https://i.ibb.co/TwLsWx2/ec77ac5081c93d99a208eb778c4419c6.jpg','https://i.ibb.co/DKR0M0b/1a212f002624d731f3b1490875aa3904.jpg','https://i.ibb.co/QkLj7Qx/6db15265b5e7a6d6d9c11410120d8b41.jpg','https://i.ibb.co/VmyptDb/8338dd00321991b05c2f89e694434860.jpg','https://i.ibb.co/gSNFP2p/910e71f5a2ba4413abb1f2a4dfc692f7.jpg','https://i.ibb.co/yqrPSt8/b23ad577c955aab007d588cfa8764898.jpg','https://i.ibb.co/6tKqxzz/cfb238830ae671d18cbd41c8c03609aa.jpg','https://i.ibb.co/7QwL4kJ/f5ab650a8a989e3f7e1954f78ccdb684.jpg']

        var result = grils[Math.floor(Math.random() * grils.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})



////////////////

router.get('/chicas/ari', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
      ariuwu = ['https://i.ibb.co/5R8STJP/9e6a77222e686109cb2c313719018646.jpg','https://i.ibb.co/qYdHHTS/e678286658aac6df6600a5f601b5288c.jpg','https://i.ibb.co/8NDVbQN/646407207350957a00c82b605775dd56.jpg','https://i.ibb.co/85XXN5p/af4d27e7e07df578e69b42616321dad6.jpg','https://i.ibb.co/Q8XWFmc/7c6719e8622e9aaff2a5b07a020baf6d.jpg','https://i.ibb.co/C1NH9vh/14fb06b3008c44de452b667a1e838010.jpg','https://i.ibb.co/4J5fSnx/6948e3c25adbd1f1b18de1da15062ba0.jpg','https://i.ibb.co/g9Br2mc/4a031aadf4d416d9770791e3f09d78e0.jpg','https://i.ibb.co/rdTwC9t/43bdeb3b62f98024a64b12ed6db6f1c8.jpg','https://i.ibb.co/0tHhk2Z/6c026916852755588a46653fddbcabf9.jpg','https://i.ibb.co/KhgSmdG/c09ae077e6a3c6d18ed3ad8ebda9b0ec.jpg','https://i.ibb.co/nMYxc15/54d3f567779fdee8bb69d2bdd8143cf4.jpg','https://i.ibb.co/mcv1XKm/9231cd5dc3771f11781175679973bc84.jpg','https://i.ibb.co/Sr0q6rH/00a16dd8061a0700f16954d2cd626cd0.jpg','https://i.ibb.co/nLQC64M/7af82d17fd92061a956ba5e31413d6e9.jpg','https://i.ibb.co/N304bfw/0a3f9d91177dc02937f9c645565e738c.jpg','https://i.ibb.co/Yc8pnsG/443c14c717868d3eabf18259350c89c4.jpg','https://i.ibb.co/5sLSbzD/a13c11689156e8d5f67ee017ee3f03f4.jpg','https://i.ibb.co/2gbj9bY/2dbcc946e15525f8621968f0af5cbba1.jpg','https://i.ibb.co/PmTS7cG/ef0279748dddc505081c090c9a20b848.jpg','https://i.ibb.co/C2ptGFF/2924080a0a947bedb00aa8311991e134.jpg','https://i.ibb.co/nb72jNP/d47b4c2451cdce1296972a67bf1ee0ad.jpg','https://i.ibb.co/PWPLMyd/c528f4a88b55d7f30f90a0a118887e10.jpg','https://i.ibb.co/W03PKJQ/c78d6ea33dbc89e8ac341142156374fa.jpg','https://i.ibb.co/MfKBVWk/6db06b3569c5de356219021f152ee43e.jpg','https://i.ibb.co/cyL8B4F/543e0b52c7477be2ba856e7c39fa8da6.jpg','https://i.ibb.co/RQfSSmy/21dac498596dd197f81d313070dbc167.jpg','https://i.ibb.co/PTJct14/df74df05165aaa42a549e83ccda1ed4b.jpg','https://i.ibb.co/rFrFLzd/23bf5a59a8229a8b64085db382a986db.jpg','https://i.ibb.co/ckZWSdw/d021f8e1c78bd5037b1aa83d5720c108.jpg','https://i.ibb.co/PDqgf1S/2f484fc6dbae1075ba41ff1f286a78e5.jpg','https://i.ibb.co/yB9syRC/43f653de285df72699e5da3299f29649.jpg','https://i.ibb.co/60v6nC7/46390118d6f825eda923efeeb47056ea.jpg','https://i.ibb.co/D8D4Nqf/58779f2fbaec9f7cd52bd62c9a60a49e.jpg','https://i.ibb.co/rtRTgyr/6b02748b42b750c50f466fbd9f759554.jpg','https://i.ibb.co/HnrsmX0/7823e180168c562d589f303bc93702b9.jpg','https://i.ibb.co/Z2tcGmB/ab3df83936784d6e8a56d2963ee5d840.jpg','https://i.ibb.co/wMRQSDc/06d251e928078ce399d66fbf0a4f9639.jpg','https://i.ibb.co/6WDLjYM/92496cf5a0b33d8a684670c7ac437d85.jpg','https://i.ibb.co/1RGP6Rk/55e9e9aa9695b799f4881d1dbd79d1da.jpg','https://i.ibb.co/pJQNNT9/2d03f5f8d6c57474874768220618c6cf.jpg','https://i.ibb.co/fFhRgPr/95502b724baeae92e36551e08b9e359b.jpg','https://i.ibb.co/RhpDV1c/38e7418da7f6ce08cbc2cd3a9e8c2741.jpg','https://i.ibb.co/mCRSfXG/85b3e057747d8c4fe49c9dbdb3ee253d.jpg','https://i.ibb.co/pRQkMDH/45d57e182eb1fdd035d4bca2a3d650bd.jpg','https://i.ibb.co/52r5nYb/087ea85f64e599cc3944ca80b665b192.jpg','https://i.ibb.co/4p1vX4M/29ab46d440b232b0bb79fb00e3c563b3.jpg','https://i.ibb.co/SRSRk7k/5b4274f72b6ea45ca890977c7b7ba619.jpg','https://i.ibb.co/Kzs62s6/622089f20ab0f11b8ffc5294e3fe3854.jpg','https://i.ibb.co/Wxzmjb5/12916625c975d4decdde7816dec7db43.jpg','https://i.ibb.co/wQ1FK7w/5ac9267c24c9742ada747c1d384523a4.jpg','https://i.ibb.co/2YNP66s/35ed94dc8856dff0e5d654e12910345e.jpg','https://i.ibb.co/r0RKFY8/4bdd1a09a0f6418adac1e575be1de4f7.jpg','https://i.ibb.co/JdnBrWw/95ac9e5c333372b7bf568bfd7a355955.jpg','https://i.ibb.co/PrL3vR0/c3bb0e213f14c92fa22e8a07401f9256.jpg','https://i.ibb.co/TvWqCmZ/f4e8afa295cf798a66a4476b0006ec8d.jpg','https://i.ibb.co/M1ZSXv1/732a48ca69179fae30db4e9ef6ed3e15.jpg','https://i.ibb.co/64nrkZY/a50aa826cf21c76acfce3eedf2ed3a5a.jpg','https://i.ibb.co/0fwPcS3/246fb7b8833eb0b7c3bf673b5ac83950.jpg','https://i.ibb.co/PWg1fFc/4aa0b8051c3e1118aaeda4869962bdc0.jpg','https://i.ibb.co/ZgR4nXr/10ba331e0d5eada9ea99972875c50cf1.jpg','https://i.ibb.co/5v4RSMJ/94ddf3a62b54ed8803ed01f2194d3bd8.jpg','https://i.ibb.co/ZfVw01Q/310eb4b0123b6ba85e76044807e2c0d0.jpg','https://i.ibb.co/QvZL7KM/cd1fb69cb6e6c3446f9a83faf45459d7.jpg','https://i.ibb.co/1zYDMsH/a2e630c219b4ba8ca2da13dda433ad84.jpg','https://i.ibb.co/y4qPBzV/83d880f8a8ad6c13c2a4d9443e35b442.jpg','https://i.ibb.co/gjqjWcF/ad04ab89108a7107cc6949fe88390b81.jpg','https://i.ibb.co/SQf8X1B/5358236509f0a82c1832c04c6b874d9b.jpg','https://i.ibb.co/Hhzr8Kf/f20a497468b2f32ab388aba50f6c9fd6.jpg','https://i.ibb.co/DwSnJgC/c7e463ef7c620a2b1a0731d533245a21.jpg','https://i.ibb.co/58Hmh2g/e1e112bffb9667464ef5958f821e4a36.jpg','https://i.ibb.co/3Mw5GNK/ed937db9724901351d606458defae1e1.jpg','https://i.ibb.co/pPhqcMM/26f94ad076cb898a5cf35afc6de1bd42.jpg','https://i.ibb.co/9tXnRJH/4b5d43f76478d5b3f7db08ab00910522.jpg','https://i.ibb.co/GRPx5zw/0d7ab91adeee52c27cd66e4f0de6d7f0.jpg','https://i.ibb.co/zSjsymB/366798468ac599ae867b915739da7203.jpg','https://i.ibb.co/86q68kV/c2a4dbd2e2d6e146e4c8307274b8b056.jpg','https://i.ibb.co/hXX8BWv/e78f3ed6b344e08125f283f3ec9a7bc8.jpg','https://i.ibb.co/8YyvVSD/6157d48f1075fd89f61ae2b3786da46e.jpg','https://i.ibb.co/HBX034c/6f0b53c3a47dd96153d53dfd2c1ff9cd.jpg','https://i.ibb.co/0qXhxLL/d74062ef206000e3cdc5754ce07628e8.jpg','https://i.ibb.co/Zmpgdcy/c58af906785e1c7aea28e9d33009cf0b.jpg','https://i.ibb.co/fSnxphz/f0e4ce5e98af770df80b2fe748cfcfdf.jpg','https://i.ibb.co/4pk3TrR/4b884577f6ed7ef31ae42c9c04ea8ee9.jpg','https://i.ibb.co/HGLvx1R/81b5db212f981b5e8579008d266a678a.jpg','https://i.ibb.co/XLTzW8q/52606e4d2027bfd63632c80c1a3eb36b.jpg','https://i.ibb.co/VvDXZHT/73a8889695264319a72484db5dcf33c2.jpg','https://i.ibb.co/4J8LHwP/2d5b9921fa8d0b16f72c7720f7a4555b.jpg','https://i.ibb.co/JvytvcM/98bd26ae8a24e5d7a89694b8af622333.jpg','https://i.ibb.co/KDNBHVg/44257da68c87fffdbae3ee2c2750f508.jpg','https://i.ibb.co/m6F0Lkc/8cd48ed0b2a3f37cda1c692f6785b8bf.jpg','https://i.ibb.co/qN0qB8k/aaecc1b43707ad113edeffb322fbfcbb.jpg','https://i.ibb.co/VqnBmHp/c31bd9c3cd454356980098d44f1ebe5f.jpg','https://i.ibb.co/Ph4x7k1/e13cc38d1c79faf1e0b577a8138351e9.jpg','https://i.ibb.co/6R47YqQ/17d927fa6c0d92cd9b7dfbd7baa6b00a.jpg','https://i.ibb.co/LpkLtPK/2525a738838bf3f794f05d6208d02c88.jpg','https://i.ibb.co/JjHLSWx/f933e5cb801857650b951a2e2a973793.jpg','https://i.ibb.co/FJS6bPp/0bfaf7f5ea6b92a19a1a95388185b69f.jpg','https://i.ibb.co/sP0Ys3m/451ff2c4bfc6be73edd5e08cf9ec12fc.jpg','https://i.ibb.co/kXqWyfW/870da6599eab5b5aa787748b2266162f.jpg','https://i.ibb.co/KjCkj7C/956cd79699070de6664de4b98f335050.jpg','https://i.ibb.co/K618LLC/e0732bf02d1a9c1c127c7191b8d51584.jpg','https://i.ibb.co/1sZW76X/ea168dba8ab7cbb939f589f66fefb1b2.jpg']

        var result = ariuwu[Math.floor(Math.random() * ariuwu.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/chicas/badgirl', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        badgirl = ['https://i.ibb.co/sj2bPYF/d3d784f3b91e162931ee66ff5dcaad55.jpg','https://i.ibb.co/7vqJY0H/8cb259a728ab7e5715480d79f7788407.jpg','https://i.ibb.co/Vt0LJ6B/6983ec0960ccb23e083d31bce5bf98e1.jpg','https://i.ibb.co/tXXzFLg/9a0f4b592b2aa3dfd529550aeaeef315.jpg','https://i.ibb.co/yRH6LSj/f3c02087dc222ab778a4ebe0954e978c.jpg','https://i.ibb.co/F50JpNF/3c4e7fb4076c29deda1ae43c02bbbaf8.jpg','https://i.ibb.co/vw6rx02/ab647d85d13c3d0b64083ca833ca5592.jpg','https://i.ibb.co/JntPN2J/408802071cca03df4acf1fca7cd20b8a.jpg','https://i.ibb.co/YBx7V71/20ab363a93d4137d571ea62e747675e8.jpg','https://i.ibb.co/BsZ5sdT/e7df654fbdafc7d55cc933d0645c23c1.jpg','https://i.ibb.co/CQ1489z/7174f6dc7f9787eb046fdcffa4cbe46b.jpg','https://i.ibb.co/wg7LRz3/452168af14d11b130b7425751ee5e8f7.jpg','https://i.ibb.co/b5ZD1Gz/5394274e8fce9902cb343ce4ce69cc2f.jpg','https://i.ibb.co/YQhM9sx/088837e391be04f77f803a3f9c049fa4.jpg','https://i.ibb.co/VYqMssF/2385b5a3610210f47449dfdf24ad67e5.jpg','https://i.ibb.co/ZW0PzZ5/62bcf6eec04f9b585611274152a887c1.jpg']
        var result = badgirl[Math.floor(Math.random() * badgirl.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/chicas/brasil', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        brasil = ['https://i.ibb.co/mX84Jqy/87.jpg','https://i.ibb.co/p2G4PjK/52.jpg','https://i.ibb.co/71nQB5P/95.jpg','https://i.ibb.co/8X4BT1C/121.jpg','https://i.ibb.co/dJrDN4J/44.jpg','https://i.ibb.co/YPQ0tQT/60.jpg','https://i.ibb.co/fnCJV0T/79.jpg','https://i.ibb.co/0cDqsnT/113.jpg','https://i.ibb.co/Vqfvq9h/36.jpg','https://i.ibb.co/2WKRX8K/26.jpg','https://i.ibb.co/5Gb5p0q/69.jpg','https://i.ibb.co/qYsrZQ9/70.jpg','https://i.ibb.co/nQpWH7x/1.jpg','https://i.ibb.co/zhFC1by/18.jpg','https://i.ibb.co/6g7jMWd/105.jpg','https://i.ibb.co/bJRNdB1/93.jpg','https://i.ibb.co/t3ZR2DM/46.jpg','https://i.ibb.co/qMcnDmb/80.jpg','https://i.ibb.co/4tcj9R3/16.jpg','https://i.ibb.co/7rGkqtJ/115.jpg','https://i.ibb.co/RjRQC1D/34.jpg','https://i.ibb.co/25GcX8P/64.jpg','https://i.ibb.co/ZLkbsQb/77.jpg','https://i.ibb.co/W2v4GCy/62.jpg','https://i.ibb.co/8z6VgRm/75.jpg','https://i.ibb.co/RbRBByy/32.jpg','https://i.ibb.co/5s42vn0/8.jpg','https://i.ibb.co/ZYrdqv1/59.jpg','https://i.ibb.co/RTvFwb0/28.jpg','https://i.ibb.co/rdXkgKQ/103.jpg','https://i.ibb.co/pPsKKdB/50.jpg','https://i.ibb.co/DzCzFqb/89.jpg','https://i.ibb.co/pdMLk5h/5.jpg','https://i.ibb.co/2th8kSt/109.jpg','https://i.ibb.co/HKbqbvd/82.jpg','https://i.ibb.co/rm48KFc/73.jpg','https://i.ibb.co/ZmqmHSr/90.jpg','https://i.ibb.co/D1F5dFq/100.jpg','https://i.ibb.co/9p9c7Wp/99.jpg','https://i.ibb.co/gdLnxZF/13.jpg','https://i.ibb.co/mC380v4/56.jpg','https://i.ibb.co/njHnWyx/48.jpg','https://i.ibb.co/RC5RRrB/65.jpg','https://i.ibb.co/kyFCN3s/118.jpg','https://i.ibb.co/GFVtMLq/22.jpg','https://i.ibb.co/2SqtcHn/39.jpg','https://i.ibb.co/9TKZGJQ/107.jpg','https://i.ibb.co/jgNpWcP/71.jpg','https://i.ibb.co/HBSLzxv/41.jpg','https://i.ibb.co/X8VMmYc/111.jpg','https://i.ibb.co/HKFK9mW/84.jpg','https://i.ibb.co/nznPQtB/3.jpg','https://i.ibb.co/dPbpHDD/97.jpg','https://i.ibb.co/ngXkRmZ/11.jpg','https://i.ibb.co/w70zF7t/54.jpg','https://i.ibb.co/RNHTwkY/67.jpg','https://i.ibb.co/x8fFVvD/24.jpg','https://i.ibb.co/19d86vn/37.jpg','https://i.ibb.co/y8TtWJZ/27.jpg','https://i.ibb.co/pdT12qR/9.jpg','https://i.ibb.co/9h2ShK6/19.jpg','https://i.ibb.co/pxtz10F/53.jpg','https://i.ibb.co/dfvfMc1/104.jpg','https://i.ibb.co/pPjFHGr/10.jpg','https://i.ibb.co/9GHZ43w/88.jpg','https://i.ibb.co/rcsXdHK/86.jpg','https://i.ibb.co/KDrHN5D/106.jpg','https://i.ibb.co/kB8cjHk/43.jpg','https://i.ibb.co/kcYhww4/96.jpg','https://i.ibb.co/SXsPKLT/78.jpg','https://i.ibb.co/CPz3yTR/35.jpg','https://i.ibb.co/fCtZWdS/61.jpg','https://i.ibb.co/vZCZThH/114.jpg','https://i.ibb.co/GCyhRQr/63.jpg','https://i.ibb.co/5K441Gk/102.jpg','https://i.ibb.co/g735Kw1/20.jpg','https://i.ibb.co/1qG0pfp/33.jpg','https://i.ibb.co/WzvH9BS/17.jpg','https://i.ibb.co/rHd9cxh/7.jpg','https://i.ibb.co/VV9BWp7/29.jpg','https://i.ibb.co/12BjBC4/47.jpg','https://i.ibb.co/xDg74nh/92.jpg','https://i.ibb.co/DQVpZFQ/51.jpg','https://i.ibb.co/M2yqLDn/45.jpg','https://i.ibb.co/ZTdVgdm/94.jpg','https://i.ibb.co/BqLFwc9/58.jpg','https://i.ibb.co/0y2Jt25/15.jpg','https://i.ibb.co/c1R7c8H/81.jpg','https://i.ibb.co/LCB253h/120.jpg','https://i.ibb.co/fQxQJJr/116.jpg','https://i.ibb.co/1dJYJy1/76.jpg','https://i.ibb.co/G5Fjp6J/14.jpg','https://i.ibb.co/jrL45q0/31.jpg','https://i.ibb.co/NyzyVSJ/57.jpg','https://i.ibb.co/8rKjyXn/66.jpg','https://i.ibb.co/L1ZWTFs/117.jpg','https://i.ibb.co/ZGCMwyL/4.jpg','https://i.ibb.co/RgDwccm/49.jpg','https://i.ibb.co/FY389fD/23.jpg','https://i.ibb.co/fDRQrdQ/21.jpg','https://i.ibb.co/VJ38GTh/119.jpg','https://i.ibb.co/y0RW0w7/6.jpg','https://i.ibb.co/b6qzDxy/83.jpg','https://i.ibb.co/vzt9rjS/40.jpg','https://i.ibb.co/5KmySSG/91.jpg','https://i.ibb.co/9cZ8pkm/110.jpg','https://i.ibb.co/zRQk0pF/74.jpg','https://i.ibb.co/jDqd2CR/101.jpg','https://i.ibb.co/q09Qb8X/38.jpg','https://i.ibb.co/5kXGB0n/68.jpg','https://i.ibb.co/9rMtpKN/2.jpg','https://i.ibb.co/tM4Rqd4/55.jpg','https://i.ibb.co/9tWjXd5/98.jpg','https://i.ibb.co/GT65ycp/42.jpg','https://i.ibb.co/WkZGywj/12.jpg','https://i.ibb.co/ns5c0xF/25.jpg','https://i.ibb.co/0cLvt10/108.jpg','https://i.ibb.co/TmQc1qk/85.jpg','https://i.ibb.co/WGRj3Wg/72.jpg','https://i.ibb.co/C5yNS60/112.jpg']
   
             var result = brasil[Math.floor(Math.random() * brasil.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/chicas/say_cat', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
       saycat =  ['https://i.ibb.co/fDkZ9Q7/fbe293dcbef1e1b6c1f0837467239989.jpg','https://i.ibb.co/Hh4rpSD/e1f6458ff92ca1e721f0b3683337ee77.jpg','https://i.ibb.co/tXs4QgG/9f10005b87ee6a92b1f754204af4ac90.jpg','https://i.ibb.co/yX117wv/039a60842099fa85b855aa9845445d8a.jpg','https://i.ibb.co/M5HGbQP/a314c6b31fed93de30bf34503a4502ab.jpg','https://i.ibb.co/5LP5Q9L/246b6b805d8f127e2e76144ec4ea9215.jpg','https://i.ibb.co/NmrwVjn/cb981736ec4bc1f57a2c42066ddce279.jpg','https://i.ibb.co/s1kBRXb/bb13c694d85162b93ae580b59290be6a.jpg','https://i.ibb.co/X4242XP/63b0737b9dbf7d0b0d964454e687e62f.jpg','https://i.ibb.co/gFbZ4Rg/84c670298c017be806b0fbea58cd8cf6.jpg','https://i.ibb.co/xSKqdpy/99b7585459bef6db9a1130982d4b5a98.jpg','https://i.ibb.co/C048zT2/c69f6a1318ae85c15df5b990c6be8dc6.jpg','https://i.ibb.co/t4MYSVN/af2cdae91811f6b7968e7bd09dcb3659.jpg','https://i.ibb.co/VmvvWWs/862a220ba5af5c593d62776e207b4fec.jpg','https://i.ibb.co/N7r7drm/332db2015a188704410ae45a640f51f0.jpg','https://i.ibb.co/px7YKjZ/27f7ade67921c255a4d72de25d9bbeb0.jpg','https://i.ibb.co/SQrpFk7/411504c9e47f54c40b693d003dddf9f5.jpg','https://i.ibb.co/26fYQn3/24d4494afc7fef8fc7e9ba1e27fa69e2.jpg','https://i.ibb.co/VgHmymy/8a41092010f2a648318360e1db3a9202.jpg','https://i.ibb.co/mSgX0ZS/147dc486339c69b7083d2f2c88aa9613.jpg','https://i.ibb.co/yqb0fGQ/78d32ed38a82ca62242d1b4d1e7903ae.jpg','https://i.ibb.co/x2VH8JH/59aede80c8c8d5f4e119e91ed0d4fd6a.jpg','https://i.ibb.co/P9LBzLv/3d87af716adf5fdc273415b97ea371c3.jpg','https://i.ibb.co/X7YQ4X3/d1c8de196574eca82f92df3e329fc067.jpg','https://i.ibb.co/WyVgCPg/9e42cb416d382abf34b15ce59aecc053.jpg','https://i.ibb.co/djFRsh3/d9888b67cb7be7143caa767daa9bcf2e.jpg','https://i.ibb.co/yqCRXFn/3c8fb5121135324abc806aefba7b674e.jpg','https://i.ibb.co/qRGvdbX/471415ccb80fafd8524c6a95684aaf79.jpg','https://i.ibb.co/QJ19xFn/1219f56ebef219fbd6f8d11c682e8423.jpg','https://i.ibb.co/ww862DM/337d3ac8e61f24297023483c8abe312d.jpg','https://i.ibb.co/DR7wrRt/34806789a806894edccccb87a4f32ba0.jpg','https://i.ibb.co/nCx4shc/69735b9ddc4168a7ad923fbc09160c94.jpg','https://i.ibb.co/5rcYzv2/d3f1dbba0d3805dec6d000011e65d669.jpg','https://i.ibb.co/0jtkNBw/a3010b20cb448564103fa775677245be.jpg','https://i.ibb.co/98t1SyY/e2d3dc43f90221c7dc809e169a538d78.jpg','https://i.ibb.co/fXWS52X/275b9719a1f44e4ae7ea6ffaf90567bc.jpg','https://i.ibb.co/0XyNn33/616a5de92dfa105bac299376dc9152a0.jpg','https://i.ibb.co/MBwCGdW/d0664c66d44a4d9a45de97a759fb13e9.jpg','https://i.ibb.co/F3kSTFm/0ce70a2b6131ed279ee415e72460ad3a.jpg','https://i.ibb.co/YkMpH57/29142e7490472a24bb95d6ad100eee18.jpg','https://i.ibb.co/frV7qDF/35f58422e9300ecc80c226316b776f91.jpg','https://i.ibb.co/vQ7HQXT/e56163cf63d0e2e5dcca516502947e25.jpg','https://i.ibb.co/0JwLF5d/1036bc9ab73f2f7ec79708197561e23f.jpg','https://i.ibb.co/xG89XWb/ab33bee59de2ccd128782749636dea9a.jpg','https://i.ibb.co/CbGK0vL/93a59803fbf231eb06dcfd10a81ef6a3.jpg','https://i.ibb.co/5LZ6vLv/69fce178f0321f91c0edc9630357bb59.jpg','https://i.ibb.co/z8bqCbS/162059521b34c8439fcc90a4a6efaee6.jpg','https://i.ibb.co/S6WsYBD/16c71db9d896b91a8334605accd339a1.jpg','https://i.ibb.co/1YgTmCB/ed4b00755027ade23a420a5a07a3fddb.jpg','https://i.ibb.co/cc19KNy/e89d339d45fbada1166280a63a1195cc.jpg','https://i.ibb.co/cLK9WTv/93ae1a346a2f36f20b949609d0e29e04.jpg','https://i.ibb.co/WsgyQB2/dfafe2a55fc962d702a260aae95a19df.jpg','https://i.ibb.co/2FqpB8W/1e0b49026b3c99b17802955c25759f58.jpg','https://i.ibb.co/MGmjPRs/3b6c7ef367073bbba3e0999c01b29f11.jpg','https://i.ibb.co/VtxydMx/f7c6afdd85734d641b29b0f31533ed62.jpg','https://i.ibb.co/CzvqSbD/aa14ba41575355b3160b932ace464d84.jpg','https://i.ibb.co/KWVsZk2/807a8e9e270bace8148a0075b4feccc1.jpg','https://i.ibb.co/CwWBBxg/38027834e6071d92b1cb943b664ee4d1.jpg','https://i.ibb.co/x77CGVZ/5d97ec80ec5be24d6b5795d208c000da.jpg','https://i.ibb.co/cTrWxFn/3cfa66f9973cc91dc6075b65854742e2.jpg','https://i.ibb.co/VvPxSqj/864144a02aab822e4d7c50ec7a660f4b.jpg','https://i.ibb.co/xjjPZKN/b79b7f7ecfe154cc4145b8a3b9722253.jpg','https://i.ibb.co/XWyvLJS/0eea41a42e21512dc8cc25e947abb219.jpg','https://i.ibb.co/Ryy28gn/5fb2c3ad853732357d123728e60a3628.jpg','https://i.ibb.co/Ryz64Pt/cea1fe88ed8b6a478fe199a793f78158.jpg','https://i.ibb.co/KXghDrH/cc7f676723309f21c3bc80b937e9476b.jpg','https://i.ibb.co/2tNgdDv/f8b9c8bb822b4ec4433fea24f5d3d5b7.jpg','https://i.ibb.co/M7F5jdV/6e5d028129fdff2e836c1101b14be81e.jpg','https://i.ibb.co/TBnCFrx/d5da7532d1221bd7f49d0b560a089482.jpg','https://i.ibb.co/Hg28SQQ/e6f94d3dd0e18e9bccca60ff66ec1ef0.jpg','https://i.ibb.co/Yf6M09C/4d96c505efc1e8062d2c3858417899a3.jpg','https://i.ibb.co/prKxtGT/c8bbcfbd4775669cb96b92286319408e.jpg','https://i.ibb.co/SrK1BTd/2dc9a90707001af09a4d9ff8a89f9f54.jpg','https://i.ibb.co/WpqGYPk/318df3c40d1455ea239b5f727f848c67.jpg','https://i.ibb.co/6RR38Wj/fcd02606ac52759e1489f87d1474257f.jpg','https://i.ibb.co/DGL5zg8/c2ddaacdc29dde16941351c80bf85432.jpg','https://i.ibb.co/Mg2pZ0t/cd8c4b1f151a02d5eacc1589badfc804.jpg','https://i.ibb.co/m6Jd0Q9/4c1df19e03cc8ba9c14702ad229b2616.jpg','https://i.ibb.co/3pf84F8/a086b83b323147c070805782a5ba1a77.jpg','https://i.ibb.co/BcPnbYV/3342102dbbfcab9e70ab0ce006506f3e.jpg','https://i.ibb.co/ZSTxTRK/3b345140165f26cdb22b3f7c2b87efe4.jpg','https://i.ibb.co/Lrk6B0k/4ef205872681cdc9001bdcccf1e7f929.jpg','https://i.ibb.co/T44MJDD/90b06ebe3e944e007bf9f371584cbf58.jpg','https://i.ibb.co/4T1V2Vc/cecb4faf0e8830344c901f912e3d14e7.jpg','https://i.ibb.co/RbDjZ1q/89718386e0b3b628c81d42ed975e4f4f.jpg','https://i.ibb.co/c3nPvkC/c44466b8ba7b4d4bc54573f31d53b2b2.jpg','https://i.ibb.co/qWnSYcR/f094cee329e8bb3acf11733744c3e4d4.jpg','https://i.ibb.co/PzttvLH/09bac5424ec98cf9fd445b9af06c599b.jpg','https://i.ibb.co/ftVwcqZ/1dec74ad3e91eb3def82a74019a8cf6b.jpg','https://i.ibb.co/tD0T3nB/1ef71febf92f1242c824ec8be7f04749.jpg','https://i.ibb.co/p26qD8Q/5f6b5d39afee0d2f2575af3e8afdad9f.jpg','https://i.ibb.co/10p30hp/62646fd2ccb3aed07663e1a8b800b08c.jpg','https://i.ibb.co/nQ52JXj/58b9218e13506e504faa21b6e1118d1f.jpg','https://i.ibb.co/6ZZM419/d8a8a3fb71db3a4d1483f25c2496769d.jpg','https://i.ibb.co/4NH5p1H/797b7197835426c98c5b6a4e62e893b3.jpg','https://i.ibb.co/sQTnhKp/d1c7c99ffda503e73426b1f7720cc8a8.jpg','https://i.ibb.co/64vzsFc/5b8008d0b8d8c3664d4a06e82de09e48.jpg','https://i.ibb.co/Zc6617s/a721919a506b4003faf2a75c51ef9e65.jpg','https://i.ibb.co/3FgXVyc/f09f652d5c06dfa7c00f85d5f56166c4.jpg','https://i.ibb.co/dt3TPKC/79ce98ce5632e7743061c80661937cb6.jpg','https://i.ibb.co/Hp4LhVy/219f15c040adb83f797fcd5cc4453d9b.jpg','https://i.ibb.co/Y2nYFDq/1a50ccda5f214d04ca975ce8ce4b8099.jpg','https://i.ibb.co/r3GDrYm/76610b0450eede1f1089db88df11d05a.jpg','https://i.ibb.co/v3CdnJc/fb04f8e6e090af3df940704eba3a333f.jpg','https://i.ibb.co/Lv51vj9/dd22a5db7af5b4d0d2df3885c7e7164f.jpg','https://i.ibb.co/mSvVZYM/7bab14ef851bbe7683b64663ab350937.jpg','https://i.ibb.co/Lp7QXjF/4c7292ccbf9b3181264d7284a8267158.jpg','https://i.ibb.co/hKH6H1h/4f25885b285e53d31b8371afeb8c236d.jpg','https://i.ibb.co/N2Zb6XG/adda71d3d21bcb8b2b4ffeb585df97ad.jpg','https://i.ibb.co/1M1XnKV/a2c4b3ba0c50c4e72c93e2c509c044d0.jpg','https://i.ibb.co/Pchzj41/d6dfe62a6dda7c437c3bd84dd03d79c8.jpg','https://i.ibb.co/FBTsF7w/f2e10465bfb3d09997eadf5163a36ee3.jpg','https://i.ibb.co/YRM3D9f/ff3c2a08c958695e196ecf51c51cd31f.jpg','https://i.ibb.co/Mf9ZyYm/e351b77a08120a9476d86382474a3f3d.jpg','https://i.ibb.co/YWjtCXn/2da72e6f97dcc77ac40988e52838437c.jpg','https://i.ibb.co/JKT099M/2d33282e2543f345406e9b0592906b27.jpg','https://i.ibb.co/NCCDBRQ/2642b7ca5d27290126ff7d42de052720.jpg','https://i.ibb.co/X2dy1Pv/209e92cd0e1106010dcd019a12936b30.jpg','https://i.ibb.co/YjJHLgS/30536800321e4f6a885a423a8d16fe58.jpg','https://i.ibb.co/Xk5NjXT/96bfc92b35aa30c14f3799084c390000.jpg','https://i.ibb.co/c6PrTQh/c17e7730f71cc6b9805a5929876b52b6.jpg']   
             var result = saycat[Math.floor(Math.random() * saycat.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/chicas/china', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/china.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/chicas/vietnam', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){          
    try {
          fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/vietnam.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })       
        } catch  {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/chicas/thailand', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/thailand.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/chicas/indonesia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/indonesia.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/chicas/korea', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/korea.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/chicas/japan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/japan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/chicas/malaysia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
        var buff = result.url
             res.json({
             	author: 'ConfuMods',
                 buff
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// asupan
router.get('/asupan/cecan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/hijaber', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/asupan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan.js`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/rikagusriani', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/santuy', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/ukhty', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/anime/padoru', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data.Entries[Math.floor(Math.random() * data.Entries.length)];
        var buffer = (`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/${result.Image}`)
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/asupan/bocil', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/gheayubi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//downloader

router.get('/download/mediafire', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if(!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro url"})
        if(listkey.includes(apikey)){
try {
rkes = await mediafireDl(url)        

             res.json({
                author: 'ConfuMods',
                titulo: rkes[0].nama,
                tipo: rkes[0].mime,
                peso: rkes[0].size,
                link: rkes[0].link
             })         
        } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})





router.get('/download/facebook', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro url"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/download/instagram', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro username"})
        if(listkey.includes(apikey)){
       igstory(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/igstory', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.username
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro url"})
        if(listkey.includes(apikey)){
       igstory
       (url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/other/simi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro country"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=es`))
        .then(response => response.json())
        .then(data => {
        var result = data.success;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////



router.get('/other/wiki', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro country"})
        if(listkey.includes(apikey)){
resu = wikiSearch(text)
        
             res.json({
                 resultado: resu.wiki
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/download/pinterest', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.q
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro q"})
        if(listkey.includes(apikey)){
       pinterest(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/tiktok', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro url"})
        if(listkey.includes(apikey)){
       ttdownloader(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/download/play-mp4', async (req, res, next) => {
        var xa = require('xfarr-api')
          var apikey = req.query.apikey
       	var url_youtube = req.query.query
       	       	if(!apikey) return res.json(loghandler.apikey)
       if (!url_youtube) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro url"})
        if(listkey.includes(apikey)){
        
        		var aramas = await yts(url_youtube);
		var aramat = aramas.all 
			var mulaikah = aramat[0].url			

xa.Youtube(mulaikah)
    .then(data => {
        var result = data
             res.json({
             	author: 'ConfuMods',
                 titulo: result.title,
                 thumb: result.thumbnail,
                 duracion: result.duration,
                 calidad: result.medias[2].quality,
                 ext: result.medias[2].extension,
                 peso: result.medias[2].formattedSize,                 
                 link: result.medias[2].url
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/download/play-mp3', async (req, res, next) => {     
          var apikey = req.query.apikey
       	var query = req.query.query
       	       	if(!apikey) return res.json(loghandler.apikey)
       if (!query) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro query"})
        if(listkey.includes(apikey)){
		var aramas = await yts(query);
		var aramat = aramas.all 
			var mulaikah = aramat[0].url			
xa.Youtube(mulaikah)
    .then(data => {
        var result = data

             res.json({
             	author: 'ConfuMods',             	                
                titulo: data.title,                                
                duracion: data.duration,                
                calidad: data.medias[4].quality,                
                extension: data.medias[4].extension,                
                peso: data.medias[4].formattedSize,
                imagen: data.thumbnail,                
                link: data.medias[4].url
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/download/say_cat', async (req, res, next) => {     
          var apikey = req.query.apikey
       	       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        		nnn = ['Say Cat','Status SayCat','Brasil SayCat','SayCat','SayCat WhatsApp']
		            var nnnn = nnn[Math.floor(Math.random() * nnn.length)];

		var aramas = await yts(nnnn);
		var aramat = aramas.all 
		n = ['0','1','2','3','4','5','6','7','8','9']
		            var nn = n[Math.floor(Math.random() * n.length)];

			var mulaikah = aramat[nn].url			
xa.Youtube(mulaikah)
    .then(data => {
        var result = data

             res.json({
             	author: 'ConfuMods',             	                
                 titulo: result.title,
                 thumb: result.thumbnail,
                 duracion: result.duration,
                 calidad: result.medias[2].quality,
                 ext: result.medias[2].extension,
                 peso: result.medias[2].formattedSize,                 
                 link: result.medias[2].url 
                             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////

////////////////



router.get('/download/telesticker', async (req, res, next) => {
        var xa = require('xfarr-api')
          var apikey = req.query.apikey
       	var url_telesticker = req.query.url
       	       	if(!apikey) return res.json(loghandler.apikey)
       if (!url_telesticker) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro url"})
        if(listkey.includes(apikey)){
xa.Telesticker(url_telesticker)
    .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/search/anime', async (req, res, next) => {
        var xa = require('xfarr-api')
          var apikey = req.query.apikey
       	var query = req.query.query
       	       	if(!apikey) return res.json(loghandler.apikey)
       if (!query) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro url"})
        if(listkey.includes(apikey)){
xa.Anime(query)
    .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/search/wattpad', async (req, res, next) => {
        var xa = require('xfarr-api')
          var apikey = req.query.apikey
       	var query = req.query.query
       	       	if(!apikey) return res.json(loghandler.apikey)
       if (!query) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro url"})
        if(listkey.includes(apikey)){
xa.Wattpad(query)
    .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/search/sticker', async (req, res, next) => {
        var xa = require('xfarr-api')
          var apikey = req.query.apikey
       	var query = req.query.query
       	       	if(!apikey) return res.json(loghandler.apikey)
       if (!query) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro url"})
        if(listkey.includes(apikey)){
xa.StickerSearch(query)
    .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/search/wattpad-user', async (req, res, next) => {
        var xa = require('xfarr-api')
          var apikey = req.query.apikey
       	var query = req.query.username
       	       	if(!apikey) return res.json(loghandler.apikey)
       if (!query) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro url"})
        if(listkey.includes(apikey)){
xa.WattpadUser(query)
    .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})





//lk21
router.get('/lk21/search', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro film"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/terbaru', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/comingsoon', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/tvseries', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/year', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.tahun
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro año"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/country', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.country
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro pais"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/genre', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.tipe
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro tipe"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// film apik
router.get('/filmapik/search', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro film"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/filmapik/kategori', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro film"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/filmapik/play', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.id
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro id"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/filmapik/terbaru', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.id
       	if(!apikey) return res.json(loghandler.apikey)
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// news
router.get('/news/cnn', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/cnbc', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/republika', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/tempo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/antara', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/kumparan', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////EDIT IMG////////////////
	

router.get('/edit/red', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/red?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/invert', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/invert?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////



router.get('/edit/twfake', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
          var username = req.query.username  
          var username2 = req.query.username2   
          var comment = req.query.comment          
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/tweet?avatar=${imagen}&username=${username}&displayname=${username2}&comment=${comment}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/edit/its-so-stupid', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
          var username = req.query.username     
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/its-so-stupid?avatar=${imagen}&dog=${username}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/edit/simp', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen                     
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/simpcard?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/edit/horny', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen                   
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/horny?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

 

router.get('/edit/lolice', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen          
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/lolice?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////



router.get('/edit/ytfake', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
          var username = req.query.username    
          var comment = req.query.comment         
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/youtube-comment?avatar=${imagen}&username=${username}&comment=${comment}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/edit/blur', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/blur?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/edit/pixelate', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/pixelate?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/edit/invertgreyscale', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/invertgreyscale?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/triggered', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/triggered?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/gay', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/gay?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/glass', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/glass?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/passed', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/passed?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/jail', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/jail?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/comrade', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/comrade?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/green', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/green?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/blue', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/blue?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/sepia', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/sepia?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/wasted', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/wasted?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/greyscale', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/greyscale?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/blurpe', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/blurpe?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/edit/blurpe2', async (req, res, next) => {
          var apikey = req.query.apikey
          var imagen = req.query.imagen       
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://some-random-api.ml/canvas/blurpe2?avatar=${imagen}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

////////////////TEXTPRO////////////////

router.get('/textpro/tiktok', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto1 = req.query.texto1
          var texto2 = req.query.texto2  
          if (!texto1) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto1"})      
          if (!texto2) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto2"})          
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://hadi-api.herokuapp.com/api/textpro/tiktok?teks1=${texto1}&teks2=${texto2}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/neon-devil-wings', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
                 	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://hadi-api.herokuapp.com/api/textpro/neon-devil-wings?teks=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/futuristic-technology', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
                 	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://hadi-api.herokuapp.com/api/textpro/futuristic-technology?teks=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/on-the-beach', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
                         	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
  
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://hadi-api.herokuapp.com/api/textpro/on-the-beach?teks=${texto}&background=2`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/3d-underwater-text', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
                         	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
  
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/black-white-bear-mascot', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto       
                         	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
   
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://hadi-api.herokuapp.com/api/textpro/black-white-bear-mascot?teks=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////


////////////////

router.get('/textpro/glitter7', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/glitter7?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/glitter6', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/glitter6?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/glitter5', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/glitter5?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/glitter4', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/glitter4?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/glitter3', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/glitter3?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/glitter2', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/glitter2?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/glitter', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/glitter?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/golden', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/golden?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/metalh', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/metalh?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/jewelry', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/jewelry?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/equalizer', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/equalizer?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/magma', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/magma?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/blackpink', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/blackpink?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/glass', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/glass?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/bread', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/bread?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/neon_devil', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/neon_devil?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/joker', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/joker?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/fiction', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/fiction?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/demon', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/demon?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/bear', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/bear?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/toxic', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/toxic?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/glass2', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/glass2?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/broken', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/broken?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/skeleton', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/skeleton?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/minion', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/minion?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/textpro/gloss', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://api-alphabot.herokuapp.com/api/textpro/gloss?apikey=offline&text=${texto}`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////



//photooxy

router.get('/photooxy/flaming-fire', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
                        	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/flaming-fire?text=${texto}`)
       
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {      
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////
router.get('/photooxy/tiktok-effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto1 = req.query.texto1       
          var texto2 = req.query.texto2
if (!texto1) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto1"})      
if (!texto2) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto2"})      
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/tiktok-effect?text=${texto1}&text2=${texto2}`)
       
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/shadow-sky', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
                                  	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      

       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/shadow-sky?text=${texto}`)
        
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/teks-cup', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto   
                           	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})                 
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/teks-cup?text=${texto}`)
        
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/romantic-messages', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto    
                          	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
        
                  
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/romantic-messages?text=${texto}`)
        
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/burn-paper', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
          
                              	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
    
          
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/burn-paper?text=${texto}`)
        
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/funny-cup', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto        
          
                              	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
    
          
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/funny-cup?text=${texto}`)
        
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/love-messages', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto   
          
                                  	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
     
                         
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/love-messages?text=${texto}`)
        
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/text-on-scary', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto   
          
                              	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
         
                    
                              
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/text-on-scary?text=${texto}`)
       
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/under-grass', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto  
          
                            	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
            
                      
                                  
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/under-grass?text=${texto}`)
       
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/romantic-double', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto   
          
                             	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
          
                         
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/romantic-double?text=${texto}`)
        
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////
router.get('/photooxy/coffee-cup', async (req, res, next) => {
          var apikey = req.query.apikey
          var texto = req.query.texto    
          
                         	       if (!texto) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro texto"})      
             
                      
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
try {
           result = (`http://hadi-api.herokuapp.com/api/photoxy/coffee-cup?text=${texto}`)
    
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')        
         } catch {

         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
////////////////


/*
router.get('/photooxy/battlefield', async (req, res, next) => {
          var apikey = req.query.apikey
          var text1 = req.query.text1
          var text2 = req.query.text2
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/battlefield?text1=${text1}&text2=${text2}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/arena_of_valor', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/arena_of_valor?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/warface2', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/warface_effect2?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/pubg_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text1 = req.query.text1
          var text2 = req.query.text2
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/pubg?text=${text1}&text2=${text2}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/crossfire', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/crossfire?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/warface_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/warface_effect?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/overwatch_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/overwatch_effect?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/cs_go_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/cs_go_effect?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/birthday_cake', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/birthday_cake?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////

router.get('/photooxy/fur_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/fur_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/dota_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/dota_effect?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/stars_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/stars_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/glow_rainbow', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/glow_rainbow?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/gradient_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/gradient_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/flaming_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/flaming_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/chrome_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/chrome_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/embroidery_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/embroidery?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/rainbow_3d', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/rainbow_3d?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/metallic_glow', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/metallic_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/striking_3d', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/sttriking_3d?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/watermelon_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/watermelon?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/matrix_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/matrix_effect?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/multi_material', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/multi_material?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/butterfly', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/butterfly_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/wooden_3d', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/wooden_3d_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/modern_metal', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/modern_metal?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/harry_potter', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/harry_potter?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/light_neon', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/light_neon?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/8bit_arcade', async (req, res, next) => {
          var apikey = req.query.apikey
          var text1 = req.query.text1
          var text2 = req.query.text2
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/text_8bit?text=${text1}&text2=${text2}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/coffe_cup2', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/coffee_cup2?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/luxury_royal', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/luxury_royal?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/cemetery_gate', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/cemetery_gate?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/woodblock_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/woodblock_effect?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/smoke_typography', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/smoke_typography?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/sweet_candy', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/sweet_candy?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/text_on_silk', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/text_on_silk?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/petterns_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/petterns?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/orchids_flower', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/orchids_flower?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/flower_typography', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/flower_typography?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/party_neon', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/party_neon?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/dark_metal', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/dark_metal?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/white_cube', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/white_cube?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/candy_text', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/candy_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/vintage_effect', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/vintage_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/3d_glowing', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/td_glowing?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/camouflage_fabric', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/camouflage_fabric?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/rainbow_shine', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/rainbow_shine?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/glowing_neon', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/glowing_neon?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/under_fall', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/under_fall?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/typography', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/typography?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/summer_nature', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/summer_nature?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/golden_rose', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/golden_roses?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/under_water', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/under_water?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/3d_nature', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/td_nature?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////


router.get('/photooxy/wolf_metal', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/wolf_metal?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/3d_summer', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/td_summer?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/wooden_board', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/wooden_heart?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/flower_heart', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/flower_heart?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/wood_heart', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/wood_heart?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/coffe_cup', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/coffe_cup?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/double_heart', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/double_heart?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////


router.get('/photooxy/text_tiktok', async (req, res, next) => {
          var apikey = req.query.apikey
          var text1 = req.query.text1
          var text2 = req.query.text2
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/tiktok_text?text=${text1}&text2=${text2}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/under_grass', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/under_grass?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/love_message', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/love_message?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/burn_papper', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/burn_papper?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/romantic_message', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/romantic_message?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/text_on_cup', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/text_cup?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////
router.get('/photooxy/shadow', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/shadow?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/capitan_america', async (req, res, next) => {
          var apikey = req.query.apikey
          var text1 = req.query.text1
          var text2 = req.query.text2
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/captain_america?text=${text1}&text2=${text2}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////
 
router.get('/photooxy/naruto', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/naruto?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////

router.get('/photooxy/grafity', async (req, res, next) => {
          var apikey = req.query.apikey
          var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       	       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})      
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           anu = await fetchJson(`https://photooxy-alc.herokuapp.com/api/grafity_text?text=${text}`)
        var result = anu.url
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})*/
// search api
router.get('/search/joox', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/joox/search?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `✔️`,
             	data,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/wallpaper', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro query"})      
         if(listkey.includes(apikey)){
       chara(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/wattpad', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro query"})      
         if(listkey.includes(apikey)){
       wattpad(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/komiku', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro query"})      
         if(listkey.includes(apikey)){
       komiku(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/otaku', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro query"})      
         if(listkey.includes(apikey)){
       otakudesu(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/k', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/anime/search?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `✔️`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// anime



router.get('/anime/loli', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://x-restapi.herokuapp.com/api/random-loli?apikey=BETA`))
        .then(response => response.json())
        .then(async data => {
        var buffer = data.link;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/anime/waifu', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.waifu.pics/sfw/waifu`))
        .then(response => response.json())
        .then(async data => {
        var buffer = data.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/anime/biganimetiddies', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
     try {   
        var buffer = (`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=ConfuKeyLolhuman`)
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         
         } catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})


router.get('/anime/neko', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.waifu.pics/sfw/neko`))
        .then(response => response.json())
        .then(async data => {
        var buffer = data.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/anime/megumin', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://waifu.pics/api/sfw/megumin`))
        .then(response => response.json())
        .then(async data => {
        var buffer = data.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/anime/awoo', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://waifu.pics/api/sfw/awoo`))
        .then(response => response.json())
        .then(async data => {
        var buffer = data.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/anime/searchanime', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/anime/search?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `✔️`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/anime/samehadaku_genre', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/genre/${text}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `✔️`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/anime/samehadaku_page', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/season`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `✔️`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})



////////////wallpaper anime//////
router.get('/anime/wallpaper', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        wpanime = ['https://i.ibb.co/sF5Fdt1/1d15523b5b93da72799e1c3b92ef5fef.jpg','https://i.ibb.co/17Lbj2j/44764f88fd4c43fb6db7c2d4e226ee9a.jpg','https://i.ibb.co/qBn79dv/041cf4ee7596e251cbe9b8d95ac69ab2.jpg','https://i.ibb.co/4WbBKXY/0580e84577023fcb3d7b65490be66f69.jpg','https://i.ibb.co/Fgxd6tS/cf3ff3a484d851fc077ef5e5c81c9d65.jpg','https://i.ibb.co/ZMBynRh/e7a7ddbeafa8c14e249691a7c3c4c0b2.jpg','https://i.ibb.co/KGL9m5g/dd40d5d0fe5b1df5097ca4400ae2ad16.jpg','https://i.ibb.co/ZMZYmKz/419b0bddd10310b8611653055ec8c7b0.jpg','https://i.ibb.co/jy8sgbh/c401a02422508128821921b31539091e.jpg','https://i.ibb.co/02M4h6S/5b1871bba0fb4b4e01c4356bdd93cd86.jpg','https://i.ibb.co/997FbVT/133053afa7ee650e45f782ce8475aed8.jpg','https://i.ibb.co/xzPvvDv/18cf2c41770f9edbbf31be8bec2fb0b2.jpg','https://i.ibb.co/HYn2B4Q/702c6cf7e374a02d1da0a5f794858a38.jpg','https://i.ibb.co/7nxQBkY/f2bcf894118518cd15fd69b033da78d1.jpg','https://i.ibb.co/yd61B8v/0d12c692d699ae3ff158d54d2fe02971.jpg','https://i.ibb.co/vD8HsGD/8dcea7573f193abf7ea26aefdc8f6949.jpg','https://i.ibb.co/1Z89RJT/ec77640a70d388ab3689b922b488e000.jpg','https://i.ibb.co/98bLyLD/6c54a7a35f7c3a3a974b15b0c9c666fa.jpg','https://i.ibb.co/nsxPVMx/d51a5164ed57c571de2f337823cdfe0d.jpg','https://i.ibb.co/r4QNhf1/e62aadd019b27bcc954f9f463a8a268d.jpg','https://i.ibb.co/Qfp7vS7/4838313f143a833ec931ac026665de39.jpg','https://i.ibb.co/fYqMq9T/a7134ce6fba2dc5efd9faa6fe4213444.jpg','https://i.ibb.co/ZN397Tk/06ebb4fbc32809c99f173b3ac5596c68.jpg','https://i.ibb.co/ZdCV7G8/cca874c663aeb20eed0baa477de679cc.jpg','https://i.ibb.co/s5TJN3L/5db7c137c1f672e15dc98910aef3a77a.jpg','https://i.ibb.co/r3k8sWQ/ca50357dd6a4638dd9199d02ac810828.jpg','https://i.ibb.co/h1tMDLD/e0e5d60bdfb0c93eb723a1d0e15d6756.jpg','https://i.ibb.co/3NXvXwR/d10db58ff9114e1575de143b723ddc9b.jpg','https://i.ibb.co/fMbJ33j/83850d24bd8312104701f3e93bdaa3e0.jpg','https://i.ibb.co/mcrsqsw/d65716315dc8cf5df3e438f6adf95c9e.jpg','https://i.ibb.co/hY3N02B/6bcee3571197465654c97683d0ed0e20.jpg','https://i.ibb.co/Js1sLBh/124d64ed1227aa1487a2c42b24f8837a.jpg','https://i.ibb.co/Kjc5NkN/993ccbdf49d7e1e256274cafc2585eef.jpg','https://i.ibb.co/p0sjxGX/3a741a4634e9445c5f93bf325b75ef2a.jpg','https://i.ibb.co/BqkFmY3/064bab224123321def4b21d224fe8e82.jpg','https://i.ibb.co/rfTwhXz/logo.jpg','https://i.ibb.co/H7C2bJD/7896dbb5d93ce36a81399c9e24e0e9fa.jpg','https://i.ibb.co/rbs9ZG0/506ab25382f022726b879c2fed3179a0.jpg','https://i.ibb.co/gj2JCZm/3d71bc19b7e56e23c94de9a2da33ba3e.jpg','https://i.ibb.co/WKZV6yG/79f8e21c88ca8044a2350024675d34ef.jpg','https://i.ibb.co/427Lj3L/7f6d1e9f9a4d3316c4f6834a2fe7ec32.jpg','https://i.ibb.co/R9SXJS1/7858da10a6d8dc3a7b3d06c437dcf5c7.jpg','https://i.ibb.co/BZwM4xL/32fb465027798249e815b5473ee0d210.jpg','https://i.ibb.co/7WX24j5/b91c79ea703cd93de96656ab60cdd789.jpg','https://i.ibb.co/K5bjZY2/bb6bbe2a3295c8539970c2111f239b4b.jpg','https://i.ibb.co/SVc69Dk/54b136d4d9a52df59901fc6c675cd960.jpg','https://i.ibb.co/Wxrmn1Z/0e6c1b49b5629101da59f06db122ad19.jpg','https://i.ibb.co/zFf5KFZ/6ed2bedc080a9e8c3b267d927433e7bf.jpg','https://i.ibb.co/6Zpkx7M/075d4b0ea4e6a5bac6085bbe9157ba37.jpg','https://i.ibb.co/Tq6YJyS/c0ebcbd97922d1271629ab87469dc0c7.jpg','https://i.ibb.co/RgVcvh8/be54e24e4a7276b1d3cc830a03fd4676.jpg','https://i.ibb.co/61G5nQb/6f8c4afef5b7ddf538447dc218ca0ef8.jpg','https://i.ibb.co/QdkJ0Y8/da76b20813815efd1dbf84116501b25a.jpg','https://i.ibb.co/S3pKHft/1ec2838d5cd0cd53eaface83a1bfa921.jpg','https://i.ibb.co/9GW77Vn/5983cbabf5827793558ee7fddbaf173f.jpg','https://i.ibb.co/WpbQWqH/74ba70dce0b89460129a05ed13380aa0.jpg','https://i.ibb.co/Bwh0MS4/8ea55d8ccaa10c5b3ff540e0e08f802e.jpg','https://i.ibb.co/2c1cymy/56142f816478a819ce32453a2f917af5.jpg','https://i.ibb.co/BGfjR8M/923f89fd65d33f823028ce2944a8fb77.jpg','https://i.ibb.co/TRMb2r3/9bef9de9f522d30de4ed4c07abd2de92.jpg']                                      
        var result = wpanime[Math.floor(Math.random() * wpanime.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

///////////SASUKE//////////


router.get('/anime/sasuke', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        sasuke = ['https://i.ibb.co/4Zhb1Tf/27.jpg','https://i.ibb.co/SKF8ns4/5.jpg','https://i.ibb.co/Tg7Z4QR/4.jpg','https://i.ibb.co/2kFP3VQ/26.jpg','https://i.ibb.co/nmQ0b46/29.jpg','https://i.ibb.co/99SdFrN/7.jpg','https://i.ibb.co/9Z8fqC6/6.jpg','https://i.ibb.co/2ZKtkM1/28.jpg','https://i.ibb.co/6rybDYJ/23.jpg','https://i.ibb.co/DwfFdw2/3.jpg','https://i.ibb.co/hy6gCpF/22.jpg','https://i.ibb.co/k8Rj6nf/25.jpg','https://i.ibb.co/PChJBFG/3.jpg','https://i.ibb.co/qWQT9cB/24.jpg','https://i.ibb.co/GJNNGw1/2.jpg','https://i.ibb.co/bQvmWrt/42.jpg','https://i.ibb.co/2s0JMsL/9.jpg','https://i.ibb.co/10KZf8h/30.jpg','https://i.ibb.co/DYq8FjN/41.jpg','https://i.ibb.co/KGvTPLs/8.jpg','https://i.ibb.co/HVvFcNc/10.jpg','https://i.ibb.co/QQwFV9K/39.jpg','https://i.ibb.co/7gHhjq9/38.jpg','https://i.ibb.co/p4C9F82/40.jpg','https://i.ibb.co/jrcm2nD/21.jpg','https://i.ibb.co/jbh0Hvf/16.jpg','https://i.ibb.co/17dRPSF/15.jpg','https://i.ibb.co/TK4SQyn/18.jpg','https://i.ibb.co/WHJS8xm/17.jpg','https://i.ibb.co/ZS7kqLM/12.jpg','https://i.ibb.co/VNbzXzG/11.jpg','https://i.ibb.co/pr3cmhX/14.jpg','https://i.ibb.co/cQQd5ZF/13.jpg','https://i.ibb.co/0f3tDsg/35.jpg','https://i.ibb.co/TLFwCWP/34.jpg','https://i.ibb.co/JQGPj6X/37.jpg','https://i.ibb.co/GTSQBZq/36.jpg','https://i.ibb.co/fHp5qjG/31.jpg','https://i.ibb.co/mDhgkrm/20.jpg','https://i.ibb.co/0yjLHK1/19.jpg','https://i.ibb.co/bb7KpjF/33.jpg','https://i.ibb.co/74xzZ7v/32.jpg']
        var result = sasuke[Math.floor(Math.random() * sasuke.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////HINATA//////////////


router.get('/anime/hinata', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        hinata = ['https://i.ibb.co/9rCvP8r/17.jpg','https://i.ibb.co/fdfHsvC/16.jpg','https://i.ibb.co/yqVzKwz/15.jpg','https://i.ibb.co/nsYzNVY/37.jpg','https://i.ibb.co/1qBSX68/14.jpg','https://i.ibb.co/x23ZS3m/36.jpg','https://i.ibb.co/9YW7H64/38.jpg','https://i.ibb.co/R6X2jFN/2.jpg','https://i.ibb.co/vkXYxQB/24.jpg','https://i.ibb.co/H4Vyy7m/1.jpg','https://i.ibb.co/KWh45C6/23.jpg','https://i.ibb.co/LS3MHDR/22.jpg','https://i.ibb.co/KVVwvkR/21.jpg','https://i.ibb.co/3Bsc4WB/20.jpg','https://i.ibb.co/87T9WSz/19.jpg','https://i.ibb.co/smpVwmM/18.jpg','https://i.ibb.co/s2f15XK/40.jpg','https://i.ibb.co/tBVm0g0/39.jpg','https://i.ibb.co/t8BTdYz/7.jpg','https://i.ibb.co/3RZfKrc/6.jpg','https://i.ibb.co/nR6RgQm/5.jpg','https://i.ibb.co/Tw184KP/27.jpg','https://i.ibb.co/Y04L6YH/4.jpg','https://i.ibb.co/6DjvwQj/26.jpg','https://i.ibb.co/t4jCPqS/3.jpg','https://i.ibb.co/WyD7LrT/25.jpg','https://i.ibb.co/B3S6Vwq/13.jpg','https://i.ibb.co/r0rkhhZ/35.jpg','https://i.ibb.co/bmCkXqm/12.jpg','https://i.ibb.co/ZJjJMPj/34.jpg','https://i.ibb.co/LQG8jrP/11.jpg','https://i.ibb.co/f9yGMFj/33.jpg','https://i.ibb.co/25Mftyb/10.jpg','https://i.ibb.co/C2vG2HJ/32.jpg','https://i.ibb.co/BVRFVwy/9.jpg','https://i.ibb.co/1ZXw3gY/31.jpg','https://i.ibb.co/7S0Tnht/8.jpg','https://i.ibb.co/GC1zzxh/30.jpg','https://i.ibb.co/80JkbbD/29.jpg','https://i.ibb.co/G5qKBmR/28.jpg']
        var result = hinata[Math.floor(Math.random() * hinata.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////NARUTO//////////


router.get('/anime/naruto', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        naruto = ['https://i.ibb.co/cYZvB9F/1.jpg','https://i.ibb.co/KFqs2FS/4.jpg','https://i.ibb.co/gZxR37C/2.jpg','https://i.ibb.co/f4JWgBD/31.jpg','https://i.ibb.co/NKwRWPF/19.jpg','https://i.ibb.co/pKJpdss/30.jpg','https://i.ibb.co/DwVLMCr/33.jpghttps://i.ibb.co/MkNxxg4/32.jpg','https://i.ibb.co/nLdhqvq/16.jpg','https://i.ibb.co/LRH7qdn/15.jpg','https://i.ibb.co/vJ92njj/18.jpg','https://i.ibb.co/nQfn5WX/17.jpg','https://i.ibb.co/3StR0Qv/39.jpg','https://i.ibb.co/jgFk76F/38.jpg','https://i.ibb.co/1rQMPPF/35.jpg','https://i.ibb.co/kM7bk71/34.jpg','https://i.ibb.co/Wz6BCZL/37.jpg','https://i.ibb.co/LJjdtwk/36.jpg','https://i.ibb.co/Kw7LZ0N/12.jpg','https://i.ibb.co/Wp1pkq9/11.jpg','https://i.ibb.co/GnjhHrc/14.jpg','https://i.ibb.co/mhVx1dv/13.jpg','https://i.ibb.co/NFqvGGj/10.jpg','https://i.ibb.co/Np2zf1b/42.jpg','https://i.ibb.co/vX5gCGx/20.jpg','https://i.ibb.co/NC2qH6Q/9.jpg','https://i.ibb.co/zZcTDTY/41.jpg','https://i.ibb.co/G7Gk3Kr/8.jpg','https://i.ibb.co/DYj1cNL/22.jpg','https://i.ibb.co/pxwd85B/43.jpg','https://i.ibb.co/dMCNCWF/21.jpg','https://i.ibb.co/Wsb6670/5.jpg','https://i.ibb.co/DwfFdw2/3.jpg','https://i.ibb.co/hFrHyDj/40.jpg','https://i.ibb.co/nfCKxS5/7.jpg','https://i.ibb.co/BPgrzgx/6.jpg','https://i.ibb.co/z2TcZ5y/28.jpg','https://i.ibb.co/LtbXzn6/27.jpg','https://i.ibb.co/C5RCwD9/29.jpg','https://i.ibb.co/z8MH4Z3/24.jpg','https://i.ibb.co/Zmzjxrd/23.jpg','https://i.ibb.co/gFh7DZj/26.jpg','https://i.ibb.co/CQVyYv0/25.jpg']
        var result = naruto[Math.floor(Math.random() * naruto.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


///////////////KANNA///////////

router.get('/anime/kanna', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        kanna = ['https://i.ibb.co/RB2jSkr/63.jpg','https://i.ibb.co/CQSRKYc/31.jpg','https://i.ibb.co/X3sB7qK/27.jpg','https://i.ibb.co/LvdXMxH/26.jpg','https://i.ibb.co/6skvJyS/29.jpg','https://i.ibb.co/CB9RY7B/28.jpg','https://i.ibb.co/VLC0PbX/23.jpg','https://i.ibb.co/HCfjWRq/22.jpg','https://i.ibb.co/mBJN78j/25.jpg','https://i.ibb.co/6PrFv4v/24.jpg','https://i.ibb.co/bs6R87r/30.jpg','https://i.ibb.co/XLkvDdh/64.jpg','https://i.ibb.co/HqwS259/42.jpg','https://i.ibb.co/XyWDLfJ/41.jpg','https://i.ibb.co/4WyX9wn/37.jpg','https://i.ibb.co/6s6r1Yp/67.jpg','https://i.ibb.co/pfBHGZR/36.jpg','https://i.ibb.co/XjcvyBQ/39.jpg','https://i.ibb.co/R2BFDjR/38.jpg','https://i.ibb.co/NVCKyhm/33.jpg','https://i.ibb.co/23Vn5Vz/62.jpg','https://i.ibb.co/CvW0Nv9/32.jpg','https://i.ibb.co/PQ21cvK/66.jpg','https://i.ibb.co/nfDLmw4/35.jpg','https://i.ibb.co/tQFQgGw/65.jpg','https://i.ibb.co/1Q9mW1N/34.jpg','https://i.ibb.co/FhgGV0c/1.jpg','https://i.ibb.co/VY22fZ8/40.jpg','https://i.ibb.co/0VnmKb6/51.jpg','https://i.ibb.co/L80NCmb/53.jpg','https://i.ibb.co/6NDxzg4/52.jpg','https://i.ibb.co/bg8gmjL/5.jpg','https://i.ibb.co/QrzTQnW/48.jpg','https://i.ibb.co/RPmtr7L/4.jpg','https://i.ibb.co/sQRbbk3/47.jpg','https://i.ibb.co/tqx3nDT/50.jpg','https://i.ibb.co/zfVK5DR/7.jpg','https://i.ibb.co/WWdKJZ9/6.jpg','https://i.ibb.co/vz9sN0k/49.jpg','https://i.ibb.co/y4dPxZ4/44.jpg','https://i.ibb.co/TYDJZZY/43.jpg','https://i.ibb.co/NjZ2MYP/3.jpg','https://i.ibb.co/SJ8wbjX/46.jpg','https://i.ibb.co/cymzyW7/2.jpg','https://i.ibb.co/gRqvK4g/45.jpg','https://i.ibb.co/163wWVZ/9.jpg','https://i.ibb.co/n6p2r0M/8.jpg','https://i.ibb.co/ZxkFydr/11.jpg','https://i.ibb.co/B6wFjYs/10.jpg','https://i.ibb.co/GxBK9MN/61.jpg','https://i.ibb.co/RTRJ4T4/16.jpg','https://i.ibb.co/Qj9NWyC/59.jpg','https://i.ibb.co/KWf968b/58.jpg','https://i.ibb.co/s2ScnfN/15.jpg','https://i.ibb.co/b68MsLz/18.jpg','https://i.ibb.co/kH89t5b/17.jpg','https://i.ibb.co/3syNdWb/60.jpg','https://i.ibb.co/gRDWxnZ/55.jpg','https://i.ibb.co/BtNSZ21/12.jpg','https://i.ibb.co/dQgzSMs/54.jpg','https://i.ibb.co/Twxf36Q/14.jpg','https://i.ibb.co/gjNqLNV/57.jpg','https://i.ibb.co/fXWqCJw/56.jpg','https://i.ibb.co/2P3YyK7/13.jpg','https://i.ibb.co/jT3vdd6/20.jpg','https://i.ibb.co/c6tt70b/19.jpg','https://i.ibb.co/k5pP9kg/21.jpg']
        var result = kanna[Math.floor(Math.random() * kanna.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

///////////////WAIFU/////////

router.get('/anime/waifu', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        waifu = ['https://i.ibb.co/7V5Vxs3/29.jpg','https://i.ibb.co/TRdZWMN/28.jpg','https://i.ibb.co/v1R2Bf3/27.jpg','https://i.ibb.co/BTjfFzv/26.jpg','https://i.ibb.co/KhfKkf0/25.jpg','https://i.ibb.co/RPMvd1p/24.jpg','https://i.ibb.co/tCZdnnG/23.jpg','https://i.ibb.co/X5qSqRc/22.jpg','https://i.ibb.co/wMTKc4q/31.jpg','https://i.ibb.co/Dbstb5N/30.jpg','https://i.ibb.co/TqVXWM6/32.jpg','https://i.ibb.co/tb76SDW/40.jpg','https://i.ibb.co/hX8nP8B/39.jpg','https://i.ibb.co/qnFWLrV/38.jpg','https://i.ibb.co/PYhTyZH/37.jpg','https://i.ibb.co/Lh9BLcV/36.jpg','https://i.ibb.co/rfgZNg4/35.jpg','https://i.ibb.co/PT0m3JN/34.jpg','https://i.ibb.co/mhPW0Lx/33.jpg','https://i.ibb.co/cvDSqNz/3.jpg','https://i.ibb.co/jHhDwYN/41.jpg','https://i.ibb.co/f2cy67Y/43.jpg','https://i.ibb.co/R4RPwdL/42.jpg','https://i.ibb.co/N1BsqnV/7.jpg','https://i.ibb.co/NYb19v3/51.jpg','https://i.ibb.co/LYkxMgT/6.jpg','https://i.ibb.co/hWdsCq0/50.jpg','https://i.ibb.co/bBGVMDQ/5.jpg','https://i.ibb.co/64jm4j3/49.jpg','https://i.ibb.co/MGS23Fc/48.jpg','https://i.ibb.co/NZH8mX7/4.jpg','https://i.ibb.co/h1wcZy0/47.jpg','https://i.ibb.co/qNqkZHG/1.jpg','https://i.ibb.co/bmnkJM6/46.jpg','https://i.ibb.co/Pr5rk7Z/2.jpg','https://i.ibb.co/wRFrBgw/45.jpg','https://i.ibb.co/y8NjPK2/44.jpg','https://i.ibb.co/WWHC2S2/11.jpg','https://i.ibb.co/qm0yYS8/10.jpg','https://i.ibb.co/g9xdnq5/9.jpg','https://i.ibb.co/KXcSBNC/8.jpg','https://i.ibb.co/fxYNYWM/54.jpg','https://i.ibb.co/gV5RnvJ/53.jpg','https://i.ibb.co/34CG3Nr/52.jpg','https://i.ibb.co/jh49gSJ/18.jpg','https://i.ibb.co/vcqh8xF/61.jpg','https://i.ibb.co/hD0Gf8k/17.jpg','https://i.ibb.co/QnsPDxH/60.jpg','https://i.ibb.co/SJ82nVR/16.jpg','https://i.ibb.co/9g2tFpc/59.jpg','https://i.ibb.co/BrHSN5C/15.jpg','https://i.ibb.co/p0k7Z0f/58.jpg','https://i.ibb.co/4S6p3XQ/14.jpg','https://i.ibb.co/XYC6071/57.jpg','https://i.ibb.co/M9tGFcB/13.jpg','https://i.ibb.co/y6g3062/56.jpg','https://i.ibb.co/3fR9PZZ/12.jpg','https://i.ibb.co/5WpYLz0/55.jpg','https://i.ibb.co/NWrfVRT/21.jpg','https://i.ibb.co/sPpMBHQ/20.jpg','https://i.ibb.co/R4zTJS9/19.jpg','https://i.ibb.co/NnmPsx4/65.jpg','https://i.ibb.co/Y2KfNr3/64.jpg','https://i.ibb.co/4RXd5wC/63.jpg','https://i.ibb.co/PC18ZyG/62.jpg']
        var result = waifu[Math.floor(Math.random() * waifu.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


/////////////LOLI//////////

router.get('/anime/loli', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        loli = ['https://i.ibb.co/8jMFJLS/22.jpg','https://i.ibb.co/pbJknt8/21.jpg','https://i.ibb.co/3frJKPK/20.jpg','https://i.ibb.co/WgkfC3Q/63.jpg','https://i.ibb.co/zF0fqgC/29.jpg','https://i.ibb.co/KXYsk9C/62.jpg','https://i.ibb.co/jfvgcyH/28.jpg','https://i.ibb.co/9wL1fcL/61.jpg','https://i.ibb.co/7yyB3vZ/27.jpg','https://i.ibb.co/XSJTTj5/60.jpg','https://i.ibb.co/Y0zdDjr/26.jpg','https://i.ibb.co/m9RKKr8/25.jpg','https://i.ibb.co/Gnpwyw5/24.jpg','https://i.ibb.co/vJtTs6d/23.jpg','https://i.ibb.co/TKxmb60/9.jpg','https://i.ibb.co/4Y4xVXB/55.jpg','https://i.ibb.co/Y8Z3S4W/11.jpg','https://i.ibb.co/JFkNn6M/54.jpg','https://i.ibb.co/1bxFC4R/10.jpg','https://i.ibb.co/KNWqBFz/53.jpg','https://i.ibb.co/Jpbynx5/52.jpg','https://i.ibb.co/kcWPjhf/51.jpg','https://i.ibb.co/qrVHF8H/50.jpg','https://i.ibb.co/m9ywdqR/19.jpg','https://i.ibb.co/27JC0mY/18.jpg','https://i.ibb.co/9wzz02R/17.jpg','https://i.ibb.co/sj5bDQ9/16.jpg','https://i.ibb.co/4PpYwMp/59.jpg','https://i.ibb.co/yR686k4/15.jpg','https://i.ibb.co/t4HtmB9/58.jpg','https://i.ibb.co/yBCTWg4/14.jpg','https://i.ibb.co/qyD03cF/57.jpg','https://i.ibb.co/NxMy58Z/13.jpg','https://i.ibb.co/QrHwdPZ/56.jpg','https://i.ibb.co/PG8BK52/12.jpg','https://i.ibb.co/BP0tCsG/44.jpg','https://i.ibb.co/2vsGNB5/43.jpg','https://i.ibb.co/6wnNL3f/42.jpg','https://i.ibb.co/cQ41fW1/41.jpg','https://i.ibb.co/FHhsw0z/40.jpg','https://i.ibb.co/NrXpDSn/8.jpg','https://i.ibb.co/h9cT0ZJ/7.jpg','https://i.ibb.co/PT56Dqq/6.jpg','https://i.ibb.co/dkW7ZG8/49.jpg','https://i.ibb.co/wMMN45z/5.jpg','https://i.ibb.co/nnyG8zL/48.jpg','https://i.ibb.co/RPmtr7L/4.jpg','https://i.ibb.co/SnPPfXQ/47.jpg','https://i.ibb.co/JyY7rhP/3.jpg','https://i.ibb.co/w769bF3/46.jpg','https://i.ibb.co/FW1r8JJ/2.jpg','https://i.ibb.co/7WChLwT/45.jpg','https://i.ibb.co/fpc7vrg/1.jpg','https://i.ibb.co/JtTCzqt/69.jpg','https://i.ibb.co/FsPkRQy/68.jpg','https://i.ibb.co/N2bhjmN/67.jpg','https://i.ibb.co/ctcknwP/66.jpg','https://i.ibb.co/SBD95bq/65.jpg','https://i.ibb.co/Xtn32N7/64.jpg','https://i.ibb.co/pQ1Twkh/33.jpg','https://i.ibb.co/cYfHjHv/32.jpg','https://i.ibb.co/C2ZCRMv/31.jpg','https://i.ibb.co/sJBKymV/30.jpg','https://i.ibb.co/jL3X3vL/39.jpg','https://i.ibb.co/YjjHfwv/38.jpg','https://i.ibb.co/KsDTpy1/37.jpg','https://i.ibb.co/XDGCWLq/36.jpg','https://i.ibb.co/bs0RdwX/35.jpg','https://i.ibb.co/m5dg5KG/34.jpg']
        var result = loli[Math.floor(Math.random() * loli.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////SAKURA/////////


router.get('/anime/sakura', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        sakura = ['https://i.ibb.co/tCjfyP1/42.jpg','https://i.ibb.co/QDwhvmd/37.jpg','https://i.ibb.co/XsV6JMF/15.jpg','https://i.ibb.co/51kyLsw/36.jpg','https://i.ibb.co/YRYHKmG/14.jpg','https://i.ibb.co/tm0NYYM/39.jpg','https://i.ibb.co/G5twXCz/17.jpg','https://i.ibb.co/jDQG3KL/16.jpg','https://i.ibb.co/N1MsmBg/38.jpg','https://i.ibb.co/x226p3B/33.jpg','https://i.ibb.co/kJ0kvkK/32.jpg','https://i.ibb.co/KKtQCv5/35.jpg','https://i.ibb.co/6NFfgYD/13.jpg','https://i.ibb.co/FBV26M5/12.jpg','https://i.ibb.co/4V4bNhv/34.jpg','https://i.ibb.co/2ZtKK7Y/3.jpg','https://i.ibb.co/mSsFYpp/19.jpg','https://i.ibb.co/99yhr61/41.jpg','https://i.ibb.co/wM0wpph/18.jpg','https://i.ibb.co/NSdt9M2/40.jpg','https://i.ibb.co/5GsQ0M0/21.jpg','https://i.ibb.co/nD3fXdp/20.jpg','https://i.ibb.co/kKzsVC2/26.jpg','https://i.ibb.co/9TLrHKq/4.jpg','https://i.ibb.co/dLd11N2/25.jpg','https://i.ibb.co/xHcBCF6/1.jpg','https://i.ibb.co/XScSFRt/28.jpg','https://i.ibb.co/6mkfG4k/6.jpg','https://i.ibb.co/f8X0QxH/5.jpg','https://i.ibb.co/xMDxFhW/27.jpg','https://i.ibb.co/BsGDBM9/22.jpg','https://i.ibb.co/zP3yPvQ/44.jpg','https://i.ibb.co/rtsrbLw/43.jpg','https://i.ibb.co/KmwN3jq/2.jpg','https://i.ibb.co/xXGSvLf/46.jpg','https://i.ibb.co/Jr6QGh7/24.jpg','https://i.ibb.co/MfKYGfP/45.jpg','https://i.ibb.co/G0kXbvR/23.jpg','https://i.ibb.co/nRDZpHx/11.jpg','https://i.ibb.co/hBrPSrb/8.jpg','https://i.ibb.co/RCP18Qd/30.jpg','https://i.ibb.co/DD3jjCV/7.jpg','https://i.ibb.co/YD54YbH/29.jpg','https://i.ibb.co/JQ6Q7vS/10.jpg','https://i.ibb.co/B2bDnd4/31.jpg','https://i.ibb.co/HY0mxbt/9.jpg']
        var result = sakura[Math.floor(Math.random() * sakura.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////SHOTO/////////


router.get('/anime/todoroki-shoto', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        shoto = ['https://i.ibb.co/k1Wxrwz/16.jpg','https://i.ibb.co/8NsKsMX/9.jpg','https://i.ibb.co/0cDQDLk/17.jpg','https://i.ibb.co/1nD0C4S/8.jpg','https://i.ibb.co/FkQBCtk/44.jpg','https://i.ibb.co/h7qJvLb/15.jpg','https://i.ibb.co/2cV793H/69.jpg','https://i.ibb.co/rwn9JWf/48.jpg','https://i.ibb.co/XtFKmBV/68.jpg','https://i.ibb.co/bB4Bzh0/47.jpg','https://i.ibb.co/JnPFnx2/70.jpg','https://i.ibb.co/g3fJ69R/7.jpg','https://i.ibb.co/RDwCzQH/49.jpg','https://i.ibb.co/3cfrjpt/72.jpg','https://i.ibb.co/hR4ZdFN/71.jpg','https://i.ibb.co/svGrfqL/28.jpg','https://i.ibb.co/j67Kfjs/30.jpg','https://i.ibb.co/Vx2dNN4/54.jpg','https://i.ibb.co/z4tGCRj/3.jpg','https://i.ibb.co/YQx9BW7/46.jpg','https://i.ibb.co/hMchk3N/45.jpg','https://i.ibb.co/tLyf6wd/14.jpg','https://i.ibb.co/hmGWN3W/5.jpg','https://i.ibb.co/StpLqTQ/31.jpg','https://i.ibb.co/nwm2YSB/38.jpg','https://i.ibb.co/5h4GnKL/42.jpg','https://i.ibb.co/xsdktYP/25.jpg','https://i.ibb.co/3k4zWKM/39.jpg','https://i.ibb.co/h7FF1W6/60.jpg','https://i.ibb.co/yfGx3C5/37.jpg','https://i.ibb.co/1MQVqbL/6.jpg','https://i.ibb.co/sPDwwT9/40.jpg','https://i.ibb.co/tmPc4p2/4.jpg','https://i.ibb.co/wWJtysV/74.jpg','https://i.ibb.co/LJP6TSt/73.jpg','https://i.ibb.co/2sJqmp1/41.jpg','https://i.ibb.co/9NFcMT3/57.jpg']
        var result = shoto[Math.floor(Math.random() * shoto.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//////////////////////RIMURU/////////


router.get('/anime/rimuru', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        rimuru = ['https://i.ibb.co/726Smjs/33.jpg','https://i.ibb.co/LdwYvpc/34.jpg','https://i.ibb.co/DCsByNb/12.jpg','https://i.ibb.co/w0CND9x/32.jpg','https://i.ibb.co/9h6ZcFR/8.jpg','https://i.ibb.co/dt99Gr7/30.jpg','https://i.ibb.co/ccZdBpR/9.jpg','https://i.ibb.co/p3FBVcQ/31.jpg','https://i.ibb.co/my1p0vY/6.jpg','https://i.ibb.co/prsSGPx/28.jpg','https://i.ibb.co/JCD4rsd/7.jpg','https://i.ibb.co/MDjXxmY/29.jpg','https://i.ibb.co/2k3t9Yv/26.jpg','https://i.ibb.co/31vCBpX/4.jpg','https://i.ibb.co/8s1hntb/27.jpg','https://i.ibb.co/7r9Kx1J/5.jpg','https://i.ibb.co/Msh0LXw/2.jpg','https://i.ibb.co/8MttBTW/24.jpg','https://i.ibb.co/GC9xyCL/25.jpg','https://i.ibb.co/4TtMbT8/3.jpg','https://i.ibb.co/SKbJxWH/10.jpg','https://i.ibb.co/j5wRf5t/11.jpg','https://i.ibb.co/qCbPNBc/22.jpg','https://i.ibb.co/SmyG3LK/23.jpg','https://i.ibb.co/QrPvRQP/19.jpg','https://i.ibb.co/ChzZk60/20.jpg','https://i.ibb.co/tPZNtzT/17.jpg','https://i.ibb.co/84JztVT/18.jpg','https://i.ibb.co/QQWR92y/15.jpg','https://i.ibb.co/F7RHZv9/37.jpg','https://i.ibb.co/CzfkCkD/16.jpg','https://i.ibb.co/6N3JD0m/38.jpg','https://i.ibb.co/rG0KRMn/35.jpg','https://i.ibb.co/sJm05v0/13.jpg','https://i.ibb.co/m5dSHgF/36.jpg','https://i.ibb.co/TYR47sW/14.jpg','https://i.ibb.co/XthwzfN/1.jpg','https://i.ibb.co/xqvf9vV/21.jpg']
        var result = rimuru[Math.floor(Math.random() * rimuru.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

/////////////SHION///////////


router.get('/anime/shion', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        shion = ['https://i.ibb.co/Vq0CwXJ/13.jpg','https://i.ibb.co/XsHGqdd/2.jpg','https://i.ibb.co/8cd2gBz/14.jpg','https://i.ibb.co/n6VGwTz/3.jpg','https://i.ibb.co/SQNwMPQ/11.jpg','https://i.ibb.co/S0sWZXC/22.jpg','https://i.ibb.co/RThqBfL/1.jpg','https://i.ibb.co/T8VC64r/12.jpg','https://i.ibb.co/p0dJYyv/23.jpg','https://i.ibb.co/8dZy6rd/20.jpg','https://i.ibb.co/wcm068R/9.jpg','https://i.ibb.co/RYpR8FX/10.jpg','https://i.ibb.co/1Z7rzmN/21.jpg','https://i.ibb.co/bgYHND5/18.jpg','https://i.ibb.co/tbpC06P/8.jpg','https://i.ibb.co/rkr3Qm9/19.jpg','https://i.ibb.co/BcL9Rc1/17.jpg','https://i.ibb.co/tsqLSMs/6.jpg','https://i.ibb.co/ssNLg24/7.jpg','https://i.ibb.co/v4KL0Dn/4.jpg','https://i.ibb.co/w7XRBck/15.jpg','https://i.ibb.co/Q9FRf1w/16.jpg','https://i.ibb.co/GtTnmtp/5.jpg']
        var result = shion[Math.floor(Math.random() * shion.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//////////////SHUNA///////////

router.get('/anime/shuna', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        shuna = ['https://i.ibb.co/SB1d7KN/6.jpg','https://i.ibb.co/T4k267q/17.jpg','https://i.ibb.co/PC5pMpd/18.jpg','https://i.ibb.co/3BSymkB/7.jpg','https://i.ibb.co/RyHrr3C/15.jpg','https://i.ibb.co/yQ8dKS1/5.jpg','https://i.ibb.co/9gWWbzP/16.jpg','https://i.ibb.co/gTSVk40/14.jpg','https://i.ibb.co/yYvHXxz/3.jpg','https://i.ibb.co/DKZVW8K/4.jpg','https://i.ibb.co/C6ZkQ9V/12.jpg','https://i.ibb.co/LYC0DWh/1.jpg','https://i.ibb.co/cN2ZS4w/2.jpg','https://i.ibb.co/Jt0MrjV/13.jpg','https://i.ibb.co/yQPfSrw/10.jpg','https://i.ibb.co/GW82cpX/11.jpg','https://i.ibb.co/G254pyQ/19.jpg','https://i.ibb.co/bHCLgBp/8.jpg','https://i.ibb.co/c2WTgGX/9.jpg']
        var result = shuna[Math.floor(Math.random() * shuna.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


//////////////MILIM///////

router.get('/anime/milim', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        milim = ['https://i.ibb.co/XFskXnK/23.jpg','https://i.ibb.co/YDKRWV1/2.jpg','https://i.ibb.co/W60tZDr/3.jpg','https://i.ibb.co/44k9Bd0/24.jpg','https://i.ibb.co/FJSRyH2/21.jpg','https://i.ibb.co/tQy9LVp/1.jpg','https://i.ibb.co/54Nb9zQ/22.jpg','https://i.ibb.co/mvPkmR8/19.jpg','https://i.ibb.co/4RWG4n4/20.jpg','https://i.ibb.co/qJN7mZM/18.jpg','https://i.ibb.co/VxSZ1W9/17.jpg','https://i.ibb.co/y5gPs0H/15.jpg','https://i.ibb.co/4dkC8BG/16.jpg','https://i.ibb.co/wKXRJf0/27.jpg','https://i.ibb.co/0B1sh5S/13.jpg','https://i.ibb.co/kDLmrwT/14.jpg','https://i.ibb.co/Qd957pH/11.jpg','https://i.ibb.co/2vqYNDN/12.jpg','https://i.ibb.co/dr52kKh/30.jpg','https://i.ibb.co/GndYLwS/9.jpg','https://i.ibb.co/BB3mWpm/10.jpg','https://i.ibb.co/gjf2THn/28.jpg','https://i.ibb.co/6yXwjM8/29.jpg','https://i.ibb.co/8KS0MXc/8.jpg','https://i.ibb.co/DwwKzd1/6.jpg','https://i.ibb.co/602ZKxQ/7.jpg','https://i.ibb.co/2Y75bpW/4.jpg','https://i.ibb.co/xjh4f9R/25.jpg','https://i.ibb.co/pfps757/26.jpg','https://i.ibb.co/cNsRXvj/5.jpg']
        var result = milim[Math.floor(Math.random() * milim.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//////////////SOUEI///////////

router.get('/anime/souei', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        souei = ['https://i.ibb.co/dBmkw33/2.jpg','https://i.ibb.co/8rq77Zt/4.jpg','https://i.ibb.co/BgMq6NR/11.jpg','https://i.ibb.co/5sVs0pp/1.jpg','https://i.ibb.co/tYbgM0h/12.jpg','https://i.ibb.co/nR7XNvW/9.jpg','https://i.ibb.co/z6qdwtt/10.jpg','https://i.ibb.co/N98M5bJ/7.jpg','https://i.ibb.co/RYF0zRC/8.jpg','https://i.ibb.co/p1fWM5g/5.jpg','https://i.ibb.co/x5ZGQrd/6.jpg','https://i.ibb.co/zJSpS2L/3.jpg']
        var result = souei[Math.floor(Math.random() * souei.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

/////////////JEANNE/////////

router.get('/anime/jeanne', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        jeanne = ['https://i.ibb.co/p18prPk/3.jpg','https://i.ibb.co/3sychGm/14.jpg','https://i.ibb.co/5kv6M9T/15.jpg','https://i.ibb.co/S0ZNqrr/4.jpg','https://i.ibb.co/H79tLff/1.jpg','https://i.ibb.co/BZ03V0Z/23.jpg','https://i.ibb.co/XJbFwkd/12.jpg','https://i.ibb.co/Bs9Gd8p/13.jpg','https://i.ibb.co/g7Q7ckz/2.jpg','https://i.ibb.co/fqQ0Ht8/21.jpg','https://i.ibb.co/KjVxZwf/10.jpg','https://i.ibb.co/vx8G2sj/22.jpg','https://i.ibb.co/Mhw4xsQ/11.jpg','https://i.ibb.co/Z25bm2y/19.jpg','https://i.ibb.co/kXjwLyk/20.jpg','https://i.ibb.co/nDFnpRg/9.jpg','https://i.ibb.co/qr1Qjns/18.jpg','https://i.ibb.co/hf6FMNg/7.jpg','https://i.ibb.co/KLKk8jC/8.jpg','https://i.ibb.co/KLJwWSV/16.jpg','https://i.ibb.co/Lhr75f2/5.jpg','https://i.ibb.co/qxzwB5v/6.jpg','https://i.ibb.co/N1Q2DD8/17.jpg']
        var result = jeanne[Math.floor(Math.random() * jeanne.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////VANITAS/////////

router.get('/anime/vanitas', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        vanitas = ['https://i.ibb.co/SKXtPYN/18.jpg','https://i.ibb.co/n0vKsn4/19.jpg','https://i.ibb.co/djCsVxQ/16.jpg','https://i.ibb.co/9WLdtQ0/17.jpg','https://i.ibb.co/k3hZvVd/15.jpg','https://i.ibb.co/SQppdLN/13.jpg','https://i.ibb.co/7y4RF0Q/14.jpg','https://i.ibb.co/z54fy0P/11.jpg','https://i.ibb.co/MBH4qXh/12.jpg','https://i.ibb.co/cx7p5jH/9.jpg','https://i.ibb.co/hRscFYV/10.jpg','https://i.ibb.co/ZfPbqSW/7.jpg','https://i.ibb.co/cvcgw37/8.jpg','https://i.ibb.co/CBpvpty/6.jpg','https://i.ibb.co/n7myX2C/26.jpg','https://i.ibb.co/qyB6Mxd/4.jpg','https://i.ibb.co/bWTmxY1/5.jpg','https://i.ibb.co/gtKJnSr/2.jpg','https://i.ibb.co/L8QSbKq/24.jpg','https://i.ibb.co/Vv2rrRQ/25.jpg','https://i.ibb.co/SNw4rXB/3.jpg','https://i.ibb.co/s13XV18/22.jpg','https://i.ibb.co/LnknWz2/23.jpg','https://i.ibb.co/kyncrK8/1.jpg','https://i.ibb.co/gJ73KWh/20.jpg','https://i.ibb.co/FBFDZLt/21.jpg']
        var result = vanitas[Math.floor(Math.random() * vanitas.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//////////SIESTA////////


router.get('/anime/siesta', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        siesta = ['https://i.ibb.co/mHDL9n8/7.jpg','https://i.ibb.co/N6YbBPn/8.jpg','https://i.ibb.co/Nx81Kxp/4.jpg','https://i.ibb.co/w6d80K5/15.jpg','https://i.ibb.co/X4yq78f/16.jpg','https://i.ibb.co/qnmVY0g/5.jpg','https://i.ibb.co/JCxjbJn/2.jpg','https://i.ibb.co/sKcTgzV/13.jpg','https://i.ibb.co/bvgzHRs/3.jpg','https://i.ibb.co/gWJ2Lsg/14.jpg','https://i.ibb.co/0ngbGyT/11.jpg','https://i.ibb.co/KrpBmCp/1.jpg','https://i.ibb.co/t8698dm/12.jpg','https://i.ibb.co/ckZYxV4/9.jpg','https://i.ibb.co/CnwCYww/10.jpg','https://i.ibb.co/gFBgmx5/6.jpg']
        var result = siesta[Math.floor(Math.random() * siesta.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////LEVI////////

router.get('/anime/levi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {
        levi = ['https://i.ibb.co/m91rrn6/12.jpg','https://i.ibb.co/5rRd748/13.jpg','https://i.ibb.co/qRZfYdr/10.jpg','https://i.ibb.co/w0gL2ch/11.jpg','https://i.ibb.co/GQ201Fd/9.jpg','https://i.ibb.co/TPyX2kd/7.jpg','https://i.ibb.co/Yk4nCzR/8.jpg','https://i.ibb.co/McKS6jQ/5.jpg','https://i.ibb.co/8dKmV5C/6.jpg','https://i.ibb.co/bzjCT8L/25.jpg','https://i.ibb.co/2NYmkmQ/3.jpg','https://i.ibb.co/1XgYWqd/4.jpg','https://i.ibb.co/svgVT24/23.jpg','https://i.ibb.co/qdP34h2/1.jpg','https://i.ibb.co/zhYvCBf/2.jpg','https://i.ibb.co/5nvvDbC/24.jpg','https://i.ibb.co/tp5mmzY/21.jpg','https://i.ibb.co/ZmYr7zw/22.jpg','https://i.ibb.co/2PhkHQZ/19.jpg','https://i.ibb.co/y6Y42sv/20.jpg','https://i.ibb.co/9WY34X6/18.jpg','https://i.ibb.co/c33rqkL/16.jpg','https://i.ibb.co/516JjN4/17.jpg','https://i.ibb.co/vd5Tg8V/14.jpg','https://i.ibb.co/sCst1sV/15.jpg']
        var result = levi[Math.floor(Math.random() * levi.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/anime/asuna', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/asuna.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})



router.get('/anime/ppcouple', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/ppcouple.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})





////////////NSFW///////

router.get('/nsfw/yaoi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

                yaoi = ['https://i.ibb.co/H20cxHt/072e882a13784ed6b393da279740bcc0.jpg','https://i.ibb.co/xLmcwLG/cc5a185250e695fd9d997be3fb90cba8.jpg','https://i.ibb.co/6sW18WH/b5713fbe06722b6d1573a0693dbefeff.jpg','https://i.ibb.co/9NK7wP0/9b61264bae5ea3def48931fe61d03d35.jpg','https://i.ibb.co/vQBzpBM/73dcdc724c467751687dcf31fb1aefc0.jpg','https://i.ibb.co/nzQNkLt/95cba3e1a95fc98011ec364b73b63681.jpg','https://i.ibb.co/9yHGndC/c6cd37f89bf738bfb65e129501c2aea3.jpg','https://i.ibb.co/K5nbz31/4b12335a798b8fdeb9267f5fc6b7b1b7.jpg','https://i.ibb.co/DbxpYM2/bb7e938f439fac68deca0927d88f01ed.jpg','https://i.ibb.co/PzCwc4j/28ceb6796ea023fba3126b00b24ceb5f.jpg','https://i.ibb.co/2WGp7S2/02788753d2430301879112f65d77797b.jpg','https://i.ibb.co/8zR2RV9/a5be5f05cb93083c59e78a5882ac6296.jpg','https://i.ibb.co/9bPcLtc/5dea24e44bc5212f24327c4342bc73dc.jpg','https://i.ibb.co/2K19cyf/48f0be41c729223e0248c2da00248615.jpg','https://i.ibb.co/YpLxpyX/2ef706dbb016c46a4af3e5bfe5a1f13d.jpg','https://i.ibb.co/fqPsJ50/79e88dd5c142766fafa2d7d25249f730.jpg','https://i.ibb.co/gyt80kC/03fef58fc692b604d3b72e6daa24968a.jpg','https://i.ibb.co/XCGDBXh/ac4a4108777fe27d139454c7ae58486e.jpg','https://i.ibb.co/WtZ79X2/6710165712c7e4df6639fe28ce27862b.jpg','https://i.ibb.co/R7bS8TX/c7f27f015e6d11eb9c20804b70943a11.jpg','https://i.ibb.co/ynQrCfw/13c62b330da24d795b58ceb901b666ed.jpg','https://i.ibb.co/LJ2XTH8/9e08982204a7cdb4e0be8a6859a49c6a.jpg','https://i.ibb.co/K2FgjyK/4e290c2b619829478b20b5d2a3d0cce1.jpg','https://i.ibb.co/VS838yy/d5764361266b12168bf2865c0a4b9423.jpg','https://i.ibb.co/mCjQ2X3/913e0bb81fcc2646dacdec4e53ae85b0.jpg','https://i.ibb.co/9tZHmj2/92fa56eb558408e9c8cd38a28e64a79c.jpg','https://i.ibb.co/VpY6mm0/6ac7d2ff49eab95126159dab8c208b8e.jpg','https://i.ibb.co/gD7x7ZY/tumblr-obxqhl-BG4-S1vpnkzgo9-500.gif','https://i.ibb.co/rx53WLq/Honpo-KES-Keisuke-Beast-Quarturback-p10.jpg','https://i.ibb.co/P9ZCjG5/k-14.jpg','https://i.ibb.co/j6CBT9q/tumblr-obxeum4-Yze1vpnkzgo6-500.gif','https://i.ibb.co/zVq1PBv/Otogibanashi-Momotarou-p22.jpg','https://i.ibb.co/bP2F3v7/Eigyou-no-Himitsu-Eigyouman-Hen-05-768x1076.jpg','https://i.ibb.co/936nmhQ/tumblr-oh61n0nz-Tu1v3305so2-1280.jpg','https://i.ibb.co/jfrkDb4/tumblr-ogyw37c-KTA1v3305so10-1280.jpg','https://i.ibb.co/TbTs52W/13151392-175405149524682-4391037514665611191-n.jpg','https://i.ibb.co/ZfPQhLL/Eigyou-no-Himitsu-Eigyouman-Hen-13.jpg','https://i.ibb.co/nbHmVTy/1451156159803-1.jpg','https://i.ibb.co/CHn8WkZ/14910396-1019178244875528-6024731275108911881-n.jpg','https://i.ibb.co/d2PX5rN/Ulcos-Hajimemashita-p19.jpg','https://i.ibb.co/ckdyF9C/13177172-175404946191369-2138939831477751882-n.jpg','https://i.ibb.co/4FVGWYw/tumblr-n33zdl8-PLS1rti8mwo1-540.jpg','https://i.ibb.co/s3ZsNn3/tumblr-o61vb4jo-Lw1vqsriao1-500.gif','https://i.ibb.co/GkQxLVg/1451156470431-2.jpg','https://i.ibb.co/NrP0cQW/14962645-1488377351177437-7747096272263821073-n.jpg"','https://i.ibb.co/3ft7RJd/Devil-s-Hassle-13.jpg','https://i.ibb.co/Wgxc6N8/tumblr-ogyw37c-KTA1v3305so8-1280.jpg','https://i.ibb.co/M8p4JdF/Vanilla-Lynx43.jpg','https://i.ibb.co/ssXRCpy/k-9.jpg','https://i.ibb.co/J5DxKzY/Otogibanashi-Momotarou-p06.jpg','https://i.ibb.co/FnwtHpC/1451155824218-2.jpg','https://i.ibb.co/YyDKhnr/1451156310204-2.jpg','https://i.ibb.co/mXhqNHJ/15094322-1963420053885655-8548455923134114646-n.jpg','https://i.ibb.co/Kw8h89G/tumblr-ndguhr-Ee-QH1rcqzf1o7-1280.jpg','https://i.ibb.co/VgT0H32/tumblr-obxptw-Sh-MV1vpnkzgo6-1280.gif','https://i.ibb.co/PgQL0bt/tumblr-oh62br-PBm11v3305so8-1280.jpg','https://i.ibb.co/zSfZ05w/Ulcos-Hajimemashita-p16-768x1151.jpg','https://i.ibb.co/zSqsSGh/Otogibanashi-Momotarou-p29.jpg','https://i.ibb.co/4sLDKRX/tumblr-odxfy34-S4-P1rsccq2o1-540.jpg','https://i.ibb.co/YpNw8LD/tumblr-ogyw37c-KTA1v3305so1-1280.jpg','https://i.ibb.co/8rDWqgb/tumblr-obxqm6-Ao-Qx1vpnkzgo3-500.gif','https://i.ibb.co/yBjWGfm/Vanilla-Lynx23.jpg','https://i.ibb.co/4WJq7yS/or7qrn3kifqvn5fmy4s72kwbf74gljek-hq.jpg','https://i.ibb.co/2FDxbwx/tumblr-oeqvm2m-G7-O1uwmiaro1-540.gif','https://i.ibb.co/f9nC3bD/20.jpg','https://i.ibb.co/5RHqMdZ/Honpo-KES-Keisuke-Beast-Quarturback-p17.jpg','https://i.ibb.co/0BVCYQ7/pg-3.jpg','https://i.ibb.co/KFjH9gM/Vanilla-Lynx19.jpg','https://i.ibb.co/SP3TysP/13138999-175405076191356-3518831954954214710-n.jpg','https://i.ibb.co/0VWPBQQ/LIGHT-THE-FIRE-23-Thai.jpg','https://i.ibb.co/3NzfCBL/tumblr-oh61n0nz-Tu1v3305so10-1280.jpg','https://i.ibb.co/NC431fs/27.jpg','https://i.ibb.co/990dVr6/tumblr-oh62br-PBm11v3305so3-1280.jpg','https://i.ibb.co/wBnvWCN/tumblr-obxptw-Sh-MV1vpnkzgo4-500.gif','https://i.ibb.co/34V9hnH/Honpo-KES-Keisuke-Beast-Quarturback-p29.jpg','https://i.ibb.co/qrqd9LH/13178933-175404619524735-6214786156822615683-n.jpg','https://i.ibb.co/J2gkVXh/Otogibanashi-Momotarou-p03.jpg','https://i.ibb.co/T4PLqhw/Mentaiko-Niichan-to-p20-Thai.jpg','https://i.ibb.co/VjYMwRC/tumblr-ogyw37c-KTA1v3305so6-1280.jpg','https://i.ibb.co/09f1yDK/Eigyou-no-Himitsu-Eigyouman-Hen-04-768x1076.jpg','https://i.ibb.co/P14GzPB/LIGHT-THE-FIRE-21-Thai.jpg','https://i.ibb.co/NyST6h6/tumblr-obxq28-A1-P11vpnkzgo9-500.gif','https://i.ibb.co/JdTgpLD/tumblr-ode8rnaj-I41vqsriao1-500.gif','https://i.ibb.co/jfr6jJH/Devils-Hassle-09.jpg','https://i.ibb.co/NnSRPnb/Honpo-KES-Keisuke-Beast-Quarturback-p22.jpg','https://i.ibb.co/T2xHZLz/k-18.jpg','https://i.ibb.co/cyQSCrR/tumblr-obxqhl-BG4-S1vpnkzgo6-500.gif','https://i.ibb.co/gZLgYLV/Eigyou-no-Himitsu-Eigyouman-Hen-17.jpg','https://i.ibb.co/hK28dyP/Otogibanashi-Momotarou-p10.jpg','https://i.ibb.co/vs2tCs5/1451156983187-1.jpg','https://i.ibb.co/tY1k94f/Devils-Hassle-10.jpg','https://i.ibb.co/BV9xr20/1451156812363-2.jpg','https://i.ibb.co/VS4ycQT/13173964-175404829524714-679879800301080586-n.jpg','https://i.ibb.co/XpSLFYy/k-12.jpg','https://i.ibb.co/FwLdBnw/24.jpg','https://i.ibb.co/QmTRCRH/k-24.jpg','https://i.ibb.co/brcFh8V/13151947-175404779524719-6703626991171429508-n.jpg','https://i.ibb.co/Ypq35jh/k-21.jpg','https://i.ibb.co/jGHK72x/11.jpg','https://i.ibb.co/47MkPgH/Honpo-KES-Keisuke-Beast-Quarturback-p09.jpg','https://i.ibb.co/MpLpQh2/Mentaiko-Niichan-to-p19-Thai-768x1090.jpg','https://i.ibb.co/3yQ5C6s/tumblr-obxqm6-Ao-Qx1vpnkzgo6-500.gif','https://i.ibb.co/GP1DPft/tumblr-odctue-Va-O41tayeuzo1-540.jpg','https://i.ibb.co/b7PKVrT/tumblr-obxqm6-Ao-Qx1vpnkzgo1-540.gif','https://i.ibb.co/72DHght/Honpo-KES-Keisuke-Beast-Quarturback-p13.jpg','https://i.ibb.co/m43x7vv/Honpo-KES-Keisuke-Beast-Quarturback-p26.jpg','https://i.ibb.co/fYPFfNc/pg-7.jpg','https://i.ibb.co/HhmDXn1/Ulcos-Hajimemashita-p20.jpg','https://i.ibb.co/N9xwJBR/14993363-1963420027218991-1047496959396438002-n.jpg','https://i.ibb.co/PgqrxBb/14938337-1128398187280937-465067282033392714-n.jpg','https://i.ibb.co/C9dMvxZ/Eigyou-no-Himitsu-Eigyouman-Hen-09.jpg','https://i.ibb.co/R4pKSq5/tumblr-obxptw-Sh-MV1vpnkzgo10-400.gif','https://i.ibb.co/DgdxQxG/tumblr-oh2e21-XPoo1uovcn5o1-400.gif','https://i.ibb.co/VMg6S0F/1451157732105-1.jpg','https://i.ibb.co/z64S6cv/Otogibanashi-Momotarou-p14.jpg','https://i.ibb.co/xGd9Y7P/Honpo-KES-Keisuke-Beast-Quarturback-p30.jpg','https://i.ibb.co/cyw21XL/1451156639169-1.jpg','https://i.ibb.co/JrBVj7C/tumblr-obxptw-Sh-MV1vpnkzgo1-500.gif','https://i.ibb.co/rwbgDY7/tumblr-obxeum4-Yze1vpnkzgo4-400.gif','https://i.ibb.co/R9CqYWY/Eigyou-no-Himitsu-Eigyouman-Hen-02.jpg','https://i.ibb.co/9Vg04Tq/Otogibanashi-Momotarou-p25.jpg','https://i.ibb.co/jRZ3vYk/tumblr-oh62br-PBm11v3305so6-1280.jpg','https://i.ibb.co/6H52FC0/tumblr-obxeum4-Yze1vpnkzgo10-500.gif','https://i.ibb.co/SsBBXxb/k-7.jpg','https://i.ibb.co/VW7qMZP/LIGHT-THE-FIRE-26-Thai.jpg','https://i.ibb.co/vZXybnd/Vanilla-Lynx15.jpg','https://i.ibb.co/R0NsF7D/Eigyou-no-Himitsu-Eigyouman-Hen-14.jpg','https://i.ibb.co/fxktXxN/14720328-913738948758485-7480936533336562381-n.jpg','https://i.ibb.co/LJVn2cd/tumblr-oh61n0nz-Tu1v3305so5-1280.jpg','https://i.ibb.co/FWKT2vC/13124699-175404589524738-2494066538010355771-n.jpg','https://i.ibb.co/QmCd7JM/13124516-175405132858017-6915647602886929156-n.jpg','https://i.ibb.co/Ltv72R8/Vanilla-Lynx18.jpg','https://i.ibb.co/99BQHvm/k-3.jpg','https://i.ibb.co/T4kfvp2/tumblr-obxqm6-Ao-Qx1vpnkzgo4-540.gif','https://i.ibb.co/8K5VYtZ/Otogibanashi-Momotarou-p23.jpg','https://i.ibb.co/VD0FB2f/tumblr-obxq28-A1-P11vpnkzgo8-500.gif','https://i.ibb.co/Zz7tRfY/tumblr-ogyw37c-KTA1v3305so5-1280.jpg','https://i.ibb.co/qpLySP8/Mentaiko-Niichan-to-p22-Thai.jpg','https://i.ibb.co/N9wQPzD/Ulcos-Hajimemashita-p18.jpg','https://i.ibb.co/mhc0mCv/Honpo-KES-Keisuke-Beast-Quarturback-p18.jpg','https://i.ibb.co/3vjnTHx/tumblr-ndguhr-Ee-QH1rcqzf1o4-1280.jpg','https://i.ibb.co/yXDhm3J/tumblr-of96b6-Oqf-U1ro5myeo1-500.gif','https://i.ibb.co/7Cx3DLJ/13179262-175405182858012-5865093951752261410-n.jpg','https://i.ibb.co/Y3cRXtk/tumblr-obxqm6-Ao-Qx1vpnkzgo5-500.gif','https://i.ibb.co/BjZ0Wb8/tumblr-o8epnsui-AK1uwese7o2-r1-1280.jpg','https://i.ibb.co/sjxxrpr/16.jpg','https://i.ibb.co/xJVxmSB/Devils-Hassle-08.jpg','https://i.ibb.co/TcL81yS/Vanilla-Lynx24.jpg','https://i.ibb.co/s14Ntb1/1451156159803-0.jpg','https://i.ibb.co/xGMNzSW/Honpo-KES-Keisuke-Beast-Quarturback-p21.jpg','https://i.ibb.co/xHnn3NQ/LIGHT-THE-FIRE-34-Thai.jpg','https://i.ibb.co/db1k4vy/Mentaiko-Niichan-to-p13-Thai.jpg','https://i.ibb.co/yS0nT6f/Devil-s-Hassle-14.jpg','https://i.ibb.co/MZj2D1S/LIGHT-THE-FIRE-28-Thai.jpg','https://i.ibb.co/gdDFcWd/tumblr-oh61n0nz-Tu1v3305so6-1280.jpg','https://i.ibb.co/kMY2Gwz/13178551-175404979524699-6906640207372643057-n.jpg','https://i.ibb.co/yN6dVs7/13138934-175404806191383-40571519775772100-n.jpg','https://i.ibb.co/bQgzSdK/28.jpg','https://i.ibb.co/ZXKLFXL/tumblr-ndguhr-Ee-QH1rcqzf1o3-1280.jpg','https://i.ibb.co/8Pr360W/Vanilla-Lynx36.jpg','https://i.ibb.co/QvQy5CN/tumblr-oe2f425-GAM1uwese7o1-540.jpg','https://i.ibb.co/t4RnHvN/k-25.jpg','https://i.ibb.co/dK7jJCf/Otogibanashi-Momotarou-p17.jpg','https://i.ibb.co/rdHBpkf/Eigyou-no-Himitsu-Eigyouman-Hen-10.jpg','https://i.ibb.co/47Y3ksY/tumblr-og6arq-Wh-Ea1uwese7o1-1280.jpg','https://i.ibb.co/c3pbPHX/1451155824218-1.jpg','https://i.ibb.co/PYZn162/Otogibanashi-Momotarou-p18.jpg','https://i.ibb.co/1KfJfpB/Mentaiko-Niichan-to-p18-Thai-768x1090.jpg','https://i.ibb.co/stX0Mbk/tumblr-obxqhl-BG4-S1vpnkzgo8-500.gif','https://i.ibb.co/54LH1Pr/tumblr-obxq28-A1-P11vpnkzgo3-500.gif','https://i.ibb.co/qBSjTRJ/1451157159279-0.jpg','https://i.ibb.co/XDvbph3/1451156983187-2.jpg','https://i.ibb.co/yQrFTT1/Mentaiko-Niichan-to-p23-Thai.jpg','https://i.ibb.co/GFGHmmQ/Devil-s-Hassle-07.jpg','https://i.ibb.co/PsyD8GG/tumblr-ndguhr-Ee-QH1rcqzf1o10-1280.jpg','https://i.ibb.co/THPjpb0/12.jpg','https://i.ibb.co/LCM9RvB/tumblr-oh61n0nz-Tu1v3305so9-1280.jpg','https://i.ibb.co/QvFM8vM/k-26.jpg','https://i.ibb.co/Tq2vH9G/LIGHT-THE-FIRE-25-Thai.jpg','https://i.ibb.co/Gvpxg9c/k-20.jpg','https://i.ibb.co/Zf46PZM/Otogibanashi-Momotarou-p28.jpg','https://i.ibb.co/WVDkjKz/LIGHT-THE-FIRE-31-Thai.jpg','https://i.ibb.co/c14C9Xy/8428651395956358768.jpg','https://i.ibb.co/P5mn0Py/Honpo-KES-Keisuke-Beast-Quarturback-p31.jpg','https://i.ibb.co/mzVVkms/Honpo-KES-Keisuke-Beast-Quarturback-p14.jpg','https://i.ibb.co/mSh2xZK/tumblr-oeibvq-Hcv31ro5myeo1-500.gif','https://i.ibb.co/mBmGb26/Eigyou-no-Himitsu-Eigyouman-Hen-08.jpg','https://i.ibb.co/WgNjXdQ/tumblr-oh62br-PBm11v3305so5-1280.jpg','https://i.ibb.co/X7kLQSV/1451156639169-2.jpg','https://i.ibb.co/FVvC4QL/15109555-923191401147298-3129594146580277627-n.jpg','https://i.ibb.co/vkS5C4t/Ulcos-Hajimemashita-p17.jpg','https://i.ibb.co/r42GQQd/Eigyou-no-Himitsu-Eigyouman-Hen-03.jpg','https://i.ibb.co/jbPpXrc/Otogibanashi-Momotarou-p24.jpg','https://i.ibb.co/tqx93c6/k-10.jpg','https://i.ibb.co/QQQVXJz/k-16.jpg','https://i.ibb.co/CHKqm69/1451157732105-0.jpg','https://i.ibb.co/kcZdhg4/Vanilla-Lynx20.jpg','https://i.ibb.co/6NbBQ3X/23.jpg','https://i.ibb.co/rp4YqbP/tumblr-o5jamw27yt1vqsriao1-400.gif','https://i.ibb.co/JsnB019/Honpo-KES-Keisuke-Beast-Quarturback-p25.jpg','https://i.ibb.co/JmjN08M/Otogibanashi-Momotarou-p30.jpg','https://i.ibb.co/dPhVbDM/tumblr-o66dr5cp-Ru1vqsriao1-500.gif','https://i.ibb.co/17Vwpwc/13178020-175404512858079-8016170691493275470-n.jpg','https://i.ibb.co/0BY3Gr6/Honpo-KES-Keisuke-Beast-Quarturback-p19.jpg','https://i.ibb.co/1dXkLZ5/tumblr-obxq28-A1-P11vpnkzgo2-500.gif','https://i.ibb.co/yW8dQn3/1451155991992-2.jpg','https://i.ibb.co/bmC6sz9/tumblr-obxptw-Sh-MV1vpnkzgo7-1280.gif','https://i.ibb.co/c3rtNVs/1451155672177-2.jpg','https://i.ibb.co/mRV52bq/tumblr-ndguhr-Ee-QH1rcqzf1o6-1280.jpg','https://i.ibb.co/tmjV8zr/k-29.jpg','https://i.ibb.co/jksCh6Z/1451155824218-0.jpg','https://i.ibb.co/j5Bsc8W/tumblr-o6s77bg-Cyx1v3305so5-540.gif','https://i.ibb.co/7zpq5VN/tumblr-ogyw37c-KTA1v3305so2-1280.jpg','https://i.ibb.co/RccDmYK/k-15.jpg','https://i.ibb.co/g92BwCq/tumblr-obxeum4-Yze1vpnkzgo2-500.gif','https://i.ibb.co/jVn3CRV/17.jpg','https://i.ibb.co/Zm7P4cs/Otogibanashi-Momotarou-p20.jpg','https://i.ibb.co/7VBjPQL/Vanilla-Lynx25.jpg','https://i.ibb.co/zRmnwLw/Eigyou-no-Himitsu-Eigyouman-Hen-07.jpg','https://i.ibb.co/wc1qzb7/tumblr-obxqhl-BG4-S1vpnkzgo5-500.gif','https://i.ibb.co/yRW0QMX/Mentaiko-Niichan-to-p16-Thai.jpg','https://i.ibb.co/8gC1NhM/25.jpg','https://i.ibb.co/Pcvmr0K/Honpo-KES-Keisuke-Beast-Quarturback-p35.jpg','https://i.ibb.co/WGKv90X/tumblr-o5kyd0dc-H21uwese7o1-540.jpg','https://i.ibb.co/429xYXk/tumblr-ogf2c7q3-Fj1vtcfbno1-500.gif','https://i.ibb.co/LPv2mYF/Honpo-KES-Keisuke-Beast-Quarturback-p27.jpg','https://i.ibb.co/X8xR6Fb/Otogibanashi-Momotarou-p32.jpg','https://i.ibb.co/9ZZRNBd/Vanilla-Lynx17.jpg','https://i.ibb.co/D52Sjm4/k-8.jpg','https://i.ibb.co/Wy37XqN/LIGHT-THE-FIRE-22-Thai.jpg','https://i.ibb.co/qB0nfTh/tumblr-ogyw37c-KTA1v3305so7-1280.jpg','https://i.ibb.co/CvfQf2h/tumblr-obxptw-Sh-MV1vpnkzgo8-500.gif','https://i.ibb.co/pJdw1Y7/13177715-175404642858066-131173624176369418-n.jpg','https://i.ibb.co/JvVV29R/tumblr-o9trf5nhn11uwese7o1-r1-540.jpg','https://i.ibb.co/NFXQbFL/29.jpg','https://i.ibb.co/RyyJgdt/tumblr-obxqhl-BG4-S1vpnkzgo10-500.gif','https://i.ibb.co/n6NpnFt/tumblr-ogujl4c-Vqn1vqsriao1-1280.gif','https://i.ibb.co/0FRsMcJ/Eigyou-no-Himitsu-Eigyouman-Hen-11.jpg','https://i.ibb.co/NYjjtdS/Devils-Hassle-11.jpg','https://i.ibb.co/Jdw3NTN/tumblr-obxeum4-Yze1vpnkzgo5-400.gif','https://i.ibb.co/3BBk8Yb/tumblr-obxqm6-Ao-Qx1vpnkzgo2-540.gif','https://i.ibb.co/sJxCV1q/tumblr-ofua86-VDmd1vcotk8o1-1280.jpg','https://i.ibb.co/dbSXF67/Ulcos-Hajimemashita-p15-768x1122.jpg','https://i.ibb.co/162f9wc/k-30.jpg','https://i.ibb.co/R4fxfk1/LIGHT-THE-FIRE-29-Thai.jpg','https://i.ibb.co/7K0QQCJ/13179426-175404992858031-8760996238139410368-n.jpg','https://i.ibb.co/FhDywKJ/Honpo-KES-Keisuke-Beast-Quarturback-p20.jpg','https://i.ibb.co/Zfk0SLP/tumblr-o4z08hw6wv1vpnkzgo1-400.jpg','https://i.ibb.co/V3WvFRR/1451156310204-0.jpg','https://i.ibb.co/93qtbx5/13100820-175405039524693-3874634861751201471-n.jpg','https://i.ibb.co/2MnFMVq/k-17.jpg','https://i.ibb.co/YBLxDV7/Mentaiko-Niichan-to-p11-Thai.jpg','https://i.ibb.co/6BynZXw/tumblr-obxqm6-Ao-Qx1vpnkzgo7-400.gif','https://i.ibb.co/F5m79Nj/13124963-175404546191409-113336507210718967-n.jpg','https://i.ibb.co/B6jbqFb/30.jpg','https://i.ibb.co/qJ5TB1S/Mentaiko-Niichan-to-p14-Thai.jpg','https://i.ibb.co/YTcGnFP/1451157159279-1.jpg','https://i.ibb.co/F32bJmr/tumblr-obxptw-Sh-MV1vpnkzgo9-400.gif','https://i.ibb.co/MCfvK2J/Vanilla-Lynx21.jpg','https://i.ibb.co/qx5Td6x/Honpo-KES-Keisuke-Beast-Quarturback-p32.jpg','https://i.ibb.co/4Swg1Yb/22.jpg','https://i.ibb.co/B4YNCY8/tumblr-ogyw37c-KTA1v3305so9-1280.jpg','https://i.ibb.co/18ms94T/k-11.jpg','https://i.ibb.co/689ZFNn/15202716-1207028079384675-3828192093816443284-n.jpg','https://i.ibb.co/vVKXc4r/LIGHT-THE-FIRE-24-Thai.jpg','https://i.ibb.co/7JjPsqz/Honpo-KES-Keisuke-Beast-Quarturback-p15.jpg','https://i.ibb.co/mzrxvqF/tumblr-oh62br-PBm11v3305so4-1280.jpg','https://i.ibb.co/zmw4yVY/Otogibanashi-Momotarou-p27.jpg','https://i.ibb.co/kxSKsC4/LIGHT-THE-FIRE-40-Thai.jpg','https://i.ibb.co/85dm1H7/15027457-1963420007218993-5812011147994391402-n.jpg','https://i.ibb.co/6Pz09sq/7091b58554139c3a6954307833fa76c9.jpg','https://i.ibb.co/WH640M9/Otogibanashi-Momotarou-p19.jpg','https://i.ibb.co/s9sVksv/tumblr-obxeum4-Yze1vpnkzgo8-400.gif','https://i.ibb.co/WvQp5k3/k-27.jpg','https://i.ibb.co/2j95hch/image.gif','https://i.ibb.co/wBkkkJf/tumblr-obxptw-Sh-MV1vpnkzgo5-500.gif','https://i.ibb.co/YX0R6JS/tumblr-obxq28-A1-P11vpnkzgo10-540.gif','https://i.ibb.co/N2MbBB4/1451156470431-1.jpg','https://i.ibb.co/rmTnTP6/Otogibanashi-Momotarou-p31.jpg','https://i.ibb.co/qx9wLXQ/Honpo-KES-Keisuke-Beast-Quarturback-p11.jpg','https://i.ibb.co/C8xnV4K/Honpo-KES-Keisuke-Beast-Quarturback-p24.jpg','https://i.ibb.co/PxBCFqQ/Eigyou-no-Himitsu-Eigyouman-Hen-15.jpg','https://i.ibb.co/5hcGn70/k-4.jpg','https://i.ibb.co/VDZ1M1J/Devil-s-Hassle-06.jpg','https://i.ibb.co/HDvhTvW/tumblr-obxptw-Sh-MV1vpnkzgo2-1280.gif','https://i.ibb.co/1dh5dS5/14600911-888754577927781-5545014371601068997-n.jpg','https://i.ibb.co/LxxLpMH/tumblr-o4z3rx-VDHi1vpnkzgo1-540.gif','https://i.ibb.co/s5K0f5B/LIGHT-THE-FIRE-32-Thai.jpg','https://i.ibb.co/ssNMc2B/tumblr-oh61n0nz-Tu1v3305so8-1280.jpg','https://i.ibb.co/2stPzD2/Otogibanashi-Momotarou-p08.jpg','https://i.ibb.co/J53qT1b/tumblr-ogyw37c-KTA1v3305so4-1280.jpg','https://i.ibb.co/gwWRgG9/1451156812363-0.jpg','https://i.ibb.co/j39kvV6/Honpo-KES-Keisuke-Beast-Quarturback-p28.jpg','https://i.ibb.co/b2JjX22/LIGHT-THE-FIRE-27-Thai.jpg','https://i.ibb.co/dkvLHgb/Vanilla-Lynx26.jpg','https://i.ibb.co/Z12Gfxy/18.jpg','https://i.ibb.co/GW13344/26.jpg','https://i.ibb.co/wdnvtB9/tumblr-obltjc-Y21t1vpnkzgo2-1280.gif','https://i.ibb.co/6Zg1Pbv/1451156159803-2.jpg','https://i.ibb.co/mBksJrx/Devil-s-Hassle-12.jpg','https://i.ibb.co/XYy6yQR/1451156983186-0.jpg','https://i.ibb.co/M99B8Kw/LIGHT-THE-FIRE-20-Thai.jpg','https://i.ibb.co/mvCV6YC/Otogibanashi-Momotarou-p05.jpg','https://i.ibb.co/xjnS7jk/tumblr-oa7ht5-V57i1uwese7o1-540.jpg','https://i.ibb.co/KL1qvRk/1451155672177-1.jpg','https://i.ibb.co/qk4Fbbd/14915444-330750923955575-8212897110702769110-n.jpg','https://i.ibb.co/w7Hd9LW/tumblr-obxqhl-BG4-S1vpnkzgo7-500.gif','https://i.ibb.co/PzHyzvs/1451155991992-1.jpg','https://i.ibb.co/0qYfw21/14523053-125909804549370-1432208731671847778-n.jpg','https://i.ibb.co/60NXKwN/k-23.jpg','https://i.ibb.co/CvbKhZP/13177145-175405059524691-8372354415794414990-n.jpg','https://i.ibb.co/pZSk8KY/Devil-s-Hassle-04.jpg','https://i.ibb.co/JCD3R3b/tumblr-o5uu330-Qb-Y1vpnkzgo1-500.jpg','https://i.ibb.co/YyMdJ1z/tumblr-ofua82du2h1vcotk8o1-1280.jpg','https://i.ibb.co/S0s0vvZ/1451157732105-2.jpg','https://i.ibb.co/StRrjtN/14947440-553610514843107-2502499537008077409-n.jpg','https://i.ibb.co/Czjf5Pv/tumblr-o4z3lp-ADPC1vpnkzgo1-540.gif','https://i.ibb.co/GHdNKr1/k-5.jpg','https://i.ibb.co/1rbg0WK/tumblr-o5zkwo-RHv01vpnkzgo1-500.jpg','https://i.ibb.co/7p432Ks/tumblr-odxfy34-S4-P1rsccq2o2-1280.jpg','https://i.ibb.co/804wpQn/13103319-175404676191396-5297184806413956910-n.jpg','https://i.ibb.co/94yVYkh/Otogibanashi-Momotarou-p33.jpg','https://i.ibb.co/xzGx5NV/Vanilla-Lynx40.jpg','https://i.ibb.co/QDWjPfj/Mentaiko-Niichan-to-p17-Thai-768x1090.jpg','https://i.ibb.co/yNcPMK9/Honpo-KES-Keisuke-Beast-Quarturback-p16.jpg','https://i.ibb.co/88Y9TK4/LIGHT-THE-FIRE-30-Thai.jpg','https://i.ibb.co/RjB9Ycc/tumblr-obxqhl-BG4-S1vpnkzgo4-500.gif','https://i.ibb.co/YXFj1Tb/1451156310204-1.jpg','https://i.ibb.co/n0dbH00/k-22.jpg','https://i.ibb.co/d0mxyCS/tumblr-obxeum4-Yze1vpnkzgo3-540.gif','https://i.ibb.co/23zSrZm/tumblr-obltjc-Y21t1vpnkzgo1-500.gif','https://i.ibb.co/18K0pcR/tumblr-ndguhr-Ee-QH1rcqzf1o8-1280.jpg','https://i.ibb.co/Hr40NZX/Otogibanashi-Momotarou-p21.jpg','https://i.ibb.co/B6fWRN3/tumblr-obxq28-A1-P11vpnkzgo4-500.gif','https://i.ibb.co/0Jm7rgD/Honpo-KES-Keisuke-Beast-Quarturback-p23.jpg','https://i.ibb.co/5kQZH27/Otogibanashi-Momotarou-p26.jpg','https://i.ibb.co/Gv9PPfr/tumblr-obxqhl-BG4-S1vpnkzgo3-540.gif','https://i.ibb.co/LtTN4WM/Otogibanashi-Momotarou-p09.jpg','https://i.ibb.co/zGT9Ckp/tumblr-obxeum4-Yze1vpnkzgo9-500.gif','https://i.ibb.co/0t1L6X8/LIGHT-THE-FIRE-33-Thai.jpg','https://i.ibb.co/8ckGpMk/tumblr-oh62br-PBm11v3305so7-1280.jpg','https://i.ibb.co/pzNTPSF/k-6.jpg','https://i.ibb.co/fMbpDhj/Vanilla-Lynx22.jpg','https://i.ibb.co/p43vXZq/tumblr-ogyw37c-KTA1v3305so3-1280.jpg','https://i.ibb.co/YjVYgHy/1451156639169-0.jpg','https://i.ibb.co/2gpDw2w/21.jpg','https://i.ibb.co/sPRhTZX/tumblr-oh61n0nz-Tu1v3305so7-1280.jpg','https://i.ibb.co/WD88shy/tumblr-obxeum4-Yze1vpnkzgo1-500.gif','https://i.ibb.co/tKqmM5Q/tumblr-oh61n0nz-Tu1v3305so4-1280.jpg','https://i.ibb.co/2FZKcZM/14915718-1488377314510774-7861589925402486370-n.jpg','https://i.ibb.co/nP6gJCN/1451155535457-2.jpg','https://i.ibb.co/hfPpkP9/tumblr-obxptw-Sh-MV1vpnkzgo3-1280.gif','https://i.ibb.co/SXZpvFs/1451155991992-0.jpg','https://i.ibb.co/Lnw9JdT/pg-8.jpg','https://i.ibb.co/HqCGs7v/Ulcos-Hajimemashita-p21.jpg','https://i.ibb.co/1JVRkQs/LIGHT-THE-FIRE-14-Thai.jpg','https://i.ibb.co/0FjqMvc/tumblr-oh6o8d-Hfui1u9dg63o1-540.jpg','https://i.ibb.co/Wggdk5t/k-19.jpg','https://i.ibb.co/GJ5T9v1/14947892-199421500466708-587637130390575071-n.jpg','https://i.ibb.co/T1CdQsp/k-13.jpg','https://i.ibb.co/stg0kRx/Devil-s-Hassle-05.jpg','https://i.ibb.co/kBGz4pv/1451155672177-0.jpg','https://i.ibb.co/3MmLnr3/Vanilla-Lynx16.jpg','https://i.ibb.co/Dw3nBHv/1451156812363-1.jpg','https://i.ibb.co/pyXwjMx/Vanilla-Lynx27.jpg','https://i.ibb.co/L5VYFfG/1451156470431-0.jpg','https://i.ibb.co/znsKDtt/1451157159279-2.jpg','https://i.ibb.co/RNsjzwd/tumblr-ndguhr-Ee-QH1rcqzf1o5-1280.jpg','https://i.ibb.co/9NjS5xv/Mentaiko-Niichan-to-p15-Thai.jpg','https://i.ibb.co/zSGb88b/14348712-265640907167772-2105310514-n.jpg','https://i.ibb.co/sR1XNjH/Honpo-KES-Keisuke-Beast-Quarturback-p12.jpg','https://i.ibb.co/WxcpmW3/Mentaiko-Niichan-to-p21-Thai.jpg','https://i.ibb.co/YLQ4Hw6/tumblr-ogfd1yng6n1smo4yho2-1280.gif','https://i.ibb.co/pbWSq5Q/Otogibanashi-Momotarou-p13.jpg']

        var result = yaoi[Math.floor(Math.random() * yaoi.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/hentai', async (req, res, next) => {
          var apikey = req.query.apikey               
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`))
        .then(response => response.json())
        .then(async data => {

           var buffer = (`https://hadi-api.herokuapp.com/api/hentai`)      
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/nsfw/ass', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ass.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/ahegao', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/bdsm', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/blowjob', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})



router.get('/nsfw/cuckold', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/cum', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cum.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/ero', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ero.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/femdom', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/foot', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/foot.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/gangbang', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/glasses', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/hentai2', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/hentaigif', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hnt_gifs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/jahy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/masturbation', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/neko', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/orgy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/panties', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/panties.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/pussy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/thighs', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/yuri', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// islamic
router.get('/islam/tahlil', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/wirid', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/ayatkursi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/doaharian', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/bacaanshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/kisahnabi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/asmaulhusna', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatsubuh', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatzuhur', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatmagrib', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatisya', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatashar', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//game
router.get('/game/tebakgambar', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       tebakgambar()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// other
router.get('/other/ghstalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.username
       	if(!apikey) return res.json(loghandler.apikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro username"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/repostalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.username
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro username"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ConfuMods',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/hilih', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/fakedata', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.country
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro country"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


//////////////

router.get('/other/frases', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       anuu = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=ConfuKeyLolhuman`)
        
        rewi = (anuu.result.quote)
           anu = await fetchJson(`https://hadi-api.herokuapp.com/api/terjemahan?text=${rewi}&from=auto&to=es`)
        var result = anu.result.translated
             res.json({
                creador: `${creator}`,
                status: `online`,               
                frase: result,
                by: anuu.result.by
             })
         


} else {
  res.json(loghandler.apikey)
}
})



router.get('/other/drakorasi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.search
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro search"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/translate', async (req, res, next) => {
          var apikey = req.query.apikey
       	var texto = req.query.texto  
       	if(!apikey) return res.json(loghandler.apikey)
      

       if(!texto) return res.json({ status : false, creador : `${creator}`, message : "Falta el texto!"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/terjemahan?text=${texto}&from=auto&to=es`))
        .then(response => response.json())
        .then(data => {
        var result = data.result.translated
             res.json({
                creador: `${creator}`,
                status: `online`,               
                result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/infotsunami', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/infocuacadunia', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/cuacabandara', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/kodepos', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kota
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro kota"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/coviddunia', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/covidindo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/kbbi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "Falta parámetro text"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////
//.              JSON                 .//
router.get('/anime/akiyama', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/akiyama.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////
router.get('/anime/kobayakawa-anna', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/anna.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////

router.get('/anime/random-anime', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/randomanime.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////


router.get('/anime/misaki-ayuzawa', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/ayuzawa.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////

router.get('/anime/boruto', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/boruto.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////

router.get('/anime/chitoge', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/chitoge.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////

router.get('/anime/deidara', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/deidara.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/doraemon', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/doraemon.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/elaina', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/elaina.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/anime/emilia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/emilia.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/erza', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/erza.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/rias-gremory', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/gremory.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/hestia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/hestia.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/inori', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/inori.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/isuzu', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/isuzu.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/itachi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/itachi.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/kaga', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/kaga.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/kagura', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/kagura.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/kakashi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/kakashi.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/kaori', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/kaori.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/kaneki', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/kaneki.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/kotori', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/kotori.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/kurumi-tokisaki', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/kurumi.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/loli2', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/loli.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/madara', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/madara.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/megumin2', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/megumin.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/mikasa-ackerman', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/mikasa.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/miku', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/miku.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/minato', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/minato.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/nsfw/neko2', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/neko.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/onepiece', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/onepiece.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/nezuko', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/nezuko.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/pokemon', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/pokemon.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/rize', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/rize.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/sagiri', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/sagiri.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/shina', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/shina.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/shinka', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/shinka.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/shota', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/shota.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/shizuka', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/shizuka.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


router.get('/anime/shota', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/shota.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/touka', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/toukachan.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/tsunade', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/tsunade.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/anime/wallpaper2', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/wallhp2.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/nsfw/yuri2', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
        data = JSON.parse(fs.readFileSync('./database/json/yuri.json'))
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


////////////////////////////////////////////////////////////////////////////////
//GIFS//



////////////////////////////////////////////////////////////////
//.                       FIN                       .//

module.exports = router
