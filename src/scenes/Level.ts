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
    // platformGroupPrefab
    const platformGroupPrefab = new PlatformGroupPrefab(this);
    this.add.existing(platformGroupPrefab);

    // player
    const player = new PlayerPrefab(this, 89, 106);
    this.add.existing(player);

    // playerAndPlatformCollider
    this.physics.add.collider(player, platformGroupPrefab.group);

    this.player = player;

    this.events.emit('scene-awake');
  }

  private player!: PlayerPrefab;

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
  }

  update() {
    const isTouchingDown = this.player.body.touching.down;
    if (isTouchingDown) {
      this.player.setVelocityY(-300);
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
