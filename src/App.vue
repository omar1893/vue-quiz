<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	.animate {
		transition: all 0.1s;
		-webkit-transition: all 0.1s;
	}
	
	#app {
		background-color: #31b0d5;
	}
	
	* {
		font-family: bits;
	}
	
	:focus {
		outline: 0!important;
	}
	
	@font-face {
		font-family: bits;
		src: url('./assets/bits.ttf');
	}
	
	.action-button {
		position: relative;
		padding: 10px 40px;
		margin: 0px 10px 10px 0px;
		float: left;
		border-radius: 10px;
		font-size: 25px;
		border: 0;
		color: #FFF;
		text-decoration: none;
	}
	
	.blue {
		background-color: #3498DB;
		border-bottom: 5px solid #2980B9;
		text-shadow: 0px -2px #2980B9;
	}
	
	.red {
		background-color: #E74C3C;
		border-bottom: 5px solid #BD3E31;
		text-shadow: 0px -2px #BD3E31;
	}
	
	.green {
		background-color: #82BF56;
		border-bottom: 5px solid #669644;
		text-shadow: 0px -2px #669644;
	}
	
	.yellow {
		background-color: #F2CF66;
		border-bottom: 5px solid #D1B358;
		text-shadow: 0px -2px #D1B358;
	}
	
	.action-button:active {
		transform: translate(0px, 5px);
		-webkit-transform: translate(0px, 5px);
	}
	
	.disabled {
		pointer-events: none
	}
</style>
