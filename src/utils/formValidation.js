// formValidation.js
// 表单验证工具函数

// 身份证号码验证
export const validateIdCard = (idCard) => {
  // 简单验证（18位身份证）
  if (!/^\d{17}[\dXx]$/.test(idCard)) {
    return false;
  }
  
  // 验证日期部分
  const year = parseInt(idCard.substr(6, 4));
  const month = parseInt(idCard.substr(10, 2));
  const day = parseInt(idCard.substr(12, 2));
  
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year || 
    date.getMonth() + 1 !== month || 
    date.getDate() !== day
  ) {
    return false;
  }
  
  // 这里可以添加更复杂的校验规则，例如校验和
  return true;
};

// 手机号码验证
export const validatePhoneNumber = (phone) => {
  return /^1[3-9]\d{9}$/.test(phone);
};

// 必填项验证
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

// 日期有效性验证
export const validateDate = (dateString) => {
  if (!dateString) return false;
  
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

// 年龄与出生日期一致性验证
export const validateAgeWithBirthDate = (age, ageUnit, birthDate) => {
  if (!age || !birthDate) return true;
  
  const birthDateTime = new Date(birthDate).getTime();
  const now = new Date().getTime();
  const diffYears = (now - birthDateTime) / (1000 * 60 * 60 * 24 * 365.25);
  
  switch (ageUnit) {
    case '1': // 岁
      return Math.abs(diffYears - parseInt(age)) < 1;
    case '2': // 月
      return Math.abs(diffYears * 12 - parseInt(age)) < 2;
    case '3': // 天
      return Math.abs(diffYears * 365.25 - parseInt(age)) < 10;
    case '4': // 小时
      return Math.abs(diffYears * 365.25 * 24 - parseInt(age)) < 30;
    case '5': // 分钟
      return Math.abs(diffYears * 365.25 * 24 * 60 - parseInt(age)) < 100;
    default:
      return true;
  }
};

// 死亡日期验证（不能晚于当前日期）
export const validateDeathDate = (deathDate) => {
  if (!deathDate) return true;
  
  const death = new Date(deathDate);
  const now = new Date();
  
  return death <= now;
};

// 表单完整性验证
export const validateFormCompleteness = (formData) => {
  // 关键必填字段
  const requiredFields = [
    'deceasedName',
    'gender',
    'deathDate',
    'deathPlace',
    'directCause'
  ];
  
  const missingFields = requiredFields.filter(field => !formData[field]);
  return missingFields.length === 0;
}; 