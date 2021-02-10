<?php
    class Controller
	{
		private $servername = "localhost";
		private $username   = "root";
		private $password   = "";
		private $database   = "test";
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
        
        public function login(){
            $email=$this->con->real_escape_string($_POST['username']);
            $password=$this->con->real_escape_string($_POST['password']);
            $query="SELECT id from user WHERE email='$email' AND password='$password'";
            $result=$this->con->query($query);
            if($result->num_rows == 1){
                header("Location:blogPost.php");
            }else{
                echo 'Invalid Username/password';
            }
        }

        public function isExistUser($postdata){
            $email= $this->con->real_escape_string($_POST['email']);
            $query="SELECT email from user where email='$email'";
            $result=$this->con->query($query);
            if($result->num_rows > 0){
                return true;
            }else{
                return false;
            }
        }

        public function registerUser($postdata){
            $prefix=$this->con->real_escape_string($_POST['prefix']);
            $firstName=$this->con->real_escape_string($_POST['firstName']);
            $lastName=$this->con->real_escape_string($_POST['lastName']);
            $email=$this->con->real_escape_string($_POST['email']);
            $number=$this->con->real_escape_string($_POST['number']);
            $password=$this->con->real_escape_string(md5($_POST['password']));
            $information=$this->con->real_escape_string($_POST['information']);

            date_default_timezone_set("Asia/Calcutta"); 
            $createdAt= Date("d-m-Y h:i:sa");
            
            if($postdata){
                $query="INSERT INTO user VALUES ('','$prefix','$firstName','$lastName','$number','$email','$password','','$information','$createdAt','')";
                $sql = $this->con->query($query);
                if($sql==true){
                    header('Location:blogPost.php');
                }
            }         
        }

        public function addCategory($postdata,$files){
            if(isset($_POST['name']) && isset($_POST['meta_title']) && isset($_POST['title']) && isset($_POST['content'])){
                // $category_id=$this->con->real_escape_string($_POST['category_id']);
                $name=$this->con->real_escape_string($_POST['name']);
                $title=$this->con->real_escape_string($_POST['title']);
                $meta_title=$this->con->real_escape_string($_POST['meta_title']);
                $content=$this->con->real_escape_string($_POST['content']);
                date_default_timezone_set("Asia/Calcutta"); 
                $createdAt= Date("d-m-Y h:i:sa");
                
                //file process
                $url  = $_FILES['file']['name'];  
                $temp_name  = $_FILES['file']['tmp_name'];  
            
                if(isset($url) and !empty($url)){
                    $location = 'uploads/';      
                    if(move_uploaded_file($temp_name, $location.$url)){
                        echo 'File uploaded successfully';
                    }
                }

                if(!empty($name) && !empty($title) && !empty($meta_title) && !empty($content) && !empty($url)){
                    $query="INSERT INTO category VALUES ('','$cat_id','$name','$title','$meta_title','$url','$content','$createdAt','')";
                    $sql = $this->con->query($query);
                    if($sql==true){
                        header('Location:blogPost.php');
                    }
                }
            }          
        }

        public function categoryList(){
            $query = "SELECT * FROM category";  
			 $result = $this->con->query($query);  
			 if($result->num_rows > 0){
                $data = array();
				while ($row = $result->fetch_assoc()) {  
					$data[]=$row; 
				}
				return $data;  
            }else{
                echo "No found records";
            } 
        }

        public function getCategoryById($id){
            $query="SELECT * from category WHERE id='$id'";
            $result=$this->con->query($query);
            if($result->num_rows == 1){
                $data = array();
				while ($row = $result->fetch_assoc()) {  
                    $data[]=$row; 
                }
                
				return $data;  
            }
        }
        
        public function updateCatogory($postdata){
            $id=$this->con->real_escape_string($_POST['id']);
            // echo $id;
            $category_id=$this->con->real_escape_string($_POST['category_id']);
            $name=$this->con->real_escape_string($_POST['name']);
            $title=$this->con->real_escape_string($_POST['title']);
            $meta_title=$this->con->real_escape_string($_POST['meta_title']);
            $content=$this->con->real_escape_string($_POST['content']);
            $createdAt=$this->con->real_escape_string($_POST['createdAt']);
            
            $url  = $_FILES['file']['name'];  
                $temp_name  = $_FILES['file']['tmp_name'];  
            
                if(isset($url) and !empty($url)){
                    $location = 'uploads/';      
                    if(move_uploaded_file($temp_name, $location.$url)){
                        echo 'File uploaded successfully';
                    }
                }

            date_default_timezone_set("Asia/Calcutta"); 
            $updatedAt= Date("d-m-Y h:i:sa");

            if($postdata){
                $query="UPDATE category SET category_id='$category_id',cat_name='$name',title='$title',meta_title='$meta_title',url='$url',content='$content',created_at='$createdAt',updated_at='$updatedAt' WHERE id='$id'";
                $result=$this->con->query($query);
                // echo $this->con->error;
                if($result==true){
                    header('Location:blogPost.php');
                }else{
                    echo 'error';
                }
            }
        }

        public function deleteCategory($id){
            $query = "DELETE FROM category WHERE id = '$id'";
		    $sql = $this->con->query($query);
            if ($sql==true) {
                header("Location:manageCategory.php");
            }else{
                echo "Record does not delete try again";
            }
            
        }

        public function addBlogPost($postdata,$files){
            if(isset($_POST['category_id']) && isset($_POST['title']) && isset($_POST['content']) && isset($_POST['url']) && isset($_POST['publishedAt']) && isset($_POST['name'])){
                $category_id=$this->con->real_escape_string($_POST['category_id']);
                $name=$this->con->real_escape_string($_POST['name']);
                $title=$this->con->real_escape_string($_POST['title']);
                $url=$this->con->real_escape_string($_POST['url']);
                $content=$this->con->real_escape_string($_POST['content']);
                $publishedAt=$this->con->real_escape_string($_POST['publishedAt']);
                
                date_default_timezone_set("Asia/Calcutta"); 
                $createdAt= Date("d-m-Y h:i:sa");
                
                //file process
                $image  = $_FILES['file']['name'];  
                $temp_name  = $_FILES['file']['tmp_name'];  
            
                if(isset($image) and !empty($image)){
                    $location = 'uploads/';      
                    if(move_uploaded_file($temp_name, $location.$image)){
                        echo 'File uploaded successfully';
                    }
                }

                if(!empty($category_id) && !empty($name) && !empty($title) && !empty($url) && !empty($content) && !empty($image) && !empty($publishedAt)){
                    $query="INSERT INTO blog_post VALUES ('','','$url','$content ','$image','$publishedAt','$createdAt','')";
                    $sql = $this->con->query($query);
                    if($sql==true){
                        header('Location:blogPost.php');
                    }
                }
            }        
        }

        public function blogPostList(){
            $query = "SELECT A.id id,B.cat_name cat_name,B.title title,published_at FROM blog_post A,category B WHERE A.user_id=B.category_id ";  
			 $result = $this->con->query($query);  
			 if($result->num_rows > 0){
                $data = array();
				while ($row = $result->fetch_assoc()) {  
					$data[]=$row; 
				}
				return $data;  
            }else{
                echo "No found records";
            } 
        }

        public function updateBlogPost($postdata){
            $id=$this->con->real_escape_string($_POST['id']);
            $content=$this->con->real_escape_string($_POST['content']);
            $url=$this->con->real_escape_string($_POST['url']);
            $publishedAt=$this->con->real_escape_string($_POST['publishedAt']);
            $name=$this->con->real_escape_string($_POST['name']);
            // $createdAt=$this->con->real_escape_string($_POST['name']);

            $image  = $_FILES['file']['name'];  
                $temp_name  = $_FILES['file']['tmp_name'];  
            
                if(isset($image) and !empty($image)){
                    $location = 'uploads/';      
                    if(move_uploaded_file($temp_name, $location.$image)){
                        echo 'File uploaded successfully';
                    }
                }

            date_default_timezone_set("Asia/Calcutta"); 
            $updatedAt= Date("d-m-Y h:i:sa");

            if($postdata){
                $query="UPDATE blog_post SET url='$url',content='$content',image='$image',updated_at='$updatedAt' WHERE id='$id'";
                $result=$this->con->query($query);
                echo $this->con->error;
                if($result==true){
                    header('Location:blogPost.php');
                }else{
                    echo 'error';
                }
            }
        }

        public function getPostById($id){
            $query="SELECT * from blog_post WHERE id='$id'";
            $result=$this->con->query($query);
            if($result->num_rows == 1){
                $data = array();
				while ($row = $result->fetch_assoc()) {  
                    $data[]=$row; 
                }
                
				return $data;  
            }
        }

        public function deletePost($id){
            $query = "DELETE FROM blog_post WHERE id = '$id'";
		    $sql = $this->con->query($query);
            if ($sql==true) {
                header("Location:blogPost.php");
            }else{
                echo "Record does not delete try again";
            }
            
        }
    }
?>