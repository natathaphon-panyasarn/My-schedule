const DAY_KEYS = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'];

const I18N = {
    en: {
        langCode: 'EN',
        htmlLang: 'en',
        pageTitle: 'Weekly Schedule',
        heading: 'Weekly Schedule',
        subtitle: 'Edit times and activities freely · Auto-saved in this browser',
        themeToLight: 'Switch to light mode',
        themeToDark: 'Switch to dark mode',
        langToggleTitle: 'Switch language (EN / TH)',
        exportCsv: 'Export CSV',
        downloadJson: 'Download JSON',
        importJson: 'Import JSON',
        clear: 'Clear',
        catTitle: 'Highlight categories',
        addCategory: '+ Add category',
        catHelp: 'Define your own highlight names and colors, then apply them to each activity.',
        addRow: '+ Add time slot',
        editorHelp: 'Click a time or activity field to edit. Remove activities with the × button.',
        overviewTitle: 'Weekly overview',
        showHide: 'Show / Hide',
        overviewHelp: 'Scroll horizontally to see every day.',
        noCats: 'No highlight categories yet — press “+ Add category” to begin',
        noHighlight: 'No highlight',
        selectHighlight: 'Select highlight',
        highlightPrefix: 'Highlight',
        noName: 'No name',
        colorLabel: 'Highlight color',
        nameLabel: 'Highlight name',
        namePlaceholder: 'Category name',
        deleteCat: 'Delete category',
        timeLabel: 'Time',
        activityLabel: 'Activity',
        deleteActivity: 'Delete activity',
        newActivity: 'New activity',
        timePlaceholder: '--:--–--:--',
        dash: '—',
        confirmClear: 'Are you sure you want to clear all data?',
        jsonReadError: 'Could not read the JSON file.',
        jsonInvalid: 'Invalid JSON file.',
        noCatsPopover: 'No categories yet — add one above',
        csvFile: 'weekly-schedule.csv',
        csvDay: 'Day',
        csvTime: 'Time',
        csvActivity: 'Activity',
        csvCategory: 'Category',
        days: { 'จันทร์': 'Monday', 'อังคาร': 'Tuesday', 'พุธ': 'Wednesday', 'พฤหัสบดี': 'Thursday', 'ศุกร์': 'Friday', 'เสาร์': 'Saturday', 'อาทิตย์': 'Sunday' }
    },
    th: {
        langCode: 'TH',
        htmlLang: 'th',
        pageTitle: 'ตารางชีวิตประจำสัปดาห์',
        heading: 'ตารางชีวิตประจำสัปดาห์',
        subtitle: 'แก้ไขเวลาและกิจกรรมได้เอง · บันทึกอัตโนมัติในเบราว์เซอร์นี้',
        themeToLight: 'สลับเป็นโหมดสว่าง',
        themeToDark: 'สลับเป็นโหมดมืด',
        langToggleTitle: 'สลับภาษา (EN / TH)',
        exportCsv: 'ส่งออก CSV',
        downloadJson: 'ดาวน์โหลด JSON',
        importJson: 'นำเข้า JSON',
        clear: 'เคลียร์',
        catTitle: 'หมวดหมู่ไฮไลต์',
        addCategory: '+ เพิ่มหมวดหมู่',
        catHelp: 'กำหนดชื่อและสีของไฮไลต์เอง แล้วเลือกใช้กับแต่ละกิจกรรมได้',
        addRow: '+ เพิ่มช่วงเวลา',
        editorHelp: 'คลิกช่องเวลาและกิจกรรมเพื่อแก้ไข ลบกิจกรรมได้ด้วยปุ่ม ×',
        overviewTitle: 'ภาพรวมทั้งสัปดาห์',
        showHide: 'ซ่อน/แสดง',
        overviewHelp: 'เลื่อนแนวนอนเพื่อดูทุกวัน',
        noCats: 'ยังไม่มีหมวดหมู่ไฮไลต์ — กด “+ เพิ่มหมวดหมู่” เพื่อเริ่มต้น',
        noHighlight: 'ไม่มีไฮไลต์',
        selectHighlight: 'เลือกไฮไลต์',
        highlightPrefix: 'ไฮไลต์',
        noName: 'ไม่มีชื่อ',
        colorLabel: 'สีไฮไลต์',
        nameLabel: 'ชื่อไฮไลต์',
        namePlaceholder: 'ชื่อหมวดหมู่',
        deleteCat: 'ลบหมวดหมู่',
        timeLabel: 'เวลา',
        activityLabel: 'กิจกรรม',
        deleteActivity: 'ลบกิจกรรม',
        newActivity: '',
        timePlaceholder: '--:--–--:--',
        dash: '—',
        confirmClear: 'คุณแน่ใจหรือไม่ว่าต้องการเคลียร์ข้อมูลทั้งหมด?',
        jsonReadError: 'อ่านไฟล์ JSON ไม่ได้',
        jsonInvalid: 'ไฟล์ JSON ไม่ถูกต้อง',
        noCatsPopover: 'ยังไม่มีหมวดหมู่ — เพิ่มได้ด้านบน',
        csvFile: 'ตารางชีวิตประจำสัปดาห์.csv',
        csvDay: 'วัน',
        csvTime: 'เวลา',
        csvActivity: 'กิจกรรม',
        csvCategory: 'หมวดหมู่',
        days: { 'จันทร์': 'จันทร์', 'อังคาร': 'อังคาร', 'พุธ': 'พุธ', 'พฤหัสบดี': 'พฤหัสบดี', 'ศุกร์': 'ศุกร์', 'เสาร์': 'เสาร์', 'อาทิตย์': 'อาทิตย์' }
    }
};

