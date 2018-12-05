<?php
	$uname = $_GET["userName"];
	$pwd = $_GET["pwd"];
	//echo $uname;
	
	switch($uname){
		case "tom":
			if($pwd == "123"){
				echo $uname;
			}else{
				echo 0;//响应一个0表示密码不对
			}
			break;
		case "jerry":
			if($pwd == "123"){
				echo $uname;	
			}else{
				echo 0;//响应一个0表示密码不对
			}
			break;
		default:
			echo 1;//代表用户名不存在
			
	}
	
	
?>