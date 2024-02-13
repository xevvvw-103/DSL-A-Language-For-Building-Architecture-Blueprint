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
		let ctx = initCanvas(canvas);
		let roomCtx = initCanvas(roomCanvas);
		if (!roomCtx) {
			throw new Error("Canvas not supported");
		}
		roomCtx.lineWidth = 3;

		let json = await fetch("src/lib/test.json").then((r) => r.json());
		console.log(json[0]);
		json.forEach((room: any) => {
			room.furniture.forEach((obj: any) => {
				let img = new Image();
				img.src = "src/lib/images/" + obj.type + ".png";
				img.onload = function () {
					ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);
				};
			});
			roomCtx.strokeRect(room.x, room.y, room.width, room.height);
		});
	});
</script>

<canvas id="base" {width} {height} bind:this={canvas} />
<canvas id="room" {width} {height} bind:this={roomCanvas} />
<img src="src/lib/images/svelte-welcome.png" alt="Welcome" />

<style>
	canvas {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
	}
</style>
