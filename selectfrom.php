<?php
      include("conexion.php");
      error_reporting(E_ALL ^ E_NOTICE);
      
      
      
            $sql = mysqli_query($conn,"SELECT * FROM usuarios");

            //Insertar datos
            //$ejecutar=mysqli_query($con,"INSERT INTO usuarios (Nombre,usuario,pass)
            //VALUES ('$nombre','$usuario','$pass'");

            //Eliminar datos
            //$sql = mysqli_query($conn,"DELETE FROM usuarios WHERE Nombre ='$nombre'");

            //Actualizar datos
            //$ejecutar=mysqli_query($con,"UPDATE USUARIOS SET Nombre = '$nombre' WHERE Nombre='$nombre'");


            $data = array();
            
            //$contar = mysqli_fetch_array($sql);
            $count = mysqli_num_rows($sql);
             
            if($count == 0){
                  
                  echo "<scrip>alert('Nooooooooooo Se encontro')</script>";    

            }else{
                  
                  //echo "<scrip>alert('Se encontro')</script>";    
                  //echo "<script>window.location.href = 'index.html'</script>";
                  $userData = $sql->fetch_assoc();
                  $data['status'] = 'ok';
                  $data['result'] = $userData;            
                  echo json_encode($data);                  
                  /*while($row=mysqli_fetch_array($sql)){
                        $id = $row['id'];
                        $nombre = $row['Nombre'];
                        $usuario = $row['usuario'];
                        $pass = $row['pass'];
                         
                        echo "<scrip>alert('Se encontró')</script>";    
                  }*/
            }
      
       
?>