<?php
echo '<pre>';

$data = [
	'category'=> [
		'1'=>[
			'name' => 'c1',
			'attribute'=>[
				'1' => [
					'name'=>'a1',
					'option' => [
						'1'=>[
							'name' => 'o1'
						],
						'2'=>[
							'name' => 'o2'
						]
					]
				],
				'2' => [
					'name'=>'a2',
					'option' => [
						'3'=>[
							'name' => 'o3'
						],
						'4'=>[
							'name' => 'o4'
						]
					]
				]
			]
		],
		'2'=>[
			'name' => 'c2',
			'attribute'=>[
				'3' => [
					'name'=>'a3',
					'option' => [
						'5'=>[
							'name' => 'o5'
						],
						'6'=>[
							'name' => 'o6'
						]
					]
				],
				'4' => [
					'name'=>'a4',
					'option' => [
						'7'=>[
							'name' => 'o7'
						],
						'8'=>[
							'name' => 'o8'
						]
					]
				]
			]
		]
	]
];

// print_r($data);
$tree=[];

foreach ($data as $key => $value) {
    
    foreach ($value as $key1 => $value1) {
        $attribute=$value1['attribute'];
        foreach ($attribute as $key2 => $value2) {
            $option=$value2['option'];
            foreach ($option as $key3 => $value3) {
                $tree[$key3]['category']=$key1;
                $tree[$key3]['categoryname']=$value1['name'];
                $tree[$key3]['attribute']=$key2;
                $tree[$key3]['attributename']=$value2['name'];
                $tree[$key3]['option']=$key3;
                $tree[$key3]['optionname']=$value3['name'];
            }
        }
    }
}
print_r($tree);
?>