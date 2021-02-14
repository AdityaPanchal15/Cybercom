<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="css/style.css"> -->
    <title>Insert</title>
</head>
<body>
<?php include 'template/header.php' ?><br><br>
<div class="container">
  <form action="controller.php?action=insert" method="POST">
    <div class="form-group">
      <label for="sku">SKU:</label>
      <input type="text" class="form-control" name="sku" placeholder="Enter sku" required="" >
    </div>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" name="name" placeholder="Enter name" required="">
    </div>
    <div class="form-group">
      <label for="price">Price:</label>
      <input type="text" class="form-control" name="price" placeholder="Enter price" required="">
    </div>
    <div class="form-group">
      <label for="discount">Discount:</label>
      <input type="text" class="form-control" name="discount" placeholder="Enter discount" required="">
    </div>
    <div class="form-group">
      <label for="quantity">Quantity:</label>
      <input type="text" class="form-control" name="quantity" placeholder="Enter quantity" required="">
    </div>
    <div class="form-group">
      <label for="discription">Discription:</label>
      <input type="text" class="form-control" name="discription" placeholder="Enter name" required="">
    </div>
    <div class="form-group">
      <label for="status">Status:</label>
      <select name="status" class="form-control" >
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
      </select>
    </div>
    <input type="submit" name="submit" class="btn btn-primary" style="float:right;" value="Submit">
  </form>
</div>
</body>
</html>