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
      <label for="name">Name:</label>
      <input type="text" class="form-control" name="name" placeholder="Enter name" required="">
    </div>
      <label for="description">Description:</label>
      <input type="text" class="form-control" name="description" placeholder="Enter description" required="">
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