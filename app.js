// shadcn/ui 风格导航 - JavaScript

// 主题切换
(function() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // 初始化：检查本地存储或系统偏好
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    html.classList.add('dark');
  }
  
  toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  });
})();

// 动态渲染链接
(function() {
  fetch('/links.json')
    .then(res => res.json())
    .then(data => {
      // 快速导航
      renderQuickNav(data['导航']);
      
      // 神秘代码
      renderSecretCode(data['神秘代码']);
      
      // 链接区块
      renderLinksSections(data);
    })
    .catch(err => console.error('加载链接数据失败:', err));
})();

// 渲染快速导航按钮
function renderQuickNav(navItems) {
  const container = document.getElementById('quick-nav');
  const bgColors = [
    'bg-red-500 hover:bg-red-600',
    'bg-blue-500 hover:bg-blue-600',
    'bg-violet-500 hover:bg-violet-600',
    'bg-emerald-500 hover:bg-emerald-600',
    'bg-green-500 hover:bg-green-600',
    'bg-yellow-500 hover:bg-yellow-600'
  ];
  
  let html = '';
  navItems.forEach((item, i) => {
    html += `
      <a href="${item.url}" class="px-4 py-3 rounded-lg ${bgColors[i]} text-white font-medium text-center transition-colors">
        ${item.name}
      </a>
    `;
  });
  container.innerHTML = html;
}

// 渲染神秘代码
function renderSecretCode(secret) {
  const el = document.getElementById('secret-code');
  el.textContent = `${secret.title}: ${secret.code}`;
  
  // 复制按钮
  document.getElementById('copy-btn').addEventListener('click', function() {
    navigator.clipboard.writeText(secret.code).then(() => {
      this.innerHTML = `
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        已复制
      `;
      this.classList.add('copy-success', 'text-emerald-500');
      
      setTimeout(() => {
        this.innerHTML = `
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          复制
        `;
        this.classList.remove('copy-success', 'text-emerald-500');
      }, 2000);
    });
  });
}

// 渲染链接区块
function renderLinksSections(data) {
  const container = document.getElementById('links-container');
  
  const sections = [
    { title: '常用', key: '常用', type: 'common' },
    { title: '朋友圈', key: '朋友圈', type: 'card' },
    { title: '优质博客', key: '优质博客', type: 'card' }
  ];
  
  let html = '';
  sections.forEach(section => {
    html += `
      <section class="mb-8">
        <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
          <span class="w-1 h-4 bg-brand rounded-full"></span>
          ${section.title}
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" id="section-${section.key}">
          ${renderSectionItems(data[section.key], section.type)}
        </div>
      </section>
    `;
  });
  
  container.innerHTML = html;
}

// 渲染区块内容
function renderSectionItems(items, type) {
  let html = '';
  
  if (type === 'common') {
    items.forEach(item => {
      html += `
        <a href="${item.url}" data-name="${item.name}" class="link-card p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-brand/50 flex items-center gap-2 group">
          <img src="${item.icon}" class="w-5 h-5 rounded" alt="${item.name}">
          <span class="text-sm truncate group-hover:text-brand transition-colors">${item.name}</span>
        </a>
      `;
    });
  } else {
    items.forEach(item => {
      html += `
        <a href="${item.url}" data-name="${item.name}" class="link-card p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-brand/50">
          <div class="font-medium text-sm mb-1 truncate">${item.name}</div>
          <div class="text-xs text-zinc-500 dark:text-zinc-400 truncate">${item.desc || ''}</div>
        </a>
      `;
    });
  }
  
  return html;
}

// 搜索功能
(function() {
  const input = document.getElementById('search-input');
  
  input.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.link-card');
    
    if (!query) {
      cards.forEach(card => {
        card.style.display = '';
        card.classList.remove('ring-2', 'ring-brand');
      });
      return;
    }
    
    let hasMatch = false;
    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      if (name.includes(query)) {
        card.style.display = '';
        card.classList.add('ring-2', 'ring-brand');
        hasMatch = true;
      } else {
        card.style.display = 'none';
        card.classList.remove('ring-2', 'ring-brand');
      }
    });
  });
})();

// 动态标题（保留原功能）
(function() {
  let originalTitle = document.title;

  document.addEventListener('visibilitychange', function() {
    document.title = document.hidden
      ? '（╯︿╰）崩溃啦！~《' + originalTitle + '》'
      : originalTitle;
  });
})();

// 点击特效 - 社会主义核心价值观
(function() {
  const values = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];

  document.addEventListener('click', function(e) {
    const text = values[Math.floor(Math.random() * values.length)];
    const el = document.createElement('div');
    el.textContent = text;
    el.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY - 20}px;
      color: #ef4444;
      font-family: 'LXGW WenKai', serif;
      font-size: 16px;
      font-weight: 500;
      pointer-events: none;
      z-index: 9999;
      user-select: none;
      transition: all 1.5s ease;
    `;
    document.body.appendChild(el);

    requestAnimationFrame(() => {
      el.style.top = (e.clientY - 180) + 'px';
      el.style.opacity = '0';
    });

    setTimeout(() => el.remove(), 1500);
  });
})();

// 一言 API
(function() {
  function showHitokoto() {
    fetch('https://v1.hitokoto.cn/')
      .then(res => res.json())
      .then(data => {
        showToast(data.hitokoto, 10000);
      })
      .catch(() => {});
  }

  // 每 30 秒获取一次
  setInterval(showHitokoto, 30000);

  // 首次加载延迟显示
  setTimeout(showHitokoto, 5000);
})();

// 欢迎消息
(function() {
  let text;

  if (document.referrer) {
    const referrer = new URL(document.referrer);
    const domain = referrer.hostname.split('.')[1];

    text = '欢迎来自 ' + referrer.hostname + ' 的朋友！';

    if (domain === 'baidu') {
      text = '欢迎从 百度搜索 进来的朋友！';
    } else if (domain === 'so') {
      text = '欢迎从 360搜索 进来的朋友！';
    } else if (domain === 'google') {
      text = '欢迎从 谷歌搜索 进来的朋友！';
    }
  } else {
    const hour = new Date().getHours();

    if (hour > 23 || hour <= 5) {
      text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？';
    } else if (hour > 5 && hour <= 7) {
      text = '早上好！一日之计在于晨，美好的一天就要开始了！';
    } else if (hour > 7 && hour <= 11) {
      text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
    } else if (hour > 11 && hour <= 14) {
      text = '中午了，工作了一个上午，现在是午餐时间！';
    } else if (hour > 14 && hour <= 17) {
      text = '午后很容易犯困呢，今天的运动目标完成了吗？';
    } else if (hour > 17 && hour <= 19) {
      text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
    } else if (hour > 19 && hour <= 21) {
      text = '晚上好，今天过得怎么样？';
    } else if (hour > 21 && hour <= 23) {
      text = '已经这么晚了呀，早点休息吧，晚安~~';
    } else {
      text = '欢迎来到胖氪导航小天地~';
    }
  }

  setTimeout(() => showToast(text, 5000), 1000);
})();

// Toast 提示组件
function showToast(message, duration = 3000) {
  // 移除已有的 toast
  const existing = document.querySelector('.pk-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'pk-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 24px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border-radius: 20px;
    font-size: 14px;
    font-family: 'LXGW WenKai', serif;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
    max-width: 380px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// 复制提示
document.addEventListener('copy', function() {
  showToast('你都复制了些什么呀，转载要记得加上出处哦~~', 5000);
});