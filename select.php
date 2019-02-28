<?php
      include("conexion.php");
      $usuario = $_POST['correo'];
      $contra  = $_POST['pass'];
       
      if(isset($usuario) && !empty($usuario) && isset($contra) && !empty($contra) {
            $sql = mysqli_query($conn,"SELECT * FROM usuarios WHERE usuario = '$usuario' AND pass = '$contra' ");
             
            //$contar = mysqli_fetch_array($sql);
            $count = mysqli_num_rows($sql);
             
            if($count == 0){
                  echo "\nNo se han encontrado resultados para '<b>".$buscar."</b>'.";
                  echo "<scrip>alert('Nooooooooooo Se encontro')</script>";    
            }else{
                  echo "<scrip>alert('Se encontro')</script>";    
                  /*while($row=mysqli_fetch_array($sql)){
                        $id = $row['id'];
                        $nombre = $row['Nombre'];
                        $usuario = $row['usuario'];
                        $pass = $row['pass'];
                         
                        echo "<scrip>alert('Se encontró')</script>";    
                  }*/
            }
      }
       
?>