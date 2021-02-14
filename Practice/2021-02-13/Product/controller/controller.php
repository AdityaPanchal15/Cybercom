<?php

class Product{
    
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
        
        if(isset($_POST['sku']) && isset($_POST['name']) && isset($_POST['price']) && isset($_POST['discount']) && isset($_POST['quantity']) && isset($_POST['discription']) && isset($_POST['status'])){
            $sku=$this->getConnect()->real_escape_string($_POST['sku']);
            $name=$this->getConnect()->real_escape_string($_POST['name']);
            $price=$this->getConnect()->real_escape_string($_POST['price']);
            $discount=$this->getConnect()->real_escape_string($_POST['discount']);
            $quantity=$this->getConnect()->real_escape_string($_POST['quantity']);
            $discription=$this->getConnect()->real_escape_string($_POST['discription']);
            $status=$this->getConnect()->real_escape_string($_POST['status']);

            date_default_timezone_set("Asia/Calcutta"); 
            $createdAt=$this->getConnect()->real_escape_string( Date("d-m-Y h:i:sa")); 

            $query="INSERT INTO product VALUES('','$sku','$name','$price','$discount','$quantity','$discription','$status','$createdAt','')";
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
        include_once '../products.php';
        $query = "SELECT * FROM product";
        $result = $this->getConnect()->query($query);
        $data=[];
        $data=$result->fetch_all(MYSQLI_ASSOC);
		if(!$data){
            return false;
        }
        return $data;
    }

    public function fetchRow($id){
        // $id=$_SESSION['id'];
        if(!$this->isConnected()){
            $this->connection();
        }
        $query="SELECT * FROM product WHERE productId='$id' ";
        $result=$this->getConnect()->query($query);
        $row=$result->fetch_assoc();
        // include_once '../update.php';
        // print_r($result);
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
            $productId=$this->getConnect()->real_escape_string($_POST['productId']);
            $sku=$this->getConnect()->real_escape_string($_POST['sku']);
            $name=$this->getConnect()->real_escape_string($_POST['name']);
            $price=$this->getConnect()->real_escape_string($_POST['price']);
            $discount=$this->getConnect()->real_escape_string($_POST['discount']);
            $quantity=$this->getConnect()->real_escape_string($_POST['quantity']);
            $description=$this->getConnect()->real_escape_string($_POST['description']);
            $status=$this->getConnect()->real_escape_string($_POST['status']);

            date_default_timezone_set("Asia/Calcutta"); 
            $updatedDate=$this->getConnect()->real_escape_string( Date("d-m-Y h:i:sa")); 

            $query="UPDATE product SET sku = '$sku',name = '$name',price = '$price',discount = '$discount',quantity = '$quantity',description = '$description',status = '$status',updatedDate = '$updatedDate' WHERE productId = '$productId'";
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
        $query = "DELETE FROM product WHERE productId =$id";
        $result=$this->getConnect()->query($query);
        
        if(!$result){
            return false;
        }
        return true;
    }

}

// $action=$_GET['action'];
$product=new Product();
if(!isset($_GET['action'])){
    // $product->index();
}else{
    $action=$_GET['action'];
    if($action=='update'){
        if($product->$action()){
            $action='fetchAll';
        }
    }
    if(isset($_GET['id'])){
        if($action=='delete'){
            if($product->delete($_GET['id'])){
                $action='fetchAll';
            }
        }
    }
    $product->$action(); 
}
// $product->$action();
?>