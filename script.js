const informations=[
    {
        'firstname':'Sophie',
        'lastname':'Lagache',
        'password':'736207',
        "images":[
            "images/Sophie1.png",
            "images/Sophie2.png",
            "images/Sophie3.png"
        ]
    },
    {
        'firstname':'Philippe',
        'lastname':'Perrée',
        'password':'618178',
        "images":[
            "images/Philippe1.png",
            "images/Philippe2.png",
            "images/Philippe3.png"
        ]
    },
    {
        'firstname':'Corentin',
        'lastname':'Jezierski',
        'password':'588081',
        "images":[
            "images/Corentin1.png",
            "images/Corentin2.png",
            "images/Corentin3.png"
        ]
    },
    {
        'firstname':'Brice',
        'lastname':'Chevallier Kurt',
        'password':'292335',
        "images":[
            "images/Brice1.png",
            "images/Brice2.png",
            "images/Brice3.png"
        ]
    },
    {
        'firstname':'Milan',
        'lastname':'Hergott',
        'password':'693693',
        "images":[
            "images/Milan1.png",
            "images/Milan2.png",
            "images/Milan3.png"
        ]
    },
    {
        'firstname':'Lucas',
        'lastname':'Tarane',
        'password':'450224',
        "images":[
            "images/Lucas1.png",
            "images/Lucas2.png",
            "images/Lucas3.png"
        ]
    }
]



function verifyPassword() {
    var password = document.getElementById('input-login').value;
    for (let information of informations){
        if (information.password == password){
            document.getElementById("login").parentNode.removeChild(document.getElementById("login"))
            setTimeout(function(){fillWelcome(information)},500)
        }
    }
}

function fillWelcome(information){
    welcomeText=document.querySelector("#welcome > .text")
    welcomeText.innerHTML="Félicitations "+information.firstname+" "+information.lastname+", vous êtes connecté !<br>"
    welcomeText.innerHTML+="J'espère que la première partie proposé par mon acolyte Phillippe vous a plu.<br> Je vous laisse découvrir le site magnifique et extraodinaire du projet limbo 😁!<br> Coco<br><br>"
    welcomeText.innerHTML+="<button>Visiter</button>"

    document.querySelector("#welcome > .text > button").addEventListener('click',closeWelcome)
}

function closeWelcome(){
    document.getElementById("welcome").parentNode.removeChild(document.getElementById("welcome"))
    body = document.body;
    body.classList.remove("non-scroll");
    body.scrollTop=0
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    });
}

async function upToTheTop(time){
    if (document.documentElement.scrollTop){
        while (document.documentElement.scrollTop > 0){
            document.documentElement.scrollTop -=50;
            await delay(time);
        }
    } else if (window.pageYOffset){
        while (window.pageYOffset > 0){
            window.pageYOffset -=50;
            await delay(time);
        } 
    } else if (self.pageYOffset){
        while (self.pageYOffset > 0){
            self.pageYOffset -=50;
            await delay(time);
        } 
    } else if (document.body.scrollTop){
        while (document.body.scrollTop > 0){
            document.body.scrollTop -=50;
            await delay(time);
        } 
    }
}

function changeImage(e){
    firstname = e.srcElement.alt
    numberImage = (e.srcElement.src[e.srcElement.src.length - 5])
    for (let information of informations){
        if (information.firstname == firstname){
            newNumberImage = information.images.length == numberImage ? 0 : parseInt(numberImage)
            e.srcElement.src=information.images[newNumberImage]
        }
    }
}

document.querySelectorAll('.picture > img').forEach(item => {
    item.addEventListener('click', e => {
        changeImage(e)
    })
  })