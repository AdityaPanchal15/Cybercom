<?php
    require_once 'controller/controller.php';
    $categoryObj=new Category();
    if(isset($_GET['categoryId']) && !empty($_GET['categoryId'])){
        $id=$_GET['categoryId'];
        $category=$categoryObj->fetchRow($id);
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
      <label for="name">Name:</label>
      <input type="text" class="form-control" name="name" placeholder="Enter name" required="" value="<?php echo $category['name'] ?>">
    </div>
    <div class="form-group">
      <label for="discription">Description:</label>
      <input type="text" class="form-control" name="description" placeholder="Enter description" required="" value="<?php echo $category['description'] ?>">
    </div>
    <div class="form-group">
      <label for="status">Status:</label>
      <select name="status" class="form-control" value="">
          <option value="enabled" <?php echo $category['status']=='enabled'?'selected':''; ?>>Enabled</option>
          <option value="disabled" <?php echo $category['status']=='disabled'?'selected':''; ?>>Disabled</option>
      </select>
    </div>
    <input type="hidden" name="categoryId" value="<?php echo $category['categoryId'] ?>">
    <input type="submit" name="update" class="btn btn-primary" style="float:right;" value="Update">
  </form>
</div>
</body>
</html>