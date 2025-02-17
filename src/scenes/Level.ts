// You can write more code here

/* START OF COMPILED CODE */

import WallPrefab from '../prefabs/WallPrefab';
import PlayerPrefab from '../prefabs/PlayerPrefab';
import PlatformGroupPrefab from '../prefabs/PlatformGroupPrefab';
/* START-USER-IMPORTS */

enum ANIMATION_KEY {
  JUMP = 'playerJump',
  SPIN = 'playerSpin',
}

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

    // levelLayer
    const levelLayer = this.add.layer();
    levelLayer.blendMode = Phaser.BlendModes.SKIP_CHECK;

    // rightWall
    const rightWall = new WallPrefab(this, 0, 0);
    levelLayer.add(rightWall);

    // leftWall
    const leftWall = new WallPrefab(this, 208, 0);
    leftWall.flipX = true;
    leftWall.flipY = false;
    levelLayer.add(leftWall);

    // playerLayer
    const playerLayer = this.add.layer();
    playerLayer.blendMode = Phaser.BlendModes.SKIP_CHECK;

    // player
    const player = new PlayerPrefab(this, 120, 88);
    player.setOrigin(0.5, 0.5);
    playerLayer.add(player);

    // platformGroupPrefab
    const platformGroupPrefab = new PlatformGroupPrefab(this);
    this.add.existing(platformGroupPrefab);

    // lists
    const movingLevelTileSprites = [leftWall, rightWall];
    const walls = [leftWall, rightWall];

    // playerAndPlatformCollider
    this.physics.add.collider(player, platformGroupPrefab.group);

    // playerAndWallsCollider
    this.physics.add.collider(player, walls);

    // leftWall (prefab fields)
    leftWall.tileOffsetY = -120;

    this.player = player;
    this.platformGroupPrefab = platformGroupPrefab;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
    this.movingLevelTileSprites = movingLevelTileSprites;
    this.walls = walls;

    this.events.emit('scene-awake');
  }

  private player!: PlayerPrefab;
  private platformGroupPrefab!: PlatformGroupPrefab;
  private leftKey!: Phaser.Input.Keyboard.Key;
  private rightKey!: Phaser.Input.Keyboard.Key;
  private movingLevelTileSprites!: WallPrefab[];
  private walls!: WallPrefab[];

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
    this.cameras.main.startFollow(this.player, false, 0.1, 1, 0.1);
    this.cameras.main.setDeadzone(this.scale.width);
  }

  update() {
    const isTouchingDown = this.player.body.touching.down;
    if (isTouchingDown) {
      this.player.play(ANIMATION_KEY.JUMP);
      this.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + ANIMATION_KEY.JUMP, () => {
        this.player.play(ANIMATION_KEY.SPIN);
      });
      this.player.setVelocityY(-340);
    }

    if (!isTouchingDown) {
      if (this.leftKey.isDown) {
        this.player.setVelocityX(-150);
        this.player.setFlipX(true);
      } else if (this.rightKey.isDown) {
        this.player.setVelocityX(150);
        this.player.setFlipX(false);
      } else {
        this.player.setVelocityX(0);
      }
    }

    this.movingLevelTileSprites.forEach(tileSprite => {
      tileSprite.tilePositionY = this.player.y * 0.2 + tileSprite.tileOffsetY;
    });

    this.walls.forEach(tileSprite => {
      if (tileSprite.body instanceof Phaser.Physics.Arcade.Body) {
        tileSprite.body.setOffset(tileSprite.flipX ? 16 : 0, this.cameras.main.worldView.y);
      }
    });
    this.platformGroupPrefab.update();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
