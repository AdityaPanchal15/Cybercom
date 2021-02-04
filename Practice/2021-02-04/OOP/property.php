<?php

class BankAccount{
    // public $balance=3500;
    private $balance=3500; //not allow direct access
    // protected $balance=3500; //not allow direct access

    public function DisplayBalance(){
        return $this->balance;
    }

}

$alex=new BankAccount;
// echo $alex->balance;        //public
echo $alex->DisplayBalance();
?>