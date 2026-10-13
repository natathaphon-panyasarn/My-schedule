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
        addActivity: '＋ Add example activity',
        exportCsv: 'Export CSV',
        downloadJson: 'Download JSON',
        importJson: 'Import JSON',
        clear: 'Clear',
        catTitle: 'Highlight categories',
        addCategory: '＋ Add category',
        catHelp: 'Define your own highlight names and colors, then apply them to each activity.',
        addRow: '＋ Add time slot',
        editorHelp: 'Click a time or activity field to edit. Remove activities with the × button.',
        overviewTitle: 'Weekly overview',
        showHide: 'Show / Hide',
        overviewHelp: 'Scroll horizontally to see every day.',
        noCats: 'No highlight categories yet — press “＋ Add category” to begin',
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
        jsonInvalid: 'Invalid JSON file (must contain the 7 day keys as arrays).',
        noCatsPopover: 'No categories yet — add one above',
        csvFile: 'weekly-schedule.csv',
        csvDay: 'Day',
        csvTime: 'Time',
        csvActivity: 'Activity',
        csvCategory: 'Category',
        days: {
            'จันทร์': 'Monday',
            'อังคาร': 'Tuesday',
            'พุธ': 'Wednesday',
            'พฤหัสบดี': 'Thursday',
            'ศุกร์': 'Friday',
            'เสาร์': 'Saturday',
            'อาทิตย์': 'Sunday'
        }
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
        addActivity: '＋ เพิ่มกิจกรรมตัวอย่าง',
        exportCsv: 'ส่งออก CSV',
        downloadJson: 'ดาวน์โหลด JSON',
        importJson: 'นำเข้า JSON',
        clear: 'เคลียร์',
        catTitle: 'หมวดหมู่ไฮไลต์',
        addCategory: '＋ เพิ่มหมวดหมู่',
        catHelp: 'กำหนดชื่อและสีของไฮไลต์เอง แล้วเลือกใช้กับแต่ละกิจกรรมได้',
        addRow: '＋ เพิ่มช่วงเวลา',
        editorHelp: 'คลิกช่องเวลาและกิจกรรมเพื่อแก้ไข ลบกิจกรรมได้ด้วยปุ่ม ×',
        overviewTitle: 'ภาพรวมทั้งสัปดาห์',
        showHide: 'ซ่อน/แสดง',
        overviewHelp: 'เลื่อนแนวนอนเพื่อดูทุกวัน',
        noCats: 'ยังไม่มีหมวดหมู่ไฮไลต์ — กด “＋ เพิ่มหมวดหมู่” เพื่อเริ่มต้น',
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
        jsonInvalid: 'ไฟล์ JSON ไม่ถูกต้อง (ต้องมี key: จันทร์–อาทิตย์ เป็น array)',
        noCatsPopover: 'ยังไม่มีหมวดหมู่ — เพิ่มได้ด้านบน',
        csvFile: 'ตารางชีวิตประจำสัปดาห์.csv',
        csvDay: 'วัน',
        csvTime: 'เวลา',
        csvActivity: 'กิจกรรม',
        csvCategory: 'หมวดหมู่',
        days: {
            'จันทร์': 'จันทร์',
            'อังคาร': 'อังคาร',
            'พุธ': 'พุธ',
            'พฤหัสบดี': 'พฤหัสบดี',
            'ศุกร์': 'ศุกร์',
            'เสาร์': 'เสาร์',
            'อาทิตย์': 'อาทิตย์'
        }
    }
};

const DATA_KEY = 'lifeScheduleTH';
const CAT_KEY = 'lifeScheduleCats';
const THEME_KEY = 'lifeScheduleTheme';
const LANG_KEY = 'lifeScheduleLang';

const PALETTE = ['#67e8f9', '#a78bfa', '#fcd34d', '#f472b6', '#34d399', '#fb923c', '#60a5fa', '#e879f9'];

const DEFAULT_ROWS = [['08:00–09:00', ''], ['09:00–10:00', ''], ['10:00–11:00', '']];

