<?php

class BankAccount{
    public $balance=0;
    public $type='';

    public function SetType($input){
        $this->type=$input;
    }

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

class SavingAccount extends BankAccount{
    // public $type='18-25';
}

$alex=new BankAccount;
$alex->SetType('current');
$alex->Deposit(100);
$alex->Withdraw(20);

$alex_saving=new SavingAccount;
$alex_saving->SetType('saving');
$alex_saving->Deposit(3000);
// echo $alex_saving->type;

echo $alex->type.' has '.$alex->DisplayBalance().'<br/>';
echo $alex_saving->type.' has '.$alex_saving->DisplayBalance();
// echo $alex->DisplayBalance().'<br>';
// echo $alex_saving->DisplayBalance();
?>