<svelte:head>
  <title>Tonvolt Studio</title>
  <link type="text/css" rel="stylesheet" href="css/index.min.css" />
  <!-- <script defer type="text/javascript" src="assets/js/skel.min.js"></script> -->
  <script
    defer
    type="text/javascript"
    src="items/demos_assets/jquery.min.js"></script>
  <script
    defer
    type="text/javascript"
    src="items/demos_assets/jquery.scrollex.min.js"></script>
  <script
    defer
    type="text/javascript"
    src="items/demos_assets/jquery.scrolly.min.js"></script>
  <script defer type="text/javascript" src="assets/js/util.js"></script>
  <script
    defer
    type="text/javascript"
    src="assets/js/ie/respond.min.js"></script>
  <script defer type="text/javascript" src="js/index.min.js"></script>
</svelte:head>

<div class="landing">
  <div id="page-wrapper">
    <!-- Header -->
    <header id="header" class="alt">
      <h1>Tonvolt <span>Studio</span></h1>
      <!--<a href="#nav"><span>Menu</span></a>-->
    </header>
    <!-- Nav -->
    <!-- Banner -->
    <section
      id="banner"
      style="background-position: 50% 100%, 50% 100%, 50% 0px;"
    >
      <div class="inner">
        <h2>
          We redefine the world.<br />Web apps, iOS apps, Android apps and we
          are approaching.
        </h2>
        <ul class="actions">
          <li><a href="#one" class="button scrolly">Learn More</a></li>
        </ul>
      </div>
    </section>
    <!-- One -->
    <section id="one" class="wrapper special">
      <div class="inner">
        <ul class="icons major">
          <li>
            <span class="icon alt fa-apple"
              ><span class="label">Apple</span></span
            >
          </li>
          <li class="special">
            <span class="icon alt fa-cloud"
              ><span class="label">Cloud</span></span
            >
          </li>
          <li>
            <span class="icon alt fa-android"
              ><span class="label">Camera</span></span
            >
          </li>
        </ul>
        <header>
          <h2>We connect apps.</h2>
          <p>--</p>
        </header>
      </div>
    </section>
    <!-- Two -->
    <section id="two" class="wrapper style1">
      <div class="inner">
        <header class="special major narrow">
          <small>Design</small>
          <h2>We design apps.</h2>
          <p>--</p>
        </header>
        <div class="features">
          <ul class="left">
            <li class="icon alt fa-chain-broken">
              <span class="label">Link</span> Make links better
            </li>
            <li class="icon alt fa-gavel">
              <span class="label">Gavel</span> Make things right
            </li>
            <li class="icon alt fa-user">
              <span class="label">User</span> Make for human
            </li>
          </ul>
          <object type="image/svg+xml" data="images/pic01-phone.svg" />
          <!--[if lte IE 8]><span class="image fit"><img src="images/pic01.jpg" alt="" /></span><![endif]-->
          <ul class="right">
            <li class="icon alt fa-paper-plane">
              <span class="label">Plane</span> Make lightweight
            </li>
            <li class="icon alt fa-rocket">
              <span class="label">Rocket</span> Make most powerful
            </li>
            <li class="icon alt fa-cog">
              <span class="label">Cog</span> Make various features
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Three -->
    <section id="three" class="wrapper">
      <div class="inner spotlight left">
        <span class="image fit"><img src="images/pic02.jpg" alt="" /></span>
        <article>
          <header>
            <small>Life</small>
            <h2>We make life simpler.</h2>
          </header>
          <p>With our products your life better than ever.</p>
          <!--<ul class="actions">
              <li><a href="#" class="button">Learn More</a></li>
            </ul>-->
        </article>
      </div>
    </section>
    <!-- Four -->
    <section id="four" class="wrapper style3">
      <div class="inner spotlight right">
        <object type="image/svg+xml" data="images/pic03-desktop.svg" />
        <!--[if lte IE 8]><span class="image fit"><img src="images/pic03.jpg" alt="" /></span><![endif]-->
        <article>
          <header>
            <small>You</small>
            <h2>Type: Human</h2>
          </header>
          <ul class="checklist">
            <li>Seeable</li>
            <li>Speakable</li>
            <li>Listenable</li>
            <li>Walkable</li>
            <li>Thinkable</li>
            <li>Dreamable</li>
          </ul>
          <!--<ul class="actions">
              <li><a href="#" class="button">Read More</a></li>
            </ul>-->
        </article>
      </div>
    </section>
    <!-- Five -->
    <section id="five" class="wrapper special">
      <div class="inner">
        <header>
          <small>We</small>
          <h2>Tell us your story, we give you life simpler</h2>
        </header>
        <ul class="labeled-icons">
          <!--<li><span class="icon fa-mobile-phone">800-555-0000</span></li>-->
          <li><span class="icon fa-envelope-o">ceo@tonvolt.com</span></li>
          <li><span class="icon fa-map-marker">Gyeonggido, KR</span></li>
        </ul>
        <!--<form action="#" class="alt" method="POST">
            <div class="row uniform 50%">
              <div class="6u 12u$(xsmall)">
                <input name="name" placeholder="Name" type="text">
              </div>
              <div class="6u$ 12u$(xsmall)">
                <input name="email" placeholder="Email" type="email">
              </div>
              <div class="12u$">
                <textarea name="message" placeholder="Message" rows="6"></textarea>
              </div>
            </div>
            <ul class="actions">
              <li><input type="submit" value="Send message"></li>
            </ul>
          </form>-->
      </div>
    </section>
    <!-- Footer -->
    <footer id="footer">
      <div class="copyright">Tonvolt Studio © All rights reserved.</div>
    </footer>
  </div>
  <!-- Scripts -->

  <!--[if lte IE 8]><![endif]-->
  <script type="text/javascript">
    (function ($) {
      skel.breakpoints({
        xlarge: "(max-width: 1680px)",
        large: "(max-width: 1280px)",
        medium: "(max-width: 980px)",
        small: "(max-width: 736px)",
        xsmall: "(max-width: 480px)",
      });
      $(function () {
        var $window = $(window),
          $body = $("body"),
          $banner = $("#banner"),
          $header = $("#header");
        $body.addClass("is-loading");
        $window.on("load", function () {
          window.setTimeout(function () {
            $body.removeClass("is-loading");
          }, 100);
        });
        if (skel.vars.mobile) $body.addClass("is-mobile");
        else
          skel
            .on("-medium !medium", function () {
              $body.removeClass("is-mobile");
            })
            .on("+medium", function () {
              $body.addClass("is-mobile");
            });
        $("form").placeholder();
        if (skel.vars.IEVersion < 9) $("object").remove();
        skel.on("+medium -medium", function () {
          $.prioritize(
            ".important\\28 medium\\29",
            skel.breakpoint("medium").active
          );
        });
        $(".scrolly").scrolly({ speed: 1500, offset: $header.outerHeight() });
        $("#nav")
          .append('<a href="#nav" class="close"></a>')
          .appendTo($body)
          .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: "right",
            target: $body,
            visibleClass: "is-nav-visible",
          });
        if (skel.vars.IEVersion < 9) $header.removeClass("alt");
        if ($banner.length > 0 && $header.hasClass("alt")) {
          $window.on("resize", function () {
            $window.trigger("scroll");
          });
          $banner.scrollex({
            bottom: $header.outerHeight() + 5,
            terminate: function () {
              $header.removeClass("alt");
            },
            enter: function () {
              $header.addClass("alt");
            },
            leave: function () {
              $header.removeClass("alt");
            },
          });
        }
        if (skel.vars.browser == "ie" || skel.vars.mobile) {
          $.fn._parallax = function () {
            return $(this);
          };
        } else {
          $.fn._parallax = function () {
            var $this = $(this);
            if (this.length == 0) return $this;
            if (this.length > 1) {
              for (var i = 0; i < this.length; i++)
                $(this[i])._parallax(userOptions);
              return $this;
            }
            $this.each(function () {
              var $t = $(this),
                on,
                off;
              on = function () {
                $t.css(
                  "background-position",
                  "center 100%, center 100%, center 0px"
                );
                $window.on("scroll._parallax", function () {
                  var pos =
                    parseInt($window.scrollTop()) - parseInt($t.position().top);
                  $t.css(
                    "background-position",
                    "center 100%, center 100%, center " + pos * -0.15 + "px"
                  );
                });
              };
              off = function () {
                $t.css("background-position", "");
                $window.off("scroll._parallax");
              };
              skel.on("change", function () {
                if (skel.breakpoint("medium").active) off();
                else on();
              });
            });
            return $(this);
          };
          $window.on("load resize", function () {
            $window.trigger("scroll");
          });
        }
        $banner._parallax();
        $("#main > header")._parallax();
      });
    })(jQuery);
  </script>
  <script type="text/javascript">
    (function ($) {
      $(function () {
        if (skel.vars.os == "ios" && window.self !== window.top) {
          $("html, body").css("width", "100vw");
          $("head").append(
            "<style>" +
              "@media screen and (min-width: 737px) and (max-width: 1024px) { #banner { height: auto; min-height: 45em; } }" +
              "@media screen and (max-width: 736px) { #banner { height: auto; min-height: 30em; } }</style>" +
              "</style>"
          );
        }
      });
    })(jQuery);
  </script>
  <nav id="nav">
    <ul class="links">
      <li>
        <a href="/" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
          >Home</a
        >
      </li>
      <li>
        <a
          href="generic.html"
          style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Generic</a
        >
      </li>
      <li>
        <a
          href="elements.html"
          style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Elements</a
        >
      </li>
    </ul>
    <ul class="actions vertical">
      <li>
        <a
          href="#"
          class="button fit special"
          style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Sign Up</a
        >
      </li>
      <li>
        <a
          href="#"
          class="button fit"
          style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Log In</a
        >
      </li>
    </ul>
    <a
      href="#nav"
      class="close"
      style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
    />
  </nav>
</div>
