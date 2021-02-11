<?php
echo '<pre>';

$data = [

	['category'=>1,'attribute'=>1,'option'=>1],
	['category'=>1,'attribute'=>1,'option'=>2],
	['category'=>1,'attribute'=>2,'option'=>3],
	['category'=>1,'attribute'=>2,'option'=>4],
	['category'=>2,'attribute'=>3,'option'=>5],
	['category'=>2,'attribute'=>3,'option'=>6],
	['category'=>2,'attribute'=>4,'option'=>7],
	['category'=>2,'attribute'=>4,'option'=>8]
];
// print_r($data);

// foreach($data as $val){
//     // print_r($val);
//     foreach($val as $val1){
//         print_r($val1);
//         echo '  ';
//     }
//     echo '<br>';
// }
$final=[];
// print_r($data);
foreach ($data as $key => $value) {
    // $category=$value['category'];
    // $attribute=$value['attribute'];
    // $option=$value['option'];
    // if(!array_key_exists($category,$final)){
    //     $final[$category]=[];
    // }
    // if(!array_key_exists($attribute,$final[$category])){
    //     $final[$category][$attribute]=[];
    // }
    // if(!array_key_exists($option,$final[$category][$attribute])){
    //     $final[$category][$attribute][$option]=$option;
    // }
    $final[$value['category']][$value['attribute']][$value['option']]=$value['option'];

}
print_r($final);
?>


	
	