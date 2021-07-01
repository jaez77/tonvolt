<!doctype html>
<!--[if lte IE 9]> <html class="lte-ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en"> <!--<![endif]-->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Remove Tap Highlight on Windows Phone IE -->
    <meta name="msapplication-tap-highlight" content="no"/>

    <link rel="icon" type="image/png" href="assets/img/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="assets/img/favicon-32x32.png" sizes="32x32">

    <title>Altair Admin Landing Page</title>

    <!-- uikit -->
    <link rel="stylesheet" href="bower_components/uikit/css/uikit.almost-flat.min.css" media="all">

    <!-- altair landing page -->
    <link rel="stylesheet" href="assets/css/main.css" media="all">

    <!-- matchMedia polyfill for testing media queries in JS -->
    <!--[if lte IE 9]>
        <script type="text/javascript" src="bower_components/matchMedia/matchMedia.js"></script>
        <script type="text/javascript" src="bower_components/matchMedia/matchMedia.addListener.js"></script>
    <![endif]-->
</head>
<body>
    <!-- navigation -->
    <header id="header_main">
        <nav class="uk-navbar">
            <div class="uk-container uk-container-center">
                <a href="#" class="uk-float-left" id="mobile_navigation_toggle" data-uk-offcanvas="{target:'#mobile_navigation'}"><i class="material-icons">&#xE5D2;</i></a>
                <a href="/" class="uk-navbar-brand">
                    <img src="assets/img/logo_main.png" alt="" width="71" height="15">
                </a>
                <a href="http://themeforest.net/item/altair-material-design-premium-template/12190654?ref=tzd" class="md-btn md-btn-primary uk-navbar-flip header_cta uk-margin-left">Buy Now!</a>
                <div class="uk-navbar-flip">
                    <ul class="uk-navbar-nav" id="main_navigation">
                        <li>
                            <li><a href="{{ url('/home') }}">Home</a></li>
                            <li><a href="{{ url('/login') }}">Login</a></li>
                            <li><a href="{{ url('/register') }}">Register</a></li>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div id="mobile_navigation" class="uk-offcanvas">
        <div class="uk-offcanvas-bar">
            <ul>
                <li>
                    <a href="#sect-features" data-uk-smooth-scroll="{offset: 48}">
                        <span class="menu_icon"><i class="material-icons">&#xE896;</i></span>
                        <span class="menu_title">Features</span>
                    </a>
                </li>
                <li>
                    <a href="#sect-gallery" data-uk-smooth-scroll="{offset: 48}">
                        <span class="menu_icon"><i class="material-icons">&#xE410;</i></span>
                        <span class="menu_title">Gallery</span>
                    </a>
                </li>
                <li>
                    <a href="#sect-pricing" class="uk-navbar-nav-subtitle" data-uk-smooth-scroll="{offset: 48}">
                        <span class="menu_icon"><i class="material-icons">&#xE227;</i></span>
                        <span class="menu_title">Pricing<small>Find the perfect plan</small></span>
                    </a>
                </li>
                <li>
                    <a href="#sect-team" data-uk-smooth-scroll="{offset: 48}">
                        <span class="menu_icon"><i class="material-icons">&#xE7FB;</i></span>
                        <span class="menu_title">Team</span>
                    </a>
                </li>
                <li>
                    <a href="#sect-contact" data-uk-smooth-scroll="{offset: 48}">
                        <span class="menu_icon"><i class="material-icons">&#xE0E1;</i></span>
                        <span class="menu_title">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <section class="section section_large" id="sect-features">
        <div class="uk-container uk-container-center">
            <div class="uk-grid">
                <div class="uk-width-large-3-5 uk-container-center uk-text-center">
                    <h2 class="heading_b">
                        Personal Data Vault
                        <span class="sub-heading">Make roles of database yourself and store any data into it and then it would be safe.</span>
                    </h2>
                </div>
            </div>
            <div class="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-5 animate" data-uk-scrollspy="{cls:'uk-animation-slide-bottom animated',target:'> *',delay:300,topoffset:-100}">
                <div class="uk-margin-top">
                    <div class="uk-text-center uk-margin-bottom">
                        <i class="material-icons icon_large icon_dark">&#xE263;</i>
                    </div>
                    <h3 class="heading_c uk-text-center">Heading</h3>
                    <p>alkseglkawgj</p>
                </div>
                <div class="uk-margin-top">
                    <div class="uk-text-center uk-margin-bottom">
                        <i class="material-icons icon_large icon_dark">&#xE85C;</i>
                    </div>
                    <h3 class="heading_c uk-text-center">Heading</h3>
                    <p>khaherlgkeg</p>
                </div>
                <div class="uk-margin-top">
                    <div class="uk-text-center uk-margin-bottom">
                        <i class="material-icons icon_large icon_dark">&#xE8DC;</i>
                    </div>
                    <h3 class="heading_c uk-text-center">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, odio.</p>
                </div>
                <div class="uk-margin-top">
                    <div class="uk-text-center uk-margin-bottom">
                        <i class="material-icons icon_large icon_dark md-color-red-500">&#xE3AF;</i>
                    </div>
                    <h3 class="heading_c uk-text-center">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, odio.</p>
                </div>
                <div class="uk-margin-top">
                    <div class="uk-text-center uk-margin-bottom">
                        <i class="material-icons icon_large icon_dark">&#xE6DF;</i>
                    </div>
                    <h3 class="heading_c uk-text-center">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, odio.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="sect-pricing">
        <div class="uk-container uk-container-center">
            <h2 class="heading_b uk-margin-bottom uk-text-center">
                Find the <span class="md-color-light-green-500">perfect plan</span> for your business
            </h2>
            <div class="pricing_table pricing_table_a uk-grid uk-grid-small uk-grid-width-medium-1-2 uk-grid-width-large-1-4 animate" data-uk-grid-match="{target:'.md-card-content'}"  data-uk-scrollspy="{cls:'uk-animation-slide-bottom animated',target:'> *',delay:300,topoffset:-100}">
                <div class="uk-margin-top">
                    <div class="md-card">
                        <div class="md-card-content padding-reset">
                            <div class="pricing_table_plan md-bg-grey-500 md-color-white">Plan 1</div>
                            <div class="pricing_table_price">
                                <span class="currency">$</span>0
                                <span class="period">monthly</span>
                            </div>
                            <ul class="pricing_table_features">
                                <li><strong>512MB</strong> Memory</li>
                                <li><strong>1 Core</strong> Processor</li>
                                <li><strong>20GB</strong> SSD Disk</li>
                                <li><strong>1TB</strong> Transfer</li>
                            </ul>
                            <div class="pricing_table_select">
                                <a href="#" class="md-btn md-btn-large">Get it now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-margin-top">
                    <div class="md-card">
                        <div class="md-card-content padding-reset">
                            <div class="pricing_table_plan md-bg-grey-500 md-color-white">Plan 2</div>
                            <div class="pricing_table_price">
                                <span class="currency">$</span>20
                                <span class="period">monthly</span>
                            </div>
                            <ul class="pricing_table_features">
                                <li><strong>1 GB</strong> Memory</li>
                                <li><strong>1 Core</strong> Processor</li>
                                <li><strong>30GB</strong> SSD Disk</li>
                                <li><strong>2TB</strong> Transfer</li>
                            </ul>
                            <div class="pricing_table_select">
                                <a href="#" class="md-btn md-btn-large">Get it now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-margin-top">
                    <div class="md-card">
                        <div class="md-card-content padding-reset">
                            <div class="pricing_table_plan md-bg-light-green-500 md-color-white">Plan 3</div>
                            <div class="pricing_table_price">
                                <span class="currency">$</span>40
                                <span class="period">monthly</span>
                            </div>
                            <ul class="pricing_table_features">
                                <li><strong>4 GB</strong> Memory</li>
                                <li><strong>2 Core</strong> Processor</li>
                                <li><strong>60GB</strong> SSD Disk</li>
                                <li><strong>4TB</strong> Transfer</li>
                            </ul>
                            <div class="pricing_table_select">
                                <a href="#" class="md-btn md-btn-large md-btn-success">Get it now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-margin-top">
                    <div class="md-card">
                        <div class="md-card-content padding-reset">
                            <div class="pricing_table_plan md-bg-grey-500 md-color-white">Plan 4</div>
                            <div class="pricing_table_price">
                                <span class="currency">$</span>80
                                <span class="period">monthly</span>
                            </div>
                            <ul class="pricing_table_features">
                                <li><strong>8 GB</strong> Memory</li>
                                <li><strong>4 Core</strong> Processor</li>
                                <li><strong>100GB</strong> SSD Disk</li>
                                <li><strong>5TB</strong> Transfer</li>
                            </ul>
                            <div class="pricing_table_select">
                                <a href="#" class="md-btn md-btn-large">Get it now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section_dark md-bg-blue-grey-700">
        <div class="uk-container uk-container-center">
            <div class="uk-grid" data-uk-grid-margin>
                <div class="uk-width-medium-3-5 uk-text-center-medium">
                    Copyright &copy; 2018 Tonvolt Studio, All rights reserved.
                </div>
            </div>
        </div>
    </section>

    <!-- google web fonts -->
    <script>
        WebFontConfig = {
            google: {
                families: [
                    'Source+Code+Pro:400,700:latin',
                    'Roboto:300,400,500,700,400italic:latin'
                ]
            }
        };
        (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    </script>

    <!-- common functions -->
    <script src="assets/js/common.min.js"></script>
    <!-- uikit functions -->
    <script src="assets/js/uikit_custom.min.js"></script>
    <!-- altair common functions/helpers -->
    <script src="assets/js/altair_lp_common.js"></script>

</body>
</html>