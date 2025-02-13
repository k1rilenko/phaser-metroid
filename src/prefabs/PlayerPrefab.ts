
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface PlayerPrefab {

   body: Phaser.Physics.Arcade.Body;
}

export default class PlayerPrefab extends Phaser.Physics.Arcade.Sprite {

  constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
    super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player-idle-1.png");

    scene.physics.add.existing(this, false);
    this.body.checkCollision.up = false;
    this.body.setOffset(35, 22);
    this.body.setSize(10, 42, false);

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
