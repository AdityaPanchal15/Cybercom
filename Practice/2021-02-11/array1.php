<?php
echo '<pre>';

// $data = [

// 	['category'=>1,'attribute'=>1,'option'=>1],
// 	['category'=>1,'attribute'=>1,'option'=>2],
// 	['category'=>1,'attribute'=>2,'option'=>3],
// 	['category'=>1,'attribute'=>2,'option'=>4],
// 	['category'=>2,'attribute'=>3,'option'=>5],
// 	['category'=>2,'attribute'=>3,'option'=>6],
// 	['category'=>2,'attribute'=>4,'option'=>7],
// 	['category'=>2,'attribute'=>4,'option'=>8]
// ];

$data = [
	    '1'=>[
                '1' => [
                    '1' => 1,
                    '2' => 2		
                ],
                '2' => [
                    '3' => 3,
                    '4' => 4		
                ]
            ],
        '2'=>[
                '3' => [
                    '5' => 5,
                    '6' => 6		
                ],
                '4' => [
                    '7' => 7,
                    '8' => 8		
                ]
        ]
        ];
    
$final=[];
foreach ($data as $key => $value) {
    foreach ($value as $key1 => $value1) {
        foreach ($value1 as $key2 => $value2) {
            $final[$key2]['category']=$key;
            $final[$key2]['attribute']=$key1;
            $final[$key2]['option']=$key2;
        }
       
    }
}

print_r($final);
?>


	
	