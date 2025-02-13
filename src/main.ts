import Phaser from 'phaser';
import Level from './scenes/Level';
import Preload from './scenes/Preload';

window.addEventListener('load', function () {
  const game = new Phaser.Game({
    width: 240,
    height: 176,
    backgroundColor: '#2f2f2f',
    parent: 'game-container',
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    },
    scene: [Preload, Level],
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          x: 0,
          y: 300,
        },
        debug: true,
      },
    },
  });

  game.scene.start('Preload');
});
