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
      <label for="firstName">First Name:</label>
      <input type="text" class="form-control" name="firstName" placeholder="Enter first name" required="">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input type="text" class="form-control" name="lastName" placeholder="Enter last name" required="">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" name="email" placeholder="Enter email" required="">
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" class="form-control" name="password" placeholder="Enter password" required="">
    </div>
    <div class="form-group">
      <label for="status">Status:</label>
      <select name="status" class="form-control" >
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
      </select>
    </div>
    <div class="form-group">
      <label for="mobile">Mobile:</label>
      <input type="number" class="form-control" name="mobile" placeholder="Enter mobile number" required="">
    </div>
    <input type="submit" name="submit" class="btn btn-primary" style="float:right;" value="Submit">
  </form>
</div>
</body>
</html>