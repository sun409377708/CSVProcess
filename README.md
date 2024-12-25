# CSV Process Tool

一个简单的Web工具，用于处理CSV文件中的参数值列，移除数字前缀。

## 功能

- 支持上传CSV文件
- 自动处理参数值列中的数字前缀（例如：将"1_快速预约"转换为"快速预约"）
- 支持文件拖放上传
- 处理完成后可直接下载新的CSV文件

## 使用方法

1. 克隆仓库：
   ```bash
   git clone git@github.com:sun409377708/CSVProcess.git
   ```

2. 打开 index.html 文件或使用本地服务器运行：
   ```bash
   npx http-server
   ```

3. 在浏览器中访问 http://localhost:8080

4. 上传CSV文件或将文件拖入上传区域

5. 点击下载按钮获取处理后的文件
