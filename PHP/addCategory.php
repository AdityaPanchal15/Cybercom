<?php
    include 'controller/controller.php';
    $controlObj=new Controller();

    if(isset($_POST['submit'])){
        $controlObj->addCategory($_POST,$_FILES);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Category</title>
</head>
<body>
    <form action="addCategory.php" method="post" enctype="multipart/form-data">
        <table>
            <tr>
                <td>Category_Id</td>
                <td><input type="text" name="category_id" placeholder="Enter Post Id" required></td>
            </tr>
            <tr>
                <td>Title</td>
                <td><input type="text" name="title" placeholder="Enter title" required></td>
            </tr>
            <tr>
                <td>Content</td>
                <td><textarea name="content" cols="30" rows="6" placeholder="Enter content" required></textarea></td>
            </tr>
            <tr>
                <td>Meta Title</td>
                <td><input type="text" name="meta_title" placeholder="Enter meta title" required></td>
            </tr>
            <tr>
                <td>Parent Category</td>
                <td>
                <select name="name">
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                    <option value="lifestyle">Lifestyle</option>
                </select><br>
                </td>
            </tr>
            <tr>
                <td>image</td>
                <td><input type="file" name="file" accept=".jpg,.jpeg,.gif,.png"></td>
            </tr>
            <tr>
                <td><input type="submit" name="submit" value="Add Category"></td>
            </tr>
        </table>
        
        
        
        
    </form>
</body>
</html>