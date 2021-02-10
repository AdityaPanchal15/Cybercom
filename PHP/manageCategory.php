<?php
    include 'controller/controller.php';
    $controlObj=new Controller();

    if(isset($_GET['deleteId']) && !empty($_GET['deleteId'])){
        $controlObj->deleteCategory($_GET['deleteId']);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Manage Category</title>
</head>
<body id="updateData">
    <h1>Blog Category</h1>
    <a href="addCategory.php">Add Category</a>
    <a href="manageCategory.php">Manage Category</a>
    <br><br>
    <table>
        <tr>
            <th>Category Id</th>
            <th>Category Image</th>
            <th>Category Name</th>
            <th>Created Date</th>
            <th>Action</th>
        </tr>
        <?php 
          $category = $controlObj->categoryList();
          if($category){
            foreach ($category as $product) {
        ?>
        
        <tr>
          <td><?php echo $product['category_id'] ?></td>
          <td><img src="uploads/<?php echo $product['url'] ?>" style="width:40px;height:40px;"></td>
          <td><?php echo $product['cat_name'] ?></td>
          <td><?php echo $product['created_at'] ?></td>
          
          <td>
            <a href="updateCategory.php?cat_id=<?php echo $product['id'] ?>" >Edit</a>&nbsp
            <a onclick="showHint(<?php echo $product['id'] ?>)" style="color:red" >Delete</a>
          </td>
        </tr>
        <?php
            }}
        ?>
    </table>
    <script src="js/ajax.js"></script>
</body>
</html>