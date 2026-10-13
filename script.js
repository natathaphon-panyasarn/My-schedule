const days = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'];

const defaults = {
    'จันทร์': [['08:00–09:00', 'ตื่นนอน / กินข้าว'], ['09:00–10:30', 'ภาษาญี่ปุ่น: เรียนบทใหม่'], ['10:30–12:00', 'งานส่วนตัว'], ['12:00–13:00', 'พัก / กินข้าว'], ['13:00–14:30', 'ภาษาญี่ปุ่น: ไวยากรณ์และแบบฝึกหัด'], ['14:30–16:30', 'งานส่วนตัว / พัก'], ['16:30–17:30', 'ทบทวนคำศัพท์ญี่ปุ่น'], ['17:30–18:30', 'กินข้าว'], ['18:30–19:30', 'ภาษาญี่ปุ่น: ฟังและอ่าน'], ['19:30–20:30', 'เวลาส่วนตัว / เตรียมตัว'], ['20:30–23:00', 'ไม่อยู่บ้าน'], ['23:00–23:30', 'กลับบ้าน / อาบน้ำ'], ['23:30–24:00', 'เตรียมตัวนอน']],
    'อังคาร': [['06:40–07:00', 'ตื่นนอน'], ['07:00–07:40', 'อาบน้ำ / แต่งตัว / กินข้าว'], ['07:40–09:00', 'เดินทางไปมหาวิทยาลัย + เดินเข้าห้อง'], ['09:00–12:00', 'เรียนมหาวิทยาลัย'], ['12:00–13:00', 'พัก / กินข้าว (ปรับตามตารางคลาสจริง)'], ['13:00–15:00', 'เรียนมหาวิทยาลัย'], ['15:00–16:20', 'เดินกลับ / เดินทางกลับบ้าน'], ['16:20–17:00', 'พัก / กินของว่าง'], ['17:00–18:00', 'ทำการบ้านมหาวิทยาลัย'], ['18:00–18:40', 'พัก / กินข้าว'], ['18:40–19:10', 'ภาษาญี่ปุ่น: ทบทวนสั้น ๆ'], ['19:10–20:10', 'ภาษาญี่ปุ่น: ฟัง / อ่าน'], ['20:10–20:30', 'เตรียมตัวออกจากบ้าน'], ['20:30–23:00', 'ไม่อยู่บ้าน'], ['23:00–23:30', 'กลับบ้าน / อาบน้ำ'], ['23:30–24:00', 'เตรียมตัวนอน']],
    'พุธ': [['06:40–07:00', 'ตื่นนอน'], ['07:00–07:40', 'อาบน้ำ / แต่งตัว / กินข้าว'], ['07:40–09:00', 'เดินทางไปมหาวิทยาลัย + เดินเข้าห้อง'], ['09:00–12:40', 'เรียนมหาวิทยาลัย'], ['12:40–14:00', 'ซื้อตั๋ว / เดินทางกลับบ้าน'], ['14:00–14:30', 'กินข้าว / พัก'], ['14:30–16:00', 'ทำการบ้านมหาวิทยาลัย'], ['16:00–17:00', 'พักผ่อน'], ['17:00–18:00', 'ภาษาญี่ปุ่น: บทเรียนและแบบฝึกหัด'], ['18:00–19:00', 'กินข้าว'], ['19:00–20:00', 'ทำการบ้านต่อ / ทบทวนญี่ปุ่น'], ['20:00–20:30', 'เตรียมตัวออกจากบ้าน'], ['20:30–23:00', 'ไม่อยู่บ้าน'], ['23:00–23:30', 'กลับบ้าน / อาบน้ำ'], ['23:30–24:00', 'เตรียมตัวนอน']],
    'พฤหัสบดี': [['07:00–07:30', 'ตื่นนอน / กินข้าว'], ['07:30–08:30', 'ภาษาญี่ปุ่น: ทบทวนเบา ๆ'], ['08:30–10:30', 'งานส่วนตัว / พัก'], ['10:30–11:20', 'อาบน้ำ / แต่งตัว / กินข้าว'], ['11:20–12:40', 'เดินทางไปมหาวิทยาลัย + เข้าห้อง'], ['12:40–14:40', 'เรียนมหาวิทยาลัย'], ['14:40–16:00', 'ซื้อตั๋ว / เดินทางกลับบ้าน'], ['16:00–16:30', 'พัก / ของว่าง'], ['16:30–18:30', 'ทำการบ้านมหาวิทยาลัย'], ['18:30–19:00', 'กินข้าว'], ['19:00–19:45', 'ภาษาญี่ปุ่น: ทบทวน'], ['19:45–20:30', 'เตรียมตัวออกจากบ้าน'], ['20:30–23:00', 'ไม่อยู่บ้าน'], ['23:00–23:30', 'กลับบ้าน / อาบน้ำ'], ['23:30–24:00', 'เตรียมตัวนอน']],
    'ศุกร์': [['08:00–09:00', 'ตื่นนอน / กินข้าว'], ['09:00–10:30', 'ภาษาญี่ปุ่น: เรียนบทใหม่'], ['10:30–12:00', 'งานส่วนตัว'], ['12:00–13:00', 'พัก / กินข้าว'], ['13:00–14:30', 'ภาษาญี่ปุ่น: แบบฝึกหัด'], ['14:30–16:30', 'งานค้าง / งานอดิเรก'], ['16:30–17:30', 'พักผ่อน'], ['17:30–18:30', 'กินข้าว'], ['18:30–19:15', 'ภาษาญี่ปุ่น: ฟัง / อ่าน'], ['19:15–20:30', 'เวลาส่วนตัว / เตรียมตัว'], ['20:30–23:00', 'ไม่อยู่บ้าน'], ['23:00–23:30', 'กลับบ้าน / อาบน้ำ'], ['23:30–24:00', 'เตรียมตัวนอน']],
    'เสาร์': [['08:00–09:00', 'ตื่นนอน / กินข้าว'], ['09:00–10:00', 'ภาษาญี่ปุ่น: คำศัพท์ / คันจิ'], ['10:00–12:00', 'งานค้าง / งานอดิเรก'], ['12:00–13:00', 'พัก / กินข้าว'], ['13:00–14:00', 'ภาษาญี่ปุ่น: ฝึกอ่าน / ฟัง'], ['14:00–16:30', 'เวลาส่วนตัว'], ['16:30–17:30', 'พักผ่อน'], ['17:30–18:30', 'กินข้าว'], ['18:30–19:15', 'ทบทวนภาษาญี่ปุ่น'], ['19:15–20:30', 'เวลาส่วนตัว / เตรียมตัว'], ['20:30–23:00', 'ไม่อยู่บ้าน'], ['23:00–23:30', 'กลับบ้าน / อาบน้ำ'], ['23:30–24:00', 'เตรียมตัวนอน']],
    'อาทิตย์': [['08:00–09:00', 'ตื่นนอน / กินข้าว'], ['09:00–10:30', 'ภาษาญี่ปุ่น: ทบทวนทั้งสัปดาห์'], ['10:30–12:00', 'งานส่วนตัว'], ['12:00–13:00', 'พัก / กินข้าว'], ['13:00–14:00', 'ภาษาญี่ปุ่น: ทดสอบตัวเอง'], ['14:00–16:00', 'พักผ่อน / งานอดิเรก'], ['16:00–17:00', 'ตรวจการบ้าน / วางแผนสัปดาห์ใหม่'], ['17:00–18:00', 'กินข้าว'], ['18:00–19:00', 'ภาษาญี่ปุ่น: แก้จุดที่ยังไม่แม่น'], ['19:00–20:30', 'เตรียมของ / เวลาส่วนตัว'], ['20:30–23:00', 'ไม่อยู่บ้าน'], ['23:00–23:30', 'กลับบ้าน / อาบน้ำ'], ['23:30–24:00', 'เตรียมตัวนอน']]
};

