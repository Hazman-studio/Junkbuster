var levels = [/*
  {
    matrice: [
      [ 3,15, 3, 3, 3, 4, 3, 3, 4, 4, 3, 3, 3,22,22, 3, 3,22,22, 3, 3],
      [ 3,11, 0, 8, 0, 0, 0, 0, 0, 0, 7, 0, 7, 2, 2, 1, 1, 0, 0,16 ,3],
      [ 3,11, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
      [ 3,11, 0, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0,17, 3],
      [ 3,11, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 9, 0, 0, 1, 1, 0, 0, 0, 3],
      [ 3,11, 0, 0, 0, 0, 8, 9, 0, 0, 0, 0, 0, 0, 0, 2, 2,22,22,18, 3],
      [ 3,11, 0, 0, 0, 0,12,12,12,12,11, 0, 0, 0, 0, 5, 5, 0, 0, 0, 3],
      [ 3,14, 0, 0, 0, 0,10,13,13,13,11, 0, 0, 0, 0,21, 0, 0, 0,19, 3],
      [ 3, 0, 0, 0, 0, 0, 0, 0, 0,10,13, 0, 0, 0, 0, 0, 0, 0, 0,20, 3],
      [ 3, 0, 0, 0, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,20, 3],
      [ 3, 0, 0, 0, 1, 8, 9, 21, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0,20, 3],
      [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,22,22, 3, 3,22,22, 3, 3]
    ],
    items: [itemsId.Pneu, itemsId.Plastique, itemsId.Metal, itemsId.Verre, itemsId.Carton, itemsId.Sceau],
    itemsTime: 1500,
    itemsPattern: false,
    itemSpeed : 50,
    chrono: 10,
    score : 1000,
    polution : 10,
    spawnpoints: [[2,4],[3,4],[4,4],[5,4]],
    seauSpawnpoints: [],
    imagePath: "assets/miniMap/level1.PNG",
    name: "Level test",
    tutoText: [],
    tips : "Vous savez, moi je ne crois pas qu\’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd\’hui avec vous, je dirais que c\’est d\’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer.",
  },*/
  {
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3,15, 3, 3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0,19, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3,12,12,12,14, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Pneu,itemsId.Pneu,itemsId.Pneu,itemsId.Pneu],
    itemsTime: 10000,
    itemsPattern: false,
    itemSpeed : 120,
    chrono: 80,
    score : 50,//score pour un joueur
    polution : 10,
    spawnpoints: [[5,6],[7,6],[9,6],[11,7]],
    seauSpawnpoints: [[7,4],[12,7]],
    imagePath: "assets/miniMap/level1.PNG",
    name: "Level 1",
    tutoText:[
    'Bonjour les gars. Donc c\'est vous la nouvelle equipe de recyclage ?\nPour continuer les instructions cliquez dans le vide.\nSi je vous soule cliquez sur \"SKIP\". ',
    'Ok pour faire simple on doit traiter les déchets qui arrivent depuis la ville. On va commencer par le tri des pneux.',
    'Les Pneu arrivent sur le tapis roulant, attrapez les avant qu\'ils ne soient incinérés et mettez les dans le broyeur.#2#',
    'Le Pneu broyé (appelé broyat) doit etre ramassé avec un seau et vidé dans le contenaire correspondant, le gris. On peut mettre 3 doses de broyats dans 1 seul seau.',
    'Le Pneu broyé peut servire de combustible pour des entreprise, pour entretenir les terrains de foot synthétique ou une fois fondu il sert comme revêtement sur les terrain de jeu pour enfants. ',
    'En cas de probleme appuyez sur ENTRE pour mettre pause et regarder l\'aide'
  ],
  tips : "Lorsque vous jouez sur un terrain synthétique, vous jouez sur des pneux recyclés.",
},{
  matrice: [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1,-1,-1],
    [-1,-1,-1, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3,15, 3,-1,-1,-1],
    [-1,-1,-1, 3, 2, 0, 0, 2, 2, 2, 2, 0, 6, 0, 0, 0,11, 3,-1,-1,-1],
    [-1,-1,-1, 3, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 3,-1,-1,-1],
    [-1,-1,-1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 3,-1,-1,-1],
    [-1,-1,-1, 3, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0,11, 3,-1,-1,-1],
    [-1,-1,-1, 3, 5, 0, 5, 0, 2, 2, 0,19, 0,18, 0, 0,14, 3,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  items: [itemsId.Pneu,itemsId.Plastique],
  itemsTime: 10000,
  itemsPattern: false,
  itemSpeed : 120,
  chrono: 180,
  score : 150,
  polution : 10,
  spawnpoints: [[5,6],[12,5],[7,6],[14,5]],
  seauSpawnpoints: [[8,6],[9,6]],
  imagePath: "assets/miniMap/level2.PNG",
  name: "Level 2",
  tutoText: [
    'Dans cette usine vous devrez faire le trie de pneux et de bidons de plastique.',
    'Pour les pneux vous savez comment faire pas besoin de vous réexpliquer.\nJe vous remet ça comme même #2#',
    'Le plastique doit d\'abord etre compressé.\nPour ce faire il faut mettre le plastique dans le compresseur. On peut mettre jusqu\'à 3 objets dans un compresseur.\nIl faut ensuite l\'activer grace au bouton d\'action',
    'Une fois compressé, vous devez le broyer, puis comme pour les pneux vous jeter dans le bac correspondant, le jaune.#3#"',
    'Oubliez pas non plus que le but du tri c\'est de pas mélanger.\nIl faut donc laver les seaux si vous souhaitez transporter du plastique aprés avoir transporté des Pneu.',
    'Pour laver les seaux, il faut aller a une bassine, deposer le seau à l\'interieure, puis laver le sceau en appuyant plusieur fois sur la touche action.#5#',
    'Le Plastique ainsi recyclé peut etre fondu en fibre de plastique pour faire des polaires, ou en bouteille, ou encore en d\'autre objet en plastique',
  ],
  tips : "Avec 7 bidons on peut réaliser un siège bébé pour les sales gosses."
},{
  matrice: [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1, 3,15, 3, 3, 3, 4, 3, 3, 4, 3, 4, 3, 3, 3, 3,-1,-1,-1],
    [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 9, 3,-1,-1,-1],
    [-1,-1,-1, 3,11, 0, 0, 2, 2, 0, 0, 6, 0, 0, 0, 0, 0, 3,-1,-1,-1],
    [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 3,-1,-1,-1],
    [-1,-1,-1, 3,14, 0, 2,20, 0, 2, 0, 0, 0, 0, 8, 0, 8, 3,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  items: [itemsId.Carton],
  itemsTime: 10000,
  itemsPattern: false,
  itemSpeed : 120,
  chrono: 180,
  score : 200,
  polution : 10,
  spawnpoints: [[5,6],[13,6],[9,6],[15,6]],
  seauSpawnpoints: [],
  imagePath: "assets/miniMap/level3.PNG",
  name: "Level 3",
  tutoText: [
    'Passons maintenant aux cartons',
    'Le carton doit etre compressé puis doit etre transformé en pâte à papier dans la bassine. Ce sont les même commande que pour laver un seau',
    'La pâte doit etre ensuite pressé ce qui donnera de nouvelles feuilles de carton à deposer dans le bac bleu.#1#'
  ],
  tips : "Le carton c'est comme les chats, ça a plusieurs vies, et en plus ça griffe pas. Donc go adopter du carton."
},{
  matrice: [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3, 4, 3, 4, 3, 3, 3, 4, 3, 4, 3, 3, 3,-1,-1,-1],
    [-1,-1,-1, 3, 1, 1, 0,17, 0, 0, 0,20, 0, 0, 0, 0, 0, 3,-1,-1,-1],
    [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 9, 3,-1,-1,-1],
    [-1,-1,-1, 3, 0, 0, 0, 0, 0,15, 0, 0, 0, 0, 0, 0, 9, 3,-1,-1,-1],
    [-1,-1,-1, 3, 0, 6, 0, 0, 0,11, 0, 0, 8, 8, 0, 0, 0, 3,-1,-1,-1],
    [-1,-1,-1, 3, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1],
    [-1,-1,-1, 3, 0, 2, 2, 0, 0,12,12,12,12,12,12,12,14, 3,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3, 4, 3, 4, 3, 3, 3, 4, 3, 4, 3, 3, 3,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  items: [itemsId.Metal,itemsId.Carton],
  itemsTime: 10000,
  itemsPattern: false,
  itemSpeed : 120,
  chrono: 180,
  score : 500,
  polution : 10,
  spawnpoints: [[4,5],[14,6],[7,5],[11,6]],
  seauSpawnpoints: [[13,4],[5,8]],
  imagePath: "assets/miniMap/level4.PNG",
  name: "Level 4",
  tutoText: [
'En plus du carton vous devrez recycler des canettes metaliques.',
'Les canettes doivent etre compressé puis fondu. Il faut ensuite récuprer le metal en fusion avec un seau et le mettre dans une presse.#0#',
'Les plaques de metal ainsi obtenu sont envoyé à d\'autre usine ou elle serons refondu pour refaire des canettes ou de la carroserie'
  ],
  tips : "Avec ce que vous venez de faire vous pouvez offrir un cadeau à une gamin.\nLe fer pour un vélo et le carton pour l'emballage ... un cadeau hyper utile et écolo",
},{
  matrice: [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3, 4, 3, 4, 3,15, 3, 3, 3, 3, 4, 3, 3,-1,-1,-1],
    [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0,11, 0,16, 0,16, 0, 2, 3,-1,-1,-1],
    [-1,-1,-1, 3, 7, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1],
    [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1],
    [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0,14, 0,21, 0,21, 0, 0, 3,-1,-1,-1],
    [-1,-1,-1, 3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1],
    [-1,-1,-1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  items: [itemsId.Verre],
  itemsTime: 10000,
  itemsPattern: false,
  itemSpeed : 120,
  chrono: 180,
  score : 500,
  polution : 10,
  spawnpoints: [[4,5],[14,4],[7,5],[12,4]],
  seauSpawnpoints: [[4,8],[16,8]],
  imagePath: "assets/miniMap/level.PNG",
  name: "Level 5",
  tutoText: [
'Maintenant le Verre',
'Le verre doit etre broyé sur un etablie. Pour ce faire il faut qu\'il y ait sur l\'etablie un seau et une bouteille et appuyez sur la touche action.#4#',
'Le broyat doit etre ensuite fondu, puis il faut amener le verre fondu dans la soufflerie.#4#',
'La machine souffle de nouvelles bouteilles qu\'il faut deposer dans le bac verre.'
  ],
  tips : "Le verre c'est comme les diamants, c'est éternel, une bouteille recyclée à le même cycle de vie qu'une bouteille qui vient d'être crée et on ne peut pas voir la différence.",
}
,{
  matrice: [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3, 4, 3, 4, 3, 3, 3, 4, 3, 4, 3, 3, 3,-1,-1,-1],
    [-1,-1,-1, 3,15,14,13,13,13,13,13,13,13,13,13,13,13, 3,-1,-1,-1],
    [-1,-1,-1, 3,11, 1, 0, 0, 0, 1,10, 0, 0, 0, 0, 0,10, 3,-1,-1,-1],
    [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 2, 0, 8, 5, 8, 0,10, 3,-1,-1,-1],
    [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0,10, 3,-1,-1,-1],
    [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0,10, 3,-1,-1,-1],
    [-1,-1,-1, 3,11, 0,17, 9,18, 0, 2, 0, 0, 6, 6, 0,10, 3,-1,-1,-1],
    [-1,-1,-1, 3,11, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0,10, 3,-1,-1,-1],
    [-1,-1,-1, 3,12,12,12,12,12,12,12,12,12,12,12,12,10, 3,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  items: [itemsId.Metal, itemsId.Plastique],
  itemsTime: 10000,
  itemsPattern: false,
  itemSpeed : 50,
  chrono: 180,
  score : 500,
  polution : 10,
  spawnpoints: [[6,5],[14,5],[8,5],[12,5]],
  seauSpawnpoints: [[10,4],[10,7]],
  imagePath: "assets/miniMap/level.PNG",
  name: "Level Coop - 1",
  tutoText: [
    'Salut, je remplace Big Boss ... mais si Big Boss ... un grand blond ... voilà, fort sympatique ... ah non.',
    'Bref, il est pas en état de vous aider ... hum, il a pas assumé la bière d\'hier.\nBon ok, les bières.',
    'Ici ça va être un peu plus complex, vous allez être séparés.\nVa falloir bosser ensemble vu que vous pouvez pas accéder à toutes les machines.',
    'Donc soit vous utilisez les tables soit vous avez assez confiance dans votre camarade pour qu\'il récupère l\'objet avant l\'incinérateur.',
    'En résumé vous allez galérer, ça va être chaud mais c\'est un bon moyen de voir si vous savez communiquer.'
  ]
},
{
  matrice: [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1],
    [-1, 3,15, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,15, 3,-1],
    [-1, 3,11, 7, 0, 0,17,16, 3, 1, 1, 1, 3,16,17, 7, 0, 0,11, 3,-1],
    [-1, 3,11, 0, 0, 0, 0, 0, 3, 1, 0, 1, 3, 0, 0, 0, 0, 0,11, 3,-1],
    [-1, 3,11, 0, 0, 0, 0, 0, 3, 1, 0, 1, 3, 0, 0, 0, 0, 0,11, 3,-1],
    [-1, 3,11, 0, 6, 0, 0, 0, 3, 3, 0, 3, 3, 0, 0, 6, 0, 0,11, 3,-1],
    [-1, 3,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 3,-1],
    [-1, 3,14, 0,21, 8, 2, 0, 0, 0, 9, 0, 0, 0, 2, 8,21, 0,14, 3,-1],
    [-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  items:[itemsId.Metal,itemsId.Verre] ,
  itemsTime: 9000,
  itemsPattern: false,
  itemSpeed : 80,
  chrono: 180,
  score : 500,
  polution : 10,
  spawnpoints: [[4,5],[14,4],[7,6],[13,6]],
  seauSpawnpoints: [[3,3],[15,3],[6,8]],
  imagePath: "assets/miniMap/level.PNG",
  name: "Fondrie",
  tutoText: []
},{
  matrice: [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1, 3,15, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1],
    [-1, 3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14, 3,-1],
    [-1, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3,-1],
    [-1, 3, 6, 0, 0, 3, 9, 0, 0, 3, 5, 0, 0,18, 3, 8, 0, 0,20, 3,-1],
    [-1, 3, 6, 0, 0, 3, 9, 0, 0, 3, 5, 0, 0,19, 3, 8, 0, 0, 0, 3,-1],
    [-1, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3,-1],
    [-1, 3, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 3,-1],
    [-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  items: [itemsId.Carton,itemsId.Plastique,itemsId.Pneu],
  itemsTime: 5000,
  itemsPattern: false,
  itemSpeed : 50,
  chrono: 180,
  score : 500,
  polution : 10,
  spawnpoints: [[4,6],[7,5],[11,5],[16,5]],
  seauSpawnpoints: [[11,8],[12,8]],
  imagePath: "assets/miniMap/level.PNG",
  name: "Fordisme",
  tutoText: [
    'Niveau pour 4 joueurs'
  ],
  tips : "Le recyclage est une industrie à part entière et on peut y appliquer les même techniques de travails que dans une usine de production.",
},{
  matrice: [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3,-1],
    [-1, 3,20, 1, 5, 2, 2, 0,13,13,13,13,13,13, 0,21, 0, 6, 0, 3,-1],
    [-1, 3, 0, 0, 0, 0, 0, 0,12,12,12,12,12,12, 0, 0, 0, 6, 0, 3,-1],
    [-1, 3, 3, 3,10,11, 3, 4, 3, 3, 3, 3, 4, 3,18, 2, 0, 0, 0, 3,-1],
    [-1, 3,15, 3,10,11, 3, 0, 0, 0, 0, 0, 0, 3, 4, 3, 3,10,11, 3,-1],
    [-1, 3,11,16,10,11, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,10,11, 3,-1],
    [-1, 3,11, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 4,10,11, 3,-1],
    [-1, 3,11, 0, 0, 0, 0, 0,13,13,13,13,13,13, 0, 0, 0, 0, 0, 3,-1],
    [-1, 3,12,12,12,14, 8, 0,12,12,12,12,12,12, 0, 9, 7, 0, 0, 3,-1],
    [-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  items: [itemsId.Verre,itemsId.Plastique,itemsId.Carton],
  itemsTime: 8000,
  itemsPattern: false,
  itemSpeed : 70,
  chrono: 180,
  score : 500,
  polution : 10,
  spawnpoints: [[4,7],[15,8],[3,3],[16,3]],
  seauSpawnpoints: [[5,2],[6,2],[17,9]],
  imagePath: "assets/miniMap/level.PNG",
  name: "teletravail",
  tutoText: [
    'NIVEAU A 4 JOUEUR IMPERATIVEMENT'
  ]
}
,{
  matrice: [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3,15, 3, 3, 3, 3, 3,-1,-1,-1,-1],
    [-1,-1,-1, 3,14,13,13,13,13,13,13,13,17,20, 2, 2, 3,-1,-1,-1,-1],
    [-1,-1,-1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 3,-1,-1,-1,-1],
    [-1,-1,-1, 3, 2, 0, 3, 4, 3, 3, 4, 3, 3, 3, 0, 8, 3,-1,-1,-1,-1],
    [-1,-1,-1, 3, 2, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 2, 3,-1,-1,-1,-1],
    [-1,-1,-1, 3, 2, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 2, 3,-1,-1,-1,-1],
    [-1,-1,-1, 3, 2, 0, 3, 3, 4, 3, 4, 3, 4, 3, 0, 2, 3,-1,-1,-1,-1],
    [-1,-1,-1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3,-1,-1,-1,-1],
    [-1,-1,-1, 3, 2, 6, 0, 2, 2, 2, 2, 2, 2, 9, 1, 2, 3,-1,-1,-1,-1],
    [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  items: [itemsId.Metal,itemsId.Carton],
  itemsTime: 8000,
  itemsPattern: false,
  itemSpeed : 70,
  chrono: 180,
  score : 500,
  polution : 10,
  spawnpoints: [[5,7],[14,7],[5,4],[14,4]],
  seauSpawnpoints: [[15,7],[15,8]],
  imagePath: "assets/miniMap/level.PNG",
  name: "Rond-point",
  tutoText: [
    ''
  ]
}


];

var skins = [//permet de stocker tout les skins des persos
  {
    name : 'billy',
    sprite : 'assets/billy.PNG',
    width : 44,
    height : 68,
  },{
    name : 'bob',
    sprite : 'assets/bob.PNG',
    width : 44,
    height : 68,
  },{
    name : 'walle',
    sprite : 'assets/walle.PNG',
    width : 44,
    height : 68,
  },{
    name : 'ghostbuster',
    sprite : 'assets/ghostbuster.PNG',
    width : 44,
    height : 68,
  },{
    name : 'hazman',
    sprite : 'assets/hazman.PNG',
    width : 44,
    height : 68,
  },{
    name : 'janine',
    sprite : 'assets/dude2x2.PNG',
    width :44,
    height : 68,
  }
];
