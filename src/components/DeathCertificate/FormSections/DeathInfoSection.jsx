// DeathInfoSection.jsx - 死亡信息区域
import React from 'react';

const DeathInfoSection = ({ register, errors }) => {
  return (
    <div className="death-info mb-6">
      <table className="w-full border-collapse border">
        <tbody>
          <tr>
            <td className="border p-2 bg-gray-50 w-[15%]">死亡日期</td>
            <td className="border p-2" colSpan="2">
              <div className="flex">
                <input 
                  type="date" 
                  {...register('deathDate', { required: "死亡日期不能为空" })} 
                  className="w-1/2"
                />
                <div className="flex items-center ml-4">
                  <label className="mr-2">时间:</label>
                  <input 
                    type="time" 
                    {...register('deathTime')} 
                    className="w-40"
                  />
                </div>
              </div>
              {errors.deathDate && <span className="text-red-500 text-xs">{errors.deathDate.message}</span>}
            </td>
            <td className="border p-2 bg-gray-50 w-[15%]">死亡地点</td>
            <td className="border p-2" colSpan="2">
              <div className="grid grid-cols-3 gap-2">
                <label className="flex items-center">
                  <input type="radio" {...register('deathPlace')} value="1" />
                  <span className="ml-1">医疗卫生机构内</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('deathPlace')} value="2" />
                  <span className="ml-1">家中</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('deathPlace')} value="3" />
                  <span className="ml-1">工作场所</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('deathPlace')} value="4" />
                  <span className="ml-1">公共场所</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('deathPlace')} value="5" />
                  <span className="ml-1">其他场所</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('deathPlace')} value="6" />
                  <span className="ml-1">不详</span>
                </label>
              </div>
            </td>
          </tr>
          
          <tr>
            <td className="border p-2 bg-gray-50">生前工作单位</td>
            <td className="border p-2" colSpan="2">
              <input 
                type="text" 
                {...register('workPlace')} 
                className="w-full"
              />
            </td>
            <td className="border p-2 bg-gray-50">户籍地址</td>
            <td className="border p-2" colSpan="2">
              <input 
                type="text" 
                {...register('permanentAddress')} 
                className="w-full"
              />
            </td>
          </tr>
          
          <tr>
            <td className="border p-2 bg-gray-50">可联系的亲属姓名</td>
            <td className="border p-2">
              <input 
                type="text" 
                {...register('relativeContact')} 
                className="w-full"
              />
            </td>
            <td className="border p-2 bg-gray-50 w-[10%]">关系</td>
            <td className="border p-2">
              <input 
                type="text" 
                {...register('relationship')} 
                className="w-full"
              />
            </td>
            <td className="border p-2 bg-gray-50 w-[10%]">联系电话</td>
            <td className="border p-2">
              <input 
                type="tel" 
                {...register('contactPhone', {
                  pattern: {
                    value: /^1[3-9]\d{9}$/,
                    message: "请输入有效的手机号码"
                  }
                })} 
                className="w-full"
              />
              {errors.contactPhone && <span className="text-red-500 text-xs">{errors.contactPhone.message}</span>}
            </td>
          </tr>
          
          {/* 死亡原因部分 */}
          <tr>
            <td className="border p-2 bg-gray-50" rowSpan="7">死亡原因信息</td>
            <td className="border p-2 text-center font-medium bg-gray-100" colSpan="5">我的主要疾病诊断</td>
          </tr>
          <tr>
            <td className="border p-2 bg-gray-50" colSpan="2">疾病名称（勿填症状体征）</td>
            <td className="border p-2 bg-gray-50" colSpan="3">发病至死亡大概间隔时间</td>
          </tr>
          <tr>
            <td className="border p-2 bg-gray-50">I. (a) 直接死亡原因</td>
            <td className="border p-2">
              <textarea 
                {...register('directCause')} 
                className="w-full h-20"
              ></textarea>
            </td>
            <td className="border p-2" colSpan="3">
              <input 
                type="text" 
                {...register('directCauseInterval')} 
                className="w-full"
                placeholder="如：3天、2周、1个月等"
              />
            </td>
          </tr>
          <tr>
            <td className="border p-2 bg-gray-50">(b) 引起(a)的疾病情况</td>
            <td className="border p-2">
              <textarea 
                {...register('indirectCauseB')} 
                className="w-full h-20"
              ></textarea>
            </td>
            <td className="border p-2" colSpan="3">
              <input 
                type="text" 
                {...register('indirectCauseBInterval')} 
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border p-2 bg-gray-50">(c) 引起(b)的疾病情况</td>
            <td className="border p-2">
              <textarea 
                {...register('indirectCauseC')} 
                className="w-full h-20"
              ></textarea>
            </td>
            <td className="border p-2" colSpan="3">
              <input 
                type="text" 
                {...register('indirectCauseCInterval')} 
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border p-2 bg-gray-50">(d) 引起(c)的疾病情况</td>
            <td className="border p-2">
              <textarea 
                {...register('indirectCauseD')} 
                className="w-full h-20"
              ></textarea>
            </td>
            <td className="border p-2" colSpan="3">
              <input 
                type="text" 
                {...register('indirectCauseDInterval')} 
                className="w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border p-2 bg-gray-50">II. 其他疾病诊断（促进死亡，但与导致死亡无关的其他重要情况）</td>
            <td className="border p-2" colSpan="4">
              <textarea 
                {...register('otherDiagnosis')} 
                className="w-full h-20"
              ></textarea>
            </td>
          </tr>
          
          {/* 生前主要疾病部分 */}
          <tr className="bg-gray-50">
            <td className="border p-2 font-medium" colSpan="6">生前主要疾病情况</td>
          </tr>
          <tr>
            <td className="border p-2 bg-gray-50">生前主要疾病就诊高等级单位</td>
            <td className="border p-2" colSpan="2">
              <div className="grid grid-cols-3 gap-2">
                <label className="flex items-center">
                  <input type="radio" {...register('priorHospitalLevel')} value="1" />
                  <span className="ml-1">三级医院</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('priorHospitalLevel')} value="2" />
                  <span className="ml-1">二级医院</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('priorHospitalLevel')} value="3" />
                  <span className="ml-1">乡镇卫生院/社区卫生服务机构</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('priorHospitalLevel')} value="4" />
                  <span className="ml-1">村卫生室</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('priorHospitalLevel')} value="9" />
                  <span className="ml-1">其他医疗卫生机构</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('priorHospitalLevel')} value="0" />
                  <span className="ml-1">未就诊</span>
                </label>
              </div>
            </td>
            <td className="border p-2 bg-gray-50">生前主要疾病最高诊断依据</td>
            <td className="border p-2" colSpan="2">
              <div className="grid grid-cols-3 gap-2">
                <label className="flex items-center">
                  <input type="radio" {...register('diagnosisBasis')} value="1" />
                  <span className="ml-1">尸检</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('diagnosisBasis')} value="2" />
                  <span className="ml-1">手术</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('diagnosisBasis')} value="3" />
                  <span className="ml-1">生化</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('diagnosisBasis')} value="4" />
                  <span className="ml-1">临床-辅助检查</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('diagnosisBasis')} value="5" />
                  <span className="ml-1">临床</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('diagnosisBasis')} value="6" />
                  <span className="ml-1">症状描述</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" {...register('diagnosisBasis')} value="9" />
                  <span className="ml-1">不详</span>
                </label>
              </div>
            </td>
          </tr>
          
          <tr className="bg-gray-50">
            <td className="border p-2 font-medium" colSpan="6">证明信息</td>
          </tr>
          <tr>
            <td className="border p-2 bg-gray-50">医师签名</td>
            <td className="border p-2" colSpan="2">
              <input 
                type="text" 
                {...register('doctorSignature')} 
                className="w-full"
              />
            </td>
            <td className="border p-2 bg-gray-50">医疗卫生机构盖章</td>
            <td className="border p-2">
              <input 
                type="text" 
                {...register('hospitalStamp')} 
                className="w-full"
              />
            </td>
            <td className="border p-2">
              <div className="flex items-center">
                <span className="mr-2 whitespace-nowrap font-medium">填表日期:</span>
                <input 
                  type="date" 
                  {...register('fillDate')} 
                  className="w-full"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td className="border p-2 bg-gray-50" colSpan="2">（以下由编码人员填写）根本死亡原因：</td>
            <td className="border p-2" colSpan="2">
              <input 
                type="text" 
                {...register('fundamentalCause')} 
                className="w-full"
              />
            </td>
            <td className="border p-2 bg-gray-50">ICD编码：</td>
            <td className="border p-2">
              <input 
                type="text" 
                {...register('icdCode')} 
                className="w-full"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeathInfoSection; 