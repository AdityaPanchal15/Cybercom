<?php
    require_once 'controller/controller.php';
    $productObj=new Product();
    if(isset($_GET['productId']) && !empty($_GET['productId'])){
        $id=$_GET['productId'];
        $product=$productObj->fetchRow($id);
    }
    // if(isset($_GET['update'])){
    //     $productObj->update($_POST);
    // }
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
      <label for="sku">SKU:</label>
      <input type="text" class="form-control" name="sku" placeholder="Enter sku" required="" value="<?php echo $product['sku'] ?>" >
    </div>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" name="name" placeholder="Enter name" required="" value="<?php echo $product['name'] ?>">
    </div>
    <div class="form-group">
      <label for="price">Price:</label>
      <input type="text" class="form-control" name="price" placeholder="Enter price" required="" value="<?php echo $product['price'] ?>">
    </div>
    <div class="form-group">
      <label for="discount">Discount:</label>
      <input type="text" class="form-control" name="discount" placeholder="Enter discount" required="" value="<?php echo $product['discount'] ?>">
    </div>
    <div class="form-group">
      <label for="quantity">Quantity:</label>
      <input type="text" class="form-control" name="quantity" placeholder="Enter quantity" required="" value="<?php echo $product['quantity'] ?>">
    </div>
    <div class="form-group">
      <label for="discription">Discription:</label>
      <input type="text" class="form-control" name="description" placeholder="Enter description" required="" value="<?php echo $product['description'] ?>">
    </div>
    <div class="form-group">
      <label for="status">Status:</label>
      <select name="status" class="form-control" value="">
          <option value="enabled" <?php echo $product['status']=='enabled'?'selected':''; ?>>Enabled</option>
          <option value="disabled" <?php echo $product['status']=='disabled'?'selected':''; ?>>Disabled</option>
      </select>
    </div>
    <input type="hidden" name="productId" value="<?php echo $product['productId'] ?>">
    <input type="submit" name="update" class="btn btn-primary" style="float:right;" value="Update">
  </form>
</div>
</body>
</html>