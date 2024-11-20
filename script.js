document.addEventListener("DOMContentLoaded", function () {
  function startCountdown() {
    let countdownTime = 24 * 60 * 60 * 1000;

    function updateCountdown() {
      const hours = Math.floor(
        (countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (countdownTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

      const contentJam = document.getElementById("jam");
      const contentMenit = document.getElementById("menit");
      const contentDetik = document.getElementById("detik");
      contentJam.innerText = hours.toString();
      contentMenit.innerText = minutes.toString();
      contentDetik.innerText = seconds.toString();

      countdownTime -= 1000;

      if (countdownTime < 0) {
        countdownTime = 24 * 60 * 60 * 1000;
      }
    }

    setInterval(updateCountdown, 1000);
  }
  startCountdown();
});
