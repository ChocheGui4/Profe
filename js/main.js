$(document).ready(function(){  
  //Buttons
  
  $("#insertar").click(function(){
    $('#logoutModal').modal();
  });

   $('#registrar').click(function(){
    
    
                  

    //hace la búsqueda
    $.ajax({

          type: "POST",
          url: "insertar.php",
          data: $("#formulario").serialize(),/*"correo="+texto1+"pass="+texto2,*/
          dataType: "json",
          error: function(){
            alert("error petición ajax");
          },
          success: function(data){   
            //alert(data);
            if(data.status == "ok"){
              console.log("Salio bien");
            }else{
              console.log("Salio mal");
            }
            console.log(data);
            $("#resultado").empty();
            $("#resultado").text(data);
          }
    });
                                                                            
                                                                     
  });
  //End buttons





  $('#Ingresar').click(function(){
    var texto1, texto2;
    texto1=$("#Email").val();
    texto2=$("#Password").val();
    
    
                  

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
            alert("error petición ajax");
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
            }
            console.log(data);
            $("#resultado").empty();
            $("#resultado").text(data);
          }
    });
                                                                            
                                                                     
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
