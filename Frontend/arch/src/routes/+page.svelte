<script lang="ts">
	import { onMount } from "svelte";
	let width = 1000;
	let height = 1000;
	let canvas: HTMLCanvasElement;
	let roomCanvas: HTMLCanvasElement;

	function initCanvas(canvas: HTMLCanvasElement) {
		let ctx = canvas.getContext("2d")!;
		ctx.lineWidth = 3;
		if (!ctx) {
			throw new Error("Canvas not supported");
		}
		return ctx;
	}

	onMount(async () => {
		function drawImage(img: any, item: any) {
			ctx.setTransform(1, 0, 0, 1, item.position.x, item.position.y); // sets scale and origin
			switch (item.direction) {
				case "LEFT":
					ctx.rotate(Math.PI / 2);
					ctx.translate(0, -item.size.height);
					break;
				case "RIGHT":
					ctx.rotate((3 * Math.PI) / 2);
					ctx.translate(-item.size.width, 0);
					break;
				case "DOWN":
					ctx.rotate(0);
					break;
				case "UP":
					ctx.rotate(Math.PI);
					ctx.translate(-item.size.width, -item.size.height);
					break;
			}
			ctx.drawImage(img, 0, 0, item.size.width, item.size.height);
		}

		let ctx = initCanvas(canvas);
		let roomCtx = initCanvas(roomCanvas);
		if (!roomCtx) {
			throw new Error("Canvas not supported");
		}
		roomCtx.lineWidth = 3;

		let json = await fetch("src/lib/output.json").then((r) => r.json());
		console.log(json[0]);

		json.forEach((item: any) => {
			if (item.type === "room") {
				ctx.strokeRect(
					item.position.x,
					item.position.y,
					item.size.width,
					item.size.height,
				);
			} else {
				let img = new Image();
				img.src = "src/lib/images/" + item.type + ".png";
				img.onload = () => {
					drawImage(img, item);
				};
			}
		});
	});
</script>

<canvas id="base" {width} {height} bind:this={canvas} />
<canvas id="room" {width} {height} bind:this={roomCanvas} />

<style>
	canvas {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
	}
</style>
