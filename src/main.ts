import Phaser from 'phaser';
import Level from './scenes/Level';
import Preload from './scenes/Preload';


window.addEventListener('load', function () {
  const game = new Phaser.Game({
    width: 1280,
    height: 720,
    backgroundColor: '#2f2f2f',
    parent: 'game-container',
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    },
    scene: [Preload, Level],
  });

  game.scene.start('Preload');
});
