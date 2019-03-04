<?php
      include("conexion.php");
      error_reporting(E_ALL ^ E_NOTICE);
      $nombre = $_POST['Name'];
      $usuario = $_POST['User'];
      $contra  = $_POST['Pass'];
     
      
      
      
      if(isset($nombre) && !empty($nombre) && isset($usuario) && !empty($usuario) && isset($contra) && !empty($contra)) {
            $sql = mysqli_query($conn,"INSERT INTO usuarios(Nombre,usuario,pass) VALUES ('$nombre','$usuario','$contra')");
            $data = array();
            
            if($sql){
                  $data['status'] = 'ok';
                  
            }else{
                   $data['status'] = 'no';
            }
            echo json_encode($data);
      }
       
?>