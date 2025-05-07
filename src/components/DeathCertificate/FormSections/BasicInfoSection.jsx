// BasicInfoSection.jsx - 基本信息区域
import React from 'react';

const BasicInfoSection = ({ register, errors, watch }) => {
  return (
    <div className="basic-info mb-6">
      <table className="w-full border-collapse border">
        <tbody>
          <tr>
            <td className="border p-2 w-1/6 bg-gray-50">死者姓名</td>
            <td className="border p-2 w-1/6">
              <input 
                type="text" 
                {...register('deceasedName', { required: "姓名不能为空" })} 
                className="w-full"
              />
              {errors.deceasedName && <span className="text-red-500 text-xs">{errors.deceasedName.message}</span>}
            </td>
            <td className="border p-2 w-1/6 bg-gray-50">性别</td>
            <td className="border p-2 w-1/6">
              <div className="flex items-center space-x-2">
                <label className="flex items-center">
                  <input type="radio" {...register('gender')} value="1" />
                  <span className="ml-1">男</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('gender')} value="2" />
                  <span className="ml-1">女</span>
                </label>
              </div>
            </td>
            <td className="border p-2 w-1/6 bg-gray-50">民族</td>
            <td className="border p-2 w-1/6">
              <input 
                type="text" 
                {...register('ethnicity')} 
                className="w-full"
              />
            </td>
          </tr>
          
          <tr>
            <td className="border p-2 bg-gray-50">有效身份证件类别</td>
            <td className="border p-2" colSpan="3">
              <div className="grid grid-cols-4 gap-2">
                <label className="flex items-center">
                  <input type="radio" {...register('idType')} value="1" />
                  <span className="ml-1">居民身份证</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('idType')} value="2" />
                  <span className="ml-1">户口薄</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('idType')} value="3" />
                  <span className="ml-1">护照</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('idType')} value="4" />
                  <span className="ml-1">军官证</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('idType')} value="5" />
                  <span className="ml-1">驾驶证</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('idType')} value="6" />
                  <span className="ml-1">港澳居民来往内地通行证</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('idType')} value="7" />
                  <span className="ml-1">台湾居民来往大陆通行证</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('idType')} value="8" />
                  <span className="ml-1">其他</span>
                </label>
              </div>
            </td>
            <td className="border p-2 bg-gray-50">证件号码</td>
            <td className="border p-2">
              <input 
                type="text" 
                {...register('idNumber', { 
                  validate: value => {
                    const idType = watch('idType');
                    if (idType === '1' && value && !/^\d{17}[\dXx]$/.test(value)) {
                      return "身份证号格式不正确";
                    }
                    return true;
                  }
                })} 
                className="w-full"
              />
              {errors.idNumber && <span className="text-red-500 text-xs">{errors.idNumber.message}</span>}
            </td>
          </tr>
          
          <tr>
            <td className="border p-2 bg-gray-50">国家或地区</td>
            <td className="border p-2">
              <input 
                type="text" 
                {...register('nationality')} 
                className="w-full"
              />
            </td>
            <td className="border p-2 bg-gray-50">年龄</td>
            <td className="border p-2">
              <input 
                type="number" 
                {...register('age')} 
                className="w-full"
              />
            </td>
            <td className="border p-2 bg-gray-50" colSpan="2">
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input type="radio" {...register('ageUnit')} value="1" />
                  <span className="ml-1">岁</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('ageUnit')} value="2" />
                  <span className="ml-1">月</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('ageUnit')} value="3" />
                  <span className="ml-1">天</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('ageUnit')} value="4" />
                  <span className="ml-1">小时</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('ageUnit')} value="5" />
                  <span className="ml-1">分钟</span>
                </label>
              </div>
            </td>
          </tr>
          
          <tr>
            <td className="border p-2 bg-gray-50">出生日期</td>
            <td className="border p-2" colSpan="2">
              <input 
                type="date" 
                {...register('birthDate')} 
                className="w-full"
              />
            </td>
            <td className="border p-2 bg-gray-50">文化程度</td>
            <td className="border p-2" colSpan="2">
              <div className="grid grid-cols-3 gap-2">
                <label className="flex items-center">
                  <input type="radio" {...register('educationLevel')} value="1" />
                  <span className="ml-1">研究生</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('educationLevel')} value="2" />
                  <span className="ml-1">大学</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('educationLevel')} value="3" />
                  <span className="ml-1">大专</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('educationLevel')} value="4" />
                  <span className="ml-1">中专</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('educationLevel')} value="5" />
                  <span className="ml-1">高中</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('educationLevel')} value="6" />
                  <span className="ml-1">初中</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('educationLevel')} value="7" />
                  <span className="ml-1">小学</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('educationLevel')} value="8" />
                  <span className="ml-1">文盲</span>
                </label>
              </div>
            </td>
          </tr>
          
          <tr>
            <td className="border p-2 bg-gray-50">个人身份</td>
            <td className="border p-2" colSpan="5">
              <div className="grid grid-cols-6 gap-2">
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="11" />
                  <span className="ml-1">公务员</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="13" />
                  <span className="ml-1">专业技术人员</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="17" />
                  <span className="ml-1">职员</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="21" />
                  <span className="ml-1">企业管理者</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="24" />
                  <span className="ml-1">工人</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="27" />
                  <span className="ml-1">农民</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="31" />
                  <span className="ml-1">学生</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="37" />
                  <span className="ml-1">现役军人</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="51" />
                  <span className="ml-1">自由职业者</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="54" />
                  <span className="ml-1">个体经营者</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="70" />
                  <span className="ml-1">无业人员</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="80" />
                  <span className="ml-1">离退休人员</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('personalIdentity')} value="90" />
                  <span className="ml-1">其他</span>
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicInfoSection; 