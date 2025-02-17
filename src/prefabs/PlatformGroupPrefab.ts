// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import PlatformPrefab from './PlatformPrefab.ts';

const SCREEN_COUNT_BEFORE_MOVE_PLATFORM_UP = 3;
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

    this.maxPlatformDistance = scene.scale.height * SCREEN_COUNT_BEFORE_MOVE_PLATFORM_UP;
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */
  public group: Phaser.GameObjects.Group;
  maxPlatformDistance: number;

  update() {
    const scrollY = this.scene.cameras.main.scrollY;
    const children = this.group.children;
    let childrenToMoveYOffset = 0;

    children.entries
      // @ts-ignore
      .filter(({ y }) => y >= scrollY + this.maxPlatformDistance)
      .forEach(child => {
        // @ts-ignore
        child.x = Phaser.Math.Between(10, 200);
        childrenToMoveYOffset += Phaser.Math.Between(10, 40);
        // @ts-ignore
        child.y = scrollY - childrenToMoveYOffset;
      });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
