/* ==========================================================================
   工號申請問題流程題庫 — 單一來源
   由「工號創建管理」與「員工管理 → 添加新員工 → 工號申請」共用。
   修改此檔即同時套用到兩邊；No.X 由題目在陣列中的順序決定（第 1 題 = No.1）。
   ========================================================================== */

// 回答行為：固定下拉選單值（跳轉題目 No.1~No.5 / 核發工號開頭）
const JUMP_OPTIONS = ['No.1', 'No.2', 'No.3', 'No.4', 'No.5'];
const ID_OPTIONS = ['工號10XXXXX', '工號30XXXXX', '工號70XXXXX', '工號PWXXXXX'];

// 問題資料庫（簡中 / 繁中 / 英文，及「是」「否」回答行為）
const ID_QUESTIONS = [
    {
        zhCN: '人员是否享有带薪假期？\n（如：年假、带薪病假）',
        zhTW: '人員是否享有帶薪假期？\n（如：年假、帶薪病假）',
        en:   'Are employees entitled to paid leave?\n(e.g., annual leave, paid sick leave)',
        yes: 'No.5',
        no:  'No.3'
    },
    {
        zhCN: '签署合同是否为集团主体？\n薪资核算是否经中心/内审监督？',
        zhTW: '簽署合同是否為集團主體？\n薪資核算是否經中心/內審監督？',
        en:   'Is the employment contract signed under the name of the group entity? And the payroll calculation supervised by HR center or internal audit?\n\nYes: Payroll is calculated by the group.\nNo: Payroll is calculated independently by the project team.',
        yes: '工號10XXXXX',
        no:  '工號70XXXXX'
    },
    {
        zhCN: '签署合同是否为集团主体？\n薪资核算是否经中心/内审监督？\n\n是：由集团核算薪资\n否：由项目自行核算薪资',
        zhTW: '簽署合同是否為集團主體？\n薪資核算是否經中心/內審監督？\n\n是：由集團核算薪資\n否：由項目自行核算薪資',
        en:   'Is the employment contract signed under the name of the group entity? And the payroll calculation supervised by HR center or internal audit?\n\nYes: Payroll is calculated by the group.\nNo: Payroll is calculated independently by the project team.',
        yes: 'No.5',
        no:  '工號70XXXXX'
    },
    {
        zhCN: '签署对象是否为员工本人？\n\n是：为员工本人\n否：为公司法人',
        zhTW: '簽署對象是否為員工本人？\n\n是：為員工本人\n否：為公司法人',
        en:   'Is the employment contract signed with the employee personally?\n\nYes: Signed with the employee personally.\nNo: Signed with the company\'s legal representative.',
        yes: '工號PWXXXXX',
        no:  '工號30XXXXX'
    },
    {
        zhCN: '是否由集团直接签署劳动合同？\n\n是：集团签署\n否：委外签署',
        zhTW: '是否由集團直接簽署勞動合同？\n\n是：集團簽署\n否：委外簽署',
        en:   'Is the labor contract signed directly by the group?\n\nYes: Signed by the group.\nNo: Signed via outsourcing.',
        yes: '工號10XXXXX',
        no:  '工號30XXXXX'
    }
];
