var ulrs = [
    'https://diageo.vteximg.com.br/arquivos/ids/158353-428-478/Delicias-de-Natal.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/158004-428-478/caipiroska-500x500.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/157798-428-478/mestredosabor_drinkbaileys_500x500.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/157784-428-478/Tanqueray---Tonic.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/157795-428-478/Tanqueray-Sevilla---Tonic.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/157782-428-478/Black-Fashioned.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/157781-428-478/Red-Highball-Sweet.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/157780-428-478/Red-Highball-Citrus.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/157720-428-478/Mestredosabor-Ypioca-Semana01.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155952-428-478/35816.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155950-428-478/35815.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156336-428-478/35814.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155954-428-478/35813.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156335-428-478/35812.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156334-428-478/35811.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156332-428-478/35809.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155948-428-478/35807.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155946-428-478/35806.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155944-428-478/35805.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155942-428-478/35803.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155940-428-478/35802.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155938-428-478/35801.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155936-428-478/35800.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155934-428-478/35799.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155932-428-478/35798.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155930-428-478/35797.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155928-428-478/35796.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155926-428-478/35795.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155924-428-478/35794.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155922-428-478/35793.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155920-428-478/35792.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155918-428-478/35791.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155916-428-478/35790.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155914-428-478/35789.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155912-428-478/35788.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155910-428-478/35787.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155907-428-478/35786.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155906-428-478/35785.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155904-428-478/35784.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155902-428-478/35783.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155900-428-478/35782.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155898-428-478/35781.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155896-428-478/35780.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155894-428-478/35779.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155890-428-478/35777.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155886-428-478/35775.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155884-428-478/35774.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155882-428-478/35773.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155880-428-478/35772.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155878-428-478/35771.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155876-428-478/35770.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156331-428-478/35769.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155874-428-478/35768.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155872-428-478/35767.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155870-428-478/35766.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155868-428-478/35765.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155866-428-478/35764.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155864-428-478/35763.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155862-428-478/35762.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155860-428-478/35761.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155858-428-478/35760.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155856-428-478/35759.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155854-428-478/35757.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155852-428-478/35756.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155850-428-478/35755.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155848-428-478/35754.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155843-428-478/Tanqueray-Southside.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155842-428-478/TANQUERAY-London-Dry-Gin-Martini.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155841-428-478/TANQUERAY-NO-TEN-Triple-T.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156330-428-478/35750.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155840-428-478/TANQUERAY-London-Dry-Gin-Tom-Collins.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155825-428-478/TANQUERAY-London-Dry-Gin-Martini.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155822-428-478/Smirnoff-Sunset-Peach-Pineapple-656685.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155824-428-478/SMIRNOFF-SUNSET-PEACH-lemonade.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155819-428-478/Smirnoff-Cranberry-Paradise-730687.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155814-428-478/SMIRNOFF-Cranberry.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155810-428-478/Smirnoff-Vanilla-Refri-de-Cola.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155775-428-478/DON-JULIO-Tequila-Mojito.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155809-428-478/Moscow-Mule-656643.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155808-428-478/Citrus-Punch.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156325-428-478/35727.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155807-428-478/Kamikaze-656601.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155806-428-478/Bloody-Mary-656633.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156329-428-478/35723.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155804-428-478/JUN-DAITI-Cranberry.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155803-428-478/Smirnoff-Soda-656661.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155802-428-478/Smirnoff-Cola-656527.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156338-428-478/Dois_copos_002.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155800-428-478/Screwdriver-693523.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155799-428-478/Caipiroska.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155798-428-478/JUN-DAITI-Cha.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155797-428-478/JUN-Martini.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155796-428-478/Sakerinha-JUN-DAITI-Fresh--1-.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155795-428-478/JUN-DAITI-Morango.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155794-428-478/Jun-Daiti-Abacaxi-656685.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155793-428-478/JUN-DAITI-Cranberry.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155792-428-478/BAILEYS-Maracuja.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155791-428-478/Baileys-Latte.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/157833-428-478/Baileys-Chocolate-Quente-.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/157831-428-478/Baileys-Milk-Shake.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155788-428-478/Black-Soda.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155787-428-478/Black-Sour.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155786-428-478/Black-Manhattan.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155785-428-478/Black-Julep2.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156328-428-478/35699.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156327-428-478/35698.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/156326-428-478/35697.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155779-428-478/Bulleit-Bourbon-Pistache-Cafe.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155778-428-478/Bulleit-Bourbon-Pepino.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155777-428-478/Bulleit-Bourbon-Limonada.jpg',
    'https://diageo.vteximg.com.br/arquivos/ids/155705-428-478/Red-Velvet.jpg'
];

var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream('imgs/' + filename)).on('close', callback);
  });
};


ulrs.map(function(url) {
    var nomeImg = url.substring(url.lastIndexOf('/') + 1);
    download(url, nomeImg, function(){
        console.log('done');
    });
});

