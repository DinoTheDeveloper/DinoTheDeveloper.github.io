document.documentElement.classList.add('js');

/* ---------- Projects ----------
   layout: 'web' = full-page desktop screenshot, 'phone' = mobile screens */
const IMG = 'assets/img/work/';

const FEATURED = [
    {
        id: 'bettabets', title: 'Bettabets', context: 'Bettabets · 2023–2024', badge: '80K+ monthly users',
        layout: 'web', shots: 5, shotLayouts: ['web', 'phone', 'phone', 'phone', 'phone'],
        short: 'Lead frontend and UX/UI on a South African online casino with 80,000+ monthly active users.',
        desc: 'I led frontend and UX/UI on the Bettabets online casino, rebuilding the interface across desktop and mobile. A/B tests, heatmaps, session recordings and analytics guided each iteration, helping position Bettabets among South Africa\'s leading online casinos.',
        tags: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'A/B testing'],
    },
    {
        id: 'dinobets', title: 'DinoBets', context: 'Personal project', badge: 'React + Vite',
        layout: 'web', shots: 7, shotLayouts: ['web', 'phone', 'phone', 'phone', 'phone', 'phone', 'phone'],
        short: 'A casino frontend concept I built to go deep on React, with Vite for fast builds.',
        desc: 'DinoBets is a casino frontend concept I built after learning React. I used Vite for fast builds, and the layout is responsive from mobile up to large desktop screens.',
        tags: ['React', 'Vite', 'Responsive'],
    },
    {
        id: 'miyora', title: 'Miyōra Collective', context: 'Client project', badge: 'Live site',
        layout: 'web', shots: 1,
        short: 'Website for a premium event planning and styling company in South Africa.',
        desc: 'A refined, warm-toned website for Miyōra Collective, a premium events company in South Africa. It presents their mission, services and gallery, and includes a booking enquiry form so clients can get in touch about their event.',
        tags: ['Website', 'Booking form', 'Responsive'],
        link: 'https://miyoracollective.co.za/',
    },
    {
        id: 'tavros', title: 'Tavros Design', context: 'Client project', badge: 'Live site',
        layout: 'web', shots: 1,
        short: 'Website for a design, build and renovation company based in Ashford, Kent.',
        desc: 'A clean, conversion-focused website for Tavros Design, a local team that designs, builds and renovates kitchens, bathrooms and living spaces across Kent. It covers services, project highlights, how the process works and an FAQ, with clear calls to request a free quote.',
        tags: ['Website', 'Lead generation', 'Responsive'],
        link: 'https://tavrosdesign.com/',
    },
    {
        id: 'nsfas', title: 'NSFAS', context: 'Hooligan Development · 2024', badge: 'Gov · 1.2M+ users',
        layout: 'phone', tint: '#e8f0ec', shots: 4,
        short: 'Angular work on South Africa\'s national student funding app, used by over 1.2 million students.',
        desc: 'The National Student Financial Aid Scheme app is how South African students apply for and manage government funding. I built Angular features and optimised the app for speed and usability for over 1.2 million students.',
        tags: ['Angular', 'TypeScript'],
    },
    {
        id: 'revolveme', title: 'RevolveMe', context: 'Personal project', badge: 'Built for friends',
        layout: 'phone', tint: '#e8f0ec', shots: 5,
        short: 'A gym tracker with monthly workout plans, year goals, streaks and gym partners.',
        desc: 'A gym tracker I built with React and Vite for myself and close friends. Workouts are saved in Firebase and refreshed each month, and each day opens a dropdown of the exercises to do. The analytics section shows year progress with a countdown, the year goals you lock in, and your gym streak. You can add partners to log their weights alongside yours when you train together.',
        tags: ['React', 'Vite', 'Firebase'],
    },
    {
        id: '75hard', title: '75 Hard', context: 'Personal project', badge: 'React + Firebase',
        layout: 'phone', tint: '#e3ecfb', shots: 7,
        short: 'A group challenge app where friends push each other through all 75 days of 75 Hard.',
        desc: 'A 75 Hard companion app I built with React and Vite. You create or join a group with friends using a short invite code, then log daily check-ins and progress photos to Firebase. A friends-only feed shows everyone\'s progress and check-ins, a countdown calendar tracks all 75 days, and the profile page awards badges for milestones you can show off to the group.',
        tags: ['React', 'Vite', 'Firebase'],
    },
    {
        id: 'forex', title: 'Forex Toolkit', context: 'Personal project',
        layout: 'phone', tint: '#f6eddf', shots: 5,
        short: 'A trading companion with live prices, a trading calculator and market-session hours.',
        desc: 'I trade forex, so I built the tools I wanted: live prices, a trading calculator and market-session hours in one mobile-friendly web app.',
        tags: ['JavaScript', 'HTML', 'CSS'],
    },
    {
        id: 'ayyhii', title: 'AyyHii', context: 'Client project',
        layout: 'web', shots: 1,
        short: 'Launch site for an Ethereum token, plus the smart contract behind it.',
        desc: 'A launch site to showcase and sell an Ethereum token, with a countdown and sale progress. I built both the website and the underlying smart contract.',
        tags: ['Web3', 'Ethereum', 'Smart contract'],
    },
    {
        id: 'arialand', title: 'Aria Land', context: 'Client project',
        layout: 'web', shots: 1,
        short: 'NFT collection site with live raffles and games where users play to win NFTs.',
        desc: 'An NFT collection site that showcases each piece with its utility and details. I added live raffles and in-browser games so users could play for a chance to own exclusive NFTs.',
        tags: ['Web3', 'NFT', 'Games'],
    },
];

