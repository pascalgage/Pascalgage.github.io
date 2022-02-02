<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" 
    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
    <script src="./assets/js/main.js" defer></script>
    <title>Verification_de_Champ</title>
</head>
<body>
    <header>

    </header>
    <main>
        <form action="index.php" method="POST">
        <div class="container" id="form">
                    <div class="buttonClose">
                        <button id="buttonX" onclick="closeForm()">X</button>
                    </div>
                    <div>
                    <div class="nomOK">
                        <input type="text" class="inputnom" id="insert" name="nom" placeholder="Nom" onblur="checkInputName()">
                        <i class="fas fa-check-circle fax1" id="test1"></i>
                    </div>
                    <div>
                        <i class="fas fa-exclamation-circle fax2" id="test2"></i>
                        <small id="smallmessage"></small>
                    </div>
                    </div>

                    <div>
                    <div class="emailOK">
                        <input type="email" id="insertMail" name="email" placeholder="Email" onblur="checkInputMail()">
                        <i class="fas fa-check-circle fax1" id="test3"></i>
                    </div>
                        <div>
                        <i class="fas fa-exclamation-circle fax2" id="test4"></i>
                        <small id="smallmessageMail"></small>
                    </div>
                    </div>
                    
                    <div>
                    <div class="mdpOK">
                        <input type="password" id="insertPassword" name="password" placeholder="Mot de passe" onblur="checkPassword()">
                        <i class="fas fa-check-circle fax1" id="test5"></i>
                    </div>
                    <div>
                        <i class="fas fa-exclamation-circle fax2" id="test6"></i>
                        <small id="smallmessageMdp"></small>
                    </div>
                    </div>

                    <div>
                    <div class="mdpOK2">
                        <input type="password" id="insertPassword2" name="password2" placeholder="Confirmez mot passe" onblur="checkPassword2()">
                        <i class="fas fa-check-circle fax1" id="test7"></i>
                    </div>
                    <div>
                        <i class="fas fa-exclamation-circle fax2" id="test8"></i>
                        <small id="smallmessageMdp2"></small>
                    </div>
                    </div>

                    <button class="validation" id="valid" disabled name="submit" onclick="phpdo()">VALIDEZ</button>
        </div>
        </form>
    </main>
    <footer>

    </footer>
</body>
</html>



<?php

session_start();
$bdd = new PDO('mysql:host=127.0.0.1;dbname=trolka', 'root', '');

if(isset($_POST['submit'])){

    $username= ($_POST['nom']);
    $email=htmlspecialchars($_POST['email']);
    $password= sha1($_POST['password']);
    $password2= sha1($_POST['password2']);

    if(!empty($_POST['password'])){

    

    $insertDATA = $bdd->prepare("INSERT INTO trolkax(username, email, pass, password2) VALUES (?,?,?,?)");
    $insertDATA->execute(array($username, $email, $password, $password2));
}
}
?>