'use strict';

let dir = 1;

function handleTableClick(event) {
  if (event.target.classList.contains('prop__name')) {
    event.target.dataset.dataDir = dir;
    table.dataset.sortBy = event.target.dataset.propName;
    sortTable(event.target.dataset.propName, event.target.dataset.dataDir);
    dir *= -1;
  }
}
