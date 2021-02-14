<?php
    require_once 'controller/controller.php';
    $customerObj=new Customer();
    if(isset($_GET['customerId']) && !empty($_GET['customerId'])){
        $id=$_GET['customerId'];
        $customer=$customerObj->fetchRow($id);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="css/style.css"> -->
    <title>Update</title>
</head>
<body>
<?php include 'template/header.php' ?><br><br>
<div class="container">
  <form action="controller/controller.php?action=update" method="POST">
  <div class="form-group">
      <label for="firstName">First Name:</label>
      <input type="text" class="form-control" name="firstName" placeholder="Enter first name" required="" value="<?php echo $customer['firstName'] ?>">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input type="text" class="form-control" name="lastName" placeholder="Enter last name" required="" value="<?php echo $customer['lastName'] ?>">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" name="email" placeholder="Enter email" required="" value="<?php echo $customer['email'] ?>">
    </div>
    
    <div class="form-group">
      <label for="status">Status:</label>
      <select name="status" class="form-control" >
          <option value="enabled" <?php echo $customer['status']=='enabled'?'selected':''; ?>>Enabled</option>
          <option value="disabled" <?php echo $customer['status']=='disabled'?'selected':''; ?>>Disabled</option>
      </select>
    </div>
    <div class="form-group">
      <label for="mobile">Mobile:</label>
      <input type="number" class="form-control" name="mobile" placeholder="Enter mobile number" required="" value="<?php echo $customer['mobile'] ?>">
    </div>
    <input type="hidden" name="customerId" value="<?php echo $customer['customerId'] ?>">
    <input type="submit" name="update" class="btn btn-primary" style="float:right;" value="Update">
  </form>
</div>
</body>
</html>