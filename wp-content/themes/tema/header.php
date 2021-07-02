<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IT=edge,chrome=IE8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="msapplication-navbutton-color" content="#fff" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#fff" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="pt_BR" />
	<meta name="theme-color" content="#000" />
	<meta name="msapplication-navbutton-color" content="#000" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#000" />
	<title><?php
			if (is_front_page()) {
				echo bloginfo('name');
			} else {
				echo the_title();
				echo ' - ';
				echo bloginfo('name');
			}

			?></title>

	<meta itemprop="name" content="<?php
									if (is_front_page()) {
										echo bloginfo('name');
									} else {
										echo the_title();
										echo ' - ';
										echo bloginfo('name');
									}

									?>">
	<meta property="og:title" content="<?php
										if (is_front_page()) {
											echo bloginfo('name');
										} else {
											echo the_title();
											echo ' - ';
											echo bloginfo('name');
										}

										?>" />
	<meta property="og:site_name" content="<?php
											if (is_front_page()) {
												echo bloginfo('name');
											} else {
												echo the_title();
												echo ' - ';
												echo bloginfo('name');
											}

											?>" />
	<meta name="twitter:title" content="<?php
										if (is_front_page()) {
											echo bloginfo('name');
										} else {
											echo the_title();
											echo ' - ';
											echo bloginfo('name');
										}

										?>" />
	<script src="https://kit.fontawesome.com/1108dec909.js" crossorigin="anonymous"></script>
	<?php wp_head(); ?>
</head>

<body class="dg-body">
	<header class="dg-header">
		<div class="dg-grid">
		<?php get_template_part('template/logo'); ?>
		<?php get_template_part('template/busca'); ?>
		</div>
	</header>