function uid() {
    return 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function normalizeRow(r) {
    let a = Array.isArray(r) ? r : [];
    return [a[0] || '--:--–--:--', a[1] || '', typeof a[2] === 'string' ? a[2] : ''];
}

function normalizeData(obj) {
    let out = {};
    for (const d of DAY_KEYS) out[d] = (Array.isArray(obj && obj[d]) ? obj[d] : []).map(normalizeRow);
    return out;
}

function normalizeCategories(list) {
    if (!Array.isArray(list)) return [];
    return list.filter(c => c && typeof c === 'object').map(c => ({
        id: typeof c.id === 'string' && c.id ? c.id : uid(),
        name: typeof c.name === 'string' ? c.name : '',
        color: /^#[0-9a-fA-F]{6}$/.test(c.color || '') ? c.color : PALETTE[0]
    }));
}

/* Empty template — a few blank rows, no personal data */
function blankDays() {
    let out = {};
    for (const d of DAY_KEYS) out[d] = DEFAULT_ROWS.map(r => r.slice());
    return out;
}

let data, categories, lang;

try {
    let stored = JSON.parse(localStorage.getItem(DATA_KEY));
    data = stored ? normalizeData(stored) : blankDays();
} catch {
    data = blankDays();
}

try {
    categories = normalizeCategories(JSON.parse(localStorage.getItem(CAT_KEY)) || []);
} catch {
    categories = [];
}

try {
    lang = localStorage.getItem(LANG_KEY) === 'th' ? 'th' : 'en';
} catch {
    lang = 'en';
}

let active = DAY_KEYS[0];
let pop = null;
let popCtx = null;
const $ = id => document.getElementById(id);

function t(key) {
    return (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key;
}

function dayLabel(key) {
    return (I18N[lang] && I18N[lang].days && I18N[lang].days[key]) || I18N.en.days[key] || key;
}

function persist() {
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
}

function persistCats() {
    localStorage.setItem(CAT_KEY, JSON.stringify(categories));
}

function catById(id) {
    return categories.find(c => c.id === id) || null;
}

/* ---------- Theme ---------- */
function currentTheme() {
    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    let btn = $('themeToggle');
    if (btn) {
        let label = theme === 'dark' ? t('themeToLight') : t('themeToDark');
        btn.setAttribute('aria-label', label);
        btn.setAttribute('title', label);
        btn.setAttribute('aria-pressed', String(theme === 'dark'));
    }
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch { }
}

/* ---------- Language ---------- */
function applyLang() {
    document.documentElement.lang = I18N[lang].htmlLang;
    document.title = t('pageTitle');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });

    let label = $('langLabel');
    if (label) label.textContent = I18N[lang].langCode;

    let btn = $('langToggle');
    if (btn) {
        btn.setAttribute('title', t('langToggleTitle'));
        btn.setAttribute('aria-label', t('langToggleTitle'));
    }

    applyTheme(currentTheme());
    render();
}

/* ---------- Tabs ---------- */
function renderTabs() {
    $('tabs').innerHTML = DAY_KEYS.map(d =>
        `<button class="btn tab ${d === active ? 'active' : ''}" data-day="${esc(d)}">${esc(dayLabel(d))}</button>`
    ).join('');
    document.querySelectorAll('[data-day]').forEach(b => b.onclick = () => {
        active = b.dataset.day;
        render();
    });
}

/* ---------- Categories ---------- */
function renderCategories() {
    let list = $('catList');
    if (!categories.length) {
        list.innerHTML = `<p class="cat-empty">${esc(t('noCats'))}</p>`;
        return;
    }
    list.innerHTML = categories.map(c => `
        <div class="cat-row">
            <input type="color" class="cat-color" value="${esc(c.color)}" data-cat-color="${esc(c.id)}" aria-label="${esc(t('colorLabel'))}">
            <input type="text" class="cat-name" value="${esc(c.name)}" data-cat-name="${esc(c.id)}" maxlength="40" placeholder="${esc(t('namePlaceholder'))}" aria-label="${esc(t('nameLabel'))}">
            <button type="button" class="del" data-cat-del="${esc(c.id)}" title="${esc(t('deleteCat'))}" aria-label="${esc(t('deleteCat'))}">×</button>
        </div>`).join('');

    document.querySelectorAll('[data-cat-color]').forEach(e => e.oninput = () => {
        let c = catById(e.dataset.catColor);
        if (!c) return;
        c.color = e.value;
        persistCats();
        syncDots();
        renderOverview();
    });

    document.querySelectorAll('[data-cat-name]').forEach(e => e.oninput = () => {
        let c = catById(e.dataset.catName);
        if (!c) return;
        c.name = e.value;
        persistCats();
        syncDots();
        renderOverview();
    });

    document.querySelectorAll('[data-cat-del]').forEach(e => e.onclick = () => deleteCategory(e.dataset.catDel));
}

