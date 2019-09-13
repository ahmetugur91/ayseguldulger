<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php bloginfo(); ?></title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/bootstrap.min.css">
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/jquery-3.4.1.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/bootstrap.js"></script>
    <?php wp_head(); ?>
</head>
<body>

<div class="container">
    <header>
        <div class="container-fluid">
            <div class="row" style="padding-top:20px">
                <div class="col-md-3 col-sm-12 text-center">
                    <a href="/">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" class="embed-responsive"/>
                    </a>
                </div>
                <div class="col-md-9 float-right">
                    <nav class="navbar navbar-expand-lg navbar-dark float-right mt-2">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon">
                                <i class="fa fa-navicon"></i>
                            </span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Anasayfa <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/?page_id=18">Hakkımda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/?page_id=55">Hizmetlerimiz</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/?page_id=19">İletişim</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</div>

<div class="container" style="margin-top:20px;margin-bottom:30px">
    <div class="row">
        <div class="col-md-3">
            <div class="imgprofile box">
                <?php
                if ( is_active_sidebar( 'sidebar-1' ) ) {
                    ?>
                    <div class="widget-column footer-widget-1">
                        <?php dynamic_sidebar( 'sidebar-1' ); ?>
                    </div>
                    <?php
                }
                ?>
            </div>
        </div>
        <div class="col-md-9">

            <div class="content box">
                <div class="container-fluid" style="margin-bottom:30px">