const div = document.querySelector('div');

function typeForMe(message) {
  const messageSplit = message.split("");
  for (var i = 0; i < messageSplit.length; i++) {
    (function (i) {
      setTimeout(function () {
        div.innerHTML += messageSplit[i];
      }, 275*i);
    })(i);
  };
}

typeForMe("紅線殿")