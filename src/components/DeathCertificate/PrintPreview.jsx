import React from 'react';

const PrintPreview = ({ formData }) => {
  // 辅助函数
  const getGenderText = (code) => {
    const genderMap = { '1': '男', '2': '女' };
    return genderMap[code] || '';
  };

  // 格式化日期显示
  const formatDate = (dateStr) => {
    if (!dateStr) return '_____ 年 _____ 月 _____ 日';
    const [year, month, day] = dateStr.split('-');
    return `${year} 年 ${month} 月 ${day} 日`;
  };

  return (
    <div className="print-preview">
      {/* 内联样式确保打印效果一致 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4 portrait;
            margin: 0.5cm;
          }
          
          body {
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            font-family: SimSun, "宋体", sans-serif;
            font-size: 10pt;
          }
          
          .no-print { 
            display: none !important; 
          }
          
          /* 第一页 - 第一联 */
          .first-page {
            width: 100%;
            height: 270mm; /* 一页A4纸略小于297mm高度，留出页边距 */
            position: relative;
            page-break-after: always;
            overflow: visible; /* 确保内容不被裁剪 */
          }
          
          /* 第二页 - 第二、三、四联 */
          .second-page {
            width: 100%;
            height: 270mm;
            position: relative;
            page-break-before: always;
            display: flex;
            flex-direction: column;
            overflow: visible; /* 确保内容不被裁剪 */
          }
          
          /* 各联次基本样式 */
          .certificate-title {
            text-align: center;
            font-weight: bold;
            font-size: 16pt;
            margin: 3mm 0;
          }
          
          .certificate-header {
            display: flex;
            justify-content: space-between;
            margin: 0 2mm 2mm 2mm;
            font-size: 10pt;
          }
          
          /* 表格样式 */
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1mm;
            page-break-inside: avoid;
          }
          
          table, th, td {
            border: 1px solid black;
          }
          
          td {
            padding: 1mm;
            font-size: 9pt;
            height: auto;
            vertical-align: middle;
          }
          
          .bg-gray {
            background-color: #f0f0f0;
            font-weight: bold;
            text-align: center;
          }
          
          .hint-text {
            font-size: 6pt;
            color: #666;
            font-style: italic;
            margin-top: 0.5mm;
          }
          
          /* 布局控制 */
          .certificate-part {
            margin-bottom: 3mm;
            border-bottom: 1px dashed #999;
            padding-bottom: 3mm;
          }
          
          .certificate-part:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }
          
          /* 第二联、三联、四联尺寸比例 */
          .part-two {
            flex: 2;
          }
          
          .part-three {
            flex: 1.5;
          }
          
          .part-four {
            flex: 2;
          }
          
          /* 侧栏样式 */
          .side-container {
            display: flex;
            width: 100%;
            border: 1px solid black;
          }
          
          .side-label {
            width: 20pt;
            border-right: 1px solid black;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 10pt;
            padding: 3pt 0;
          }
          
          .side-content {
            flex: 1;
            padding: 1mm;
          }
          
          .side-title {
            text-align: center;
            font-weight: bold;
            font-size: 12pt;
            margin: 1mm 0;
          }
          
          /* 注释样式 */
          .certificate-note {
            font-size: 6pt;
            margin-top: 1mm;
            font-style: italic;
          }
          
          /* 垂直文字样式 */
          .vertical-text {
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            display: inline-block;
            white-space: nowrap;
            height: 100%;
          }
          
          .text-center {
            text-align: center;
          }
          
          .section-title {
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
            background-color: #f0f0f0;
            font-weight: bold;
            text-align: center;
            padding: 1mm 0;
            margin: 1mm 0;
            font-size: 10pt;
          }
          
          /* 表格行高控制 */
          .standard-row td {
            height: 6mm;
          }
          
          .short-row td {
            height: 4mm;
          }
          
          .tall-row td {
            height: 8mm;
          }
          
          /* 调整第一页边框 */
          .first-page-content {
            border: 1px solid black;
            height: 100%;
          }
        }
      `}} />

      {/* 第一联 */}
      <div className="first-page">
        <div className="first-page-content">
          <h1 className="certificate-title">居民死亡医学证明（推断）书</h1>
          
          <div className="certificate-header">
            <div>
              <span>省(自治区、直辖市): {formData.province || '_______'}</span>
              <span style={{ marginLeft: '10pt' }}>市(地区、州、盟): {formData.city || '_______'}</span>
              <span style={{ marginLeft: '10pt' }}>县(区、旗): {formData.district || '_______'}</span>
            </div>
            <div>
              <span>编号: {formData.serialNumber || '_______'}</span>
            </div>
          </div>
          
          {/* 第一部分 - 基本信息 */}
          <table>
            <tbody>
              <tr className="standard-row">
                <td className="bg-gray" width="11%">死者姓名</td>
                <td width="14%">{formData.deceasedName || ''}</td>
                <td className="bg-gray" width="8%">性别</td>
                <td width="12%">
                  {getGenderText(formData.gender) || ''}
                  <div className="hint-text">1.男; 2.女</div>
                </td>
                <td className="bg-gray" width="8%">民族</td>
                <td width="12%">{formData.ethnicity || ''}</td>
                <td className="bg-gray" width="13%">国家或地区</td>
                <td width="22%">{formData.nationality || ''}</td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray">证件类型</td>
                <td colSpan="3">
                  {formData.idType === '1' ? '居民身份证' : 
                   formData.idType === '2' ? '户口薄' : 
                   formData.idType === '3' ? '护照' : 
                   formData.idType === '4' ? '军官证' : 
                   formData.idType === '5' ? '驾驶证' : 
                   formData.idType === '6' ? '港澳居民来往内地通行证' : 
                   formData.idType === '7' ? '台湾居民来往大陆通行证' : 
                   formData.idType === '8' ? '其他' : ''}
                  <div className="hint-text">1.居民证; 2.户口簿; 3.护照; 4.军官证; 5.驾驶证; 6.港澳居民往来内地通行证; 7.台湾居民往来通行证; 8.其他</div>
                </td>
                <td className="bg-gray">证件号码</td>
                <td colSpan="3">{formData.idNumber || ''}</td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray">年龄</td>
                <td>
                  {formData.age || ''}{' '}
                  {formData.ageUnit === '1' ? '岁' : 
                   formData.ageUnit === '2' ? '月' : 
                   formData.ageUnit === '3' ? '天' : 
                   formData.ageUnit === '4' ? '小时' : 
                   formData.ageUnit === '5' ? '分钟' : ''}
                </td>
                <td className="bg-gray">出生日期</td>
                <td colSpan="2" className="text-center">{formatDate(formData.birthDate)}</td>
                <td className="bg-gray">文化程度</td>
                <td colSpan="2">
                  {formData.educationLevel === '1' ? '研究生' :
                   formData.educationLevel === '2' ? '大学' :
                   formData.educationLevel === '3' ? '大专' :
                   formData.educationLevel === '4' ? '中专' :
                   formData.educationLevel === '5' ? '高中' :
                   formData.educationLevel === '6' ? '初中' :
                   formData.educationLevel === '7' ? '小学' :
                   formData.educationLevel === '8' ? '文盲' : ''}
                  <div className="hint-text">1.研究生; 2.大学; 3.大专; 4.中专; 5.高中; 6.初中; 7.小学; 8.文盲</div>
                </td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray">死亡时间</td>
                <td colSpan="3" className="text-center">
                  {formatDate(formData.deathDate)} {formData.deathTime ? formData.deathTime.split(':').join(' 时 ') + ' 分' : '_____ 时 _____ 分'}
                </td>
                <td className="bg-gray">死亡地点</td>
                <td colSpan="3">
                  {formData.deathPlace === '1' ? '医疗卫生机构内' :
                   formData.deathPlace === '2' ? '家中' :
                   formData.deathPlace === '3' ? '工作场所' :
                   formData.deathPlace === '4' ? '公共场所' :
                   formData.deathPlace === '5' ? '其他场所' :
                   formData.deathPlace === '6' ? '不详' : ''}
                  <div className="hint-text">1.医疗卫生机构内; 2.家中; 3.工作场所; 4.公共场所; 5.其他场所; 6.不详</div>
                </td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray">个人身份</td>
                <td colSpan="3">
                  {formData.personalIdentity === '11' ? '公务员' :
                   formData.personalIdentity === '13' ? '专业技术人员' :
                   formData.personalIdentity === '17' ? '职员' :
                   formData.personalIdentity === '21' ? '企业管理者' :
                   formData.personalIdentity === '24' ? '工人' :
                   formData.personalIdentity === '27' ? '农民' :
                   formData.personalIdentity === '31' ? '学生' :
                   formData.personalIdentity === '37' ? '现役军人' :
                   formData.personalIdentity === '51' ? '自由职业者' :
                   formData.personalIdentity === '54' ? '个体经营者' :
                   formData.personalIdentity === '70' ? '无业人员' :
                   formData.personalIdentity === '80' ? '离退休人员' :
                   formData.personalIdentity === '90' ? '其他' : ''}
                  <div className="hint-text">11.公务员; 13.专业技术人员; 17.职员; 21.企业管理者; 24.工人; 27.农民; 31.学生; 37.现役军人; 51.自由职业者; 54.个体经营者; 70.无业人员; 80.离退休人员; 90.其他</div>
                </td>
                <td className="bg-gray">生前工作单位</td>
                <td colSpan="3">{formData.workPlace || ''}</td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray">户籍地址</td>
                <td colSpan="7">{formData.permanentAddress || ''}</td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray">家属姓名</td>
                <td>{formData.relativeContact || ''}</td>
                <td className="bg-gray">与死者关系</td>
                <td>{formData.relationship || ''}</td>
                <td className="bg-gray">联系电话</td>
                <td colSpan="3">{formData.contactPhone || ''}</td>
              </tr>
            </tbody>
          </table>
          
          {/* 死亡原因标题 */}
          <div className="section-title">死亡原因</div>
          
          {/* 第二部分 - 死亡原因 */}
          <table>
            <tbody>
              <tr className="standard-row">
                <td className="bg-gray" width="28%">Ⅰ. (a)直接死亡原因</td>
                <td width="42%">{formData.directCause || ''}</td>
                <td className="bg-gray" width="30%">发病至死亡大概时间间隔</td>
              </tr>
              <tr className="short-row">
                <td className="bg-gray">(b)引起(a)的疾病或情况</td>
                <td>{formData.indirectCauseB || ''}</td>
                <td>{formData.indirectCauseBInterval || ''}</td>
              </tr>
              <tr className="short-row">
                <td className="bg-gray">(c)引起(b)的疾病或情况</td>
                <td>{formData.indirectCauseC || ''}</td>
                <td>{formData.indirectCauseCInterval || ''}</td>
              </tr>
              <tr className="short-row">
                <td className="bg-gray">(d)引起(c)的疾病或情况</td>
                <td>{formData.indirectCauseD || ''}</td>
                <td>{formData.indirectCauseDInterval || ''}</td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray">Ⅱ. 其他疾病诊断（促进死亡，但与导致死亡无关的其他重要情况）</td>
                <td colSpan="2">{formData.otherDiagnosis || ''}</td>
              </tr>
            </tbody>
          </table>
          
          {/* 第三部分 - 医学信息 */}
          <table>
            <tbody>
              <tr className="standard-row">
                <td className="bg-gray" width="25%">生前主要疾病既往就诊医院级别</td>
                <td width="25%">
                  {formData.priorHospitalLevel === '1' ? '三级医院' :
                   formData.priorHospitalLevel === '2' ? '二级医院' :
                   formData.priorHospitalLevel === '3' ? '乡镇卫生院/社区卫生服务机构' :
                   formData.priorHospitalLevel === '4' ? '村卫生室' :
                   formData.priorHospitalLevel === '9' ? '其他医疗卫生机构' :
                   formData.priorHospitalLevel === '0' ? '未就诊' : ''}
                  <div className="hint-text">1.三级医院; 2.二级医院; 3.乡镇卫生院/社区卫生服务机构; 4.村卫生室; 9.其他医疗卫生机构; 0.未就诊</div>
                </td>
                <td className="bg-gray" width="25%">生前主要疾病最高诊断依据</td>
                <td width="25%">
                  {formData.diagnosisBasis === '1' ? '尸检' :
                   formData.diagnosisBasis === '2' ? '手术' :
                   formData.diagnosisBasis === '3' ? '生化' :
                   formData.diagnosisBasis === '4' ? '临床-辅助检查' :
                   formData.diagnosisBasis === '5' ? '临床' :
                   formData.diagnosisBasis === '6' ? '症状描述' :
                   formData.diagnosisBasis === '9' ? '不详' : ''}
                  <div className="hint-text">1.尸检; 2.手术; 3.生化; 4.临床-辅助检查; 5.临床; 6.症状描述; 9.不详</div>
                </td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray">死者病史</td>
                <td colSpan="3">{formData.medicalHistory || ''}</td>
              </tr>
            </tbody>
          </table>
          
          <table>
            <tbody>
              <tr className="standard-row">
                <td className="bg-gray" width="20%">医师签名</td>
                <td width="30%">{formData.doctorSignature || ''}</td>
                <td className="bg-gray" width="20%">医疗卫生机构盖章</td>
                <td width="30%">{formData.hospitalStamp || ''}</td>
              </tr>
              <tr className="short-row">
                <td className="bg-gray">填表日期</td>
                <td colSpan="3" className="text-center">
                  {formatDate(formData.fillDate)}
                </td>
              </tr>
              <tr className="short-row">
                <td className="bg-gray">(以下由编码人员填写)</td>
                <td colSpan="2">根本死亡原因：{formData.fundamentalCause || ''}</td>
                <td>ICD编码：{formData.icdCode || ''}</td>
              </tr>
            </tbody>
          </table>
          
          {/* 调查记录标题 */}
          <div className="section-title">死亡调查记录</div>
          
          {/* 第五部分 - 调查记录 */}
          <table>
            <tbody>
              <tr>
                <td colSpan="4" style={{ height: '70px', verticalAlign: 'top', paddingTop: '2mm' }}>死者生前病史及死因状况：</td>
              </tr>
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', height: '20px' }}>以上情况属实，被调查者签字：</td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray" width="20%">被调查者姓名</td>
                <td width="30%">{formData.investigatedName || ''}</td>
                <td className="bg-gray" width="20%">与死者关系</td>
                <td width="30%">{formData.relationToDeceased || ''}</td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray">联系电话</td>
                <td>{formData.investigatedPhone || ''}</td>
                <td className="bg-gray">联系地址或工作单位</td>
                <td></td>
              </tr>
              <tr className="standard-row">
                <td className="bg-gray">死因推断</td>
                <td>{formData.deathJudgement === '1' ? '是' : '否'}</td>
                <td className="bg-gray">调查日期</td>
                <td className="text-center">
                  {formatDate(formData.investigationDate)}
                </td>
              </tr>
            </tbody>
          </table>
          
          <div style={{ textAlign: 'center', fontSize: '7pt', marginTop: '3mm' }}>
            注：①请委托家属填写自然死亡、非暴力死亡、非异常死亡症状；②须调查者亲笔签字为死亡证明有效；③请慎用"猝死"一词且慎下判断；<br/>
            本调查委员会效力声明：所记载事项是根据家属陈述；死者属"自然/正常"死亡。
          </div>
        </div>
      </div>

      {/* 第二页 - 包含第二、三、四联 */}
      <div className="second-page">
        {/* 第二联 */}
        <div className="certificate-part part-two">
          <div className="side-container">
            <div className="side-label">第二联（公安部门保存）</div>
            <div className="side-content">
              <h2 className="side-title">居民死亡医学证明（推断）书</h2>
              
              <div className="certificate-header">
                <div>
                  <span>行政区划代码：□□□□□□</span>
                </div>
                <div>
                  <span>编号: {formData.serialNumber || '_______'}</span>
                </div>
              </div>
              
              <table>
                <tbody>
                  <tr>
                    <td className="bg-gray" width="12%">死者姓名</td>
                    <td width="21%">{formData.deceasedName || ''}</td>
                    <td className="bg-gray" width="12%">性别</td>
                    <td width="21%">{getGenderText(formData.gender)}</td>
                    <td className="bg-gray" width="12%">民族</td>
                    <td width="22%">{formData.ethnicity || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">身份证件类别</td>
                    <td>
                      {formData.idType === '1' ? '居民身份证' : 
                      formData.idType === '2' ? '户口薄' : 
                      formData.idType === '3' ? '护照' : 
                      formData.idType === '4' ? '军官证' : 
                      formData.idType === '5' ? '驾驶证' : 
                      formData.idType === '6' ? '港澳居民来往内地通行证' : 
                      formData.idType === '7' ? '台湾居民来往大陆通行证' : 
                      formData.idType === '8' ? '其他' : ''}
                    </td>
                    <td className="bg-gray">证件号码</td>
                    <td colSpan="3">{formData.idNumber || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">出生日期</td>
                    <td className="text-center">
                      年 月 日
                    </td>
                    <td className="bg-gray">死亡日期</td>
                    <td className="text-center">
                      年 月 日
                    </td>
                    <td className="bg-gray">死亡地点</td>
                    <td>
                      {formData.deathPlace === '1' ? '医疗卫生机构内' :
                      formData.deathPlace === '2' ? '家中' :
                      formData.deathPlace === '3' ? '工作场所' :
                      formData.deathPlace === '4' ? '公共场所' :
                      formData.deathPlace === '5' ? '其他场所' :
                      formData.deathPlace === '6' ? '不详' : ''}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray">死亡原因</td>
                    <td colSpan="5">{formData.directCause || (formData.fundamentalCause || '')}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">常住地址</td>
                    <td colSpan="5">{formData.permanentAddress || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">家属姓名</td>
                    <td>{formData.relativeContact || ''}</td>
                    <td className="bg-gray">与死者关系</td>
                    <td>{formData.relationship || ''}</td>
                    <td className="bg-gray">联系电话</td>
                    <td>{formData.contactPhone || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">医师签名</td>
                    <td>{formData.doctorSignature || ''}</td>
                    <td className="bg-gray">医疗卫生机构盖章</td>
                    <td colSpan="3"></td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-center">
                      {formatDate(formData.fillDate).replace(/年|月|日/g, '')}
                    </td>
                    <td colSpan="3" className="text-center">
                      年 月 日
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div className="certificate-note">注：①死亡者家属凭此证明到公安机关办理注销户口手续；②无死亡原因及医师签字、医疗卫生机构盖章证明无效。</div>
            </div>
          </div>
        </div>
        
        {/* 第三联 */}
        <div className="certificate-part part-three">
          <div className="side-container">
            <div className="side-label">第三联（死亡者家属保存）</div>
            <div className="side-content">
              <h2 className="side-title">居民死亡医学证明（推断）书</h2>
              
              <div className="certificate-header">
                <div>
                  <span>行政区划代码：□□□□□□</span>
                </div>
                <div>
                  <span>编号: {formData.serialNumber || '_______'}</span>
                </div>
              </div>
              
              <table>
                <tbody>
                  <tr>
                    <td className="bg-gray" width="12%">死者姓名</td>
                    <td width="21%">{formData.deceasedName || ''}</td>
                    <td className="bg-gray" width="12%">性别</td>
                    <td width="21%">{getGenderText(formData.gender)}</td>
                    <td className="bg-gray" width="12%">民族</td>
                    <td width="22%">{formData.ethnicity || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">身份证件类别</td>
                    <td>
                      {formData.idType === '1' ? '居民身份证' : 
                      formData.idType === '2' ? '户口薄' : 
                      formData.idType === '3' ? '护照' : 
                      formData.idType === '4' ? '军官证' : 
                      formData.idType === '5' ? '驾驶证' : 
                      formData.idType === '6' ? '港澳居民来往内地通行证' : 
                      formData.idType === '7' ? '台湾居民来往大陆通行证' : 
                      formData.idType === '8' ? '其他' : ''}
                    </td>
                    <td className="bg-gray">证件号码</td>
                    <td colSpan="3">{formData.idNumber || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">出生日期</td>
                    <td className="text-center">
                      年 月 日
                    </td>
                    <td className="bg-gray">死亡日期</td>
                    <td className="text-center">
                      年 月 日
                    </td>
                    <td className="bg-gray">死亡地点</td>
                    <td>
                      {formData.deathPlace === '1' ? '医疗卫生机构内' :
                      formData.deathPlace === '2' ? '家中' :
                      formData.deathPlace === '3' ? '工作场所' :
                      formData.deathPlace === '4' ? '公共场所' :
                      formData.deathPlace === '5' ? '其他场所' :
                      formData.deathPlace === '6' ? '不详' : ''}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray">死亡原因</td>
                    <td colSpan="5">{formData.directCause || (formData.fundamentalCause || '')}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">常住地址</td>
                    <td colSpan="5">{formData.permanentAddress || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">家属姓名</td>
                    <td>{formData.relativeContact || ''}</td>
                    <td className="bg-gray">与死者关系</td>
                    <td>{formData.relationship || ''}</td>
                    <td className="bg-gray">联系电话</td>
                    <td>{formData.contactPhone || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">医师签名</td>
                    <td>{formData.doctorSignature || ''}</td>
                    <td className="bg-gray">医疗卫生机构盖章</td>
                    <td colSpan="3"></td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-center">
                      {formatDate(formData.fillDate).replace(/年|月|日/g, '')}
                    </td>
                    <td colSpan="3" className="text-center">
                      年 月 日
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div className="certificate-note">注：①死亡者家属凭此证明办理相关公证手续；②无死亡原因及医师签字、医疗卫生机构盖章证明无效；③本证明书可以外出办理丧葬事宜。</div>
            </div>
          </div>
        </div>
        
        {/* 第四联 */}
        <div className="certificate-part part-four">
          <div className="side-container">
            <div className="side-label">第四联（殡葬管理部门保存）</div>
            <div className="side-content">
              <h2 className="side-title">居民死亡殡葬证</h2>
              
              <div className="certificate-header">
                <div>
                  <span>行政区划代码：□□□□□□</span>
                </div>
                <div>
                  <span>编号: {formData.serialNumber || '_______'}</span>
                </div>
              </div>
              
              <table>
                <tbody>
                  <tr>
                    <td className="bg-gray" width="12%">死者姓名</td>
                    <td width="21%">{formData.deceasedName || ''}</td>
                    <td className="bg-gray" width="12%">性别</td>
                    <td width="21%">{getGenderText(formData.gender)}</td>
                    <td className="bg-gray" width="12%">民族</td>
                    <td width="22%">{formData.ethnicity || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">身份证件类别</td>
                    <td>
                      {formData.idType === '1' ? '居民身份证' : 
                      formData.idType === '2' ? '户口薄' : 
                      formData.idType === '3' ? '护照' : 
                      formData.idType === '4' ? '军官证' : 
                      formData.idType === '5' ? '驾驶证' : 
                      formData.idType === '6' ? '港澳居民来往内地通行证' : 
                      formData.idType === '7' ? '台湾居民来往大陆通行证' : 
                      formData.idType === '8' ? '其他' : ''}
                    </td>
                    <td className="bg-gray">证件号码</td>
                    <td colSpan="3">{formData.idNumber || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">出生日期</td>
                    <td className="text-center">
                      年 月 日
                    </td>
                    <td className="bg-gray">死亡日期</td>
                    <td className="text-center">
                      年 月 日
                    </td>
                    <td className="bg-gray">死亡地点</td>
                    <td>
                      {formData.deathPlace === '1' ? '医疗卫生机构内' :
                      formData.deathPlace === '2' ? '家中' :
                      formData.deathPlace === '3' ? '工作场所' :
                      formData.deathPlace === '4' ? '公共场所' :
                      formData.deathPlace === '5' ? '其他场所' :
                      formData.deathPlace === '6' ? '不详' : ''}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray">死亡原因</td>
                    <td colSpan="5">{formData.directCause || (formData.fundamentalCause || '')}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">常住地址</td>
                    <td colSpan="5">{formData.permanentAddress || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">家属姓名</td>
                    <td>{formData.relativeContact || ''}</td>
                    <td className="bg-gray">与死者关系</td>
                    <td>{formData.relationship || ''}</td>
                    <td className="bg-gray">联系电话</td>
                    <td>{formData.contactPhone || ''}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray">医师签名</td>
                    <td>{formData.doctorSignature || ''}</td>
                    <td className="bg-gray">医疗卫生机构盖章</td>
                    <td colSpan="3"></td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-center">
                      {formatDate(formData.fillDate).replace(/年|月|日/g, '')}
                    </td>
                    <td colSpan="3" className="text-center">
                      年 月 日
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div className="certificate-note">注：①死亡者家属凭此证明到殡仪馆办理火化手续；②无死亡原因、流行病学调查和医疗卫生机构盖章证明无效；死于传染病殡仪馆应拒绝接收。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPreview; 