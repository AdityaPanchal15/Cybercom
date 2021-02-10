<?php
    include 'controller/controller.php';
    $controlObj=new Controller();

    if(isset($_GET['id']) && !empty($_GET['id'])){
        $id=$_GET['id'];
        $category=$controlObj->getPostById($id);
    }

    if(isset($_POST['update'])){
        $controlObj->updateBlogPost($_POST);
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
   
    <form action="updateBlogPost.php" method="post" enctype="multipart/form-data">
        <table>
            <input type="hidden" name="id" value="<?php echo $category[0]['id'] ?>">
            <!-- <input type="hidden" name="createdAt" value="<?//php echo $category[0]['created_at'] ?>"> -->
            <!-- <input type="hidden" name="createdAt" value="<?//php echo $category[0]['user_id'] ?>"> -->
            
            <tr>
                <td>Content</td>
                <td><textarea name="content" cols="30" rows="6" required><?php echo $category[0]['content'] ?></textarea></td>
            </tr>
            <tr>
                <td>URL</td>
                <td><input type="text" name="url" value="<?php echo $category[0]['url'] ?>" required></td>
            </tr>
            <tr>
                <td>Published At</td>
                <td><input type="date" name="publishedAt" value="<?php echo $category[0]['published_at'] ?>" required></td>
            </tr>
            <tr>
                <td>Category</td>
                <td>
                <select name="name" value="<?php echo $category[0]['id'] ?>">
                    <option value=""></option>
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="music">Music</option>
                </select>
                </td>
            </tr>
            <tr>
                <td>image</td>
                <td><input type="file" name="file"  accept=".jpg,.jpeg,.gif,.png"><span ><?php echo $category[0]['image'] ?>"</span></td>
            </tr>
            <tr>
                <td><input type="submit" name="update" value="Submit"></td>
            </tr>
        </table>  
    </form>
</body>
</html>