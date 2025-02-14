// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import PlatformPrefab from './PlatformPrefab.ts';
/* END-USER-IMPORTS */

export default class PlatformGroupPrefab extends Phaser.GameObjects.Layer {
  constructor(scene: Phaser.Scene) {
    super(scene);

    this.blendMode = Phaser.BlendModes.SKIP_CHECK;

    /* START-USER-CTR-CODE */
    this.group = scene.add.group({
      classType: PlatformPrefab,
    });

    this.group.get(120, 150);
    for (let i = 1; i < 5; i++) {
      const x = Phaser.Math.Between(10, 200);
      const y = -130 * i + 150;
      this.group.get(x, y);
    }
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */
  public group: Phaser.GameObjects.Group;
  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
