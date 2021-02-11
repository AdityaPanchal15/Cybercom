<?php
$data=[
    'Farmer'=>[
        'Layer'=>[
            '1'=>1,
            '2'=>2
        ],
        'Doctor'=>[
            '1'=>3,
            '2'=>4
        ],
        'Politician'=>[
            '1'=>5,
            '2'=>6
        ]
    ]
];
echo '<pre>';
// print_r($data);

foreach($data as $farmerChilds){
    foreach($farmerChilds as $child){
        // print_r($child);
        foreach($child as $each){
            print_r($each);
            echo ' ';
        }
        echo '<br>';
    }
}

?>