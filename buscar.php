<?php
      include("conexion.php");
      $buscar = $_POST['b'];
       
      if(!empty($buscar)) {
            $sql = mysqli_query($conn,"SELECT * FROM usuarios WHERE Nombre = '$buscar'");
             
            //$contar = mysqli_fetch_array($sql);
            $count = mysqli_num_rows($sql);
             
            if($count == 0){
                  echo "\nNo se han encontrado resultados para '<b>".$buscar."</b>'.";
            }else{
                  while($row=mysqli_fetch_array($sql)){
                        $id = $row['id'];
                        $nombre = $row['Nombre'];
                        $usuario = $row['usuario'];
                        $pass = $row['pass'];
                         
                        echo "\n\nDatos: ".$id." - ".$nombre." - ".$usuario." - ".$pass."<br /><br />";    
                  }
            }
      }
       
?>