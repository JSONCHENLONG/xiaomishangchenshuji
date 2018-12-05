<?php
	include("../public.php");
	
	//与数据库交互
	$con = connection();
	
	$sid = $_GET["sid"];
	$sql = "select * from studentinfo where sid = $sid";
	
	$res = mysqli_query($con,$sql);
	
	$row = mysqli_fetch_array($res);
	
	$json = json_encode($row);
	
	echo $json;
?>