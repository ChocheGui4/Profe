<?php
      include("conexion.php");
      error_reporting(E_ALL ^ E_NOTICE);
      $nombre = $_POST['Name'];
      $usuario = $_POST['User'];
      //$contra  = $_POST['Pass'];
      $ps  = $_POST['Pass'];
     
      
      
      
      if(isset($nombre) && !empty($nombre) && isset($usuario) && !empty($usuario) && isset($ps) && !empty($ps)) {
            $contra = encrypt_decrypt('encrypt', $ps);
            $sql = mysqli_query($conn,"INSERT INTO usuarios(Nombre,usuario,pass) VALUES ('$nombre','$usuario','$contra')");
            $data = array();
            
            if($sql){
                  $data['status'] = 'ok';
                  $data['result'] = $contra;
                  //$decrypted_txt = encrypt_decrypt('decrypt', $encrypted_txt);
                  //$res = "$res Texto descencriptado = $decrypted_txt";

            }else{
                   $data['status'] = 'no';
            }
            echo json_encode($data);
      }
      
     
?>