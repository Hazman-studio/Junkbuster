var jeu = new Phaser.Game(64*21,  64*10, Phaser.AUTO, '');
//64*matrice[0].length,  64*matrice.length
//Donne les différents menus
jeu.state.add('Menu', Menu);
jeu.state.add('MenuGame', MenuGame);
jeu.state.add('MenuOpt', MenuOpt);
//Donne la fenetre de jeu
jeu.state.add('Game', game);

//On commence au Menu générale
jeu.state.start('Menu');
