// 数据收集配置
// 如需启用数据收集功能（可选），请按以下步骤操作：
// 1. 创建你自己的 Google Apps Script Web App
// 2. 将部署 URL 填入下方 GAS_ENDPOINT
// 3. 手动设置 enabled: true
// 注意：数据收集默认关闭，不会自动发送任何数据。

const ASSESSMENT_CONFIG = {
    // Google Apps Script Web App URL（默认为空，不收集数据）
    GAS_ENDPOINT: '',

    // 是否启用数据收集（默认关闭）
    enabled: false,

    // 数据来源标识
    source: 'radar-chart'
};