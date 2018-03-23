var levels = [
    {
		matrice: [
			[3,15,3,3,3,4,3,3,4,4,3,3,3,3,3,3,3,22,22,3,3],
			[3,11,0,8,0,0,0,0,0,0,7,0,7,2,2,1,1,0,0,16,3],
			[3,11,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,3],
			[3,11,2,0,0,0,2,2,2,0,2,2,2,0,0,0,0,0,0,17,3],
			[3,11,0,0,0,0,0,0,0,0,6,6,9,0,0,1,1,0,0,0,3],
			[3,11,0,0,0,0,8,9,0,0,0,0,0,0,0,2,2,22,22,18,3],
			[3,11,0,0,0,0,12,12,12,12,11,0,0,0,0,5,5,0,0,0,3],
			[3,14,0,0,0,0,10,13,13,13,11,0,0,0,0,21,0,0,0,19,3],
			[3,0,0,0,0,0,0,0,0,10,13,0,0,0,0,0,0,0,0,20,3],
			[3,0,0,0,0,0,0,0,0,10,13,0,0,0,0,0,0,0,0,20,3],
			[3,0,0,0,0,0,0,0,0,10,13,0,0,0,0,0,0,0,0,20,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,22,22,3]
		],
		items: [itemsId.Pneu, itemsId.Plastique, itemsId.Metal, itemsId.Verre, itemsId.Carton, itemsId.Sceau],
		itemsTime: 10000,
		itemsPattern: false,
		spawnpoints: [[3,4],[2,4]],
		seauSpawnpoints: [],
		imagePath: "/assets/levels/",
		name: "Level test"
  },
  {
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,3,3,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,3,15,3,3,3,4,3,3,4,3,3,4,3,3,3,-1,-1,-1],
      [-1,-1,-1,3,11,0,2,2,0,0,0,0,0,0,0,0,19,3,-1,-1,-1],
      [-1,-1,-1,3,11,0,0,0,0,0,0,5,5,0,0,0,0,3,-1,-1,-1],
      [-1,-1,-1,3,11,0,0,0,0,0,0,0,0,0,0,0,0,3,-1,-1,-1],
      [-1,-1,-1,3,12,12,12,14,0,0,0,0,2,2,2,2,2,3,-1,-1,-1],
      [-1,-1,-1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Pneu,itemsId.Pneu,itemsId.Pneu,itemsId.Pneu],
    itemsTime: 10000,
    itemsPattern: false,
    spawnpoints: [[5,6],[6,6]],
    seauSpawnpoints: [[7,4],[12,7]],
    imagePath: "/assets/levels/",
    name: "Level 1"


  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,3,3,-1,-1,-1],
      [-1,-1,-1,3,3,4,3,3,3,3,3,3,3,3,4,3,15,3,-1,-1,-1],
      [-1,-1,-1,3,2,0,0,2,2,2,2,0,6,0,0,0,11,3,-1,-1,-1],
      [-1,-1,-1,3,9,0,0,0,0,0,0,0,0,0,0,0,11,3,-1,-1,-1],
      [-1,-1,-1,3,2,0,0,0,0,0,0,0,0,0,0,0,11,3,-1,-1,-1],
      [-1,-1,-1,3,0,0,0,0,2,2,0,0,0,0,0,0,11,3,-1,-1,-1],
      [-1,-1,-1,3,5,0,5,0,2,2,0,19,0,18,0,0,14,3,-1,-1,-1],
      [-1,-1,-1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Pneu,itemsId.Plastique],
    itemsTime: 15000,
    itemsPattern: false,
    spawnpoints: [[5,6],[6,6]],
    seauSpawnpoints: [[8,6],[9,6]],
    imagePath: "/assets/levels/",
    name: "Level 2"


  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,3,3,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,3,15,3,3,3,4,3,3,4,3,4,3,3,3,3,-1,-1,-1],
      [-1,-1,-1,3,11,0,0,0,0,0,0,0,0,0,9,0,9,3,-1,-1,-1],
      [-1,-1,-1,3,11,0,0,2,2,0,0,6,0,0,0,0,0,3,-1,-1,-1],
      [-1,-1,-1,3,11,0,0,0,0,0,0,6,0,0,0,0,0,3,-1,-1,-1],
      [-1,-1,-1,3,14,0,2,20,0,2,0,0,0,0,8,0,8,3,-1,-1,-1],
      [-1,-1,-1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Carton],
    itemsTime: 10000,
    itemsPattern: false,
    spawnpoints: [[5,6],[6,6]],
    seauSpawnpoints: [[4,7]],
    imagePath: "/assets/levels/",
    name: "Level 3"


  }
]
var skins = [//permet de stocker tt les skins des persos 
  {
    name : 'bob',
    sprite : 'assets/bob.png',
    width : 44,
    height : 68,
  },
  {
    name : 'billy',
    sprite : 'assets/billy.png',
    width : 44,
    height : 68,
  },
  {
    name : 'walle',
    sprite : 'assets/walle.png',
    width : 44,
    height : 68,
  },
]
