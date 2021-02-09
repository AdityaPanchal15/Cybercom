<?php
    session_start();

	class Controller
	{
		private $servername = "localhost";
		private $username   = "root";
		private $password   = "";
		private $database   = "mydb";
		public  $con;

		// Database Connection 
		public function __construct()
		{
		    $this->con = new mysqli($this->servername, $this->username,$this->password,$this->database);
		    if(mysqli_connect_error()) {
			 	trigger_error("Failed to connect to MySQL: " . mysqli_connect_error());
		    }else{
				return $this->con;
		    }
		}

		
		public function login()
		{
			$name = $this->con->real_escape_string($_POST['user']);
			$email = $this->con->real_escape_string(md5($_POST['pass']));

			$query="SELECT id from login where username='$name' AND password='$email'";
			$result = $this->con->query($query);
			if ($result->num_rows == 1) {
			   while($row=$result->fetch_assoc()){
                   $_SESSION['user_id']=$row['id'];
					header('Location:index.php');
               }
			}else{
			    echo "Registration failed try again!";
			}
        }
        
        function getField($field){
			$id=$_SESSION['user_id'];
			$query="SELECT $field from login where id='$id'";
			$result=$this->con->query($query);
			$row=$result->fetch_assoc();
			return $row[$field];
		}

		function loggedin(){
			// echo $_SESSION['user_id'];
			if(isset($_SESSION['user_id']) && !empty($_SESSION['user_id'])){
				return true;
			}else{
				return false;
			}
		}
	}
?>