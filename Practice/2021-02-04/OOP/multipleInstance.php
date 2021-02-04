<?php

class BankAccount{
    public $balance=0;
    public function DisplayBalance(){
        echo 'Balance:'.$this->balance;
    }
    public function Withdraw($amount){
        if(($this->balance)<$amount){
            echo 'Not enough balance<br>';
        }else{
            $this->balance=$this->balance-$amount;
        }
    }

    public function Deposit($amount){
        $this->balance=$this->balance + $amount;
    }
}

//new instance of class
$alex=new BankAccount();
$bob=new BankAccount();

$alex->Deposit(100);
$bob->Deposit(200);

$alex->Withdraw(50);
$bob->Withdraw(200);

//display balance
echo $alex->DisplayBalance().'<br>';
echo $bob->DisplayBalance();
?>