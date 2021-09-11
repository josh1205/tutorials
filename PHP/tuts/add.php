<?php 

    // if(isset($_GET['submit'])) {
    //     echo $_GET['email'];
    //     echo $_GET['title'];
    //     echo $_GET['ingredients'];

    // }
    $email = '';
    $title = '';
    $ingredients = '';

    $errors = ['email'=>'', 'title'=>'','ingredients'=>''];

    if(isset($_POST['submit'])) {
        // echo htmlspecialchars($_POST['email']);
        // echo htmlspecialchars($_POST['title']);
        // echo htmlspecialchars($_POST['ingredients']);


        //check email
        if(empty($_POST['email'])) {
            $errors['email'] = "Must be a valid email address";
        } else {
            $email = $_POST['email'];
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors['email'] = "Must be a valid email address";
            }
        }

        if(empty($_POST['title'])) {
            $errors['title'] = "Must be be letters only";
        } else {
            $title = $_POST['title'];
            if(!preg_match('/^[a-zA-Z\s]+$/', $title)) {
                $errors['title'] = "Must be be letters only";
            }
        }

        if(empty($_POST['ingredients'])) {
            $errors['ingredients'] = "Ingredients must be be seperated by commas";
        } else {
            $ingredients = $_POST['ingredients'];
            if(!preg_match('/^([a-zA-Z\s]+)(,\s*[a-zA-Z\s]*)*$/', $ingredients)) {
                $errors['ingredients'] = "Ingredients must be be seperated by commas";
            }
        }

        if(array_filter($errors)) {
            //echo 'There are errors in the form';
        }
        else {
            //echo 'There are no errors';
            header('Location: index.php');
        }

    } //end of post check

?>

<!DOCTYPE html>

<html>

    <?php include('templates/header.php'); ?>

    <section class="container grey-text">
        <h4 class="center">Add a Pizza</h4>
        <form class="white" action="add.php" method ="POST">
            <label>Your email:</label>
            <input type="text" name="email" value="<?php echo htmlspecialchars($email)?>">
            <div class="red-text"><?php echo $errors['email'];?></div>
            <label>Pizza title:</label>
            <input type="text" name="title" value="<?php echo htmlspecialchars($title)?>">
            <div class="red-text"><?php echo $errors['title'];?></div>
            <label>Ingredients (comma seperated):</label>
            <input type="text" name="ingredients" value="<?php echo htmlspecialchars($ingredients)?>">
            <div class="red-text"><?php echo $errors['ingredients'];?></div>
            <div class="center">
                <input type="submit" name="submit" value="submit" class="btn brand z-depth-0">
            </div>
        </form>
    </section>

    <?php include('templates/footer.php'); ?>
        
    </body>
</html>