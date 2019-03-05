<?php
      include("conexion.php");
      error_reporting(E_ALL ^ E_NOTICE);
      
      
      $sql = mysqli_query($conn,"SELECT * FROM usuarios");
      
      if (mysqli_num_rows($sql) > 0)
      {
            echo " <table class='table table-bordered table-striped' id='Tabla1'> <thead> <tr> <th>ID</th> <th>Nombre</th> <th>Nombre de usuario</th> <th>Password</th> <th></th> <th></th> </tr> </thead>";
            echo "<tbody>";
            
            while($row = mysqli_fetch_array($sql)) { 
                  
                  
                  echo "<tr>"; 
                  echo "<td>".$row['id']."</td>"; 
                  echo "<td>".$row['Nombre']."</td>"; 
                  echo "<td>".$row['usuario']."</td>"; 
                  echo "<td>".$row['pass']."</td>"; 
                  echo "<td><button type='button' name='anchors' id='b' class='btn btn-danger' >Editar</button></td>";
                  echo "<td><input class='btn btn-warning' type='submit' id='c' value='Eliminar' /></td>";
                  echo "</tr>";
                  
                  
            }
            echo "</tbody>";
            echo "</table>";
      } else { 
      echo "<p>Aún no hay registros en la base de datos</p>";
      }
?>