<?php
      include("conexion.php");
      error_reporting(E_ALL ^ E_NOTICE);
      $usuario = $_POST['correo'];
      $contra  = $_POST['pass'];
      
            
      if($usuario==""| $contra==""){

            echo "Los campos están vacíos";
          }else{
            if($usuario=="Jose"){
              if($contra=="12345"){
                //alert("Ingresar: Aceptado");
                  echo "Esta bien";
                  echo "<table border='2'";
                  echo "<tr>";
                  echo "<th>Mensaje</th>";
                  echo "<th>Nuevo</th>";
                  echo "</tr";
                  echo "<tr>";
                  echo "<td>";
                  echo "Hola soy un mensaje";
                  echo "</td>";
                  echo "<td>";
                  echo "Jose";
                  echo "</td>";
                  echo "</tr>";
                  echo "</table";
              }else{
                echo "Contrasenia mala";
              }
              
            }else{

                  echo "Usuario malo";
            }
          }
      /*if(isset($usuario) && !empty($usuario) && isset($contra) && !empty($contra)) {
            $sql = mysqli_query($conn,"SELECT * FROM usuarios WHERE usuario = '$usuario' AND pass = '$contra' ");
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
                  }
            }*/
      
       
?>