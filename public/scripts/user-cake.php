<?php

$cakeID = new MongoId($request->i);

$mongo = new Mongo();
$db = $mongo->cakes;

$cake = $db->dummy_cakes->findOne(array('_id' => $cakeID));

if ($cake !== NULL) {
?>

<div class="popup-overlay"></div>
<div class="popup">
    <div class="popup-content">

        <div class="cake-dialog">
            <h2>Мой торт!</h2>

            Автор: <a href="<?php echo $cake['user']['identity'] ?>">
                <?php echo $cake['user']['first_name'] . ' ' . $cake['user']['last_name'] ?>
            </a>

            <img alt="Мой тортик" src="<?php echo $cake['cake'] ?>" />

            <a href="http://<?php echo $_SERVER['HTTP_HOST'] ?>">
               Сделать свой!
            </a>
        </div>

    </div>
    <div class="align-helper"></div>
</div>

<?php } ?>