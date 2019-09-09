<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?>



<div class="row">
    <div class="col-md-12">
        <div class="title">
            <?php the_title( '<h4 class="entry-title">', '</h1>' ); ?>
        </div>
        <div class="description">
            <?php
            the_content();

            ?>
        </div>
    </div>
</div>