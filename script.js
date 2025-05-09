function toggleStatusFields() {
  const value = document.getElementById('inCanada').value;
  document.getElementById('statusSection').classList.toggle('hidden', value !== 'Yes');
}
function toggleApplicationDetails() {
  const value = document.getElementById('appliedBefore').value;
  document.getElementById('applicationDetails').classList.toggle('hidden', value !== 'Yes');
}
function toggleDeadline() {
  const value = document.getElementById('hasDeadline').value;
  document.getElementById('deadlineDateField').classList.toggle('hidden', value !== 'Yes');
}
