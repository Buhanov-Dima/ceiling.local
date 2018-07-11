<?if($_POST['phone']=='')
{
	echo 'error-1';
}
else
{
	$_POST["phone"] =  substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
	$mPhone = $_POST["phone"];

	$_POST["reason"] =  substr(htmlspecialchars(trim($_POST['reason'])), 0, 300);
	$mReason = $_POST["reason"];

	$_POST["name"] =  substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
	$mName = $_POST["name"];

	$to  = "bludilina_av@mail.ru";
	$subject = "Новая заявка c Потолков";

		$message = '
		<html>
			<head>
			</head>
			<body>
			<div style="background-color: #fff; color: #000; padding-top: 10px; padding-bottom: 20px; font-family: Tahoma; font-size: 18px; width: 100%; text-align: center;">
				<p>Поступила новая заявка</p><br>
				<div style="width: 500px; margin:0 auto;">
					<div style="text-align: left">
						<p><b>Имя:</b> '.$mName.'</p>
						<p><b>Телефон:</b> '.$mPhone.'</p>
						<p><b>Причина:</b> '.$mReason.'</p>
					</div>
				</div>
			</div>
			</body>
		</html>';



	$headers  = "Content-type: text/html; charset=utf-8 \r\n";

	if (mail($to, $subject, $message, $headers)) {
		echo 'success';
	} else {
		echo 'error-2';
	}
}

?>