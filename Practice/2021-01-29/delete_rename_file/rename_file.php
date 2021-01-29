<?php
    $filename='filetorename.txt';
    $rename=rand(10000,99999);
    if(@rename($filename,$rename.'.txt')){
        echo 'file <strong>'.$filename.'</strong> has been renamed to <strong>'.$rename.'.txt</strong>';
    }else{
        echo 'file already renamed';
    }
?>