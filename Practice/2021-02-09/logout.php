<?php
    require 'controller.php';
    session_destroy();
    header('Location:login.php');
?>