/**
 * Display the progress of the day
 * @param {*} jour 
 * @param {*} fait 
 * @param {*} total 
 * @param {*} containerId 
 */
function displayProgress(jour, fait, total, containerId) {
  let container = document.getElementById(containerId);
  let barreProg = document.createElement("div");
  barreProg.classList.add("barre-prog");
  let pbTextWrapper = document.createElement("div");
  pbTextWrapper.classList.add("pb-text-wrapper");
  let spanJour = document.createElement("span");
  spanJour.innerHTML = jour;
  let spanPbText = document.createElement("span");
  spanPbText.classList.add("pb-text");
  spanPbText.innerHTML = getDayProgress(fait, total) + " %";
  pbTextWrapper.appendChild(spanJour);
  pbTextWrapper.appendChild(spanPbText);
  let pbWrapper = document.createElement("div");
  pbWrapper.classList.add("pb-wrapper");
  let pbBar = document.createElement("div");
  pbBar.classList.add("pb-bar");
  pbBar.style.width = getDayProgress(fait, total) + "%";
  pbWrapper.appendChild(pbBar);
  barreProg.appendChild(pbTextWrapper);
  barreProg.appendChild(pbWrapper);
  container.appendChild(barreProg);
}

function getDayProgress(fait, total) {
  return Math.round((fait / total) * 100);
}

/**
 * Total route progress
 * @param {*} progress 
 * @returns 
 */
function getTotalProgress(progress) {
  let totalProgress = 0;
  let totalNow = 0;
  let totalTotal = 0;
  for (let i = 0; i < progress.length; i++) {
    totalNow += progress[i][1];
    totalTotal += progress[i][2];
  }
  totalProgress = (totalNow / totalTotal) * 100;

  return totalProgress;
}

fate_progress.forEach((day) => {
  displayProgress(day[0], day[1], day[2], "container_fate_details");
});
ubw_progress.forEach((day) => {
  displayProgress(day[0], day[1], day[2], "container_ubw_details");
});
hf_progress.forEach((day) => {
  displayProgress(day[0], day[1], day[2], "container_hf_details");
});



// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

updateProgress(container_fate, Math.round(getTotalProgress(fate_progress)) / 100);
updateProgress(container_ubw, Math.round(getTotalProgress(ubw_progress)) / 100);
updateProgress(container_hf, Math.round(getTotalProgress(hf_progress)) / 100);
updateProgress(container_pro, 1);
updateProgress(container_le, 0);

/* Affiche les cercles de progression */
function updateProgress(container, $progress) {
  var bar = new ProgressBar.Circle(container, {
    color: "#fff",
    // This has to be the same size as the maximum width to prevent clipping
    strokeWidth: 6,
    trailWidth: 2,
    trailColor: "#2d2d2d",
    easing: "easeInOut",
    duration: 1400,
    from: {
      color: "rgb(5, 67, 149)",
      width: 2,
    },
    to: {
      color: "rgb(5, 67, 149)",
      width: 6,
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = "2rem";
  bar.animate($progress); // Number from 0.0 to 1.0
}
