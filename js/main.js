$(document).ready(function(){  
  /*$('#Ingresar').on('click',function(){
    alert("Hola mundo 1");
  });*/
  $("#Ingresar").click(function(){
    var texto1, texto2, comp1="Jose", comp2="Joanlove";
    texto1=$("#Email").val();
    texto2=$("#Password").val();
    //alert(texto1+texto2);
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
        $('#Ingresar').click(function(){
                                     
              //obtenemos el texto introducido en el campo de búsqueda
              val1 = $("#Email").val();
              val2 = $("#Password").val();
              
                                                                           
              //hace la búsqueda
                                                                                  
              $.ajax({
                    type: "POST",
                    url: "select.php",
                    data: $("#formulario").serialize(),
                    dataType: "html",
                    beforeSend: function(){
                          //imagen de carga
                          $("#resultado").html("<p align='center'><img src='ajax-loader.gif' /></p>");
                    },
                    error: function(){
                          alert("error petición ajax");
                    },
                    success: function(data){                                                    
                          $("#resultado").empty();
                          $("#resultado").append(data);
                                                             
                    }
              });
                                                                                  
                                                                           
        });
});
