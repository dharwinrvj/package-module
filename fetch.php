<?php
//fetch.php
$connect = mysqli_connect("localhost", "root", "", "patient search");
$output = '';
if(isset($_POST["query"]))
{
 $search = mysqli_real_escape_string($connect, $_POST["query"]);
 $query = "
  SELECT * FROM patient
  WHERE encounterno LIKE '%".$search."%'
  OR ipno LIKE '%".$search."%' 
  OR pidno LIKE '%".$search."%' 
  OR name LIKE '%".$search."%' 
  OR ward LIKE '%".$search."%'
  OR room LIKE '%".$search."%'
 OR age LIKE '%".$search."%'
 OR package LIKE '%".$search."%'
 ";
}
else
{
 $query = "
  SELECT * FROM patient ORDER BY name
 ";
}
$result = mysqli_query($connect, $query);
if(mysqli_num_rows($result) > 0)
{
 $output .= '
  <div class="table-responsive">
   <table class="table table bordered">
    <tr>
     <th>Encounter no</th>
     <th>IP no</th>
     <th>PID no</th>
     <th>Name</th>
     <th>Ward</th>
    <th>Room</th>
    <th>Age</th>
   <th>Package</th>
    </tr>
 ';
 while($row = mysqli_fetch_array($result))
 {
  $output .= '
   <tr>
    <td>'.$row["encounterno"].'</td>
    <td>'.$row["ipno"].'</td>
    <td>'.$row["pidno"].'</td>
    <td>'.$row["name"].'</td>
    <td>'.$row["ward"].'</td>
 <td>'.$row["room"].'</td>
 <td>'.$row["age"].'</td>
 <td>'.$row["package"].'</td>
   </tr>
  ';
 }
 echo $output;
}
else
{
 echo 'Data Not Found';
}

?>