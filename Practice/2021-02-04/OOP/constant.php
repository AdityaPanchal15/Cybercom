<?php

class Circle{
    const pi=3.41;

    public function Area($radius){
        return self::pi*($radius*$radius);
    }
}
$circle=new Circle;
echo $circle->Area(100);
// echo Circle::pi;

?>