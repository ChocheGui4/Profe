<?php
      include("conexion.php");
      error_reporting(E_ALL ^ E_NOTICE);
      $id = $_POST['id'];
      $nombre = $_POST['Name'];
      $usuario = $_POST['User'];
      $contra  = $_POST['Pass'];
     
      
      
      
      
      $sql = mysqli_query($conn,"UPDATE usuarios SET Nombre='$nombre', usuario='$usuario', pass='$contra' WHERE id='$id'");
      $data = array();
      
      if($sql){
            $data['status'] = 'ok';
            $data['result'] = 'de';
            
      }else{
             $data['status'] = 'no';
      }
      echo json_encode($data);
      
       
?>