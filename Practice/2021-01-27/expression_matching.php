<?php
    function has_space($string){
        if(preg_match('/ /',$string)){
            return true;
        }else{
            return false;
        }
    }

    $string='Thisdoesnthavespace';
    if(has_space($string)){
        echo 'Has at least one space.';
    }else{
        echo 'Has no spaces.';
    }
?>