function deleteCategory(id) {
    categories = categories.filter(c => c.id !== id);
    for (const d of DAY_KEYS) for (const r of data[d]) if (r[2] === id) r[2] = '';
    persist();
    persistCats();
    closePopover();
    renderCategories();
    syncDots();
    renderOverview();
}

/* ---------- Editor ---------- */
function renderEditor() {
    $('dayTitle').textContent = dayLabel(active);
    $('editor').innerHTML = data[active].map((r, i) => {
        let cat = catById(r[2]);
        let dot = cat
            ? `<button type="button" class="cat-dot set" data-dot="${i}" title="${esc(t('highlightPrefix') + ': ' + (cat.name || t('noName')))}" aria-label="${esc(t('selectHighlight'))}" style="--dot:${esc(cat.color)}"></button>`
            : `<button type="button" class="cat-dot" data-dot="${i}" title="${esc(t('noHighlight'))}" aria-label="${esc(t('selectHighlight'))}"></button>`;
        return `<div class="item">
            <input class="time" aria-label="${esc(t('timeLabel'))}" placeholder="${esc(t('timePlaceholder'))}" value="${esc(r[0])}" data-time="${i}">
            <input class="task" aria-label="${esc(t('activityLabel'))}" placeholder="${esc(t('newActivity'))}" value="${esc(r[1])}" data-task="${i}">
            ${dot}
            <button type="button" class="del" title="${esc(t('deleteActivity'))}" aria-label="${esc(t('deleteActivity'))}" data-del="${i}">×</button>
        </div>`;
    }).join('');

    document.querySelectorAll('[data-time]').forEach(e => e.onchange = () => {
        data[active][+e.dataset.time][0] = e.value;
        persist();
        renderOverview();
    });

    document.querySelectorAll('[data-task]').forEach(e => e.onchange = () => {
        data[active][+e.dataset.task][1] = e.value;
        persist();
        renderOverview();
    });

    document.querySelectorAll('[data-del]').forEach(e => e.onclick = () => {
        data[active].splice(+e.dataset.del, 1);
        persist();
        render();
    });

    document.querySelectorAll('[data-dot]').forEach(b => b.onclick = e => openCatPopover(e.currentTarget, +b.dataset.dot));
}

function syncDots() {
    document.querySelectorAll('[data-dot]').forEach(b => {
        let i = +b.dataset.dot;
        let cat = catById(data[active][i] && data[active][i][2]);
        if (cat) {
            b.classList.add('set');
            b.style.setProperty('--dot', cat.color);
            b.title = t('highlightPrefix') + ': ' + (cat.name || t('noName'));
        } else {
            b.classList.remove('set');
            b.style.removeProperty('--dot');
            b.title = t('noHighlight');
        }
    });
}

/* ---------- Category popover ---------- */
function closePopover() {
    if (pop) {
        pop.remove();
        pop = null;
        popCtx = null;
        document.removeEventListener('click', onDocClick, true);
        document.removeEventListener('keydown', onKey, true);
    }
}

function onDocClick(e) {
    if (pop && !pop.contains(e.target) && !e.target.closest('.cat-dot')) closePopover();
}

function onKey(e) {
    if (e.key === 'Escape') closePopover();
}

