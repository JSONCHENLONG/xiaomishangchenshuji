<?php
	include("../public.php");
	
	//获取前端发送过来的数据
	$sid = $_GET["sid"];
	//与数据库交互
	$con = connection();
	
	$sql = "delete from studentinfo where sid = $sid";
	
	$res = mysqli_query($con,$sql);
	
	if($res){
		//删除成功
		echo "<script>alert('删除成功');location.href = '../studentInfo/studentInfo.html'</script>";
	}else{
		//删除成功
		echo "<script>alert('删除失败');location.href = '../studentInfo/studentInfo.html'</script>";
	}
?>