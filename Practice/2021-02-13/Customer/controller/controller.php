<?php

class Customer{
    
    private $servername = "localhost";
    private $username   = "root";
    private $password   = "";
    private $database   = "myshop";
    private $connect=null;

    public function connection(){
        $connect=mysqli_connect($this->servername,$this->username,$this->password,$this->database);
        $this->setConnect($connect);
    }

    public function setConnect(mysqli $connect){
        $this->connect=$connect;
        return $this;
    }

    public function getConnect(){
        return $this->connect;
    }

    public function isConnected(){
        if(!$this->connect){
            return false;
        }
        return true;
    }

    public function index(){
        require_once '../index.php';
    }

    public function insert(){
        if(!$this->isConnected()){
            $this->connection();
        }
        require_once '../insert.php';
        
        if(isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['status']) && isset($_POST['mobile'])){
            $firstName=$this->getConnect()->real_escape_string($_POST['firstName']);
            $lastName=$this->getConnect()->real_escape_string($_POST['lastName']);
            $email=$this->getConnect()->real_escape_string($_POST['email']);
            $password=$this->getConnect()->real_escape_string(md5($_POST['password']));
            $status=$this->getConnect()->real_escape_string($_POST['status']);
            $mobile=$this->getConnect()->real_escape_string($_POST['mobile']);

            date_default_timezone_set("Asia/Calcutta"); 
            $createdAt=$this->getConnect()->real_escape_string( Date("d-m-Y h:i:sa")); 

            $query="INSERT INTO customer VALUES('','$firstName','$lastName','$email','$password','$status','$createdAt','','$mobile')";
            if(!$this->getConnect()->query($query)){
                return false;
            }
            return $this->getConnect()->insert_id;
        }
    }

    

    public function fetchAll(){
        if(!$this->isConnected()){
            $this->connection();
        }
        include_once '../customers.php';
        $query = "SELECT * FROM customer";
        $result = $this->getConnect()->query($query);
        $data=[];
        $data=$result->fetch_all(MYSQLI_ASSOC);
		if(!$data){
            return false;
        }
        return $data;
    }

    public function fetchRow($id){
        
        if(!$this->isConnected()){
            $this->connection();
        }
        $query="SELECT * FROM customer WHERE customerId='$id' ";
        $result=$this->getConnect()->query($query);
        $row=$result->fetch_assoc();
        
        if(!$row){
            return false;
        }
        return $row;
    }

    public function update(){
        if(!$this->isConnected()){
            $this->connection();
        }
        
        if(isset($_POST['update'])){
            $customerId=$this->getConnect()->real_escape_string($_POST['customerId']);
            $firstName=$this->getConnect()->real_escape_string($_POST['firstName']);
            $lastName=$this->getConnect()->real_escape_string($_POST['lastName']);
            $email=$this->getConnect()->real_escape_string($_POST['email']);
            $status=$this->getConnect()->real_escape_string($_POST['status']);
            $mobile=$this->getConnect()->real_escape_string($_POST['mobile']);

            date_default_timezone_set("Asia/Calcutta"); 
            $updatedAt=$this->getConnect()->real_escape_string( Date("d-m-Y h:i:sa")); 


            $query="UPDATE customer SET firstName = '$firstName',lastName='$lastName',email = '$email',status = '$status',updatedDate = '$updatedAt',mobile='$mobile' WHERE customerId = '$customerId'";
            if(!$this->getConnect()->query($query)){
                return false;
            }
            return true;
        }
    }

    public function delete($id){
        if(!$this->isConnected()){
            $this->connection();
        }
        $query = "DELETE FROM customer WHERE customerId =$id";
        $result=$this->getConnect()->query($query);
        
        if(!$result){
            return false;
        }
        return true;
    }

}

// $action=$_GET['action'];
$customer=new Customer();
if(!isset($_GET['action'])){
    // $customer->index();
}else{
    $action=$_GET['action'];
    if($action=='update'){
        if($customer->$action()){
            $action='fetchAll';
        }
    }
    if(isset($_GET['id'])){
        if($action=='delete'){
            if($customer->delete($_GET['id'])){
                $action='fetchAll';
            }
        }
    }
    $customer->$action(); 
}
// $customer->$action();
?>