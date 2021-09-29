<title>
    <?php if (is_front_page()) {
        echo bloginfo('name');
    } else {
        echo the_title();
        echo ' - ';
        echo bloginfo('name');
    } ?>
</title>