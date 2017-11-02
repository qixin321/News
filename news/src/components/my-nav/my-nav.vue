<template>
	<div id="nav">
	    <div id="navtop">
	    	<span>今日头条</span>
	    	<form action="">
	    		<input type="text" name="search" placeholder="十九大">
	    	</form>
	    </div>
		<ul id="navbar">
			<li><router-link to="/topic/all">头条</router-link></li>
			<li><router-link to="/topic/hot">财经</router-link></li>
			<li><router-link to="/topic/tech">科技</router-link></li>
			<li><router-link to="/topic/aff">军事</router-link></li>
			<li><router-link to="/topic/yl">娱乐</router-link></li>
			<li><router-link to="/topic/teach">教育</router-link></li>
		</ul>
	</div>

</template>
<script>
	
</script>
<style scoped>

 /* 引入CSS文件 */
  @import '../../../static/css/index.css';


</style>