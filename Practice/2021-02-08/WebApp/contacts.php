<?php
  
  // // Include database file
  include 'controller/controller.php';

  $contactsObj = new Controller();

  // Delete record from table
  if(isset($_GET['deleteId']) && !empty($_GET['deleteId'])) {
      $deleteId = $_GET['deleteId'];
      $contactsObj->deleteRecord($deleteId);
  }
     
?> 
<!DOCTYPE html>
<html lang="en">
<head>
  <title>WebApp</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
</head>
<body id="updateData">

<?php include 'template/header.php' ?><br>
<div class="container">
  <?php
    if (isset($_GET['msg1']) == "insert") {
      echo "<div class='alert alert-success alert-dismissible'>
              <button type='button' class='close' data-dismiss='alert'>&times;</button>
              Your Registration added successfully
            </div>";
      } 
    if (isset($_GET['msg2']) == "update") {
      echo "<div class='alert alert-info alert-dismissible'>
              <button type='button' class='close' data-dismiss='alert'>&times;</button>
              Your Registration updated successfully
            </div>";
    }
    if (isset($_GET['msg3']) == "delete") {
      echo "<div class='alert alert-danger alert-dismissible'>
              <button type='button' class='close' data-dismiss='alert'>&times;</button>
              Record deleted successfully
            </div>";
    }
  ?>
  <h2>View Records
    <a href="create.php" class="btn btn-primary" style="float:right;">Add New Record</a>
  </h2>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Title</th>
        <th>Created</th>
      </tr>
    </thead>
    <tbody >
        <?php 
          $contacts = $contactsObj->displayData(); 
          if($contacts){
            foreach ($contacts as $contact) {
        ?>
        
        <tr>
          <td><?php echo $contact['id'] ?></td>
          <td><?php echo $contact['name'] ?></td>
          <td><?php echo $contact['email'] ?></td>
          <td><?php echo $contact['phone'] ?></td>
          <td><?php echo $contact['title'] ?></td>
          <td><?php echo $contact['created'] ?></td>
          <td>
            <a href="update.php?userId=<?php echo $contact['id'] ?>" style="color:green">
              <i class="fa fa-pencil" aria-hidden="true"></i></a>&nbsp
            <a onclick="showHint(<?php echo $contact['id'] ?>)" style="color:red" >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
        
      <?php }} ?>
    </tbody>
  </table>
</div>
<script src="js/ajax.js"></script>

</body>
</html>
