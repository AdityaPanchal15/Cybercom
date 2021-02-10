<?php
    include 'controller/controller.php';
    $controlObj=new Controller();

    if(isset($_GET['cat_id']) && !empty($_GET['cat_id'])){
        $id=$_GET['cat_id'];
        $category=$controlObj->getCategoryById($id);
    }

    if(isset($_POST['update'])){
        $controlObj->updateCatogory($_POST);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Category</title>
</head>
<body>
    <h1>Update Category</h1>
    <form action="updateCategory.php" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" value="<?php echo $category[0]['id'] ?>">
        <input type="hidden" name="createdAt" value="<?php echo $category[0]['created_at'] ?>">
        <input type="text" name="category_id"  value="<?php echo $category[0]['category_id'] ?>"><br>
        <select name="name" value="<?php echo $category[0]['cat_name'] ?>">
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="lifestyle">Lifestyle</option>
        </select><br>
        
        <input type="text" name="title" value="<?php echo $category[0]['title'] ?>" required><br>
        <input type="text" name="meta_title" value="<?php echo $category[0]['meta_title'] ?>"required><br>
        <input type="file" name="file" ><span><?php echo $category[0]['url'] ?></span><br>
        <textarea name="content" cols="30" rows="6" required><?php echo $category[0]['content'] ?></textarea><br>
        <input type="submit" name="update" value="Update Category">
    </form>
</body>
</html>