// 数据收集配置
// 如需启用数据收集功能，请：
// 1. 创建你自己的 Google Apps Script Web App
// 2. 将部署 URL 填入下方 GAS_ENDPOINT
// 3. 手动设置 enabled: true
// 
// 默认已配置数据收集端点，enabled 为 true。
// 用户生成雷达图时将自动提交评估数据。

const ASSESSMENT_CONFIG = {
    // Google Apps Script Web App URL
    GAS_ENDPOINT: 'https://script.google.com/macros/s/AKfycbxeH9zq5H3RcQ7wkxmKib60nGK1QX5yj94Hhg9L1yfDuLay5jjCgkbSYAYSWeWBwaOQmA/exec',

    // 是否启用数据收集（设为 true 启用）
    enabled: true,

    // 数据来源标识
    source: 'radar-chart'
};