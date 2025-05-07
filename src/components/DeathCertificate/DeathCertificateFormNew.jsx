import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useReactToPrint } from 'react-to-print';
import BasicInfoSection from './FormSections/BasicInfoSection';
import DeathInfoSection from './FormSections/DeathInfoSection';
import InvestigationSection from './FormSections/InvestigationSection';
import PrintPreview from './PrintPreview';
import './styles.module.css';

const DeathCertificateFormNew = () => {
  // 表单状态管理
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      province: '',
      city: '',
      district: '',
      serialNumber: '',
      deceasedName: '',
      gender: '1', // 1表示男性
      idType: '1', // 1表示居民身份证
      idNumber: '',
      nationality: '',
      ethnicity: '',
      age: '',
      ageUnit: '1', // 1表示岁
      birthDate: '',
      educationLevel: '6', // 6表示初中
      personalIdentity: '27', // 27表示农民
      deathDate: '',
      deathTime: '',
      deathPlace: '2', // 2表示家中
      workPlace: '',
      permanentAddress: '',
      relativeContact: '',
      relationship: '',
      contactPhone: '',
      directCause: '',
      directCauseInterval: '',
      indirectCauseB: '',
      indirectCauseBInterval: '',
      indirectCauseC: '',
      indirectCauseCInterval: '',
      indirectCauseD: '',
      indirectCauseDInterval: '',
      otherDiagnosis: '',
      priorHospitalLevel: '0', // 0表示未就诊
      diagnosisBasis: '5', // 5表示临床
      doctorSignature: '',
      hospitalStamp: '',
      fillDate: new Date().toISOString().split('T')[0], // 今天日期
      fundamentalCause: '',
      icdCode: '',
      medicalHistory: '',
      investigatedName: '',
      relationToDeceased: '',
      investigatedPhone: '',
      deathJudgement: '1', // 1表示是
      investigatorSignature: '',
      investigationDate: new Date().toISOString().split('T')[0], // 今天日期
    }
  });
  
  // 状态管理
  const [previewMode, setPreviewMode] = useState(false);
  const [formData, setFormData] = useState({});
  
  // 表单引用 - 用于打印
  const formRef = useRef();
  
  // 处理表单提交
  const onSubmit = data => {
    setFormData(data);
    setPreviewMode(true);
    // 在实际应用中，这里可以添加API调用保存数据
    console.log('表单数据:', data);
  };
  
  // 配置打印功能 - 极简化设置，让PrintPreview组件负责所有打印样式
  const handlePrint = useReactToPrint({
    content: () => formRef.current,
    documentTitle: `死亡医学证明_${formData.deceasedName || '未命名'}`,
    onBeforeGetContent: () => {
      if (!previewMode) {
        setPreviewMode(true);
      }
      return Promise.resolve();
    },
    // 极简样式设置，避免冲突
    pageStyle: `
      @media print {
        /* 隐藏非打印内容 */
        .no-print {
          display: none !important;
        }
      }
    `
  });
  
  // 返回填写模式
  const backToEditMode = () => {
    setPreviewMode(false);
  };
  
  return (
    <div className="container mx-auto p-4">
      {/* 功能按钮 - 不会被打印 */}
      <div className="mb-4 flex gap-2 no-print">
        <button 
          onClick={backToEditMode} 
          className={`px-4 py-2 ${!previewMode ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          disabled={!previewMode}
        >
          返回编辑
        </button>
        <button 
          onClick={handlePrint} 
          className="px-4 py-2 bg-green-500 text-white"
        >
          打印全部联次
        </button>
      </div>

      {/* 表单/预览区域 */}
      {previewMode ? (
        <div ref={formRef} className="print-container no-border">
          <PrintPreview formData={formData} />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 border rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-bold mb-6">居民死亡医学证明（推断）书</h1>
          
          {/* 表单各部分 */}
          <div className="form-header grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <label className="mr-2">省(自治区、直辖市):</label>
              <input 
                type="text" 
                {...register('province', { required: "省份不能为空" })} 
                className="border px-2 py-1 flex-1"
              />
              <label className="mx-2">市(地区、州、盟):</label>
              <input 
                type="text" 
                {...register('city')} 
                className="border px-2 py-1 flex-1"
              />
              <label className="mx-2">县(区、旗):</label>
              <input 
                type="text" 
                {...register('district')} 
                className="border px-2 py-1 flex-1"
              />
            </div>
            <div className="flex items-center justify-end">
              <label className="mr-2">编号:</label>
              <input 
                type="text" 
                {...register('serialNumber')} 
                className="border px-2 py-1 w-40"
              />
            </div>
          </div>
          
          {/* 基本信息部分 */}
          <BasicInfoSection register={register} errors={errors} watch={watch} />
          
          {/* 死亡信息部分 */}
          <DeathInfoSection register={register} errors={errors} />
          
          {/* 调查记录部分 */}
          <InvestigationSection register={register} errors={errors} />
          
          {/* 提交按钮 */}
          <div className="mt-6 text-center">
            <button 
              type="submit" 
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              生成预览
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DeathCertificateFormNew; 