<?php
	include("../public.php");
	
	//与数据库交互
	$con = connection();
	
	$name = $_POST["name"];
	$sid = $_POST["sid"];
	$sex = $_POST["sex"];
	$age = $_POST["age"];
	
	$sql = "update studentinfo set name='$name',sex='$sex',age=$age where sid=$sid";
	echo $sql;
	$res = mysqli_query($con,$sql);
	
	if($res){
		//修改成功
		echo "<script>alert('修改成功');location.href = '../studentInfo/studentInfo.html'</script>";
	}else{
		//修改失败
		echo "<script>alert('修改失败');location.href = '../studentInfo/studentInfo.html'</script>";
	}
	
?>