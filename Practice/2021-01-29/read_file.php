<?php
if(isset($_POST['name'])){
    $name=$_POST['name'];
    if(!empty($name)){

        $handle=fopen('names.txt','a');
        fwrite($handle,"\n".$name);
        fclose($handle);

        $count=0;
        $readin=file('names.txt');
        $readin_count=count($readin);
        
        foreach($readin as $fname){
            echo trim($fname);
            $count++;
            if($count!=$readin_count){
                echo ',';
            }
           
        }
    }else{
        echo 'Please type a name.';
    }
}
?>

<form action="read_file.php" method="post">
    <input type="text" name="name">
    <input type="submit" value="submit">
</form>