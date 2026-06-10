// =============================================
// EXAMPLE: Creatively Bad Volume Control
// Anti-patterns demonstrated in this JS:
// - State stored across a 4-step wizard just to change a number
// - Random "surprise" results sometimes
// - Delays and fake loading for a trivial action
// - Volume doesn't reflect the slider until ALL steps complete
// =============================================

let currentVolume = 50;
let chosenDirection = null;
let chosenAmount = 0;

function nextStep(fromStep) {
  document.getElementById(`step${fromStep}`).classList.add('hidden');
  const next = document.getElementById(`step${fromStep + 1}`);
  if (next) {
    next.classList.remove('hidden');
  }

  // When reaching step 4, populate the summary
  if (fromStep === 3) {
    populateSummary();
  }
}

function setDirection(dir) {
  chosenDirection = dir;
}

function updateSliderLabel(val) {
  chosenAmount = parseInt(val);
  document.getElementById('sliderValue').textContent = val + '%';

  // Anti-pattern: Passive-aggressive warning at high values
  const warning = document.getElementById('sliderWarning');
  if (val > 80) {
    warning.textContent = '⚠️ Choosing a large amount may cause irreversible audio satisfaction.';
  } else if (val > 50) {
    warning.textContent = 'You seem decisive. Bold choice.';
  } else {
    warning.textContent = '';
  }
}

function populateSummary() {
  const dirText = chosenDirection === 'up' ? '⬆️ Up' : '⬇️ Down';
  const newVol = computeNewVolume();
  document.getElementById('summaryBox').innerHTML = `
    <strong>Summary of your requested change:</strong><br>
    Direction: ${dirText}<br>
    Amount: ${chosenAmount}%<br>
    Current volume: ${currentVolume}<br>
    Resulting volume: ${newVol}<br>
    <br>
    <em>Please review carefully. This action cannot be undone (until you do it again).</em>
  `;
}

function computeNewVolume() {
  let newVol;
  if (chosenDirection === 'up') {
    newVol = Math.min(100, currentVolume + chosenAmount);
  } else {
    newVol = Math.max(0, currentVolume - chosenAmount);
  }
  return newVol;
}

function applyVolume() {
  // Anti-pattern: 25% chance the volume does something unexpected
  const rng = Math.random();
  let appliedVol;
  let icon = '✅';
  let msg;

  if (rng < 0.15) {
    // Surprise: goes the wrong direction
    appliedVol = chosenDirection === 'up'
      ? Math.max(0, currentVolume - chosenAmount)
      : Math.min(100, currentVolume + chosenAmount);
    icon = '🙃';
    msg = `Volume has been adjusted. We went the other way. You're welcome.`;
  } else if (rng < 0.25) {
    // Surprise: changes to a random value instead
    appliedVol = Math.floor(Math.random() * 101);
    icon = '🎲';
    msg = `We couldn't decide, so we picked ${appliedVol} for you. Enjoy.`;
  } else {
    appliedVol = computeNewVolume();
    msg = `Volume successfully updated to <strong>${appliedVol}</strong>.<br>
      This process took ${Math.floor(Math.random() * 4) + 2} steps.<br>
      You're doing great.`;
  }

  currentVolume = appliedVol;

  // Show result screen
  document.getElementById('step4').classList.add('hidden');
  const done = document.getElementById('stepDone');
  done.classList.remove('hidden');

  document.getElementById('resultIcon').textContent = icon;
  document.getElementById('resultMsg').innerHTML = msg;

  // Anti-pattern: Volume bar only appears NOW, with a theatrical delay
  setTimeout(() => {
    document.getElementById('volumeBar').style.width = `${appliedVol}%`;
    document.getElementById('volumeNumber').textContent = appliedVol;
  }, 300);
}

function cancelFlow() {
  // Anti-pattern: "Cancel" asks you to confirm the cancellation
  const confirmed = window.confirm(
    'Are you sure you want to cancel?\n\nAll your progress on Step 1 will be lost.\n\nThis decision is final (until you click OK on this dialog).'
  );
  if (confirmed) {
    restartFlow();
  }
}

function askAgain() {
  // Anti-pattern: "I don't know" gives you absolutely no help
  const choices = [
    "That's okay. Take your time. (You have 30 seconds.)",
    "Maybe try turning it off and on again?",
    "Our records indicate you have changed the volume before. You can do this.",
    "Volume therapy is available in the Help menu.",
    "We'll count that as a Yes.",
  ];
  const pick = choices[Math.floor(Math.random() * choices.length)];
  alert(pick);
}

function restartFlow() {
  // Reset all steps
  ['step1','step2','step3','step4','stepDone'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  chosenDirection = null;
  chosenAmount = 0;

  // Reset slider
  const slider = document.getElementById('amountSlider');
  if (slider) {
    slider.value = 5;
    document.getElementById('sliderValue').textContent = '5%';
    document.getElementById('sliderWarning').textContent = '';
  }

  // Show step 1 again
  document.getElementById('step1').classList.remove('hidden');
}
