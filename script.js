document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.querySelector('.upload-area');
    const fileInput = document.getElementById('csvFile');
    const resultDiv = document.getElementById('result');

    // 处理拖放
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#4CAF50';
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ccc';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ccc';
        const files = e.dataTransfer.files;
        if (files.length) {
            processFile(files[0]);
        }
    });

    // 处理文件选择
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            processFile(e.target.files[0]);
        }
    });

    function processFile(file) {
        if (!file.name.endsWith('.csv')) {
            alert('请上传CSV文件！');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            const lines = text.split('\n');
            const processedLines = lines.map(line => {
                const columns = line.split(',');
                if (columns.length > 1) {
                    // 处理参数值列
                    columns[1] = columns[1].replace(/^\d+_/, ''); // 移除数字前缀和下划线
                }
                return columns.join(',');
            });

            // 创建新的CSV内容
            const processedContent = processedLines.join('\n');

            // 创建下载链接
            const blob = new Blob([processedContent], { type: 'text/csv;charset=utf-8;' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', '处理后的文件.csv');
            link.className = 'button';
            link.style.marginTop = '10px';
            link.textContent = '下载处理后的CSV文件';

            resultDiv.innerHTML = '<p>文件处理完成！</p>';
            resultDiv.appendChild(link);
        };
        reader.readAsText(file);
    }
});
