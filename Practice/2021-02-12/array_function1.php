<?php
echo '<pre>';

/***********************************************
 * array_filter:Filter the values of an array using a callback function
 */
function test_odd($var)
  {
  return($var & 1);
  }

$a1=[1,3,2,3,4];
echo 'array_filter:<br>';
print_r(array_filter($a1,"test_odd"));
echo '<br><br>';

/*****************************************************
 * array_flip:Flip all keys with their associated values in an array
 */
echo 'array_flip:<br>';
$a1=["a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow"];
$result=array_flip($a1);
print_r($result);
echo '<br><br>';

/**********************************************************
 * array_intersect:Compare the values of two arrays, and return the matches
 */
echo 'array_intersect:<br>';
$a1=["a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow"];
$a2=["e"=>"red","f"=>"green","g"=>"blue"];

$result=array_intersect($a1,$a2);
print_r($result);
echo '<br><br>';

/************************************************************
 * array_intersect_key:Compare the keys of two arrays, and return the matches
 */
echo 'array_intersect_key:<br>';
$a1=["a"=>"red","b"=>"green","c"=>"blue"];
$a2=["a"=>"red","c"=>"blue","d"=>"pink"];

$result=array_intersect_key($a1,$a2);
print_r($result);
echo '<br><br>';

/**************************************************************
 *array_key_exists: Check if the key "Volvo" exists in an array
 */
echo 'array_key_exists:<br>';
$a=["Volvo"=>"XC90","BMW"=>"X5"];
if (array_key_exists("Volvo",$a))
  {
  echo "Key exists!";
  }
else
  {
  echo "Key does not exist!";
  }
  echo '<br><br>';

  /****************************************************************
   * array_map:Send each value of an array to a function, multiply each value by itself, and return an array with the new values
   */
  echo 'array_map:<br>';
  function myfunction($num)
  {
    return($num*$num);
  }
  $a=array(1,2,3,4,5);
  print_r(array_map("myfunction",$a));
  echo '<br><br>';

  /************************************************************
   * array_product:Calculate and return the product of an array
   */
  echo 'array_product:<br>';
  $a=[5,5];
  print_r($a);
  echo(array_product($a));
  echo '<br><br>';

  /****************************************************************
   * array_multisort:Return a sorted array in ascending order
   */
  echo 'array_multisort:<br>';
  $a=["Dog","Cat","Horse","Bear","Zebra"];
  array_multisort($a);
  print_r($a);
  echo '<br><br>';

  /******************************************************************
   * array_pad:Return 5 elements and insert a value of "blue" to the new elements in the array
   */
  echo 'array_pad:<br>';
   $a=array("red","green");
  print_r(array_pad($a,5,"blue"));
  echo '<br><br>';
?>