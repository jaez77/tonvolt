  <svelte:head>
    <title>Tonvolt Studio</title>
    <link type="text/css" rel="stylesheet" href="css/index.min.css" />
    <script defer type="text/javascript" src="assets/js/skel.min.js"></script>
    <script defer type="text/javascript" src="items/demos_assets/jquery.min.js"></script>
    <script defer type="text/javascript" src="items/demos_assets/jquery.scrollex.min.js"></script>
    <script defer type="text/javascript" src="items/demos_assets/jquery.scrolly.min.js"></script>
    <script defer type="text/javascript" src="assets/js/util.js"></script>
    <script defer type="text/javascript" src="assets/js/ie/respond.min.js"></script>
    <script defer type="text/javascript" src="js/index.min.js"></script>
  </svelte:head>

  <!-- Optics by Pixelarity pixelarity.com @pixelarity License: pixelarity.com/license -->
    <div id="page-wrapper">
      <!-- Header -->
      <header id="header">
        <h1><a href="index.html">Optics <span>by Pixelarity</span></a></h1>
        <a href="#nav"><span>Menu</span></a>
      </header>
      <!-- Nav -->
      <!-- Main -->
      <article id="main">
        <header style="background-position: 50% 100%, 50% 100%, 50% 7.65px;">
          <h2>Generic Page</h2><p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
        </header>
        <section class="wrapper">
          <div class="inner">
            <h3>Lorem ipsum dolor</h3>
            <p>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p><p>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius.</p><hr><h4>Feugiat aliquam</h4><p>Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat.</p><p>Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.</p>
          </div>
        </section>
      </article>
      <!-- Footer -->
      <footer id="footer">
        <div class="copyright"> © Untitled. All rights reserved. </div>
      </footer>
    </div>
    <!-- Scripts -->

    <!--[if lte IE 8]><![endif]-->
    <script type="text/javascript">
    (function($) {skel.breakpoints({xlarge: '(max-width: 1680px)',large: '(max-width: 1280px)',medium: '(max-width: 980px)',small: '(max-width: 736px)',xsmall: '(max-width: 480px)'});$(function() {var $window = $(window),$body = $('body'),$banner = $('#banner'),$header = $('#header');$body.addClass('is-loading');$window.on('load', function() {window.setTimeout(function() {$body.removeClass('is-loading');}, 100);});if (skel.vars.mobile)$body.addClass('is-mobile'); else skel.on('-medium !medium', function() {$body.removeClass('is-mobile');}).on('+medium', function() {$body.addClass('is-mobile');});$('form').placeholder();if (skel.vars.IEVersion < 9)$('object').remove();skel.on('+medium -medium', function() {$.prioritize('.important\\28 medium\\29',skel.breakpoint('medium').active);});$('.scrolly').scrolly({speed: 1500,offset: $header.outerHeight()});$('#nav').append('<a href="#nav" class="close"></a>').appendTo($body).panel({delay: 500,hideOnClick: true,hideOnSwipe: true,resetScroll: true,resetForms: true,side: 'right',target: $body,visibleClass: 'is-nav-visible'});if (skel.vars.IEVersion < 9)$header.removeClass('alt');if ($banner.length > 0&& $header.hasClass('alt')) {$window.on('resize', function() { $window.trigger('scroll'); });$banner.scrollex({bottom: $header.outerHeight() + 5,terminate: function() { $header.removeClass('alt'); },enter: function() { $header.addClass('alt'); },leave: function() { $header.removeClass('alt'); }});}if (skel.vars.browser == 'ie'|| skel.vars.mobile) {$.fn._parallax = function() {return $(this);};} else  {$.fn._parallax = function() {var $this = $(this);if (this.length == 0)return $this;if (this.length > 1) {for (var i=0; i < this.length; i++)$(this[i])._parallax(userOptions);return $this;}$this.each(function() {var $t = $(this),on, off;on = function() {$t.css('background-position', 'center 100%, center 100%, center 0px');$window.on('scroll._parallax', function() {var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);$t.css('background-position', 'center 100%, center 100%, center ' + (pos * -0.15) + 'px');});};off = function() {$t.css('background-position', '');$window.off('scroll._parallax');};skel.on('change', function() {if (skel.breakpoint('medium').active)(off)(); else (on)();});});return $(this);};$window.on('load resize', function() {$window.trigger('scroll');});}$banner._parallax();$('#main > header')._parallax();});})(jQuery);
    </script>
    <script type="text/javascript">
    (function($) {
      $(function() {
        if (skel.vars.os == 'ios' && window.self !== window.top) {
          $('html, body').css('width', '100vw');
          $('head').append(
            '<style>' +
              '@media screen and (min-width: 737px) and (max-width: 1024px) { #banner { height: auto; min-height: 45em; } }' +
              '@media screen and (max-width: 736px) { #banner { height: auto; min-height: 30em; } }</style>' +
            '</style>'
          );
        }
      });
    })(jQuery);
    </script>
    <nav id="nav">
      <ul class="links">
        <li><a href="/" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Home</a></li>
        <li><a href="generic.html" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Generic</a></li>
        <li><a href="elements.html" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Elements</a></li>
      </ul>
      <ul class="actions vertical">
        <li><a href="#" class="button fit special" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Sign Up</a></li>
        <li><a href="#" class="button fit" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Log In</a></li>
      </ul><a href="#nav" class="close" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></a>
    </nav>