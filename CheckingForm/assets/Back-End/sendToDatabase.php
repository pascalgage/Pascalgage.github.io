<?php

session_start();
$bdd = new PDO('mysql:host=127.0.0.1;dbname=trolka', 'root', '');

if(isset($_POST['submit'])){

    $username= ($_POST['nom']);
    $email=htmlspecialchars($_POST['email']);
    $password= sha1($_POST['password']);
    $password2= sha1($_POST['password2']);

    if(!empty($_POST['nom'])&&!empty($_POST['email'])&&!empty($_POST['password'])&&!empty($_POST['password2'])){

    $insertDATA = $bdd->prepare("INSERT INTO trolkax(username, email, pass, password2) VALUES (?,?,?,?)");
    $insertDATA->execute(array($username, $email, $password, $password2));
    header("Location: follow.html");
    exit();
    
}
}

?>