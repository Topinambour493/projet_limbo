const informations=[
    {
        'firstname':'Sophie',
        'lastname':'Lagache',
        'password':'736207'
    },
    {
        'firstname':'Philippe',
        'lastname':'Pérrée',
        'password':'618178'
    },
    {
        'firstname':'Corentin',
        'lastname':'Jezierski',
        'password':'588081'
    },
    {
        'firstname':'Brice',
        'lastname':'Chevallier Kurt',
        'password':'292335'
    },
    {
        'firstname':'Milan',
        'lastname':'Hergott',
        'password':'693693'
    },
    {
        'firstname':'Lucas',
        'lastname':'Tarane',
        'password':'450224'
    }
]

var page_limbo=" \
    <header> \
        <h1>Projet Limbo</h1> \
    </header> \
    <main> \
    <div class='container'> \
        <div class='content history'> \
            <h2 class='text-center'>L’histoire du projet</h2> \
            <p> \
                Tout a commencé autour du 17 mai 2022, lorsque l’idée d’un week-end à la mer entre amis. \
                Cette idée est devenue un projet, le projet Limbo. \
                Ce projet, c’est notre projet. \
    \
                <img src='macron.gif' alt='Macron, c\'est notre projet!!!'> \
    \
                Ce projet a failli devenir une semaine de vacances à Bélâbre dans une maison avec piscine, chez Mr H. \
                Si seulement Mr H n\'était pas un fils de pute qui ne veut pas louer 5 jours mais qui laisse la possibilité sur Airbnb. \
    \
                Il y a eu des heures de recherches pour finalement tomber sur <b>la</b> pépite, une maison à Fort-Mahon-Plage. \
    \
            </p> \
        </div> \
    </div> \
    <div class='container'> \
        <div class='content'> \
            <h2 class='text-center'>Déroulement</h2> \
            <p> \
                Le projet Limbo se déroulera du 27 au 31 août 2022, sur la commune de Fort-Mahon-Plage. \
    \
                De nombreuses activités sont au programme: \
            </p> \
            <ul> \
                <li>baignade</li> \
                <li>construction de châteaux de sable</li> \
                <li>fabrication de douves à échelle humaine</li> \
                <li>pétanque</li> \
                <li>bronzage</li> \
                <li>tennis</li> \
                <li>vortex</li> \
                <li>jeux de sociétés</li> \
                <li>casino</li> \
            </ul> \
            <br> \
        </div> \
    </div> \
    <div class='container'> \
        <div class='content'> \
            <h2 class='text-center'>Les participants de ce projet</h2> \
            <div id='characters'> \
                <div class='character'> \
                    <div class='picture'><img src='test.png' alt='Philippe'></div> \
                    <div class='name'>Philippe</div> \
                    <div class='description'>Il est un des piliers de ce projet puisqu’il a fondé le google doc permettant notamment de déterminer <strong>la</strong> date à laquelle chacun est disponible. C\'est le produit le plus bas du rayon.</div> \
                </div> \
                <div class='character'> \
                    <div class='picture'><img src='test.png' alt='Sophie'></div> \
                    <div class='name'>Sophie</div> \
                    <div class='description'>Elle a trouvé les logements, Bélâbre puis Fort-Mahon-Plage, c’est elle qui les a dénichés et qui s’est occupée de la transaction finale. C\'est la daronne (comme ta mère).</div> \
                </div> \
                <div class='character'> \
                    <div class='picture'><img src='test.png' alt='Milan'></div> \
                    <div class='name'>Milan</div> \
                    <div class='description'>Proche collaborateur de Sophie, il l’a épaulé dans l’acte de location de Fort-Mahon-Plage. Il a néanmoins été un poids difficile à porter quand on lui a demandé une signature qu’il a effectuée tel un enfant de 5 ans ayant bu du rosé.</div> \
                </div> \
                <div class='character'> \
                    <div class='picture'><img src='test.png' alt='Corentin'></div> \
                    <div class='name'>Corentin</div> \
                    <div class='description'>C’est l’homme qui est à l\'initiative du projet, il a proposé l’idée. Il est forcé de se déplacer en train, comme une certaine population pendant le XXème siècle.</div> \
                </div> \
                <div class='character'> \
                    <div class='picture'><img src='test.png' alt='Lucas'></div> \
                    <div class='name'>Lucas</div> \
                    <div class='description'>Il a des renseignements sur les tortues et les dauphins.</div> \
                </div> \
                <div class='character'> \
                    <div class='picture'><img src='test.png' alt='Brice'></div> \
                    <div class='name'>Brice</div> \
                    <div class='description'>Il participe.</div> \
                </div> \
            </div> \
        </div> \
    </div> \
    </main> \
    <footer> \
    © Corentin Jezierski \
    </footer> \
"

function verifyPassword() {
    var password = document.getElementById('login').value;
    for (let information of informations){
        if (information.password == password){
            alert('vous êtes connecté'+' '+information.firstname+' '+information.lastname)
            body = document.getElementById("body-login");
            body.id="";
            body.innerHTML = page_limbo;
        }
    }
}

