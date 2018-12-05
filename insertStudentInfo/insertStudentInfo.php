<?php
	include("../public.php");
	
	//与数据库交互
	$con = connection();
	$name = $_POST["name"];
	$sex = $_POST["sex"];
	$age = $_POST["age"];
	
	$sql = "insert into studentinfo (name,sex,age) values ('$name','$sex',$age)";
	
	$res = mysqli_query($con,$sql);
	
	if($res){
		//添加成功
		echo "<script>alert('添加成功');location.href = '../studentInfo/studentInfo.html'</script>";
	}else{
		//添加失败
		echo "<script>alert('添加失败');location.href = 'insertStudentInfo.html'</script>";
	}
?>