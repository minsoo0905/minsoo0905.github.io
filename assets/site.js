const search = document.querySelector('#search');
const kind = document.querySelector('#kind');
if (search && kind) {
  const entries = [...document.querySelectorAll('.publication')];
  function filter() {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    entries.forEach(entry => {
      const visible = (kind.value === 'all' || entry.dataset.kind === kind.value) && entry.textContent.toLowerCase().includes(query);
      entry.hidden = !visible;
      if (visible) count++;
    });
    document.querySelector('#results').textContent = `${count} publication${count === 1 ? '' : 's'}`;
    document.querySelector('#empty').hidden = count !== 0;
  }
  search.addEventListener('input', filter);
  kind.addEventListener('change', filter);
}
