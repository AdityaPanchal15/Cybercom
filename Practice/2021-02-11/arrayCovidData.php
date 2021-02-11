<?php
    $data=[
            "activeCases"=>142562,
            "activeCasesNew"=>1051,
            "recovered"=>10573372,
            "recoveredNew"=>11764,
            "deaths"=>155360,
            "deathsNew"=>108,
            "previousDayTests"=>699185,
            "totalCases"=>10871294,
            "sourceUrl"=>"https://www.mohfw.gov.in/",
            "lastUpdatedAtApify"=>"2021-02-11T04:40:00.000Z",
            "readMe"=>"https://github.com/zpelechova/covid-in/blob/master/README.md",
            "regionData"=>[
                    [
                        "region"=>"Andaman and Nicobar Islands",
                        "totalInfected"=>13,
                        "newInfected"=>0,
                        "recovered"=>4932,
                        "newRecovered"=>0,
                        "deceased"=>62,
                        "newDeceased"=>0
                    ],
                    [
                        "region"=>"Andhra Pradesh",
                        "totalInfected"=>845,
                        "newInfected"=>-72,
                        "recovered"=>880599,
                        "newRecovered"=>121,
                        "deceased"=>7161,
                        "newDeceased"=>1
                    ]
            ]
        ];

        echo '<pre>';
        // print_r($data);
        $key1=array_keys($data);
        // print_r($key1);
        $i=0;

        foreach($data as $all){
            print_r($key1[$i]);
            echo ':';
            $type=gettype($all);
            
            if($type == 'array'){
                $j=0;
                foreach($all as $child){
                    $key=array_keys($child);
                    foreach($child as $leaf){
                        
                        print_r($key[$j]);
                        echo ':';
                        print_r($leaf);
                        echo '<br>';
                        $j++;
                    }
                    $j=0;
                    echo '<br>';
                }
            }else{
                print_r($all);
                echo '<br>';
            }
            $i++;
            echo '<br>';
            // echo $regionData;
        }

?>