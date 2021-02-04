<?php

class BankAccount{
    public $balance=10;
    public function DisplayBalance(){
        echo 'Balance:'.$this->balance;
    }
    public function Withdraw($amount){
        if(($this->balance)<$amount){
            echo 'Not enough balance';
        }else{
            $this->balance=$this->balance-$amount;
        }
    }
}

//new instance of class
$alex=new BankAccount();

//withdraw 5 rupees
$alex->Withdraw(12);

//display balance
echo $alex->DisplayBalance();
?>