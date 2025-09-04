# GitHub Pages 部署指南

## 快速部署步骤

### 1. 创建 GitHub 仓库
1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称建议使用：`your-username.github.io`（替换为你的GitHub用户名）
4. 设置为 Public（公开）
5. 不要勾选 "Add a README file"
6. 点击 "Create repository"

### 2. 上传网站文件

#### 方法一：通过 GitHub 网页界面
1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽到上传区域：
   - `index.html`
   - `css/style.css`
   - `js/script.js`
   - `README.md`
   - `.gitignore`
3. 在页面底部填写提交信息：`Initial commit`
4. 点击 "Commit changes"

#### 方法二：通过 Git 命令行
```bash
# 克隆仓库到本地
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io

# 复制网站文件到仓库目录
# 将 resume-website 文件夹中的所有文件复制到这里

# 添加文件到 Git
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. 启用 GitHub Pages
1. 进入仓库页面
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - Branch: 选择 "main"
   - Folder: 选择 "/ (root)"
5. 点击 "Save"

### 4. 访问你的网站
- 几分钟后，你的网站将在以下地址可用：
- `https://your-username.github.io`
- GitHub 会在 Pages 设置页面显示网站地址

## 自定义域名（可选）

如果你有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容只包含你的域名，例如：`www.yourdomain.com`
3. 在你的域名提供商处设置 DNS 记录：
   - 类型：CNAME
   - 名称：www（或 @）
   - 值：your-username.github.io

## 更新网站内容

### 修改个人信息
编辑 `index.html` 文件中的以下内容：

1. **基本信息**：
   ```html
   <h1 class="hero-name" data-en="Your Name" data-zh="你的姓名">Your Name</h1>
   <a href="mailto:your-email@example.com">your-email@example.com</a>
   <a href="tel:+1234567890">+1234567890</a>
   ```

2. **教育背景**：
   ```html
   <h3 data-en="Your Degree" data-zh="你的学位">Your Degree</h3>
   <h4 data-en="Your University" data-zh="你的大学">Your University</h4>
   ```

3. **工作经历**：
   在 `<div class="timeline">` 部分添加或修改工作经历

4. **项目经历**：
   在 `<div class="projects-grid">` 部分添加或修改项目

### 修改样式和颜色
编辑 `css/style.css` 文件中的 CSS 变量：

```css
:root {
    --primary-color: #1e3a8a;    /* 主色调 */
    --secondary-color: #3b82f6;  /* 辅助色 */
    --accent-color: #f59e0b;     /* 强调色 */
    /* 其他颜色变量... */
}
```

### 添加头像照片
1. 将照片文件放入 `images/` 文件夹
2. 修改 `index.html` 中的头像部分：
   ```html
   <div class="hero-avatar">
       <img src="images/your-photo.jpg" alt="Your Name" class="avatar-image">
   </div>
   ```
3. 在 `css/style.css` 中添加样式：
   ```css
   .avatar-image {
       width: 150px;
       height: 150px;
       border-radius: 50%;
       object-fit: cover;
       box-shadow: var(--shadow-lg);
   }
   ```

## 故障排除

### 网站无法访问
1. 检查 GitHub Pages 设置是否正确
2. 确认文件已正确上传到仓库
3. 等待几分钟让 GitHub 处理部署

### 样式显示异常
1. 检查文件路径是否正确
2. 确认 CSS 和 JS 文件已上传
3. 检查浏览器控制台是否有错误

### 双语切换不工作
1. 确认 `js/script.js` 文件已正确上传
2. 检查浏览器控制台是否有 JavaScript 错误
3. 确认所有文本都有 `data-en` 和 `data-zh` 属性

## 技术支持

如果遇到问题：
1. 检查 GitHub Pages 官方文档
2. 查看浏览器开发者工具的控制台错误
3. 确认所有文件路径和语法正确

## 维护建议

1. **定期更新内容**：及时更新工作经历和项目信息
2. **备份文件**：保留网站文件的本地副本
3. **测试功能**：每次更新后测试所有功能是否正常
4. **性能优化**：定期检查网站加载速度
5. **安全更新**：关注并应用安全更新

