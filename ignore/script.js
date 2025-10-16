// Basic interactions (simulasi)
function miniBooking(e){
  e.preventDefault();
  const nama = document.getElementById('mini-nama')?.value || 'Pasien';
  alert('Terima kasih ' + nama + '! Permintaan booking diterima. (Simulasi)');
  e.target.reset();
  return false;
}

function submitBooking(e){
  e.preventDefault();
  const nama = document.getElementById('nama')?.value || 'Pasien';
  const date = document.getElementById('date')?.value || '(tanggal tidak diisi)';
  alert('Pendaftaran untuk ' + nama + ' pada ' + date + ' berhasil dikirim. (Simulasi)');
  e.target.reset();
  return false;
}

function submitContact(e){
  e.preventDefault();
  const nama = document.getElementById('cname')?.value || 'Pengirim';
  alert('Terima kasih ' + nama + '! Pesan Anda telah dikirim. (Simulasi)');
  e.target.reset();
  return false;
}

// doctor filter
function filterDoctors(){
  const q = document.getElementById('search-doc')?.value.toLowerCase() || '';
  const spec = document.getElementById('filter-spec')?.value || '';
  document.querySelectorAll('#doctors-grid .doctor').forEach(d=>{
    const name = (d.dataset.name || '').toLowerCase();
    const s = (d.dataset.spec || '');
    let show = true;
    if(q && !name.includes(q) && !s.toLowerCase().includes(q)) show = false;
    if(spec && s !== spec) show = false;
    d.style.display = show ? 'flex' : 'none';
  });
}

// smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const t = document.querySelector(this.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth'});
  });
});
