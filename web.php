<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Webslesson Tutorial</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Velammal Hospital</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
 </head>
 <body>
   <div class="container-fluid my-3">
        <div class="row">
            <div class="col-2">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">Radiology</a>
                    <a href="#" class="list-group-item list-group-item-action">Radio Authorization</a>
                    <a href="./package-manager.html" class="list-group-item list-group-item-action">Package</a>
                    <a href="#" class="list-group-item list-group-item-action">Cardiology</a>
                    <a href="#" class="list-group-item list-group-item-action">Cardiology Authorization</a>
                </div>
            </div>
            <div class="col-10">
                <div class="d-flex bd-highlight bg-primary">
                    <div class="p-2 flex-grow-1 bd-highlight">
                        <h3>Packge Manager-View Packages</h3>
                    </div>
                    <div class="p-2 bd-highlight">
                        <a type="button" class="btn btn-secondary">Help</a>
                    </div>
                    <div class="p-2 bd-highlight">
                        <a type="button" href="./package-manager.html" class="btn btn-secondary">Close</a>
                    </div>
                </div>
                <div class="d-flex bd-highlight bg-primary">
                    <div class="p-2 flex-grow-1 bd-highlight">
                        <form class="mb-2">
                            <div class="row">
                                <div class="col">
             <input type="text" name="search_en" id="search_en" placeholder="Encounter No" class="form-control" />
</div>
<div class="col">
             <input type="text" name="search_ip" id="search_ip" placeholder="IP no "  class="form-control" />
</div>
<div class="col">
             <input type="text" name="search_pid" id="search_pid" placeholder="PID no " class="form-control" />
</div>
<div class="col">
           <input type="date" class="form-control" placeholder="Date">
</div>
<div class="col">
 <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Transgender</option>
                                    </select>
</div>
<div class="col">
             <input type="text" name="search_age" id="search_age" placeholder="Age " class="form-control" />
</div>
<div class="col">
                                    <input type="submit" class="btn btn-secondary" value="Submit">
                                </div>
    </div>
  </form>
</div>
</div>

  <div class="form-group">
                               <div id="result"></div>
                        </div>

 </body>
</html>


<script>
$(document).ready(function(){

 load_data();

 function load_data(query)
 {
  $.ajax({
   url:"fetch.php",
   method:"POST",
   data:{query:query},
   success:function(data)
   {
    $('#result').html(data);
   }
  });
 }
 $('#search_en').keyup(function(){
  var search = $(this).val();
  if(search != '')
  {
   load_data(search);
  }
  else
  {
   load_data();
  }
 });
 
 $('#search_ip').keyup(function(){
  var search = $(this).val();
  if(search != '')
  {
   load_data(search);
  }
  else
  {
   load_data();
  }
 });


 $('#search_pid').keyup(function(){
  var search = $(this).val();
  if(search != '')
  {
   load_data(search);
  }
  else
  {
   load_data();
  }
 });
 
 $('#search_sex').keyup(function(){
  var search = $(this).val();
  if(search != '')
  {
   load_data(search);
  }
  else
  {
   load_data();
  }
 });


 $('#search_age').keyup(function(){
  var search = $(this).val();
  if(search != '')
  {
   load_data(search);
  }
  else
  {
   load_data();
  }
 });

});
</script>