const PLAYGROUND = [
    { id: 'metafushko', title: 'MetaFushko', layout: 'web', shots: 1, tags: ['Web3'], short: 'Showcase site for a studio\'s NFT projects.' },
    { id: 'garmentguys', title: 'Garment Guys', layout: 'web', shots: 1, tags: ['E-commerce'], short: 'Wholesale clothing store for retailers buying in bulk.' },
    { id: 'shapeshift', title: 'Shape Shift', layout: 'web', shots: 1, tags: ['E-commerce'], short: 'Online store for women\'s fitness apparel.' },
    { id: 'ballers', title: 'NFT Ballers Club', layout: 'web', shots: 1, tags: ['Marketing site'], short: 'Website for an NFT marketing agency.' },
    { id: 'rnstore', title: 'React Native Store', layout: 'phone', tint: '#e8f0ec', shots: 3, tags: ['React Native', 'REST API'], short: 'Cross-platform shop app powered by a product API.' },
    { id: 'flutterlogin', title: 'Flutter Auth', layout: 'phone', tint: '#fff1cc', shots: 3, tags: ['Flutter', 'Firebase'], short: 'Sign-up and login flow with Firebase Authentication.' },
    { id: 'fluttercalc', title: 'Flutter Calculator', layout: 'phone', tint: '#f6eddf', shots: 1, tags: ['Flutter'], short: 'A clean, responsive calculator UI.' },
    { id: 'reacttodo', title: 'React To-Do', layout: 'phone', tint: '#2a2a2a', shots: 3, tags: ['React'], short: 'Component-driven to-do app with editing and deleting.' },
    { id: 'rntodo', title: 'React Native To-Do', layout: 'phone', tint: '#e8f0ec', shots: 3, tags: ['React Native'], short: 'The to-do app, rebuilt for iOS and Android.' },
];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const tagList = (tags) => tags.map((t) => `<li>${esc(t)}</li>`).join('');

function cardHTML(p, i, featured) {
    const media = `<div class="card-media ${p.layout === 'phone' ? 'phone' : ''}" ${p.tint ? `style="--card-tint:${p.tint}"` : ''}>
        ${p.badge ? `<span class="card-badge">${esc(p.badge)}</span>` : ''}
        <img src="${IMG}${p.id}-thumb.webp" alt="${esc(p.title)} screenshot" loading="lazy" decoding="async" />
    </div>`;
    return `<button class="card reveal" type="button" data-group="${featured ? 'f' : 'p'}" data-index="${i}" aria-haspopup="dialog">
        ${media}
        <div class="card-body">
            ${p.context ? `<p class="card-context">${esc(p.context)}</p>` : ''}
            <h3 class="card-title">${esc(p.title)}</h3>
            <p class="card-desc">${esc(p.short)}</p>
            <ul class="tags">${tagList(p.tags)}</ul>
        </div>
    </button>`;
}

document.getElementById('work-featured').innerHTML = FEATURED.map((p, i) => cardHTML(p, i, true)).join('');
document.getElementById('work-playground').innerHTML = PLAYGROUND.map((p, i) => cardHTML(p, i, false)).join('');

/* ---------- Project dialog ---------- */
const dialog = document.getElementById('project-dialog');
const $ = (id) => document.getElementById(id);

function openProject(p) {
    $('pd-context').textContent = p.context || 'Side project';
    $('pd-title').textContent = p.title;
    $('pd-tags').innerHTML = tagList(p.tags);
    $('pd-desc').textContent = p.desc || p.short;
    $('pd-gallery').innerHTML = Array.from({ length: p.shots }, (_, n) => {
        const layout = (p.shotLayouts && p.shotLayouts[n]) || p.layout;
        return `<figure class="${layout}"><img src="${IMG}${p.id}-${n + 1}.webp" alt="${esc(p.title)} screen ${n + 1}" loading="lazy" decoding="async" /></figure>`;
    }).join('');
    dialog.showModal();
    document.documentElement.classList.add('dialog-open');
    $('pd-gallery').scrollLeft = 0;
    dialog.scrollTop = 0;
}

document.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    const list = card.dataset.group === 'f' ? FEATURED : PLAYGROUND;
    openProject(list[Number(card.dataset.index)]);
});
const unlockScroll = () => document.documentElement.classList.remove('dialog-open');
function closeProject() { dialog.close(); unlockScroll(); }

$('pd-close').addEventListener('click', closeProject);
// Close when clicking the backdrop
dialog.addEventListener('click', (e) => { if (e.target === dialog) closeProject(); });
// Covers Esc and any other way the dialog closes
dialog.addEventListener('close', unlockScroll);

/* ---------- Back to top (logo + footer link) ---------- */
document.querySelectorAll('a[href="#top"]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    history.replaceState(null, '', location.pathname + location.search);
}));

/* ---------- Mobile menu ---------- */
const menuBtn = $('menu-btn');
const navLinks = $('nav-links');
menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
});
navLinks.addEventListener('click', (e) => {
    if (e.target.closest('a')) { navLinks.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
});

/* ---------- Theme toggle ---------- */
$('theme-toggle').addEventListener('click', () => {
    const root = document.documentElement;
    const isDark = root.dataset.theme
        ? root.dataset.theme === 'dark'
        : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = isDark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) { }
});

/* ---------- Scroll reveal + active nav link ---------- */
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const links = [...navLinks.querySelectorAll('a')];
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
            if (!en.isIntersecting) return;
            links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['work', 'experience', 'toolbox', 'faq', 'contact'].forEach((id) => spy.observe($(id)));
} else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}
