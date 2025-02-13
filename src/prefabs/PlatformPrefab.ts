
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface PlatformPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class PlatformPrefab extends Phaser.Physics.Arcade.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "platform", frame);

		this.scaleX = 0.75;
		this.scaleY = 0.5;
		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.pushable = false;
		this.body.setSize(80, 16, false);

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
