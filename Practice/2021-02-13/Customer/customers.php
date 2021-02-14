<?php
 
   require_once 'controller/controller.php';
   $customerObj = new Customer();
     
?> 
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Customer</title>
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
        <th>Customer Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Mobile</th>
        <th>createdDate</th>
        <th>updatedDate</th>  
      </tr>
    </thead>
    <tbody >
         <?php
            $data = $customerObj->fetchAll();     
            foreach ($data as $customer) {
        ?>
        
        <tr>
          <td><?php echo $customer['customerId'] ?></td>
          <td><?php echo $customer['firstName'] ?></td>
          <td><?php echo $customer['lastName'] ?></td>
          <td><?php echo $customer['email'] ?></td>
          <td><?php echo $customer['status'] ?></td>
          <td><?php echo $customer['mobile'] ?></td>
          <td><?php echo $customer['createdDate'] ?></td>
          <td><?php echo $customer['updatedDate'] ?></td>    
          <td>
            <a href="../update.php?customerId=<?php echo $customer['customerId'] ?>" style="color:green">
              <i class="fa fa-pencil" aria-hidden="true"></i></a>&nbsp
            <a href="controller.php?action=delete&id=<?php echo $customer['customerId']?>" style="color:red" >
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
