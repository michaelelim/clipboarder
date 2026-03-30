// Clip data from Marcobuttons.md
const clips = [
    {
        id: 1,
        title: "Meeting Link",
        content: "https://outlook.office.com/bookwithme/user/8dcaa1ff120e4beebb1fde178462baf7%40agilec.ca?anonymous",
        preview: "Book time with Michael Lim",
        shortlink: "Book time with Michael Lim",
        copyCount: 0,
        favorite: false,
        tab: 'email'
    },
    {
        id: 2,
        title: "Missed Meeting - Regular",
        content: `Unfortunately, our scheduled meeting time has passed.
Please book our next meeting here: https://outlook.office.com/bookwithme/user/8dcaa1ff120e4beebb1fde178462baf7%40agilec.ca?anonymous

Thanks and talk to you again soon,`,
        preview: "Unfortunately, our scheduled meeting time has passed. Please book our next meeting here...",
        shortlink: "Book time with Michael Lim",
        copyCount: 0,
        favorite: false,
        tab: 'email'
    },
    {
        id: 3,
        title: "Missed Meeting - Stranger",
        content: `Hello,

Unfortunately, our scheduled meeting time has passed.
Please feel free to reach out when you are ready to book again.

Thanks and best of luck,`,
        preview: "Hello, Unfortunately, our scheduled meeting time has passed. Please feel free to reach out...",
        shortlink: "",
        copyCount: 0,
        favorite: false,
        tab: 'email'
    },
    {
        id: 4,
        title: "Check In",
        content: `Just checking in on the job hunt on your side.
Everything going well?

Let's book another meeting.
Please book one here: https://outlook.office.com/bookwithme/user/8dcaa1ff120e4beebb1fde178462baf7%40agilec.ca?anonymous

Please reach out should you have any questions.
Have a good one,`,
        preview: "Just checking in on the job hunt on your side. Everything going well? Let's book another meeting...",
        shortlink: "Book time with Michael Lim",
        copyCount: 0,
        favorite: false,
        tab: 'email'
    },
    {
        id: 5,
        title: "Better Jobs - Ontario",
        content: `Hello,

I hope everything is well.
Regarding your interest in the Better Jobs Ontario program:


All interested candidates must sign up for a mandatory virtual information session.
The Better Jobs Ontario information session will cover general information about the program, including important terms, program suitability, eligibility, and Agilec's role in helping you complete your application.
To sign up for the Better Jobs Ontario information session, please use the link provided below to register, and select the session you would like to enroll in. I have also attached a PDF guide with visuals to help you through the registration process.
Before the information session, please have a copy of your Record of Employment and your most recent resume, as these documents are required for the Better Jobs Ontario application process.


Better Jobs Ontario Information Session: https://education.agilec.ca/resource/learn/course/external/view/classroom/762/better-jobs-ontario-customer-information-session


If you have any questions or concerns before the information session or need assistance creating an account, please reach out at your earliest convenience.
Warm regards,`,
        preview: "Hello, I hope everything is well. Regarding your interest in the Better Jobs Ontario program...",
        shortlink: "Better Jobs Ontario Information Session",
        copyCount: 0,
        favorite: false,
        tab: 'email'
    },
    {
        id: 6,
        title: "About Agilec",
        content: `A little about Agilec, we're a free government-funded service helping candidates find long-term employment.
We have the ability to help with on-the-job coaching, help to pay for training, or even incentives if you have interest in hiring for paid work.
Please feel free to reach out to me should you have any questions.`,
        preview: "A little about Agilec, we're a free government-funded service helping candidates find long-term employment...",
        shortlink: "",
        copyCount: 0,
        favorite: false,
        tab: 'email'
    },
    {
        id: 7,
        title: "Intake",
        content: `INTAKE APPOINTMENT SUMMARY
Meeting Date: 
Notice of Consent: 
Stream:
ID Verification: 
(UCI number and refugee claimant application number is shared/if an open work permit – include SIN/Permit #)
Contact Preferences: 
NOTES
(Summary of what client has disclosed / What is happening in their life)

RATIONALE FOR SERVICE
(List reasons for service):  

EMPLOYMENT
Employment status:  
Last worked: 
Barriers: 
Accommodations Needed: 
Highest Education: 
Criminal record:
    
Employment goal: 
Areas of interest: 
Number of hours/wk:     
Wage expectations: 
Job search area: 
Transportation: 

3 positions of interest: 
1.
2.
3.

LABOUR MARKET: 
Job Bank: 
Local LMI Website/Job Board:
     

REFERRAL SOURCE
Referred In:    
    
NEXT STEPS
(List of what clients will be working on) 

Follow up appointment: (date appointment booked and items being actioned)`,
        preview: "INTAKE APPOINTMENT SUMMARY - Meeting Date, Notice of Consent, Stream, ID Verification...",
        shortlink: "",
        copyCount: 0,
        favorite: false,
        tab: 'escases'
    },
    {
        id: 8,
        title: "Pay Stub Reasoning",
        content: `Regarding pay stubs, we ask for them after you start work to verify your start date, wage, and hours.
It helps with eligibility of supports like transportation assistance, clothing or equipment reimbursements.
We also use them to verify the legitimacy of employer billing.
We need to make sure that the details they provide match your actual earnings.
This protects the integrity of the program and ensures that government funds are used properly and fairly.
All the information you provide is kept confidential and is only used for verification and reporting purposes.`,
        preview: "Regarding pay stubs, we ask for them after you start work to verify your start date, wage, and hours...",
        shortlink: "",
        copyCount: 0,
        favorite: false,
        tab: 'email'
    },
    {
        id: 9,
        title: "Congratulations",
        content: `Congratulations about the job!

The ministry requests the following details for the job:
Job Title:
Company Name:
Hourly Wage:
Hours per week:
Start Date:

We will continue to assist you for the next 12 months on the job.
Should there be any requirements for the job that we can help with (like clothes for example), please let me know, and I can put in a request to assist you.
Also, in the unfortunate event that you lose employment, we can continue with the job search immediately.

Finally, the ministry requests just 5 pay stubs:
1st pay stub, 1 month pay stub, 3 month, 6 month and 12 month pay stub

Should you have any questions, please feel free to reach out.
Congratulations again!`,
        preview: "Congratulations about the job! The ministry requests the following details for the job...",
        shortlink: "",
        copyCount: 0,
        favorite: false,
        tab: 'email'
    },
    {
        id: 10,
        title: "Client Check-In",
        content: `Called cdt to check in on the job hunt and to book another meeting.
Awaiting response re rebook
Next check in on`,
        preview: "Called cdt to check in on the job hunt and to book another meeting.\nAwaiting res...",
        shortlink: "",
        copyCount: 0,
        favorite: false,
        tab: 'escases'
    }
];

