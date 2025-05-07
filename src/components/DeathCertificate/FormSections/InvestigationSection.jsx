// InvestigationSection.jsx - 死亡调查记录区域
import React from 'react';

const InvestigationSection = ({ register, errors }) => {
  return (
    <div className="investigation mb-6">
      <h2 className="text-center text-xl font-bold my-4">死亡调查记录</h2>
      <table className="w-full border-collapse border">
        <tbody>
          <tr>
            <td className="border p-2" colSpan="7">
              <div className="mb-2 font-semibold">死者生前病史及症状体征：</div>
              <textarea 
                {...register('medicalHistory')} 
                className="w-full h-24"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/7">被调查者姓名</td>
            <td className="border p-2 w-1/7">
              <input 
                type="text" 
                {...register('investigatedName')} 
                className="w-full"
              />
            </td>
            <td className="border p-2 w-1/7">与死者关系</td>
            <td className="border p-2 w-1/7">
              <input 
                type="text" 
                {...register('relationToDeceased')} 
                className="w-full"
              />
            </td>
            <td className="border p-2 w-1/7">联系电话</td>
            <td className="border p-2 w-2/7" colSpan="2">
              <input 
                type="tel" 
                {...register('investigatedPhone')} 
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border p-2">死亡推断</td>
            <td className="border p-2" colSpan="2">
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input type="radio" {...register('deathJudgement')} value="1" />
                  <span className="ml-1">是</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('deathJudgement')} value="2" />
                  <span className="ml-1">否</span>
                </label>
              </div>
            </td>
            <td className="border p-2">调查者签名</td>
            <td className="border p-2">
              <input 
                type="text" 
                {...register('investigatorSignature')} 
                className="w-full"
              />
            </td>
            <td className="border p-2">调查日期</td>
            <td className="border p-2">
              <input 
                type="date" 
                {...register('investigationDate')} 
                className="w-full"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestigationSection; 