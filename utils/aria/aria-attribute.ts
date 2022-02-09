/***** =============== ARIA 属性表 =================== */

/**
 *字符串。表示后代元素的id值。
 */
export const ariaActivedescendant = "aria-activedescendant";

/**
 *字符串。表示区域内容是否完整播报。值可以为true和false。
 *当为true时，表示辅助设备需要把整个区域内容都通报给使用者；
 *如果为false则表示只需要通报修改的部分。
 */
export const ariaAtomic = "aria-atomic";

/**
 *字符串。表示用户的文本框的自动提示是否提供。可选值有：inline, list, both, none.
 */
export const ariaAutocomplete = "aria-autocomplete";

/**
 *字符串。表当前区域的忙碌状态。
 *默认为false, 表清除busy状态；
 *可选为true, 表该区域正在加载；
 *或为error, 表示该区域验证无效。
 */
export const ariaBusy = "aria-busy";

/**
 *字符串。空格分隔的id属性值列表。
 */
export const ariaControls = "aria-controls";

/**
 *字符串。空格分隔的id属性值列表。
 */
export const ariaDescribedby = "aria-describedby";

/**
 *字符串。表示拖拽效果。可选值有：copy, move, reference, execute, popup, none, 依次表示：复制，移动，参照，执行，弹出以及没有效果。
 */
export const ariaDropeffect = "aria-dropeffect";

/**
 *字符串。空格分隔的id值们。
 */
export const ariaFlowto = "aria-flowto";

/**
 * 字符串。拖拽中元素的捕获状态。
 * 可选值有:true, false, undefined.
 * 默认为undefined，表示元素捕获状态未知。
 * true表示元素可以捕获；
 * false表示不能被捕获。
 */
export const ariaGrabbed = "aria-grabbed";

/**
 *字符串。true表示点击的时候会出现菜单或是浮动元素； false表示没有pop-up效果。
 */
export const ariaHaspopup = "aria-haspopup";

/**
 *字符串。	定义一个字符串值标记当前元素。
 */
export const ariaLabel = "aria-label";

/**
 *数值。表示等级。
 */
export const ariaLabelledby = "aria-labelledby";

/**
 *字符串。表示后代元素的id值。
 */
export const ariaLevel = "aria-level";

/**
 * 字符串。可选值有：off, polite, assertive, rude。
 * 默认为off, 表示不宣布更新；
 * polite表示只有用户闲时宣布；
 * assertive表示尽快对用户宣布；
 * rude表示即时提醒用户，必要的时候甚至中断用户。
 */
export const ariaLive = "aria-live";

/**
 *字符串。表示是否可多选。默认为false, 表示一次只能选择一个项。true表示一次可以选择多个项。
 */
export const ariaMultiselectable = "aria-multiselectable";

/**
 *字符串。值为目标元素id.
 */
export const ariaOwns = "aria-owns";

/**
 *数值。表示当前位置。
 */
export const ariaPosinset = "aria-posinset";

/**
 * 字符串。表示是否只读。
 * 默认为false, 表示元素值可以被修改；
 * true表示元素指不能被改变。
 */
export const ariaReadonly = "aria-readonly";

/**
 * 字符串。表示区域内哪些操作行为需要做出反应。可选值有：additions, removals, text, all，可以空格分隔多个一起显示.
 *  additions表示新增节点的时候做出反应；
 * removals表示删除节点时重要操作；
 * text表示文本改变是值得重视的；
 * all等同于同时使用上面三个属性值
 */
export const ariaRelevant = "aria-relevant";

/**
 *字符串。元素值是否必需。默认为false, 表示元素值可以为空；true表示元素值是必需的。
 */
export const ariaRequired = "aria-required";

/**
 *字符串。表示机密状态。
 */
export const ariaSecret = "aria-secret";

/**
 *字符串。表示表格或格栅中的项是以升序排列还是降序排列。可选值：ascending(↑), descending(↓), none, other.
 */
export const ariaSort = "aria-sort";

/**
 *数值。表示允许的最小值。
 */
export const ariaValueMin = "aria-valuemin";

/**
 *数值。表示当前值。
 */
export const ariaValueNow = "aria-valuenow";

/**
 *字符串。定义等同于aria-valuenow人可读的文本。
 */
export const ariaValueText = "aria-valuetext";
