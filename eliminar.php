<?php
      include("conexion.php");
      error_reporting(E_ALL ^ E_NOTICE);
      $id = $_POST['id'];
      
     
      
      
      
      
      $sql = mysqli_query($conn,"DELETE FROM usuarios WHERE id='$id'");
      $data = array();
      
      if($sql){
            $data['status'] = 'ok';
            $data['result'] = 'de';
            
      }else{
             $data['status'] = 'no';
      }
      echo json_encode($data);
      
       
?>