// System tab IDs (always present, can't be deleted)
const SYSTEM_TABS = ['all', 'favorites'];

// Per-tab color theme [border, bgActive]
function getTabColor(tabId) {
    const palette = {
        all:        ['#94a3b8', 'rgba(148,163,184,0.15)'],
        favorites:  ['#f59e0b', 'rgba(245,158,11,0.15)'],
        email:      ['#3b82f6', 'rgba(59,130,246,0.15)'],
        escases:    ['#10b981', 'rgba(16,185,129,0.15)'],
    };
    if (palette[tabId]) return palette[tabId];
    // Unknown tab — deterministic color from tab id
    const colors = [
        ['#ef4444','rgba(239,68,68,0.15)'],
        ['#8b5cf6','rgba(139,92,246,0.15)'],
        ['#ec4899','rgba(236,72,153,0.15)'],
        ['#f97316','rgba(249,115,22,0.15)'],
        ['#06b6d4','rgba(6,182,212,0.15)'],
        ['#84cc16','rgba(132,204,22,0.15)'],
    ];
    let hash = 0;
    for (let i = 0; i < tabId.length; i++) hash = tabId.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
}

// Global variables
let currentInput = '';
let inputTimeout = null;
let currentTab = 'all';
let filteredClips = [...clips];
let isEditing = false;
let editingClipId = null;
let lastUsedClipId = null;
let tabs = []; // user-created tabs [{id, name}]
let isAddingTab = false;
let isAddingClip = false;