const DATA_KEY = 'lifeScheduleTH';
const CAT_KEY = 'lifeScheduleCats';
const THEME_KEY = 'lifeScheduleTheme';

const PALETTE = ['#67e8f9', '#a78bfa', '#fcd34d', '#f472b6', '#34d399', '#fb923c', '#60a5fa', '#e879f9'];

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
    for (const d of days) out[d] = (Array.isArray(obj && obj[d]) ? obj[d] : []).map(normalizeRow);
    return out;
}

function normalizeCategories(list) {
    if (!Array.isArray(list)) return [];
    return list.filter(c => c && typeof c === 'object').map(c => ({
        id: typeof c.id === 'string' && c.id ? c.id : uid(),
        name: typeof c.name === 'string' ? c.name : 'หมวดหมู่',
        color: /^#[0-9a-fA-F]{6}$/.test(c.color || '') ? c.color : PALETTE[0]
    }));
}

let data, categories;
try {
    data = normalizeData(JSON.parse(localStorage.getItem(DATA_KEY)) || structuredClone(defaults));
} catch {
    data = normalizeData(structuredClone(defaults));
}
try {
    categories = normalizeCategories(JSON.parse(localStorage.getItem(CAT_KEY)) || []);
} catch {
    categories = [];
}

let active = days[0];
let pop = null;
let popCtx = null;
const $ = id => document.getElementById(id);

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
        let label = theme === 'dark' ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด';
        btn.setAttribute('aria-label', label);
        btn.setAttribute('title', label);
        btn.setAttribute('aria-pressed', String(theme === 'dark'));
    }
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch { }
}

$('themeToggle').onclick = () => applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
applyTheme(currentTheme());

/* ---------- Tabs ---------- */
function renderTabs() {
    $('tabs').innerHTML = days.map(d => `<button class="btn tab ${d === active ? 'active' : ''}" data-day="${d}">${d}</button>`).join('');
    document.querySelectorAll('[data-day]').forEach(b => b.onclick = () => {
        active = b.dataset.day;
        render();
    });
}

