window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var followingCount = 0
    var followersCount = 2147483647;
    var postsCount = 102;

    var followingElement = document.getElementById('following-count');
    var followersElement = document.getElementById('followers-count');
    var postsElement = document.getElementById('posts-count');

    var interval = 1;
    var increment = 961544;
    function animateCount(element, targetCount, animationInterval) {
      var currentCount = 0;
      var timer = setInterval(function() {
        currentCount += increment;
        element.textContent = currentCount;

        if (currentCount >= targetCount) {
          clearInterval(timer);
          element.textContent = targetCount;
        }
      }, animationInterval);
    }
    animateCount(followingElement, followingCount, interval);
    animateCount(followersElement, followersCount, interval);
    animateCount(postsElement, postsCount, interval);
  }, 1200);
});
