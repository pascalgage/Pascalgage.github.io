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
    <button onclick="toggleSetForm()">S'INSCRIRE SUR LE SITE</button>
    </header>
    
    <main id="mainform">
        
        <form action="./assets/Back-End/sendToDatabase.php" method="POST">
        <div class="container" id="form">
                    <div class="buttonClose">
                        <button type="button" id="buttonX" onclick="closeForm()">X</button>
                    </div>
                    <h1>VOTRE INSCRIPTION</h1>
                    <div id="general">
                    
                        <input type="text" class="inputnom" id="insert" name="nom" placeholder="Nom" onblur="checkInputName()">
                        <i class="fas fa-check-circle fax1" id="test1"></i>
                        <br>
                    
                        <i class="fas fa-exclamation-circle fax2" id="test2"></i>
                        <small></small>
                    
                    </div>

                    <div id="general">
                    
                        <input type="email" id="insertMail" name="email" placeholder="Email" onblur="checkInputMail()">
                        <i class="fas fa-check-circle fax1" id="test3"></i>
                        <br>
                        
                        <i class="fas fa-exclamation-circle fax2" id="test4"></i>
                        <small></small>
                    
                    </div>
                    
                    <div id="general">
                    
                        <input type="password" id="insertPassword" name="password" placeholder="Mot de passe" onblur="checkPassword()">
                        <i class="fas fa-check-circle fax1" id="test5"></i>
                        <br>
                    
                        <i class="fas fa-exclamation-circle fax2" id="test6"></i>
                        <small></small>
                
                    </div>

                    <div id="general">
                    
                        <input type="password" id="insertPassword2" name="password2" placeholder="Confirmez mot passe" onblur="checkPassword2()">
                        <i class="fas fa-check-circle fax1" id="test7"></i>
                        <br>
                    
                        <i class="fas fa-exclamation-circle fax2" id="test8"></i>
                        <small></small>
                    
                    </div>

                    <button class="validation" id="valid" disabled name="submit">VALIDEZ</button>
        </div>
        </form>
        
    </main>
    <div class="maincontent">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, itaque. Tenetur ducimus assumenda optio repudiandae, ipsa aut odit! Sed veniam tempore eius illo maxime odio voluptates sunt ad natus quidem.</p>
    </div>
    <div class="maincontent2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis expedita accusantium sed error fuga recusandae quibusdam velit, esse, magnam autem veniam. Vitae, voluptatem ipsum quisquam veniam dolorum natus quos!</p>
        
    </div>
    <footer>

    </footer>
</body>
</html>
