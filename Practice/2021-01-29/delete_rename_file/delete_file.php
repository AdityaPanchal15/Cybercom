<?php
    $filename='filetodelete.txt';
    if(@unlink('filetodelete.txt')){
        echo 'File <strong>'.$filename.'</strong> has been deleted.';
    }else{
        echo 'File cannot be deleted.';
    }
?>