<?php
      include("conexion.php");
      error_reporting(E_ALL ^ E_NOTICE);
      
      
      $sql = mysqli_query($conn,"SELECT * FROM usuarios");
      
      if (mysqli_num_rows($sql) > 0)
      {
            echo " <table class='table table-bordered table-striped'> <thead> <tr> <th>ID</th> <th>Nombre</th> <th>Nombre de usuario</th> <th>Password</th> <th></th> <th></th> </tr> </thead>";
            echo "<tbody>";
            $contar=1;
            while($row = mysqli_fetch_array($sql)) { 
                  
                  
                  echo "<tr>"; 
                  echo "<td>".$row['id']."</td>"; 
                  echo "<td>".$row['Nombre']."</td>"; 
                  echo "<td>".$row['usuario']."</td>"; 
                  echo "<td>".$row['pass']."</td>"; 
                  echo "<td><input class='btn btn-danger' type='button' value='Editar' /></td>";
                  echo "<td><input class='btn btn-warning' type='button' value='Eliminar' /></td>";
                  echo "</tr>";
                  
                  $contar=$contar+1;
            }
            echo "</tbody>";
            echo "</table>";
      } else { 
      echo "<p>Aún no hay registros en la base de datos</p>";
      }
?>