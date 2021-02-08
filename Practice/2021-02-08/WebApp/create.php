<?php

  // Include database file
  include 'controller/controller.php';

  $contactObj = new Controller();
  date_default_timezone_set("Asia/Calcutta"); 
  $date= Date("d-m-Y h:i:sa");

  // Insert Record in customer table
  if(isset($_POST['submit'])) {
    $contactObj->insertData($_POST);
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
  <form action="create.php" method="POST">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" name="name" placeholder="Enter name" required="">
    </div>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" name="email" placeholder="Enter email" required="">
    </div>
    <div class="form-group">
      <label for="phone">Phone:</label>
      <input type="number" class="form-control" name="phone" placeholder="Enter phone" required="">
    </div>
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control" name="title" placeholder="Enter title" required="">
    </div>
    <div class="form-group">
      <label for="created">Created:</label>
      <input type="text" class="form-control" name="created" value="<?php echo $date?>" disabled>
    </div>
    <input type="submit" name="submit" class="btn btn-primary" style="float:right;" value="Submit">
  </form>
</div>

</body>
</html>
