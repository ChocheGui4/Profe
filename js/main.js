$(document).ready(function(){  
  //Buttons
  
  $('#Tabla1 tr').on('click', function(){
    var dato = $(this).find('td:first').html();
    $('#txtNombre').val(dato);
    console.log(dato);
  });

  $("#eliminar").click(function(){
    
    console.log("Entro a eliminar");
    
    $.ajax({

          type: "POST",
          url: "eliminar.php",
          data:$("#for1").serialize(),
          dataType: "json",
          error: function(){
            alert("error petición ajax insertar");
          },
          success: function(data){   
            //alert(data);

            if(data.status == "ok"){
              cons();
              console.log("se eliminó");
              $("#logoutModal").modal('hide');
              $("#nombre").val("");
              $("#usuario").val("");
              $("#password").val("");
            }else{
              console.log("Salio mal");
            }
            console.log(data);
            $("#resultado").empty();
            $("#resultado").text(data);
          }
    });
  });
  $("#nombre").on("keyup", function() {
    
    var texto1=$("#nombre").val();
    
    var reg1=/([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    
    if (!texto1.match(reg1)) {
      console.log("Nada");
      $("#patnom").text("Ingrese bien su nombre");
    }else{
      console.log("Ya quedó");
      $("#patnom").text("");
    }
  });
  $("#usuario").on("keyup", function() {
    
    var texto1=$("#usuario").val();
    
    var reg1=/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,15}$/;
    
    if (!texto1.match(reg1)) {
      console.log("Nada");
      $("#patusu").text("Ingresa al menos: 1 mayúscula, 1 minúscula y 1 dígito, no se admiten otros caracteres");
    }else{
      console.log("Ya quedó");
      $("#patusu").text("");
    }
  });
  $("#password").on("keyup", function() {
    
    var texto1=$("#password").val();
    
    var reg1=/^((?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20})|((?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,40})$/;
    
    if (!texto1.match(reg1)) {
      console.log("Nada");
      $("#patpas").text("Ingresa al menos: 1 mayúscula, 1 minúscula, 1 dígito y un caracter especial");
    }else{
      console.log("Ya quedó");
      $("#patpas").text("");
    }
  });


  $("#actualizar").click(function(){
    
    var texto1, texto2,texto3;
    texto1=$("#nombre").val();
    texto2=$("#usuario").val();
    texto3=$("#password").val();
    var reg1=/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    var reg2=/([a-zA-Z0-9.!#$%@&’*+/=?^_`{|}~-]){5,20}/;
    var reg3=/([a-zA-Z0-9.!#$%@&’*+/=?^_`{|}~-]){8,50}/;
    if (!texto1.match(reg1)|!texto2.match(reg2)|!texto3.match(reg3)) {
      console.log("Nada");
    }else{
    
      $.ajax({

            type: "POST",
            url: "actualizar.php",
            data:$("#for1").serialize(),
            dataType: "json",
            error: function(){
              alert("error petición ajax insertar");
            },
            success: function(data){   
              //alert(data);

              if(data.status == "ok"){
                cons();
                console.log("se actualizó");
                $("#logoutModal").modal('hide');
                $("#nombre").val("");
                $("#usuario").val("");
                $("#password").val("");
              }else{
                console.log("Salio mal");
              }
              console.log(data);
              $("#resultado").empty();
              $("#resultado").text(data);
            }
      });
    }
  });
  function sh(){
    $("#nom").show();
    $("#nombre").show();
    $("#usuario").show();
    $("#password").show();
    $("#use").show();
    $("#pas").show();
    $("#footer").show();
  }
  $("#insertar").click(function(){
    //Ocultar elementos
    sh();

    $("#nombre").val("");
    $("#usuario").val("");
    $("#password").val("");
    //fin ocultar
    $("#ID").hide();
    $("#eliminar").hide();
    $("#cancel").hide();
    $("#actualizar").hide();

    $("#registrar").show();

    $('#logoutModal').modal();
  });

  $('#pushtable').on('click','#Tabla1 tr',function(){
    var global_id = $(this).find('td:first').html();
    var dato1 = $(this).find('td:nth-child(2)').html();
    var dato2 = $(this).find('td:nth-child(3)').html();
    var dato3 = $(this).find('td:nth-child(4)').html();
    
    
    $('#ID').val(global_id);
    $('#nombre').val(dato1);
    $('#usuario').val(dato2);
    $('#password').val(dato3);
    
  });

  $('#pushtable').on('click','#b',function(){
    sh();
    $("#ID").hide();
    $("#eliminar").hide();
    $("#cancel").hide();
    $("#actualizar").show();
    $("#registrar").hide();
    $('#logoutModal').modal();
  });

  $('#pushtable').on('click','#c',function(){
    //Ocultar elementos
    $("#nom").hide();
    $("#nombre").hide();
    $("#usuario").hide();
    $("#password").hide();
    $("#use").hide();
    $("#pas").hide();
    $("#footer").hide();
    //fin ocultar
    
    $("#ID").hide();
    $("#eliminar").show();
    $("#cancel").show();
    $("#actualizar").hide();
    $("#registrar").hide();
    $('#logoutModal').modal();
  });


  $('#consul').click(function(){
    //hace la búsqueda
    cons();                                                              
  });

  function cons(){
    $.ajax({
          type: "GET",
          url: "consultar.php",
          dataType: "html",
          error: function(){
            alert("error petición ajax insertar");
          },
          success: function(data){   
            //alert(data);
            $("#pushtable").empty();
            $("#pushtable").append(data);
          }
    });
  }

  $('#registrar').click(function(){
    var texto1, texto2,texto3;
    texto1=$("#nombre").val();
    texto2=$("#usuario").val();
    texto3=$("#password").val();
    var reg1=/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    var reg2=/([a-zA-Z0-9.!#$%@&’*+/=?^_`{|}~-]){5,20}/;
    var reg3=/([a-zA-Z0-9.!#$%@&’*+/=?^_`{|}~-]){8,50}/;
    if (!texto1.match(reg1)|!texto2.match(reg2)|!texto3.match(reg3)) {
      console.log("Nada");
    }else{
      console.log("Entro a insertar");
      $.ajax({
            type: "POST",
            url: "insertar.php",
            data: $("#for1").serialize(),/*"correo="+texto1+"pass="+texto2,*/
            dataType: "json",
            error: function(){
              alert("error petición ajax insertar");
            },
            success: function(data){   
              //alert(data);
              if(data.status == "ok"){
                cons();
                $("#logoutModal").modal('hide');
                $("#nombre").val("");
                $("#usuario").val("");
                $("#password").val("");
              }else{
                console.log("Salio mal");
              }
              
              $("#resultado").empty();
              $("#resultado").text(data);
            }
      });
    }                                                                      
                                                                     
  });
  //End buttons

  $('#Ingresar').click(function(){
    var texto1, texto2;
    texto1=$("#Email").val();
    texto2=$("#Password").val();
    if(texto1==""| texto2==""){
      modal("Atención","Llene los datos correspondientes y no deje ninguno vacío","#F50768","img/warning.ico");
    }else{
    //hace la búsqueda
      $.ajax({

            type: "POST",
            url: "select.php",
            data: $("#formulario").serialize(),/*"correo="+texto1+"pass="+texto2,*/
            dataType: "json",
            beforeSend: function(){
                  //imagen de carga
                  //$("#resultado").html("<p align='center'><img src='ajax-loader.gif' /></p>");
            },
            error: function(){
              alert("error petición ajax formulario");
            },
            success: function(data){   
              //alert(data);
              if(data.status == "ok"){

                $("#titulo").text("Bienvenido");
                $("#titulo").css("text-align","center");
                $("#texto").text("Su consulta ha sido exitosa");
                $("#titlecontent").css("color", "#55C409");
                $("#miimagen").attr("src","img/success.ico");
                $("#logoutModal").modal();
                setTimeout(function() {
                $('#logoutModal').modal('hide');
                window.location.href = "buttons.html"
                }, 3000);  
              }else if(data.result==0){
                modal("Denegado","Revisa tus datos de usuario","#F12A02","img/user.ico");
              }
              
              
            }
      });
    }                                                                    
                                                                     
  });
  /*$('#Ingresar').on('click',function(){
    alert("Hola mundo 1");
  });*/
  $("#Ingresar").click(function(){
    var texto1, texto2, comp1="Jose", comp2="Joanlove";
    texto1=$("#Email").val();
    texto2=$("#Password").val();
    
    if(texto1==""| texto2==""){
      modal("Atención","Llene los datos correspondientes y no deje ninguno vacío","#F50768","img/warning.ico");
    }else{
      if(texto1==comp1){
        if(texto2==comp2){
          //alert("Ingresar: Aceptado");

          $("#titulo").text("Bienvenido");
          $("#titulo").css("text-align","center");
          $("#texto").text("Su consulta ha sido exitosa");
          $("#titlecontent").css("color", "#55C409");
          $("#miimagen").attr("src","img/success.ico");
          $("#logoutModal").modal();
          setTimeout(function() {
          $('#logoutModal').modal('hide');
          window.location.href = "index.html"
          }, 3000);          
        }else{
          modal("Denegado","Revisa tu contraseña","#F12A02","img/key.ico");
          limpiar();
        }
        
        }else{
          modal("Denegado","Revisa tu nombre de usuario","#F12A02","img/user.ico");
          limpiar();
        }
    }
  });

  function limpiar(){
    $("#Password").val("");
    $("#Email").val("");
  }
  function modal(t1,t2,color,img){
    $("#titulo").text(t1);    
    $("#texto").text(t2);
    $("#titlecontent").css("color", color);
    $("#miimagen").attr("src",img);
    $("#logoutModal").modal();
    setTimeout(function() {
    $('#logoutModal').modal('hide');
    
    }, 3000);
          
  }

  
  /*$("#google").click(function(){
    $("#Email").hide();
    $("#Password").hide();
  
  });*/
    
  /*$("#facebook").click(function(){
    $("#Email").show();
    $("#Password").show();
  });*/

  /*$("#google").click(function(){
    $("#logoutModal").modal('show'); 
  });*/
  var consulta;
        
                                                                          
         //hacemos focus al campo de búsqueda
        
                                                                                                    
        //comprobamos si se pulsa una tecla
  
});
