<?php
include_once('../conexion.php');

	$transaccion=$_POST['valorEliminar'];
	$sqlInsertarEtiqueta= "INSERT INTO herramientas VALUES (NULL, '".$descripcion."', '".$codigo."', '".$valorCategoria."')";
	$aplicarTransaccion= $mysqli->query($sqlInsertarEtiqueta);
		$data = array(
			'tipo'=>1,
			'msg'=>"Transacci�n realizada de forma correcta");
			echo json_encode($data);
?>