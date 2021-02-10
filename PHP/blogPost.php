<?php
    include 'controller/controller.php';
    $controlObj=new Controller();

    if(isset($_GET['deleteId']) && !empty($_GET['deleteId'])){
        $controlObj->deletePost($_GET['deleteId']);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Blog Post</title>
</head>
<body id="updateData">
    <h1>Blog Posts</h1>
    <a href="addBlogPost.php">Add Blog Post</a>
    <a href="manageCategory.php">Manage Category</a>
    <br><br>
    <table class="table table-hover">
      <tr>
        <th>Post Id</th>
        <th>Category Name</th>
        <th>Title</th>
        <th>Published Date</th>
        <th>Actions</th>
      </tr>

        <?php 
          $category = $controlObj->blogPostList();
          if($category){
            foreach ($category as $product) {
        ?>
        
        <tr>
          <td><?php echo $product['id'] ?></td>
          <td><?php echo $product['cat_name'] ?></td>
          <td><?php echo $product['title'] ?></td>
          <td><?php echo $product['published_at'] ?></td>
          
          <td>
            <a href="updateBlogPost.php?id=<?php echo $product['id'] ?>" >Edit</a>&nbsp
            <a onclick="showHintPost(<?php echo $product['id'] ?>)" style="color:red" >Delete</a>
          </td>
        </tr>
        <?php
            }}
        ?>
    </table>
    <script src="js/ajax.js"></script>
</body>
</html>