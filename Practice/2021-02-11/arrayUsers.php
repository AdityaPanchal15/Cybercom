<?php
$data=[
    [
      "id"=>1,
      "name"=>"Leanne Graham",
      "username"=>"Bret",
      "email"=>"Sincere@april.biz",
      "address"=>[
        "street"=>"Kulas Light",
        "suite"=>"Apt. 556",
        "city"=>"Gwenborough",
        "zipcode"=>"92998-3874",
        "geo"=>[
          "lat"=>"-37.3159",
          "lng"=>"81.1496"
        ]
       ],
      "phone"=>"1-770-736-8031 x56442",
      "website"=>"hildegard.org",
      "company"=>[
        "name"=>"Romaguera-Crona",
        "catchPhrase"=>"Multi-layered client-server neural-net",
        "bs"=>"harness real-time e-markets"
      ]
    ],
    [
      "id"=>2,
      "name"=>"Ervin Howell",
      "username"=>"Antonette",
      "email"=>"Shanna@melissa.tv",
      "address"=>[
        "street"=>"Victor Plains",
        "suite"=>"Suite 879",
        "city"=>"Wisokyburgh",
        "zipcode"=>"90566-7771",
        "geo"=>[
          "lat"=>"-43.9509",
          "lng"=>"-34.4618"
        ]
       ],
      "phone"=>"010-692-6593 x09125",
      "website"=>"anastasia.net",
      "company"=>[
        "name"=>"Deckow-Crist",
        "catchPhrase"=>"Proactive didactic contingency",
        "bs"=>"synergize scalable supply-chains"
      ]
    ]
];

echo '<pre>';
// print_r($data);

foreach ($data as $key => $value) {
    foreach ($value as $key1 => $value1) {
        if(gettype($value1)=='array'){
            foreach($value1 as $key2=>$value2){
                if(gettype($value2)=='array'){
                    foreach($value2 as $key3=>$value3){
                        print_r($key3);
                        echo ':';
                        print_r($value3);
                        echo '<br>';
                    }
                }else{
                    print_r($key2);
                    echo ':';
                    print_r($value2);
                    echo '<br>';
                }
            }
        }else{
            print_r($key1);
            echo ':';
            print_r($value1);
            echo '<br>';
        }  
    }
    echo '<br>';
}

?>