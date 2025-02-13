// You can write more code here

/* START OF COMPILED CODE */

import PlatformGroupPrefab from '../prefabs/PlatformGroupPrefab';
import PlayerPrefab from '../prefabs/PlayerPrefab';
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {
  constructor() {
    super('Level');

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // leftKey
    const leftKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

    // rightKey
    const rightKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    // platformGroupPrefab
    const platformGroupPrefab = new PlatformGroupPrefab(this);
    this.add.existing(platformGroupPrefab);

    // player
    const player = new PlayerPrefab(this, 89, 106);
    this.add.existing(player);

    // playerAndPlatformCollider
    this.physics.add.collider(player, platformGroupPrefab.group);

    this.player = player;
    this.leftKey = leftKey;
    this.rightKey = rightKey;

    this.events.emit('scene-awake');
  }

  private player!: PlayerPrefab;
  private leftKey!: Phaser.Input.Keyboard.Key;
  private rightKey!: Phaser.Input.Keyboard.Key;

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
    this.cameras.main.startFollow(this.player, false, 0.1, 1, 0.1);
  }

  update() {
    const isTouchingDown = this.player.body.touching.down;
    if (isTouchingDown) {
      this.player.setVelocityY(-300);
    }

    if (!isTouchingDown) {
      if (this.leftKey.isDown) {
        this.player.setVelocityX(-150);
      } else if (this.rightKey.isDown) {
        this.player.setVelocityX(150);
      } else {
        this.player.setVelocityX(0);
      }
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