const DATA_KEY = 'lifeScheduleTH';
const CAT_KEY = 'lifeScheduleCats';
const THEME_KEY = 'lifeScheduleTheme';
const LANG_KEY = 'lifeScheduleLang';
const PALETTE = ['#67e8f9', '#a78bfa', '#fcd34d', '#f472b6', '#34d399', '#fb923c', '#60a5fa', '#e879f9'];
const DEFAULT_ROWS = [['08:00–09:00', ''], ['09:00–10:00', ''], ['10:00–11:00', '']];

function uid() { return 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function blankDays() { let out = {}; for (const d of DAY_KEYS) out[d] = DEFAULT_ROWS.map(r => r.slice()); return out; }

let data, categories, lang;
try { data = JSON.parse(localStorage.getItem(DATA_KEY)) || blankDays(); } catch { data = blankDays(); }
try { categories = JSON.parse(localStorage.getItem(CAT_KEY)) || []; } catch { categories = []; }
try { lang = localStorage.getItem(LANG_KEY) === 'th' ? 'th' : 'en'; } catch { lang = 'en'; }

let active = DAY_KEYS[0];
let pop = null;
const $ = id => document.getElementById(id);

function t(key) { return (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key; }
function dayLabel(key) { return (I18N[lang] && I18N[lang].days && I18N[lang].days[key]) || I18N.en.days[key] || key; }
function persist() { localStorage.setItem(DATA_KEY, JSON.stringify(data)); }
function persistCats() { localStorage.setItem(CAT_KEY, JSON.stringify(categories)); }
function catById(id) { return categories.find(c => c.id === id) || null; }

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    let btn = $('themeToggle');
    if (btn) {
        let label = theme === 'dark' ? t('themeToLight') : t('themeToDark');
        btn.setAttribute('aria-label', label);
        btn.setAttribute('title', label);
    }
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
}

function applyLang() {
    document.documentElement.lang = I18N[lang].htmlLang;
    document.title = t('pageTitle');
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    let label = $('langLabel'); if (label) label.textContent = I18N[lang].langCode;
    applyTheme(document.documentElement.dataset.theme || 'dark');
    render();
}

function renderTabs() {
    $('tabs').innerHTML = DAY_KEYS.map(d => `<button class="btn tab ${d === active ? 'active' : ''}" data-day="${esc(d)}">${esc(dayLabel(d))}</button>`).join('');
    document.querySelectorAll('[data-day]').forEach(b => b.onclick = () => { active = b.dataset.day; render(); });
}

function renderCategories() {
    let list = $('catList');
    if (!categories.length) { list.innerHTML = `<p class="cat-empty">${esc(t('noCats'))}</p>`; return; }
    list.innerHTML = categories.map(c => `
        <div class="cat-row">
            <input type="color" class="cat-color" value="${esc(c.color)}" data-cat-color="${esc(c.id)}">
            <input type="text" class="cat-name" value="${esc(c.name)}" data-cat-name="${esc(c.id)}" placeholder="${esc(t('namePlaceholder'))}">
            <button type="button" class="del" data-cat-del="${esc(c.id)}">×</button>
        </div>`).join('');

    document.querySelectorAll('[data-cat-color]').forEach(e => e.oninput = () => { let c = catById(e.dataset.catColor); if(c){ c.color = e.value; persistCats(); renderOverview(); } });
    document.querySelectorAll('[data-cat-name]').forEach(e => e.oninput = () => { let c = catById(e.dataset.catName); if(c){ c.name = e.value; persistCats(); renderOverview(); } });
    document.querySelectorAll('[data-cat-del]').forEach(e => e.onclick = () => {
        categories = categories.filter(c => c.id !== e.dataset.catDel);
        persistCats(); renderCategories(); renderOverview();
    });
}

function renderEditor() {
    $('dayTitle').textContent = dayLabel(active);$('editor').innerHTML = data[active].map((r, i) => {
        let cat = catById(r[2]);
        let dot = cat ? `<button type="button" class="cat-dot set" data-dot="${i}" style="--dot:${esc(cat.color)}"></button>` : `<button type="button" class="cat-dot" data-dot="${i}"></button>`;
        return `<div class="item">
            <input class="time" value="${esc(r[0])}" data-time="${i}">
            <input class="task" value="${esc(r[1])}" data-task="${i}">
            ${dot}
            <button type="button" class="del" data-del="${i}">×</button>
        </div>`;
    }).join('');

    document.querySelectorAll('[data-time]').forEach(e => e.onchange = () => { data[active][+e.dataset.time][0] = e.value; persist(); renderOverview(); });
    document.querySelectorAll('[data-task]').forEach(e => e.onchange = () => { data[active][+e.dataset.task][1] = e.value; persist(); renderOverview(); });
    document.querySelectorAll('[data-del]').forEach(e => e.onclick = () => { data[active].splice(+e.dataset.del, 1); persist(); render(); });
    document.querySelectorAll('[data-dot]').forEach(b => b.onclick = e => openCatPopover(e.currentTarget, +b.dataset.dot));
}

function closePopover() { if (pop) { pop.remove(); pop = null; } }
function openCatPopover(anchor, index) {
    closePopover();
    let cur = data[active][index][2];
    let html = `<button type="button" class="cat-opt" data-opt=""><span class="swatch none"></span><span>${esc(t('noHighlight'))}</span></button>`;
    if (categories.length) {
        html += categories.map(c => `<button type="button" class="cat-opt" data-opt="${esc(c.id)}"><span class="swatch" style="--dot:${esc(c.color)}"></span><span>${esc(c.name || t('noName'))}</span></button>`).join('');
    }
    pop = document.createElement('div'); pop.className = 'cat-popover'; pop.innerHTML = html;
    document.body.appendChild(pop);
    let r = anchor.getBoundingClientRect();
    pop.style.left = r.left + 'px'; pop.style.top = (r.bottom + 6) + 'px';
    pop.querySelectorAll('[data-opt]').forEach(b => {
        b.onclick = () => { data[active][index][2] = b.dataset.opt || ''; persist(); renderEditor(); renderOverview(); closePopover(); };
    });
}

function renderOverview() {
    let html = `<table><thead><tr><th>${esc(t('timeLabel'))}</th>` + DAY_KEYS.map(d => `<th>${esc(dayLabel(d))}</th>`).join('') + '</tr></thead><tbody>';
    let times = [...new Set(DAY_KEYS.flatMap(d => data[d].map(r => r[0])))].sort();
    for (const tm of times) {
        html += '<tr><td>' + esc(tm) + '</td>' + DAY_KEYS.map(d => {
            let r = data[d].find(x => x[0] === tm);
            if (!r) return '<td>' + esc(t('dash')) + '</td>';
            let cat = catById(r[2]);
            let attrs = cat ? ` class="has-cat" style="--cell:${esc(cat.color)}"` : '';
            return `<td${attrs}>` + esc(r[1]) + '</td>';
        }).join('') + '</tr>';
    }
    $('overview').innerHTML = html + '</tbody></table>';
}

function render() { renderTabs(); renderCategories(); renderEditor(); renderOverview(); }

$('themeToggle').onclick = () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');$('langToggle').onclick = () => { lang = lang === 'en' ? 'th' : 'en'; localStorage.setItem(LANG_KEY, lang); applyLang(); };
$('addRow').onclick = () => { data[active].push([t('timePlaceholder'), '', '']); persist(); render(); };$('addCat').onclick = () => { categories.push({ id: uid(), name: '', color: PALETTE[categories.length % PALETTE.length] }); persistCats(); renderCategories(); };

$('csv').onclick = () => {
    let q = s => '"' + String(s).replace(/"/g, '""') + '"';
    let lines = [[t('csvDay'), t('csvTime'), t('csvActivity'), t('csvCategory')].map(q).join(',')];
    DAY_KEYS.forEach(d => data[d].forEach(r => {
        let cat = catById(r[2]);
        lines.push([q(dayLabel(d)), q(r[0]), q(r[1]), q(cat ? cat.name : '')].join(','));
    }));
    let blob = new Blob(['\ufeff' + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
    let a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = t('csvFile'); a.click();
};

$('json').onclick = () => {
    let blob = new Blob([JSON.stringify({ categories, ...data }, null, 2)], { type: 'application/json' });
    let a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'life-schedule.json'; a.click();
};

$('file').onchange = e => {
    let f = e.target.files[0];
    if (!f) return;
    let fr = new FileReader();
    fr.onload = () => {
        try {
            let parsed = JSON.parse(fr.result);
            data = parsed.days || parsed;
            if (parsed.categories) { categories = parsed.categories; persistCats(); }
            persist(); render(); $('file').value = '';
        } catch { alert(t('jsonReadError')); }
    };
    fr.readAsText(f);
};

$('clear').onclick = () => {
    if (!confirm(t('confirmClear'))) return;
    data = blankDays(); categories = []; persist(); persistCats(); render();
};

$('toggle').onclick = () =>$('overview').classList.toggle('hidden');

applyLang();
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();