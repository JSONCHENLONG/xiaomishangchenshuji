<?php
	include("../public.php");
	
	//与数据库交互
	$con = connection();
	
	$sql = "select * from studentinfo";
	
	$res = mysqli_query($con,$sql);
	
	while($row = mysqli_fetch_array($res)){
		
		$arr[] = $row;
		
	}
	
	$json = json_encode($arr);
	
	print_r($json);
	
	
?>