// DOM elements
const buttonGrid = document.getElementById('buttonGrid');
const searchInput = document.getElementById('searchInput');
const statusMessage = document.getElementById('statusMessage');
const addNewClipBtn = document.getElementById('addNewClipBtn');
const saveClipsBtn = document.getElementById('saveClipsBtn');
const loadClipsBtn = document.getElementById('loadClipsBtn');
const manualCopyBtn = document.getElementById('manualCopyBtn');
const manualCopySubtitle = document.getElementById('manualCopySubtitle');
const quickNumbersGrid = document.getElementById('quickNumbersGrid');
const notificationPopup = document.getElementById('notificationPopup');
const notificationSubtitle = document.getElementById('notificationSubtitle');
const tabNavigation = document.getElementById('tabNavigation');

// Initialize the app
function init() {
    setupEventListeners();
    setupDarkMode();
    setupManualCopy();
    setupSaveLoad();

    // Load last used clip from localStorage
    const savedLastUsedClipId = localStorage.getItem('lastUsedClipId');
    lastUsedClipId = savedLastUsedClipId ? parseInt(savedLastUsedClipId) : null;

    // Load tabs from localStorage
    const savedTabs = localStorage.getItem('clipboarder_tabs');
    if (savedTabs) {
        try {
            tabs = JSON.parse(savedTabs);
            if (!Array.isArray(tabs)) tabs = [];
        } catch (e) { tabs = []; }
    }

    // Seed default tabs if they don't already exist
    const defaultTabs = [
        { id: 'email',    name: 'Email' },
        { id: 'escases',  name: 'ESCases' }
    ];
    defaultTabs.forEach(defTab => {
        if (!tabs.find(t => t.id === defTab.id)) {
            tabs.push(defTab);
        }
    });
    saveTabs();

    // Load tab assignments and favorites into clips
    clips.forEach(clip => {
        if (typeof clip.favorite === 'undefined') clip.favorite = false;
        if (typeof clip.tab === 'undefined') clip.tab = null;
    });

    renderTabs();
    applyFilter();
    renderQuickNumbers();
    updateManualCopyButton();
    showStatus('Ready - Type a number or click a button to copy clip');
}

// ----- Manual Copy -----
function setupManualCopy() {
    manualCopyBtn.addEventListener('click', () => {
        const clipToAutoCopy = lastUsedClipId ? clips.find(c => c.id === lastUsedClipId) : clips.find(c => c.id === 1);
        if (clipToAutoCopy) {
            copyClip(clipToAutoCopy);
            showStatus(`Manually copied: ${clipToAutoCopy.title}`);
        } else {
            showStatus('No clip available to copy');
        }
    });
}

function updateManualCopyButton() {
    const clipToShow = lastUsedClipId ? clips.find(c => c.id === lastUsedClipId) : clips.find(c => c.id === 1);
    if (clipToShow) {
        manualCopySubtitle.textContent = clipToShow.title;
    } else {
        manualCopySubtitle.textContent = 'No clips available';
    }
}

// ----- Dark Mode -----
function setupDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(newTheme);
    });
}

