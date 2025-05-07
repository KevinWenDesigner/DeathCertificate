// printUtils.js
// 打印工具函数

// 打印前准备 - 添加打印样式
export const preparePrint = () => {
  const style = document.createElement('style');
  style.id = 'print-style';
  style.innerHTML = `
    @page {
      size: A4;
      margin: 10mm;
    }
    @media print {
      body {
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
      }
      .no-print {
        display: none !important;
      }
      table, th, td {
        border: 1px solid #000 !important;
      }
      input, select, textarea {
        border: none !important;
        padding: 0 !important;
      }
    }
  `;
  document.head.appendChild(style);
};

// 打印后清理
export const cleanupAfterPrint = () => {
  const printStyle = document.getElementById('print-style');
  if (printStyle) {
    printStyle.remove();
  }
};

// 优化表单数据供打印使用
export const optimizeDataForPrint = (formData) => {
  // 处理日期格式化
  const optimizedData = { ...formData };
  
  // 格式化日期为中文格式
  if (optimizedData.birthDate) {
    const birthDate = new Date(optimizedData.birthDate);
    optimizedData.birthDateFormatted = `${birthDate.getFullYear()}年${birthDate.getMonth() + 1}月${birthDate.getDate()}日`;
  }
  
  if (optimizedData.deathDate) {
    const deathDate = new Date(optimizedData.deathDate);
    optimizedData.deathDateFormatted = `${deathDate.getFullYear()}年${deathDate.getMonth() + 1}月${deathDate.getDate()}日`;
  }
  
  // 处理空字段，用适当的占位符替换
  Object.keys(optimizedData).forEach(key => {
    if (!optimizedData[key]) {
      optimizedData[key] = '';
    }
  });
  
  return optimizedData;
};

// 获取当前日期的格式化字符串
export const getCurrentDateString = () => {
  const now = new Date();
  return `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
};

// 创建可打印版本的表单
export const createPrintableVersion = (formData) => {
  const printableData = optimizeDataForPrint(formData);
  // 在实际应用中，这里可能需要将数据转换为特定格式的HTML或PDF
  return printableData;
}; 