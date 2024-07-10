<template>
    <div class="loading">
	<div class="loading-text">
		<span class="loading-text-words">M</span>
		<span class="loading-text-words">U</span>
		<span class="loading-text-words">H</span>
		<span class="loading-text-words">A</span>
		<span class="loading-text-words">M</span>
    <span class="loading-text-words">M</span>
    <span class="loading-text-words">A</span>
    <span class="loading-text-words">D</span>
    <span class="loading-text-words"></span>
    <span class="loading-text-words">R</span>
    <span class="loading-text-words">I</span>
    <span class="loading-text-words">Z</span>
    <span class="loading-text-words">K</span>
    <span class="loading-text-words">I</span>
	</div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Quattrocento+Sans);

@mixin position-center($text-align: center) {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	text-align: $text-align;
}

.loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;
	z-index: 9999;
}

.loading-text {
	@include position-center;
	width: 100%;
	height: 100px;
	line-height: 100px;
	span {
		display: inline-block;
		margin: 0 5px;
		color: #fff;
    font-family: 'Quattrocento Sans', sans-serif;
		@for $i from 0 through 14 {
			&:nth-child(#{$i + 1}) {
				filter: blur(0px);
				animation: blur-text 1.5s calc($i / 5)+s infinite linear alternate;
			}
		}
	}
}

@keyframes blur-text {
	0% {filter: blur(0px);}
	100% {filter: blur(4px);}
}

@media screen and (min-width: 786px){
	.loading {
		font-size: 24px;
	}
}

@media screen and (max-width: 786px){
	.loading {
		font-size: 16px;
	}
}

</style>