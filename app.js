// 应用主逻辑
// allNewsData 在 news-data.js 中定义
let currentFilter = 'all';

// 初始化应用
function initApp() {
    renderDateNav();
    renderNews('all');
    updateStats();
}

// 渲染日期导航
function renderDateNav() {
    const dateNav = document.getElementById('dateNav');
    const dates = Object.keys(allNewsData).sort((a, b) => new Date(b) - new Date(a));
    
    let html = `<button class="date-btn active" onclick="filterByDate('all')">全部</button>`;
    
    dates.forEach(date => {
        const dateObj = new Date(date);
        const displayDate = `${dateObj.getMonth() + 1}月${dateObj.getDate()}日`;
        html += `<button class="date-btn" onclick="filterByDate('${date}')">${displayDate}</button>`;
    });
    
    dateNav.innerHTML = html;
}

// 按日期筛选
function filterByDate(date) {
    currentFilter = date;
    
    // 更新按钮状态
    document.querySelectorAll('.date-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderNews(date);
}

// 渲染新闻
function renderNews(dateFilter = 'all') {
    const container = document.getElementById('newsContainer');
    const noResults = document.getElementById('noResults');
    
    let newsToRender = [];
    
    if (dateFilter === 'all') {
        // 显示所有新闻，按日期分组
        const dates = Object.keys(allNewsData).sort((a, b) => new Date(b) - new Date(a));
        dates.forEach(date => {
            allNewsData[date].forEach(news => {
                newsToRender.push({ ...news, date });
            });
        });
    } else {
        // 显示特定日期的新闻
        if (allNewsData[dateFilter]) {
            allNewsData[dateFilter].forEach(news => {
                newsToRender.push({ ...news, date: dateFilter });
            });
        }
    }
    
    if (newsToRender.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    // 按日期分组显示
    let html = '';
    const groupedByDate = {};
    
    newsToRender.forEach(news => {
        if (!groupedByDate[news.date]) {
            groupedByDate[news.date] = [];
        }
        groupedByDate[news.date].push(news);
    });
    
    const sortedDates = Object.keys(groupedByDate).sort((a, b) => new Date(b) - new Date(a));
    
    sortedDates.forEach(date => {
        const dateObj = new Date(date);
        const displayDate = `${dateObj.getFullYear()}年${dateObj.getMonth() + 1}月${dateObj.getDate()}日`;
        
        html += `<div class="day-section">`;
        html += `<h2 class="day-header">${displayDate}</h2>`;
        
        groupedByDate[date].forEach(news => {
            html += `
                <div class="news-card">
                    <span class="news-date-badge">${displayDate}</span>
                    <h3 class="news-title">${escapeHtml(news.title)}</h3>
                    <p class="news-summary">${escapeHtml(news.summary)}</p>
                    <div class="news-meta">
                        <span class="news-source">来源：${escapeHtml(news.source)}</span>
                        <a href="${news.url}" target="_blank" class="news-link">阅读全文 →</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
    });
    
    container.innerHTML = html;
}

// 搜索新闻
function searchNews() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderNews(currentFilter);
        return;
    }
    
    const container = document.getElementById('newsContainer');
    const noResults = document.getElementById('noResults');
    
    let results = [];
    
    Object.keys(allNewsData).forEach(date => {
        allNewsData[date].forEach(news => {
            if (news.title.toLowerCase().includes(searchTerm) || 
                news.summary.toLowerCase().includes(searchTerm)) {
                results.push({ ...news, date });
            }
        });
    });
    
    if (results.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    let html = '';
    results.forEach(news => {
        const dateObj = new Date(news.date);
        const displayDate = `${dateObj.getFullYear()}年${dateObj.getMonth() + 1}月${dateObj.getDate()}日`;
        
        html += `
            <div class="news-card">
                <span class="news-date-badge">${displayDate}</span>
                <h3 class="news-title">${highlightText(escapeHtml(news.title), searchTerm)}</h3>
                <p class="news-summary">${highlightText(escapeHtml(news.summary), searchTerm)}</p>
                <div class="news-meta">
                    <span class="news-source">来源：${escapeHtml(news.source)}</span>
                    <a href="${news.url}" target="_blank" class="news-link">阅读全文 →</a>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 高亮搜索关键词
function highlightText(text, searchTerm) {
    const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
    return text.replace(regex, '<mark style="background: #fef08a; padding: 2px 4px; border-radius: 3px;">$1</mark>');
}

// 转义正则表达式特殊字符
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// HTML转义
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 更新统计数据
function updateStats() {
    let totalNews = 0;
    const dates = Object.keys(allNewsData);
    
    dates.forEach(date => {
        totalNews += allNewsData[date].length;
    });
    
    document.getElementById('totalNews').textContent = totalNews;
    document.getElementById('totalDays').textContent = dates.length;
    
    if (dates.length > 0) {
        const lastDate = dates.sort((a, b) => new Date(b) - new Date(a))[0];
        const lastDateObj = new Date(lastDate);
        document.getElementById('lastUpdate').textContent = 
            `${lastDateObj.getMonth() + 1}/${lastDateObj.getDate()}`;
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);
