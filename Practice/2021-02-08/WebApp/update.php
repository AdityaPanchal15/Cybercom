<?php
  
  // Include database file
  include 'controller/controller.php';

  $contactsObj = new Controller();

  date_default_timezone_set("Asia/Calcutta"); 
  $date= Date("d-m-Y h:i:sa");

  // Edit customer record
  if(isset($_GET['userId']) && !empty($_GET['userId'])) {
    $userId = $_GET['userId'];
    $contact = $contactsObj->displyaRecordById($userId);
  }

  // Update Record in customer table
  if(isset($_POST['update'])) {
    $contactsObj->updateRecord($_POST);
  }  
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>WebApp</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
</head>
<body>

<?php include 'template/header.php' ?><br><br>
<div class="container">
  <form action="update.php" method="POST">
    <div class="form-group">
      <label for="id">Id:</label>
      <input type="number" class="form-control" name="id" value="<?php echo $contact['id']; ?>" disabled>
    </div>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" name="name" value="<?php echo $contact['name']; ?>" required="">
    </div>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" name="email" value="<?php echo $contact['email']; ?>" required="">
    </div>
    <div class="form-group">
      <label for="phone">Phone:</label>
      <input type="number" class="form-control" name="phone" value="<?php echo $contact['phone']; ?>" required="">
    </div>
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control" name="title" value="<?php echo $contact['title']; ?>" required="">
    </div>
    <div class="form-group">
      <label for="created">Created:</label>
      <input type="text" class="form-control" name="created" value="<?php echo $date ?>" disabled>
    </div>
    <div class="form-group">
      <input type="hidden" name="id" value="<?php echo $contact['id']; ?>">
      <input type="submit" name="update" class="btn btn-primary" style="float:right;" value="Update">
    </div>
  </form>
</div>


</body>
</html>