function updateToggleIcon(theme) {
    const toggleIcon = document.querySelector('.toggle-icon');
    toggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ----- Save / Load -----
function setupSaveLoad() {
    saveClipsBtn.addEventListener('click', saveClipsToFile);
    loadClipsBtn.addEventListener('click', loadClipsFromFile);
}

function saveClipsToFile() {
    try {
        const clipsData = {
            version: '2.0',
            timestamp: new Date().toISOString(),
            clips: clips,
            tabs: tabs
        };
        const dataStr = JSON.stringify(clipsData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `clipboarder-clips-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(link.href);
        showStatus('Clips saved successfully!');
    } catch (error) {
        console.error('Failed to save clips:', error);
        showStatus('Failed to save clips');
    }
}

function loadClipsFromFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.clips && Array.isArray(data.clips)) {
                    const validClips = data.clips.filter(clip => clip.id && clip.title && clip.content);
                    if (validClips.length > 0) {
                        validClips.forEach(clip => {
                            if (typeof clip.favorite === 'undefined') clip.favorite = false;
                            if (typeof clip.tab === 'undefined') clip.tab = null;
                        });
                        clips.length = 0;
                        clips.push(...validClips);
                        // Load tabs if present in file
                        if (data.tabs && Array.isArray(data.tabs)) {
                            tabs = data.tabs;
                            localStorage.setItem('clipboarder_tabs', JSON.stringify(tabs));
                        }
                        // Ensure currentTab still valid
                        if (currentTab !== 'all' && currentTab !== 'favorites' && !tabs.find(t => t.id === currentTab)) {
                            currentTab = 'all';
                        }
                        renderTabs();
                        applyFilter();
                        renderQuickNumbers();
                        showStatus(`Loaded ${validClips.length} clips successfully!`);
                    } else {
                        showStatus('No valid clips found in file');
                    }
                } else {
                    showStatus('Invalid file format');
                }
            } catch (error) {
                console.error('Failed to load clips:', error);
                showStatus('Failed to load clips - invalid file');
            }
        };
        reader.readAsText(file);
    });
    input.click();
}

// ----- Quick Numbers -----
function renderQuickNumbers() {
    quickNumbersGrid.innerHTML = '';
    const sortedClips = [...clips].sort((a, b) => a.id - b.id);
    const gridTemplateColumns = `repeat(${sortedClips.length}, 1fr)`;
    quickNumbersGrid.style.gridTemplateColumns = gridTemplateColumns;
    sortedClips.forEach((clip) => {
        const button = document.createElement('button');
        button.className = 'quick-number-btn';
        button.setAttribute('data-number', clip.id);
        button.textContent = clip.id;
        button.addEventListener('click', () => {
            executeNumber(clip.id);
        });
        quickNumbersGrid.appendChild(button);
    });
}

// ----- Tabs -----
function renderTabs() {
    tabNavigation.innerHTML = '';

    const tabDefs = [
        { id: 'all',       name: 'All' },
        { id: 'favorites', name: '★ Favorites' },
        ...tabs
    ];

    tabDefs.forEach(tab => {
        const btn = document.createElement('button');
        const isActive = currentTab === tab.id;
        btn.className = 'tab-btn' + (isActive ? ' active' : '');
        btn.setAttribute('data-tab', tab.id);

        const [borderCol, bgActive] = getTabColor(tab.id);

        if (isActive) {
            if (borderCol) {
                btn.style.background = bgActive;
                btn.style.borderColor = borderCol;
                btn.style.color = borderCol;
            }
        }

        const nameSpan = document.createElement('span');
        nameSpan.className = 'tab-name';
        nameSpan.textContent = tab.name;
        nameSpan.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            renameTab(tab.id);
        });
        btn.appendChild(nameSpan);

        // Only system tabs don't get a delete button
        if (!SYSTEM_TABS.includes(tab.id)) {
            const delBtn = document.createElement('span');
            delBtn.className = 'tab-delete';
            delBtn.textContent = '×';
            delBtn.title = `Delete tab "${tab.name}"`;
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteTab(tab.id);
            });
            btn.appendChild(delBtn);
        }

        btn.addEventListener('click', () => switchTab(tab.id));
        tabNavigation.appendChild(btn);
    });

    // "+ Add Tab" button
    const addBtn = document.createElement('button');
    addBtn.className = 'tab-btn tab-add-btn';
    addBtn.textContent = '+';
    addBtn.title = 'Add new tab';
    addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        promptAddTab();
    });
    tabNavigation.appendChild(addBtn);
}

function switchTab(tabId) {
    currentTab = tabId;
    renderTabs();
    applyFilter();
}

function promptAddTab() {
    const name = prompt('Enter tab name:');
    if (!name || !name.trim()) return;
    addTab(name.trim());
}

function addTab(name) {
    const id = 'tab_' + Date.now();
    tabs.push({ id, name });
    saveTabs();
    renderTabs();
    showStatus(`Tab "${name}" created`);
}

function renameTab(tabId) {
    const tab = tabs.find(t => t.id === tabId);
    if (!tab) return;
    const name = prompt('Rename tab:', tab.name);
    if (!name || !name.trim()) return;
    tab.name = name.trim();
    saveTabs();
    renderTabs();
}

function deleteTab(tabId) {
    const tab = tabs.find(t => t.id === tabId);
    if (!tab) return;
    if (!confirm(`Delete tab "${tab.name}"? Clips in this tab will be moved to "All".`)) return;
    // Move clips to unassigned
    clips.forEach(c => { if (c.tab === tabId) c.tab = null; });
    tabs = tabs.filter(t => t.id !== tabId);
    if (currentTab === tabId) currentTab = 'all';
    saveTabs();
    renderTabs();
    applyFilter();
    showStatus(`Tab "${tab.name}" deleted`);
}

function saveTabs() {
    localStorage.setItem('clipboarder_tabs', JSON.stringify(tabs));
}

// ----- Filter & Render -----
function applyFilter() {
    const searchTerm = searchInput.value.toLowerCase();
    let result = [...clips];

    // Filter by tab
    if (currentTab === 'favorites') {
        result = result.filter(clip => clip.favorite);
    } else if (currentTab === 'all') {
        // show everything
    } else {
        // user tab: show clips assigned to this tab, plus unassigned (null)
        // Actually: only show clips assigned to this tab. Unassigned clips show in All tab.
        result = result.filter(clip => clip.tab === currentTab);
    }

    // Filter by search
    if (searchTerm) {
        result = result.filter(clip =>
            clip.title.toLowerCase().includes(searchTerm) ||
            clip.content.toLowerCase().includes(searchTerm)
        );
    }

    filteredClips = result;
    renderButtons();
}

function toggleFavorite(clipId) {
    const clip = clips.find(c => c.id === clipId);
    if (!clip) return;
    clip.favorite = !clip.favorite;
    applyFilter();
}

function renderButtons() {
    buttonGrid.innerHTML = '';
    filteredClips.forEach(clip => {
        const button = document.createElement('button');
        button.className = 'macro-button';
        button.setAttribute('data-id', clip.id);

        // Color the card border based on tab
        const clipTab = clips.find(c => c.id === clip.id)?.tab || null;
        if (clipTab === null) {
            button.style.borderLeftColor = 'var(--accent-primary)';
        } else {
            const [col] = getTabColor(clipTab);
            if (col) button.style.borderLeftColor = col;
        }

        button.innerHTML = `
            <div class="button-number">${clip.id}</div>
            <div class="edit-button" onclick="event.stopPropagation(); editClip(${clip.id})">✏️</div>
            <div class="favorite-star ${clip.favorite ? 'filled' : ''}" onclick="event.stopPropagation(); toggleFavorite(${clip.id})">★</div>
            <div class="copy-counter">${clip.copyCount || 0}</div>
            <div class="button-title">${clip.title}</div>
            <div class="button-tab-label">${tabLabel(clip)}</div>
            <div class="button-preview">${clip.preview}</div>
        `;

        button.addEventListener('click', () => copyClip(clip));
        buttonGrid.appendChild(button);
    });

    if (filteredClips.length === 0) {
        buttonGrid.innerHTML = '<div class="empty-state">No clips here yet. Click + to add one!</div>';
    }
}

function tabLabel(clip) {
    if (clip.tab === null) return '';
    if (clip.tab === 'all') return '';
    const tab = tabs.find(t => t.id === clip.tab);
    return tab ? tab.name : '';
}

// ----- Add / Edit Clip -----
function addNewClip() {
    isAddingClip = true;
    const maxId = clips.length > 0 ? Math.max(...clips.map(c => c.id)) : 0;
    const newId = maxId + 1;

    // Show add-clip modal with all fields + tab picker
    const modal = document.createElement('div');
    modal.className = 'edit-modal';
    modal.innerHTML = `
        <div class="edit-content">
            <h3>Add New Clip</h3>
            <div class="edit-field">
                <label>Title:</label>
                <input type="text" id="editTitle" placeholder="My Clip" />
            </div>
            <div class="edit-field">
                <label>Content:</label>
                <textarea id="editContent" rows="10" placeholder="Enter your content here..."></textarea>
            </div>
            <div class="edit-field">
                <label>Preview (optional):</label>
                <input type="text" id="editPreview" placeholder="Auto-generated if empty" />
            </div>
            <div class="edit-field">
                <label>Tab:</label>
                <select id="editTab">
                    <option value="">All (no tab)</option>
                    ${tabs.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
                </select>
            </div>
            <div class="edit-buttons">
                <button onclick="saveNewClip(${newId})" class="save-btn">Save Clip</button>
                <button onclick="cancelAddClip()" class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => document.getElementById('editTitle').focus(), 100);
}

function saveNewClip(newId) {
    const title = document.getElementById('editTitle').value.trim();
    const content = document.getElementById('editContent').value.trim();
    const previewInput = document.getElementById('editPreview').value.trim();
    const tabVal = document.getElementById('editTab').value;

    if (!title || !content) {
        showStatus('Title and content are required!');
        return;
    }

    const preview = previewInput || content.substring(0, 80) + (content.length > 80 ? '...' : '');

    const newClip = {
        id: newId,
        title,
        content,
        preview,
        shortlink: '',
        copyCount: 0,
        favorite: false,
        tab: tabVal || null
    };

    clips.push(newClip);
    cancelAddClip();
    applyFilter();
    renderQuickNumbers();
    showStatus(`Created clip "${title}" (ID ${newId})`);
}

function cancelAddClip() {
    isAddingClip = false;
    const modal = document.querySelector('.edit-modal');
    if (modal) modal.remove();
}

function editClip(clipId) {
    const clip = clips.find(c => c.id === clipId);
    if (!clip) return;

    isEditing = true;
    editingClipId = clipId;

    const modal = document.createElement('div');
    modal.className = 'edit-modal';
    modal.innerHTML = `
        <div class="edit-content">
            <h3>Edit Clip ${clipId}</h3>
            <div class="edit-field">
                <label>Title:</label>
                <input type="text" id="editTitle" value="${escapeHtml(clip.title)}" />
            </div>
            <div class="edit-field">
                <label>Content:</label>
                <textarea id="editContent" rows="10">${escapeHtml(clip.content)}</textarea>
            </div>
            <div class="edit-field">
                <label>Preview:</label>
                <input type="text" id="editPreview" value="${escapeHtml(clip.preview)}" />
            </div>
            <div class="edit-field">
                <label>Short Link Text:</label>
                <input type="text" id="editShortlink" value="${escapeHtml(clip.shortlink || '')}" placeholder="Leave empty to use full URL" />
            </div>
            <div class="edit-field">
                <label>Tab:</label>
                <select id="editTab">
                    <option value="" ${clip.tab === null ? 'selected' : ''}>All (no tab)</option>
                    ${tabs.map(t => `<option value="${t.id}" ${clip.tab === t.id ? 'selected' : ''}>${escapeHtml(t.name)}</option>`).join('')}
                </select>
            </div>
            <div class="edit-buttons">
                <button onclick="saveClip()" class="save-btn">Save</button>
                <button onclick="cancelEdit()" class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => document.getElementById('editTitle').focus(), 100);
}

function saveClip() {
    if (!isEditing || !editingClipId) return;
    const clip = clips.find(c => c.id === editingClipId);
    if (!clip) return;

    const title = document.getElementById('editTitle').value.trim();
    const content = document.getElementById('editContent').value.trim();
    const preview = document.getElementById('editPreview').value.trim();
    const shortlink = document.getElementById('editShortlink').value.trim();
    const tabVal = document.getElementById('editTab').value;

    if (!title || !content) {
        showStatus('Title and content are required!');
        return;
    }

    clip.title = title;
    clip.content = content;
    clip.preview = preview;
    clip.shortlink = shortlink;
    clip.tab = tabVal || null;

    // Also update in filteredClips
    const fi = filteredClips.findIndex(c => c.id === editingClipId);
    if (fi !== -1) filteredClips[fi] = clip;

    renderButtons();
    renderQuickNumbers();
    cancelEdit();
    showStatus(`Updated "${title}" successfully!`);
}

function cancelEdit() {
    isEditing = false;
    editingClipId = null;
    const modal = document.querySelector('.edit-modal');
    if (modal) modal.remove();
}

function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ----- Copy -----
function showNotification(title, subtitle) {
    notificationSubtitle.textContent = subtitle;
    notificationPopup.classList.add('show');
    setTimeout(() => notificationPopup.classList.remove('show'), 2500);
}

async function copyClip(clip) {
    try {
        const cleanContent = clip.content.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        let htmlContent = cleanContent
            .replace(/\n/g, '<br>')
            .replace(/https?:\/\/[^\s]+/g, (url) => {
                const linkText = clip.shortlink && clip.shortlink.trim() ? clip.shortlink.trim() : url;
                return `<a href="${url}" style="color: #0066cc; text-decoration: underline;">${linkText}</a>`;
            });
        const fullHtml = `<html><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">${htmlContent}</body></html>`;
        const clipboardItem = new ClipboardItem({
            'text/html': new Blob([fullHtml], { type: 'text/html' }),
            'text/plain': new Blob([cleanContent], { type: 'text/plain' })
        });
        await navigator.clipboard.write([clipboardItem]);
        onCopySuccess(clip);
    } catch (err) {
        console.error('Rich text copy failed:', err);
        try {
            await navigator.clipboard.writeText(clip.content.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n'));
            onCopySuccess(clip, true);
        } catch (e) {
            showNotification('Failed to Copy', 'Please try again');
        }
    }
}

function onCopySuccess(clip, plainText) {
    clip.copyCount = (clip.copyCount || 0) + 1;
    lastUsedClipId = clip.id;
    localStorage.setItem('lastUsedClipId', lastUsedClipId);
    updateManualCopyButton();

    const button = document.querySelector(`[data-id="${clip.id}"]`);
    if (button) {
        button.classList.add('copied');
        setTimeout(() => button.classList.remove('copied'), 600);
        const counter = button.querySelector('.copy-counter');
        if (counter) counter.textContent = clip.copyCount;
    }
    showNotification('Copied to Clipboard!', clip.title + (plainText ? ' (plain text)' : ''));
}

// ----- Event Listeners -----
function setupEventListeners() {
    document.addEventListener('keydown', handleKeyDown);
    searchInput.addEventListener('input', handleSearch);
    addNewClipBtn.addEventListener('click', addNewClip);

    document.addEventListener('click', () => {
        if (document.activeElement !== searchInput && !isEditing) {
            searchInput.blur();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && (isEditing || isAddingClip)) {
            cancelEdit();
            cancelAddClip();
        }
    });
}

// ----- Keyboard -----
function handleKeyDown(event) {
    if (event.target === searchInput || isEditing || isAddingClip) return;
    const key = event.key;
    if (/^[0-9]$/.test(key)) {
        event.preventDefault();
        const number = parseInt(key);
        if (number >= 1 && number <= 9) {
            executeNumber(number);
        } else {
            showStatus(`No clip found for number ${number}`);
        }
    }
    if (key === 'Escape') {
        event.preventDefault();
        clearInput();
    }
}

function executeNumber(number) {
    const clip = clips.find(c => c.id === number);
    if (clip) copyClip(clip);
}

function clearInput() {
    currentInput = '';
    if (inputTimeout) { clearTimeout(inputTimeout); inputTimeout = null; }
}

// ----- Search -----
function handleSearch(event) {
    applyFilter();
    if (filteredClips.length === 0) {
        showStatus('No clips found matching your search');
    } else {
        showStatus(`Found ${filteredClips.length} clip(s)`);
    }
}

// ----- Status -----
function showStatus(message) {
    statusMessage.textContent = message;
    setTimeout(() => {
        if (statusMessage.textContent === message) statusMessage.textContent = '';
    }, 3000);
}

// ----- Init -----
document.addEventListener('DOMContentLoaded', init);
