<?php
 
   require_once 'controller/controller.php';
   $contactsObj = new Category();
     
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
 
  <h2>View Records
    <a href="controller.php?action=insert" class="btn btn-primary" style="float:right;">Add New Record</a>
  </h2>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Category Id</th>
        <th>Name</th>
        <th>Discription</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody >
         <?php
            $data = $contactsObj->fetchAll();     
            foreach ($data as $category) {
        ?>
        
        <tr>
          <td><?php echo $category['categoryId'] ?></td>
          <td><?php echo $category['name'] ?></td>
          <td><?php echo $category['description'] ?></td>
          <td><?php echo $category['status'] ?></td>
          <td>
            <a href="../update.php?categoryId=<?php echo $category['categoryId'] ?>" style="color:green">
              <i class="fa fa-pencil" aria-hidden="true"></i></a>&nbsp
            <a href="controller.php?action=delete&id=<?php echo $category['categoryId']?>" style="color:red" >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
        
      <?php } ?>  
    </tbody>
  </table>
</div>
<!-- <script src="js/ajax.js"></script> -->

</body>
</html>
