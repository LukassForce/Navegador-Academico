<?php
    $varusuario=$_POST['idusuario'];
    $varnombre=$_POST['idnombre'];
    $varpasword=$_POST['idcontrasena'];
    $variddos=$_POST['idcondos'];

    echo "Muestra de los datos del formulario";
    echo "<br> <br>";
    echo "USUARIO: " . $varusuario . "<br>";
    echo "NOMBRE :" . $varnombre . "<br>";
    echo "PASWORD:" . $varpasword. "<br>";
    echo "<br> <br>";

    if (isset($_POST['submitForm'])){
     $captcha_response = true;
     $recaptcha = $_POST['g-recaptcha-response'];
     $url = 'https://www.google.com/recaptcha/api/siteverify';
     $data = array(
         'secret' => '6LewTrwgAAAAALSj3nrw1RLLP4NYiTqEulkutOBf', //clave secreta
        'response' => $recaptcha


     );
     $options = array(
        'http' =>array(
              'method' => 'POST',
              'content' => http_build_query($data)


         )
     );
     $context = stream_context_create($options);
     $verify = file_get_contents($url, false, $context);
     $captcha_success = json_decode($verify);
     $captcha_response = $captcha_success->success;

     if($captcha_response){
     echo'<p class="alert alert-success"> .. </p>';

     }else {
          ?><br><br><br><br><?php
         echo '<p class="alert alert-danger"> ** Debes indicar que no eres un robot.';
          echo "<br> <br> <a href='index.html'><img src='regreso.jpg></a>";
             exit(); 
          ?><br><br><br><br><?php
        }
    }
?>