/* ---------- Categories ---------- */
function renderCategories() {
    let list = $('catList');
    if (!categories.length) {
        list.innerHTML = '<p class="cat-empty">ยังไม่มีหมวดหมู่ไฮไลต์ — กด “＋ เพิ่มหมวดหมู่” เพื่อเริ่มต้น</p>';
        return;
    }
    list.innerHTML = categories.map(c => `
        <div class="cat-row">
            <input type="color" class="cat-color" value="${esc(c.color)}" data-cat-color="${esc(c.id)}" aria-label="สีไฮไลต์">
            <input type="text" class="cat-name" value="${esc(c.name)}" data-cat-name="${esc(c.id)}" maxlength="40" placeholder="ชื่อหมวดหมู่" aria-label="ชื่อไฮไลต์">
            <button type="button" class="del" data-cat-del="${esc(c.id)}" title="ลบหมวดหมู่" aria-label="ลบหมวดหมู่">×</button>
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
    for (const d of days) for (const r of data[d]) if (r[2] === id) r[2] = '';
    persist();
    persistCats();
    closePopover();
    renderCategories();
    syncDots();
    renderOverview();
}

/* ---------- Editor ---------- */
function renderEditor() {
    $('dayTitle').textContent = 'วัน' + active;
    $('editor').innerHTML = data[active].map((r, i) => {
        let cat = catById(r[2]);
        let dot = cat
            ? `<button type="button" class="cat-dot set" data-dot="${i}" title="ไฮไลต์: ${esc(cat.name || 'ไม่มีชื่อ')}" aria-label="เลือกไฮไลต์" style="--dot:${esc(cat.color)}"></button>`
            : `<button type="button" class="cat-dot" data-dot="${i}" title="ไม่มีไฮไลต์" aria-label="เลือกไฮไลต์"></button>`;
        return `<div class="item">
            <input class="time" aria-label="เวลา" value="${esc(r[0])}" data-time="${i}">
            <input class="task" aria-label="กิจกรรม" value="${esc(r[1])}" data-task="${i}">
            ${dot}
            <button type="button" class="del" title="ลบกิจกรรม" aria-label="ลบกิจกรรม" data-del="${i}">×</button>
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
            b.title = 'ไฮไลต์: ' + (cat.name || 'ไม่มีชื่อ');
        } else {
            b.classList.remove('set');
            b.style.removeProperty('--dot');
            b.title = 'ไม่มีไฮไลต์';
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
    let html = `<button type="button" class="cat-opt${catById(cur) ? '' : ' active'}" data-opt=""><span class="swatch none"></span><span>ไม่มีไฮไลต์</span></button>`;
    if (categories.length) {
        html += categories.map(c =>
            `<button type="button" class="cat-opt${c.id === cur ? ' active' : ''}" data-opt="${esc(c.id)}"><span class="swatch" style="--dot:${esc(c.color)}"></span><span>${esc(c.name || 'ไม่มีชื่อ')}</span></button>`
        ).join('');
    } else {
        html += '<div class="cat-empty">ยังไม่มีหมวดหมู่ — เพิ่มได้ด้านบน</div>';
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
    let html = '<table><thead><tr><th>เวลา</th>' + days.map(d => `<th>${d}</th>`).join('') + '</tr></thead><tbody>';
    let times = [...new Set(days.flatMap(d => data[d].map(r => r[0])))].sort();

    for (const t of times) {
        html += '<tr><td>' + esc(t) + '</td>' + days.map(d => {
            let r = data[d].find(x => x[0] === t);
            if (!r) return '<td>—</td>';
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

$('add').onclick = $('addRow').onclick = () => {
    data[active].push(['--:--–--:--', 'กิจกรรมใหม่', '']);
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
    let lines = ['วัน,เวลา,กิจกรรม,หมวดหมู่'];
    days.forEach(d => data[d].forEach(r => {
        let cat = catById(r[2]);
        lines.push([q(d), q(r[0]), q(r[1]), q(cat ? cat.name : '')].join(','));
    }));
    download('ตารางชีวิตประจำสัปดาห์.csv', '\ufeff' + lines.join('\n'), 'text/csv;charset=utf-8');
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
            alert('อ่านไฟล์ JSON ไม่ได้');
            return;
        }
        let src = (parsed && parsed.days) ? parsed.days : parsed;
        if (!src || !days.every(d => Array.isArray(src[d]))) {
            alert('ไฟล์ JSON ไม่ถูกต้อง (ต้องมี key: จันทร์–อาทิตย์ เป็น array)');
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

$('reset').onclick = () => {
    if (!confirm('คืนค่าตารางเริ่มต้น ใช่หรือไม่? (หมวดหมู่ไฮไลต์จะถูกล้างทั้งหมด)')) return;
    data = normalizeData(structuredClone(defaults));
    categories = [];
    persist();
    persistCats();
    render();
    $('file').value = '';
};

$('toggle').onclick = () => $('overview').classList.toggle('hidden');

render();

const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();