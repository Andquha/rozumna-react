
<?php require_once 'MySQL.php' ?>

<?php 
    $sql = "SELECT * FROM `Headquarters`";
    $res = mysqli_query($conn, $sql);

    while ($row = $res->fetch_assoc()){
        $result[] = array(
            "id" => $row['id'], 
            "name" => $row['name'],
            "city" => $row['city'],
            "adress" => $row['adress'],
            "contactname" => $row['contactname'],
            "contactlastname" => $row['contactlastname'],
            "contactphone" => $row['contactphone'],
            "region" => $row['region'],
            "maplink" => $row['maplink'],
            "link" => $row['link'],
            "aid" => $row['aid']
        );
    }

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>


