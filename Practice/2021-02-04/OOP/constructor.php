<?php

class Example{

    public function __construct($something){
        $this->SaySomthing($something);
    }

    public function SaySomthing($something){
        echo $something;
    }
}

$example=new Example('Hii');
// $example->SaySomthing();

?>