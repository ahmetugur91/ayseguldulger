<?php
/**
 * WordPress için taban ayar dosyası.
 *
 * Bu dosya şu ayarları içerir: MySQL ayarları, tablo öneki,
 * gizli anahtaralr ve ABSPATH. Daha fazla bilgi için
 * {@link https://codex.wordpress.org/Editing_wp-config.php wp-config.php düzenleme}
 * yardım sayfasına göz atabilirsiniz. MySQL ayarlarınızı servis sağlayıcınızdan edinebilirsiniz.
 *
 * Bu dosya kurulum sırasında wp-config.php dosyasının oluşturulabilmesi için
 * kullanılır. İsterseniz bu dosyayı kopyalayıp, ismini "wp-config.php" olarak değiştirip,
 * değerleri girerek de kullanabilirsiniz.
 *
 * @package WordPress
 */

// ** MySQL ayarları - Bu bilgileri sunucunuzdan alabilirsiniz ** //
/** WordPress için kullanılacak veritabanının adı */
define( 'DB_NAME', 'aysegul' );

/** MySQL veritabanı kullanıcısı */
define( 'DB_USER', 'root' );

/** MySQL veritabanı parolası */
define( 'DB_PASSWORD', '' );

/** MySQL sunucusu */
define( 'DB_HOST', 'localhost' );

/** Yaratılacak tablolar için veritabanı karakter seti. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Veritabanı karşılaştırma tipi. Herhangi bir şüpheniz varsa bu değeri değiştirmeyin. */
define('DB_COLLATE', '');

/**#@+
 * Eşsiz doğrulama anahtarları.
 *
 * Her anahtar farklı bir karakter kümesi olmalı!
 * {@link http://api.wordpress.org/secret-key/1.1/salt WordPress.org secret-key service} servisini kullanarak yaratabilirsiniz.
 * Çerezleri geçersiz kılmak için istediğiniz zaman bu değerleri değiştirebilirsiniz. Bu tüm kullanıcıların tekrar giriş yapmasını gerektirecektir.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Y(#TYFf+9ic-L0MnG``CHt]#%CDva+i*yj#gFM[%MxSSw3U(**vUrt[?5DQLo&Fb' );
define( 'SECURE_AUTH_KEY',  'K.?kNDd)PA>TYyE%$@2iEt|rct(x]/j-C:3/$Yq0#brVjmX9sQ!w5N2A6&(Jv>3@' );
define( 'LOGGED_IN_KEY',    'c,j0O6J#}y0TE>r=2-JJu=lCiY^T=g:qbLK#HR,Hk,M(LlyG1QYw`h2XKr}&Ayy*' );
define( 'NONCE_KEY',        '%)1ow8tQANFX[enUer.+MD>PR<:98Wj0#wJ,iRJ>iVO;R4:+D*c,:RLSbgS`yG.v' );
define( 'AUTH_SALT',        'gIq$q.Vh]dAR/^lO8r:wSl*QDBE(]cRnXmB756e[IP ecG-LVQzy[oi,>R~l)NFJ' );
define( 'SECURE_AUTH_SALT', 'nB!u.1S_eo!!RP]EwJ^FnssrA;-Q v3SHtN;U a:wb.TN;Q4|*#pCL{]G|WK}>Lf' );
define( 'LOGGED_IN_SALT',   '&W^8K$Nu)oY}SaL%iFXC(NN8sDheHF/:!$y*D]2V&l?s%_jtjkX?i<Rl(_f&?Xav' );
define( 'NONCE_SALT',       'uK7--2T&$fN }@1B|^w_X>vWJ1;y:.@T7)V+^67:BE/%f;cZp8[;}))fHdB4u~`u' );
/**#@-*/

/**
 * WordPress veritabanı tablo ön eki.
 *
 * Tüm kurulumlara ayrı bir önek vererek bir veritabanına birden fazla kurulum yapabilirsiniz.
 * Sadece rakamlar, harfler ve alt çizgi lütfen.
 */
$table_prefix = 'wp_';

/**
 * Geliştiriciler için: WordPress hata ayıklama modu.
 *
 * Bu değeri "true" yaparak geliştirme sırasında hataların ekrana basılmasını sağlayabilirsiniz.
 * Tema ve eklenti geliştiricilerinin geliştirme aşamasında WP_DEBUG
 * kullanmalarını önemle tavsiye ederiz.
 */
define('WP_DEBUG', false);

/* Hepsi bu kadar. Mutlu bloglamalar! */

/** WordPress dizini için mutlak yol. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** WordPress değişkenlerini ve yollarını kurar. */
require_once(ABSPATH . 'wp-settings.php');
