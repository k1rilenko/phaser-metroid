// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class WallPrefab extends Phaser.GameObjects.TileSprite {
  constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number, texture?: string, frame?: number | string) {
    super(scene, x ?? 0, y ?? 0, width ?? 32, height ?? 176, texture || 'wall', frame);

    this.setOrigin(0, 0);

    /* START-USER-CTR-CODE */
    this.setScrollFactor(0);
    this.scene.physics.world.enable(this);
    if (this.body instanceof Phaser.Physics.Arcade.Body) {
      this.body.setImmovable(true).setAllowGravity(false).setSize(16, this.height).setOffset(0, 0);
    }

    /* END-USER-CTR-CODE */
  }

  public tileOffsetY: number = 0;

  /* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
