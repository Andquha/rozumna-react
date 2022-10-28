
<?php
	$dbHost = "localhost";
	$dbUser = "rozumnas_root";
	$dbPass = "abUxZDjXMnqHxY9";
	$dbName = "rozumnas_rozumna_syla";

	$conn = mysqli_connect(
		$dbHost,
		$dbUser,
		$dbPass,
		$dbName
	);

	if($conn) {
		mysqli_set_charset($conn, "utf8mb4");
	}
	else {
		die("Connection failed: " . mysqli_connect_error());
	}
?>
