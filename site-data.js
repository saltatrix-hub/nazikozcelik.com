(function () {
  const STORAGE_KEY = 'nazik-kosegil-site-content-v1';

  const defaults = {
    general: {
      eyebrow: 'Üniversite Tercih & Kariyer Rehberliği',
      heroTitle: 'Doğru tercih, <em>doğru rehberlikle</em> bulunur.',
      heroText: 'Rehberlik koordinatörlüğü ve üniversite tercih danışmanlığındaki uzun yıllara dayanan deneyimimle; öğrencilerin ve ailelerin kararsızlıktan netliğe uzanan yolculuğuna eşlik ediyorum.',
      aboutTitle: 'Yıllarca süren rehberlik deneyimi, size özel bir yol haritasına dönüşüyor.'
    },
    about: [
      'Nazik Özçelik, psikoloji eğitimi ile 25 yılı aşkın eğitim deneyimini bir araya getirerek öğrenci, aile ve kariyer danışmanlığı alanlarında çalışmalar yürüten bir eğitimci ve danışmandır.',
      "Ankara Üniversitesi'nde Felsefe eğitimi alan Özçelik, Bahçeşehir Üniversitesi Stratejik Pazarlama ve Marka Yönetimi yüksek lisans programını tamamlamış; İstanbul Kent Üniversitesi Psikoloji Bölümü'nde eğitimine devam etmektedir. Akademik geçmişini eğitim alanındaki saha deneyimiyle birleştirerek bütüncül bir çalışma modeli geliştirmiştir.",
      'Mesleki yolculuğuna 2002 yılında eğitim sektöründe başlayan Özçelik; öğretmenlik, eğitim yöneticiliği, kariyer ve tercih danışmanlığı ile kurumsal eğitim alanlarında görev almıştır. Bu süreçte binlerce öğrenci ve aileye rehberlik etmiş, çok sayıda eğitim kurumu için danışmanlık ve seminer çalışmaları yürütmüştür.',
      'Çalışmalarında sistemik yaklaşımı benimseyerek akademik başarıyı yalnızca sınav performansıyla değil; aile ilişkileri, psikolojik dayanıklılık, sosyal çevre, değerler ve gelecek hedefleriyle birlikte değerlendirmektedir. Eğitim, kariyer ve psikolojiyi birbirini tamamlayan alanlar olarak ele almaktadır.',
      'Öğrenci ve aile danışmanlığının yanı sıra kariyer planlama, sınav süreçleri yönetimi, tercih danışmanlığı, gençlerin geleceğin mesleklerine hazırlanması ve eğitim kurumlarının gelişimi üzerine çalışmalar yürütmektedir.',
      "Eğitim ve kariyer alanındaki görüşlerini televizyon, radyo ve dijital platformlarda paylaşmaktadır. Özgür Radyo'da yayımlanan “Eğitim Frekansı” programının hazırlayıcısı ve sunucusudur; CNN Türk, NTV, TV100, TVNET, TGRT Haber ve A Haber başta olmak üzere ulusal medya kuruluşlarında eğitim gündemi, sınav sistemleri, kariyer planlama ve gençlik çalışmaları üzerine değerlendirmelerde bulunmaktadır.",
      'Çalışmalarını öğrenciyi, aileyi ve geleceği birlikte değerlendiren sistemik bir bakış açısıyla sürdürerek bireylerin potansiyellerini keşfetmelerine ve yaşamlarına bilinçli biçimde yön vermelerine rehberlik etmektedir.'
    ],
    experience: [
      { date: '2023—2025', title: 'Kişisel Gelişim ve Eğitim, Kariyer Danışmanı', detail: 'Ulya Psikoloji Merkezi · 4. Levent · Hibrit' },
      { date: '2022—Halen', title: 'Kişisel Gelişim ve Eğitim Kariyer Uzmanı', detail: 'Kendi iş' },
      { date: '2022—2023', title: 'Kurucu', detail: 'Career and Talks · Beşiktaş, İstanbul' },
      { date: '2019—2021', title: 'Kariyer Danışmanı', detail: 'Bahçeşehir Üniversitesi' },
      { date: '2016—2019', title: 'Daire Başkanı', detail: 'İstanbul Nişantaşı Üniversitesi · Rehberlik ve Kariyer Daire Başkanlığı' },
      { date: '2005—2016', title: 'Uğur Kariyer Merkezi Direktörü', detail: 'Uğur Okulları · İstanbul' }
    ],
    education: [
      { date: '2025—Devam ediyor', title: 'İstanbul Kent Üniversitesi', detail: 'Psikoloji · Klinik Psikoloji Yüksek Lisans' },
      { date: '2012—2017', title: 'Bahçeşehir Üniversitesi', detail: 'Stratejik Pazarlama ve Marka Yönetimi' },
      { date: '1997—2002', title: 'Ankara Üniversitesi', detail: 'Felsefe' }
    ],
    projects: [
      { date: 'Temmuz 2023 — Ağustos 2023', title: 'Galata Üniversitesi Tercih Ofisi Yönetimi', text: "İstanbul Galata Üniversitesi 2023 ÖSYS Tercih Danışmanlığı kapsamında öğrenci ve velilere teknik tercih danışmanlığı sunuldu; ekip eğitimi, kurum koordinasyonu ve bilgilendirici yayın çalışmaları yürütüldü." },
      { date: 'Mayıs 2022 — Ağustos 2022', title: 'BİLTES Koleji & C.A.T. İş Birliği: LGS Tercih Şenliği', text: '2022 LGS sonuçlarının ardından öğrenci ve velilere doğru tercih desteği sunmak amacıyla tercih ofisi çalışması yürütüldü.' },
      { date: 'Mart 2022 — Haziran 2022', title: 'Sınav Öncesi Başarı İçin İpuçları', text: "Raunt'un Instagram ve YouTube kanallarında yayımlanan canlı söyleşi serisinde çalışma düzeni, beslenme, stres ve zaman yönetimi, motivasyon ve tercih süreçleri ele alındı." },
      { date: 'Ocak 2020 — Ekim 2021', title: 'Bahçeşehir Üniversitesi BAUCOMPASS Projesi', text: 'Öğrencilerin eğitim sürecindeki sorunlarına hızlı çözümler sunan ve üniversite birimleriyle iletişim kuran merkezin proje liderliği yürütüldü.' },
      { date: 'Ocak 2016 — Haziran 2019', title: 'Mesleki Yaklaşım Envanteri', text: "Dr. Holland'ın RIASEC modeli temel alınarak hazırlanan envanter farklı illerdeki lise öğrencilerine uygulandı; rehber öğretmenlere danışmanlık eğitimi verildi." }
    ],
    videos: [
      { id: 'YHat3hicXeg', title: 'Eğitim ve kariyer söyleşisi 1' },
      { id: 'TcldQFMY9Jk', title: 'Eğitim ve kariyer söyleşisi 2' },
      { id: 'h2OK5j23AJ8', title: 'Eğitim ve kariyer söyleşisi 3' },
      { id: 'GLn7dL7TRo8', title: 'Eğitim ve kariyer söyleşisi 4' }
    ],
    services: [
      { title: 'Üniversite Tercih Danışmanlığı', text: 'Tercih listesi hazırlığı ve karşılaştırmalı bölüm/üniversite değerlendirmesi.' },
      { title: 'Kariyer Planlama', text: 'İlgi, yetkinlik ve hedeflerin netleştirildiği yol haritası seansları.' },
      { title: 'Sınav & Motivasyon', text: 'Sınav kaygısı, çalışma düzeni ve motivasyon yönetimi.' },
      { title: 'Aile Görüşmesi', text: 'Tercih ve kariyer sürecinde aile içi iletişimi güçlendiren görüşmeler.' }
    ],
    contact: {
      whatsapp: '905384839780',
      phoneDisplay: '+90 538 483 97 80',
      saglikca: 'https://saglikca.com.tr/uzmanlar/nazik-ozcelik-6a35401b22a15',
      location: 'İstanbul (yüz yüze / online görüşme)',
      hours: 'Haftaiçi hergün'
    }
  };

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function getData() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return saved && typeof saved === 'object' ? Object.assign(clone(defaults), saved) : clone(defaults);
    } catch (_) { return clone(defaults); }
  }
  function saveData(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
  function resetData() { localStorage.removeItem(STORAGE_KEY); }
  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }
  function timeline(items) {
    return items.map(item => `<div class="tl-item"><div class="tl-year">${escapeHtml(item.date)}</div><div class="tl-content"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.detail)}</p></div></div>`).join('');
  }
  function youtubeId(value) {
    const raw = String(value || '').trim();
    const match = raw.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
    return match ? match[1] : raw.replace(/[^\w-]/g, '').slice(0, 11);
  }
  function renderSite(data) {
    const q = selector => document.querySelector(selector);
    if (q('.hero-copy .eyebrow')) q('.hero-copy .eyebrow').textContent = data.general.eyebrow;
    if (q('.hero-copy h1')) q('.hero-copy h1').innerHTML = data.general.heroTitle;
    if (q('.hero-copy > p')) q('.hero-copy > p').textContent = data.general.heroText;
    if (q('.about-text h2')) q('.about-text h2').textContent = data.general.aboutTitle;
    const about = q('.about-text');
    if (about) about.querySelectorAll(':scope > p').forEach(node => node.remove());
    const credentials = q('.about-text .cred-row');
    if (about && credentials) data.about.forEach(text => credentials.insertAdjacentHTML('beforebegin', `<p>${escapeHtml(text)}</p>`));

    const columns = document.querySelectorAll('#deneyim .history-grid > div .timeline-row');
    if (columns[0]) columns[0].innerHTML = timeline(data.experience);
    if (columns[1]) columns[1].innerHTML = timeline(data.education);

    const projectGrid = q('#projeler .project-grid');
    if (projectGrid) projectGrid.innerHTML = data.projects.map((item, index) => `<article class="project-card${index === 0 ? ' featured' : ''}"><span class="project-date">${escapeHtml(item.date)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join('');

    const videoGrid = q('#videolar .video-grid');
    if (videoGrid) videoGrid.innerHTML = data.videos.map(item => { const id = youtubeId(item.id || item.url); const title = escapeHtml(item.title || 'YouTube videosu'); return `<article class="video-card"><a class="video-frame" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer" aria-label="${title}, YouTube'da izle"><img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="${title}" loading="lazy"></a></article>`; }).join('');

    const serviceGrid = q('#hizmetler .service-grid');
    if (serviceGrid) serviceGrid.innerHTML = data.services.map(item => `<div class="service-card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p><a href="#iletisim" class="link">Görüşme talep et →</a></div>`).join('');

    document.querySelectorAll('a[href*="wa.me/"]').forEach(link => { link.href = `https://wa.me/${data.contact.whatsapp}` + (link.href.includes('?text=') ? '?text=Merhaba%2C%20randevu%20olu%C5%9Fturmak%20istiyorum.' : ''); });
    document.querySelectorAll('a[href*="saglikca.com.tr/"]').forEach(link => link.href = data.contact.saglikca);
    const info = document.querySelectorAll('#iletisim .info-line');
    if (info[0]) info[0].querySelector('span:last-child').textContent = data.contact.location;
    if (info[1]) { const a = info[1].querySelector('a'); if (a) a.textContent = data.contact.phoneDisplay; }
    if (info[3]) info[3].querySelector('span:last-child').textContent = data.contact.hours;
    window.NazikSiteData = data;
  }

  window.NazikCMS = { STORAGE_KEY, defaults: clone(defaults), getData, saveData, resetData, renderSite, youtubeId };
  if (document.body && !document.body.classList.contains('admin-page')) renderSite(getData());
})();
