<script lang="ts">
	import { onMount } from "svelte";
	let width = 1000;
	let height = 1000;
	let canvas: HTMLCanvasElement;

	function parseJson() {}

	onMount(async () => {
		let json = await fetch("src/lib/test.json").then((r) => r.json());
		console.log(json);
		let img = new Image();
		img.src =
			"https://www.itftennis.com/remote.axd/media.itftennis.com/assetbank-itf/servlet/display?file=22137ab7ed210958b636fd08.jpg?crop=0.18233117483811284,0,0.27067530064754858,0&cropmode=percentage&width=219&height=282&rnd=133353579870000000";
		let img2 = new Image();
		img2.src = "src/lib/images/svelte-welcome.png";
		let ctx = canvas.getContext("2d")!;
		if (!ctx) {
			throw new Error("Canvas not supported");
		}
		img.onload = function () {
			ctx.drawImage(img, 0, 0); // Or at whatever offset you like
		};
		img2.onload = function () {
			ctx.drawImage(img2, -500, 200); // Or at whatever offset you like
		};
		// Set line width
		ctx.lineWidth = 3;

		// Wall
		ctx.strokeRect(75, 140, 150, 110);

		// Door
		ctx.fillRect(130, 190, 40, 60);

		// Roof
		ctx.beginPath();
		ctx.moveTo(50, 140);
		ctx.lineTo(150, 60);
		ctx.lineTo(250, 140);
		ctx.closePath();
		ctx.stroke();
	});
</script>

<canvas id="my-house" {width} {height} bind:this={canvas} />
<img src="src/lib/images/svelte-welcome.png" alt="Welcome" />
