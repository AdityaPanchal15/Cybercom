<?php
 
   require_once 'controller/controller.php';
   $contactsObj = new Product();
     
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
        <th>Product Id</th>
        <th>SKU</th>
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Quantity</th>
        <th>Discription</th>
        <th>Status</th>
        <th>Created Date</th>
        <th>Updated Date</th>
      </tr>
    </thead>
    <tbody >
         <?php
            $data = $contactsObj->fetchAll();     
            foreach ($data as $product) {
        ?>
        
        <tr>
          <td><?php echo $product['productId'] ?></td>
          <td><?php echo $product['sku'] ?></td>
          <td><?php echo $product['name'] ?></td>
          <td><?php echo $product['price'] ?></td>
          <td><?php echo $product['discount'] ?></td>
          <td><?php echo $product['quantity'] ?></td>
          <td><?php echo $product['description'] ?></td>
          <td><?php echo $product['status'] ?></td>
          <td><?php echo $product['createdDate'] ?></td>
          <td><?php echo $product['updatedDate'] ?></td>
          <td>
            <a href="../update.php?productId=<?php echo $product['productId'] ?>" style="color:green">
              <i class="fa fa-pencil" aria-hidden="true"></i></a>&nbsp
            <a href="controller.php?action=delete&id=<?php echo $product['productId']?>" style="color:red" >
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
