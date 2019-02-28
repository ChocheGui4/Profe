<?php
      include("conexion.php");
      error_reporting(E_ALL ^ E_NOTICE);
      $usuario = $_POST['correo'];
      $contra  = $_POST['pass'];
      
      
      if(isset($usuario) && !empty($usuario) && isset($contra) && !empty($contra)) {
            $sql = mysqli_query($conn,"SELECT * FROM usuarios WHERE usuario = '$usuario' AND pass = '$contra' ");
             
            //$contar = mysqli_fetch_array($sql);
            $count = mysqli_num_rows($sql);
             
            if($count == 0){
                  
                  echo "<scrip>alert('Nooooooooooo Se encontro')</script>";    

            }else{
                  echo "<scrip>alert('Se encontro')</script>";    
                  echo "<script>window.location.href = 'index.html'</script>";
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