<?php

/*********************************
 * array_diff_key to display different key from first array with other array
 */
$a1=["a"=>"red","b"=>"green","c"=>"blue"];
$a2=["c"=>"yellow","d"=>"black","e"=>"brown"];
$a3=["f"=>"green","c"=>"purple","g"=>"red"];

$result=array_diff_key($a1,$a2,$a3);
echo 'array_diff_key:<br>';
print_r($result);
echo '<br><br>';

/**********************************
 * array_diff Compare the values of two arrays, and return the differences
 */

 $result=array_diff($a1,$a2);
 echo 'array_diff:<br>';
 print_r($result);
 echo '<br><br>';

 /*********************************************
  * array_change_key_case Change all keys in an array to uppercase
  */

  $result=array_change_key_case($a1,CASE_UPPER);
  echo 'array_change_key_case:<br>';
  print_r($result);
  echo '<br><br>';

  /********************************************
   * array_chunk: Split an array into chunks of two
   */
  $cars=["Volvo","BMW","Toyota","Honda","Mercedes","Opel"];
  echo 'array_chunk:<br>';
  echo '<pre>';
  print_r(array_chunk($cars,3));
  echo '<br><br>';

  /********************************************
   * array_column: Get column of last names from a recordset
   */
  $a = [
    [
      'id' => 5698,
      'first_name' => 'Peter',
      'last_name' => 'Griffin',
    ],
    [
      'id' => 4767,
      'first_name' => 'Ben',
      'last_name' => 'Smith',
    ],
    [
      'id' => 3809,
      'first_name' => 'Joe',
      'last_name' => 'Doe',
    ]
  ];
  echo 'array_column:<br>';
  $last_names = array_column($a, 'last_name');
  print_r($last_names);
  echo '<br><br>';

  /******************************************
   * array_combine:Create an array by using the elements from one "keys" array and one "values" array
   */
  $fname=["Peter","Ben","Joe"];
  $age=["35","37","43"];

  echo 'array_combine:<br>';
  $c=array_combine($fname,$age);
  print_r($c);
  echo '<br><br>';

  /******************************************
   * array_count_values:Count all the values of an array
   */
  $a=["A","Cat","Dog","A","Dog"];

  echo 'array_count_values:<br>';
  print_r(array_count_values($a));
  echo '<br><br>';

  /******************************************
   * array_fill:Fill an array with values
   */
  echo 'array_fill:<br>';

  $a1=array_fill(2,4,"blue");
  $b1=array_fill(0,1,"red");
  print_r($a1);
  echo "<br>";
  print_r($b1);
  echo '<br><br>';


  /*******************************************
   * array_fill_keys:Fill an array with values, specifying keys
   */
  echo 'array_fill_keys:<br>';
  $keys=["a","b","c","d"];
    $a1=array_fill_keys($keys,"blue");
    print_r($a1);
    echo '<br><br>';
  
?>