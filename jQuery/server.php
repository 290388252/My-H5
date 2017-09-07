<?php
if (isset($_GET['name'])){
    echo 'hello:'.$_GET['name'];
}else{
    echo 'Args Error';
}

//if (isset($_POST['name'])){
//    echo 'hi:'.$_POST['name'];
//}else{
//    echo 'Args Error';
//}