function openCatPopover(anchor, index) {
    closePopover();
    let cur = data[active][index][2];
    let html = `<button type="button" class="cat-opt${catById(cur) ? '' : ' active'}" data-opt=""><span class="swatch none"></span><span>${esc(t('noHighlight'))}</span></button>`;
    if (categories.length) {
        html += categories.map(c =>
            `<button type="button" class="cat-opt${c.id === cur ? ' active' : ''}" data-opt="${esc(c.id)}"><span class="swatch" style="--dot:${esc(c.color)}"></span><span>${esc(c.name || t('noName'))}</span></button>`
        ).join('');
    } else {
        html += `<div class="cat-empty">${esc(t('noCatsPopover'))}</div>`;
    }

    pop = document.createElement('div');
    pop.className = 'cat-popover';
    pop.setAttribute('role', 'listbox');
    pop.innerHTML = html;
    document.body.appendChild(pop);

    let r = anchor.getBoundingClientRect();
    let pw = pop.offsetWidth, ph = pop.offsetHeight;
    let left = Math.max(8, Math.min(r.left, window.innerWidth - pw - 8));
    let top = r.bottom + 6;
    if (top + ph > window.innerHeight - 8) top = Math.max(8, r.top - ph - 6);
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
    popCtx = { anchor, index };

    pop.querySelectorAll('[data-opt]').forEach(b => b.onclick = () => {
        data[active][index][2] = b.dataset.opt || '';
        persist();
        syncDots();
        renderOverview();
        closePopover();
    });

    setTimeout(() => {
        document.addEventListener('click', onDocClick, true);
        document.addEventListener('keydown', onKey, true);
    }, 0);
}

/* ---------- Overview ---------- */
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

function render() {
    renderTabs();
    renderCategories();
    renderEditor();
    renderOverview();
}

/* ---------- File ops ---------- */
function download(name, content, type) {
    let a = document.createElement('a');
    let url = URL.createObjectURL(new Blob([content], { type }));
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* ---------- Events ---------- */
$('themeToggle').onclick = () => applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');

$('langToggle').onclick = () => {
    lang = lang === 'en' ? 'th' : 'en';
    try {
        localStorage.setItem(LANG_KEY, lang);
    } catch { }
    applyLang();
};

$('add').onclick = $('addRow').onclick = () => {
    data[active].push([t('timePlaceholder'), '', '']);
    persist();
    render();
};

$('addCat').onclick = () => {
    categories.push({ id: uid(), name: '', color: PALETTE[categories.length % PALETTE.length] });
    persistCats();
    renderCategories();
    let last = document.querySelector('#catList .cat-row:last-child .cat-name');
    if (last) { last.focus(); last.select(); }
};

$('csv').onclick = () => {
    let q = s => '"' + String(s).replace(/"/g, '""') + '"';
    let lines = [[t('csvDay'), t('csvTime'), t('csvActivity'), t('csvCategory')].map(q).join(',')];
    DAY_KEYS.forEach(d => data[d].forEach(r => {
        let cat = catById(r[2]);
        lines.push([q(dayLabel(d)), q(r[0]), q(r[1]), q(cat ? cat.name : '')].join(','));
    }));
    download(t('csvFile'), '\ufeff' + lines.join('\n'), 'text/csv;charset=utf-8');
};

$('json').onclick = () => download('life-schedule.json', JSON.stringify({ categories, ...data }, null, 2), 'application/json');

$('file').onchange = e => {
    let f = e.target.files[0];
    if (!f) return;
    let fr = new FileReader();
    fr.onload = () => {
        let parsed;
        try {
            parsed = JSON.parse(fr.result);
        } catch {
            alert(t('jsonReadError'));
            return;
        }
        let src = (parsed && parsed.days) ? parsed.days : parsed;
        if (!src || !DAY_KEYS.every(d => Array.isArray(src[d]))) {
            alert(t('jsonInvalid'));
            return;
        }
        data = normalizeData(src);
        if (parsed && Array.isArray(parsed.categories)) {
            categories = normalizeCategories(parsed.categories);
            persistCats();
        }
        persist();
        render();
        $('file').value = '';
    };
    fr.readAsText(f);
};

$('clear').onclick = () => {
    if (!confirm(t('confirmClear'))) return;
    data = blankDays();
    categories = [];
    persist();
    persistCats();
    closePopover();
    render();
    $('file').value = '';
};

$('toggle').onclick = () => $('overview').classList.toggle('hidden');

/* ---------- Init ---------- */
applyLang();

const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();
