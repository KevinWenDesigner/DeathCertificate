import React from 'react';
import DeathCertificateFormNew from './components/DeathCertificate/DeathCertificateFormNew';

const App = () => {
  return (
    <div className="app-container">
      <header className="bg-blue-600 text-white p-4 mb-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">居民死亡医学证明系统</h1>
          <p className="text-sm">为医疗卫生机构提供高效的死亡证明生成服务</p>
        </div>
      </header>
      <main className="container mx-auto pb-10">
        <DeathCertificateFormNew />
      </main>
      <footer className="bg-gray-100 text-center p-4 text-gray-600 text-sm">
        <div className="container mx-auto">
          <p>© 2023 居民死亡医学证明系统 - 版权所有</p>
        </div>
      </footer>
    </div>
  );
};

export default App; 