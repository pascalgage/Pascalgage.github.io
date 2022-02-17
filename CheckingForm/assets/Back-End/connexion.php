<?php
session_start();
 
$bdd = new PDO('mysql:host=127.0.0.1;dbname=trolka', 'root', '');
 
if(isset($_POST['formconnexion'])) {
   $mailconnect = htmlspecialchars($_POST['mailconnect']);
   $mdpconnect = sha1($_POST['mdpconnect']);
   if(!empty($mailconnect) AND !empty($mdpconnect)) {
      $requser = $bdd->prepare("SELECT * FROM trolkax WHERE email = ? AND pass = ?");
      $requser->execute(array($mailconnect, $mdpconnect));
      $userexist = $requser->rowCount();
      if($userexist == 1) {
         $userinfo = $requser->fetch();
         $_SESSION['ID'] = $userinfo['ID'];
         $_SESSION['username'] = $userinfo['username'];
         $_SESSION['email'] = $userinfo['email'];
         header("Location: firstPAGE.html?ID=".$_SESSION['ID']);
      } else {
         $erreur = "Mauvais mail ou mot de passe !";
      }
   } else {
      $erreur = "Tous les champs doivent être complétés !";
   }
}
?>