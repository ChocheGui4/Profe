<?php
      include("conexion.php");
      error_reporting(E_ALL ^ E_NOTICE);
      $nombre = $_POST['Name'];
      $usuario = $_POST['User'];
      $contra  = $_POST['Pass'];
     
      
      
      
      if(isset($nombre) && !empty($nombre) && isset($usuario) && !empty($usuario) && isset($contra) && !empty($contra)) {
            $sql = mysqli_query($conn,"INSERT INTO usuarios(Nombre,usuario,pass) VALUES ('$nombre','$usuario','$contra')");
            $data = array();
            $res="";
            if($sql){
                  $data['status'] = 'ok';
                  $plain_txt = "Este es mi texto plano";
                  $res = "$res Texto plano = $plain_txt";

                  $encrypted_txt = encrypt_decrypt('encrypt', $plain_txt);
                  $res = "$res Texto encriptado = $encrypted_txt";

                  $decrypted_txt = encrypt_decrypt('decrypt', $encrypted_txt);
                  $res = "$res Texto descencriptado = $decrypted_txt";

                  
                  $data['result'] = $res;
            }else{
                   $data['status'] = 'no';
            }
            echo json_encode($data);
      }
      
      function encrypt_decrypt($action, $string) {
          $output = false;

          $encrypt_method = "AES-256-CBC";
          $secret_key = 'This is my secret key';
          $secret_iv = 'This is my secret iv';

          // hash
          $key = hash('sha256', $secret_key);
          
          // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
          $iv = substr(hash('sha256', $secret_iv), 0, 16);

          if( $action == 'encrypt' ) {
              $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
              $output = base64_encode($output);
          }
          else if( $action == 'decrypt' ){
              $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
          }

          return $output;
      }
?>