/**
 * Magnetic button using GSAP
 */
import gsap from "gsap";

function magneticButton(options) {
  let settings = $.extend(
      {
        target: $("[data-magnetic]"),
        class: "magnetizing",
        attraction: 0.45,
        distance: 100,
        onEnter: function (data) {},
        onExit: function (data) {},
        onUpdate: function (data) {},
      },
      options
    ),
    isEnter = false,
    distanceFromMouse = function ($target, mouseX, mouseY) {
      let centerX = $target.offset().left + $target.outerWidth() / 2,
        centerY = $target.offset().top + $target.outerHeight() / 2,
        pointX = mouseX - centerX,
        pointY = mouseY - centerY,
        distance = Math.sqrt(Math.pow(pointX, 2) + Math.pow(pointY, 2));

      return Math.floor(distance);
    },
    magnetize = function ($this, e) {
      let mouseX = e.pageX,
        mouseY = e.pageY;

      $this.each(function () {
        let $this = $(this),
          centerX = $this.offset().left + $this.outerWidth() / 2,
          centerY = $this.offset().top + $this.outerHeight() / 2,
          deltaX = Math.floor(centerX - mouseX) * -1 * settings.attraction,
          deltaY = Math.floor(centerY - mouseY) * -1 * settings.attraction,
          mouseDistance = distanceFromMouse($this, mouseX, mouseY),
          data = {
            target: $this,
            y: deltaY,
            x: deltaX,
            distance: mouseDistance,
          };

        if (mouseDistance < settings.distance) {
          gsap.to($this, { y: deltaY, x: deltaX });

          if (!isEnter) {
            isEnter = true;
            $this.addClass(settings.class);
            settings.onEnter(data);
          }

          settings.onUpdate(data);
        } else {
          gsap.to($this, { y: 0, x: 0 });

          if (isEnter) {
            isEnter = false;
            $this.removeClass(settings.class);
            settings.onExit(data);
          }
        }
      });
    };

  if (!settings.target.length) return;

  $(window).on("mousemove", function (e) {
    magnetize(settings.target, e);
  });
}

export default magneticButton;
