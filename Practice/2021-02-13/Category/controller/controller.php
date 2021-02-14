<?php

class Category{
    
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
        
        if( isset($_POST['name']) && isset($_POST['description']) && isset($_POST['status'])){
            $name=$this->getConnect()->real_escape_string($_POST['name']);
            $description=$this->getConnect()->real_escape_string($_POST['description']);
            $status=$this->getConnect()->real_escape_string($_POST['status']);

            $query="INSERT INTO category VALUES('','$name','$status','$description')";
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
        include_once '../categories.php';
        $query = "SELECT * FROM category";
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
        $query="SELECT * FROM category WHERE categoryId='$id' ";
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
            $categoryId=$this->getConnect()->real_escape_string($_POST['categoryId']);
            $name=$this->getConnect()->real_escape_string($_POST['name']);
            $description=$this->getConnect()->real_escape_string($_POST['description']);
            $status=$this->getConnect()->real_escape_string($_POST['status']); 

            $query="UPDATE category SET name = '$name',description = '$description',status = '$status' WHERE categoryId = '$categoryId'";
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
        $query = "DELETE FROM category WHERE categoryId =$id";
        $result=$this->getConnect()->query($query);
        
        if(!$result){
            return false;
        }
        return true;
    }

}

// $action=$_GET['action'];
$category=new category();
if(!isset($_GET['action'])){
    // $category->index();
}else{
    $action=$_GET['action'];
    if($action=='update'){
        if($category->$action()){
            $action='fetchAll';
        }
    }
    if(isset($_GET['id'])){
        if($action=='delete'){
            if($category->delete($_GET['id'])){
                $action='fetchAll';
            }
        }
    }
    $category->$action(); 
}
// $category->$action();
?>