# 个人简历网站 / Personal Resume Website

这是一个现代化的个人简历网站，支持双语切换（中文/英文）和深色/浅色主题切换。

This is a modern personal resume website with bilingual support (Chinese/English) and dark/light theme toggle.

## 功能特性 / Features

- 📱 响应式设计，支持移动端 / Responsive design for mobile devices
- 🌐 双语切换（中文/英文）/ Bilingual support (Chinese/English)
- 🌙 深色/浅色主题切换 / Dark/Light theme toggle
- ⚡ 平滑滚动和动画效果 / Smooth scrolling and animations
- 💾 本地存储用户偏好 / Local storage for user preferences
- 🎨 现代化UI设计 / Modern UI design
- 📊 技能展示和项目展示 / Skills and projects showcase
- 📧 联系方式展示 / Contact information display

## 技术栈 / Tech Stack

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)

## 部署到 GitHub Pages / Deploy to GitHub Pages

### 步骤 1: 创建 GitHub 仓库 / Step 1: Create GitHub Repository

1. 登录 GitHub 并创建新仓库 / Login to GitHub and create a new repository
2. 仓库名建议使用 `username.github.io` 格式 / Repository name should be `username.github.io`
3. 设置为公开仓库 / Set as public repository

### 步骤 2: 上传文件 / Step 2: Upload Files

将以下文件上传到仓库根目录：/ Upload these files to repository root:

```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/ (可选 / optional)
└── README.md
```

### 步骤 3: 启用 GitHub Pages / Step 3: Enable GitHub Pages

1. 进入仓库设置页面 / Go to repository Settings
2. 滚动到 "Pages" 部分 / Scroll to "Pages" section
3. 在 "Source" 下选择 "Deploy from a branch" / Under "Source", select "Deploy from a branch"
4. 选择 "main" 分支和 "/ (root)" 文件夹 / Select "main" branch and "/ (root)" folder
5. 点击 "Save" / Click "Save"

### 步骤 4: 访问网站 / Step 4: Access Website

几分钟后，你的网站将在以下地址可用：/ After a few minutes, your website will be available at:
`https://username.github.io`

## 本地开发 / Local Development

### 使用 Live Server / Using Live Server

1. 安装 VS Code 的 Live Server 扩展 / Install Live Server extension for VS Code
2. 右键点击 `index.html` 并选择 "Open with Live Server" / Right-click `index.html` and select "Open with Live Server"

### 使用 Python 服务器 / Using Python Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后访问 `http://localhost:8000` / Then visit `http://localhost:8000`

## 自定义 / Customization

### 修改个人信息 / Modify Personal Information

编辑 `index.html` 文件中的以下部分：/ Edit the following sections in `index.html`:

1. **个人信息 / Personal Info**: 修改姓名、邮箱、电话等 / Modify name, email, phone, etc.
2. **教育背景 / Education**: 更新学校和专业信息 / Update school and major information
3. **工作经历 / Experience**: 添加或修改工作经历 / Add or modify work experience
4. **项目经历 / Projects**: 更新研究项目信息 / Update research project information
5. **技能 / Skills**: 修改技能标签 / Modify skill tags

### 修改样式 / Modify Styles

编辑 `css/style.css` 文件来自定义：/ Edit `css/style.css` to customize:

1. **颜色主题 / Color Theme**: 修改 CSS 变量 / Modify CSS variables
2. **字体 / Fonts**: 更改字体家族 / Change font family
3. **布局 / Layout**: 调整间距和布局 / Adjust spacing and layout

### 添加头像 / Add Profile Picture

1. 将头像图片放入 `images/` 文件夹 / Put profile picture in `images/` folder
2. 替换 `index.html` 中的头像占位符 / Replace avatar placeholder in `index.html`:

```html
<div class="hero-avatar">
    <img src="images/profile.jpg" alt="Profile Picture" class="avatar-image">
</div>
```

3. 在 CSS 中添加样式 / Add styles in CSS:

```css
.avatar-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow-lg);
}
```

## 浏览器支持 / Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证 / License

MIT License - 可自由使用和修改 / Free to use and modify

## 联系方式 / Contact

如有问题或建议，请联系：/ For questions or suggestions, please contact:
- 邮箱 / Email: aristoqu@163.com
- 电话 / Phone: +86-13818386139

