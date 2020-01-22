const t={CALENDAR:"hello-week",DAY:"day",MONTH:"month",NAVIGATION:"navigation",NEXT:"next",PERIOD:"period",PREV:"prev",RTL:"rtl",WEEK:"week"},e={IS_BEGIN_RANGE:"is-begin-range",IS_DISABLED:"is-disabled",IS_END_RANGE:"is-end-range",IS_HIGHLIGHT:"is-highlight",IS_SELECTED:"is-selected",IS_RANGE:"is-range",IS_TODAY:"is-today",IS_WEEKEND:"is-weekend"},s={FRIDAY:5,MONDAY:1,SATURDAY:6,SUNDAY:0,THURSDAY:4,TUESDAY:2,WEDNESDAY:3},i={RIGHT:"margin-right",LEFT:"margin-left"},a={selector:".hello-week",lang:"en",langFolder:"./langs/",format:"DD/MM/YYYY",monthShort:!1,weekShort:!0,defaultDate:null,minDate:null,maxDate:null,disableDaysOfWeek:null,timezoneOffset:(new Date).getTimezoneOffset(),disableDates:null,weekStart:0,daysSelected:null,daysHighlight:null,multiplePick:!1,disablePastDays:!1,todayHighlight:!0,range:!1,locked:!1,rtl:!1,nav:["◀","▶"],onLoad:()=>{},onClear:()=>{},onNavigation:()=>{},onSelect:()=>{},beforeCreateDay:t=>t};function n(t){return null!=t}function o(t){return null!==t&&Array.isArray(t)}function h(t){return "string"==typeof t}function l(t,e){if(t.split)return document.createTextNode(t);const s=document.createElement(t.nodeName),i=t.attributes||{};return Object.keys(i).forEach(t=>{"class"===t?h(i[t])?s.className=i[t]:o(i[t])&&i[t].forEach(t=>{d(s,t);}):"style"===t?h(i[t])?s.style=i[t]:function(t){return null!==t&&"object"==typeof t}(i[t])&&Object.keys(i[t]).forEach(e=>{s.style[e]=i[t][e];}):"dataset"===t?Object.keys(i[t]).forEach(e=>{s.setAttribute("data-"+e,i[t][e]);}):s.setAttribute(t,i[t]);}),(t.children||[]).forEach(t=>s.appendChild(l(t))),e?e.appendChild(s):s}function r(t,e,...s){const i={nodeName:t};return e&&(i.attributes=e),s.length&&(i.children=[].concat(...s)),i}function d(t,e){return t.classList.add(e)}function c(t,e){return t.classList.remove(e)}function g(t,e){return n(e)?e.querySelector(`.${t}`):document.querySelector(`.${t}`)}function u(t,e){return Object.assign(t,e)}function y(t,e){return Array.prototype.slice.call(t).indexOf(e)+1}function D(t,e){const s=S(t,e);return i=s.getDate(),a=s.getMonth(),`${s.getFullYear()}-${("0"+(a+1)).slice(-2)}-${("0"+i).slice(-2)}`;var i,a;}function p(t,e,s,i){const n=S(t,i);return s=(s=(s=(s=(s=(s=(s=(s=(s=(s=(s=s||a.format).replace("dd",n.getDate().toString())).replace("DD",(n.getDate()>9?n.getDate():"0"+n.getDate()).toString())).replace("mm",(n.getMonth()+1).toString())).replace("MMM",e.months[n.getMonth()])).replace("MM",(n.getMonth()+1>9?n.getMonth()+1:"0"+(n.getMonth()+1)).toString())).replace("mmm",e.monthsShort[n.getMonth()])).replace("yyyy",n.getFullYear().toString())).replace("YYYY",n.getFullYear().toString())).replace("YY",n.getFullYear().toString().substring(2))).replace("yy",n.getFullYear().toString().substring(2))}function S(t,e){const s=n(t)?new Date(t):new Date;return e=e||s.getTimezoneOffset(),s.setTime(s.getTime()+60*e*1e3),s}function f(t){const e=new Date(t);return Number(""+e.getFullYear()+(e.getMonth()+1)+(e.getDate()>9?e.getDate():"0"+e.getDate()).toString())}function E(t,e){return f(t)>f(e)}function m(t,e){return f(t)<f(e)}function b(t,e){return f(t)===f(e)}function v(t,e){return b(t,e)||E(t,e)}function R(t,e){return b(t,e)||m(t,e)}function A(t){return n(t)?new Date(t):new Date}function k(t){const e=A(t);return D(e.setDate(e.getDate()-1))}function I(t){const e=A(t);return D(e.setDate(e.getDate()+1))}class M{constructor(e){this.todayDate=D(new Date),this.date=new Date,this.intervalRange={},this.daysSelected=[],this.options=u(u({},a),e),this.defaultsOptions=u(u({},a),e);const{calendar:s,selector:o}=function(e,s){const i={};if(!n(e.selector))throw new Error("You need to specify a selector!");return h(e.selector)?i.selector=e.selector?document.querySelector(e.selector):e.selector:i.selector=e.selector,n(i.selector)?e.selector!==t.CALENDAR&&d(i.selector,t.CALENDAR):i.selector=l(r("div",{class:[e.selector,t.CALENDAR]})),i.calendar={},i.calendar.navigation=g(t.NAVIGATION,i.selector),n(i.calendar.navigation)||(i.calendar.navigation=l(r("div",{class:t.NAVIGATION}),i.selector)),n(e.nav[0])&&(i.calendar.prevMonth=l(r("div",{class:t.PREV},e.nav[0]),i.calendar.navigation),i.calendar.prevMonth.addEventListener("click",()=>s.prev.cb())),i.calendar.period=g(t.PERIOD,i.selector),n(i.calendar.period)||(i.calendar.period=l(r("div",{class:t.PERIOD}),i.calendar.navigation)),n(e.nav[1])&&(i.calendar.nextMonth=l(r("div",{class:t.NEXT},e.nav[1]),i.calendar.navigation),i.calendar.nextMonth.addEventListener("click",()=>s.next.cb())),i.calendar.week=g(t.WEEK,i.selector),n(i.calendar.week)||(i.calendar.week=l(r("div",{class:t.WEEK}),i.selector)),i.calendar.month=g(t.MONTH,i.selector),n(i.calendar.month)||(i.calendar.month=l(r("div",{class:t.MONTH}),i.selector)),e.rtl&&(d(i.calendar.week,t.RTL),d(i.calendar.month,t.RTL)),i}(this.options,{prev:{cb:()=>this.prev()},next:{cb:()=>this.next()}});this.selector=o,this.calendar=s,this.isRTL=this.options.rtl?i.RIGHT:i.LEFT,import(this.options.langFolder+this.options.lang+".js").then(t=>t.default).then(t=>{this.langs=t,this.init();});}destroy(){this.removeStatesClass(),this.selector.remove();}prev(t){const e=this.date.getMonth()-1;this.date.setMonth(e),this.update(),this.options.onNavigation(),t&&t();}next(t){const e=this.date.getMonth()+1;this.date.setMonth(e),this.update(),this.options.onNavigation(),t&&t();}update(){this.clearCalendar(),this.mounted();}reset(t,e){this.clearCalendar(),this.options=u(t,this.defaultsOptions),this.init(e);}goToDate(t=this.todayDate){this.date=new Date(t),this.date.setDate(1),this.update();}getDaySelected(){return this.daysSelected.sort((t,e)=>f(t)-f(e)).map(t=>p(t,this.langs,this.options.format))}getLastDaySelected(){return this.lastSelectedDay}getDaysHighlight(){return this.daysHighlight}getMonth(){return this.date.getMonth()+1}getYear(){return this.date.getFullYear()}setDaysHighlight(t){this.daysHighlight=[...this.daysHighlight,...t];}setMultiplePick(t){this.options.multiplePick=t;}setDisablePastDays(t){this.options.disablePastDays=t;}setTodayHighlight(t){this.options.todayHighlight=t;}setRange(t){o(this.options.range)?(this.intervalRange.begin=this.options.range[0],this.intervalRange.end=this.options.range[1]):this.options.range=t;}setLocked(t){this.options.locked=t;}setMinDate(t){this.options.minDate=k(t);}setMaxDate(t){this.options.maxDate=I(t);}init(t){if(this.daysHighlight=this.options.daysHighlight?this.options.daysHighlight:[],this.daysSelected=this.options.daysSelected?this.options.daysSelected:[],this.daysSelected.length&&!this.options.multiplePick)throw new Error(`There are ${this.daysSelected.length} dates selected, but the multiplePick option is FALSE!`);this.options.defaultDate&&(this.date=S(this.options.defaultDate,this.options.timezoneOffset),this.defaultDate=S(this.options.defaultDate,this.options.timezoneOffset),this.defaultDate.setDate(this.defaultDate.getDate())),this.date.setDate(1),this.options.minDate&&this.setMinDate(this.options.minDate),this.options.maxDate&&this.setMaxDate(this.options.maxDate),this.options.range&&this.setRange(this.options.range),this.mounted(),this.options.onLoad(),t&&t();}selectDay(e){this.daysOfMonth=this.selector.querySelectorAll("."+t.MONTH+" ."+t.DAY);for(const t of Object.keys(this.daysOfMonth))this.handleClickInteraction(this.daysOfMonth[t],e),this.options.range&&this.handleMouseInteraction(this.daysOfMonth[t]);}handleClickInteraction(t,s){t.addEventListener("click",t=>{const i=y(this.daysOfMonth,t.target);this.days[i].locked||(this.lastSelectedDay=this.days[i].date,this.options.range||(this.options.multiplePick?(this.days[i].date&&(this.daysSelected=this.daysSelected.filter(t=>f(t)!==f(this.lastSelectedDay))),this.days[i].isSelected||this.daysSelected.push(this.lastSelectedDay)):(this.days[i].locked||this.removeStatesClass(),this.daysSelected=[],this.daysSelected.push(this.lastSelectedDay))),function(t,e){t.classList.toggle(e);}(t.target,e.IS_SELECTED),this.days[i].isSelected=!this.days[i].isSelected,this.options.range&&(this.intervalRange.begin&&this.intervalRange.end&&(this.intervalRange={},this.removeStatesClass()),this.intervalRange.begin&&!this.intervalRange.end&&(this.intervalRange.end=this.days[i].date,this.daysSelected=function(t,e,s){const i=[];let a=t;const n=function(t){const e=new Date(this.valueOf());return e.setDate(e.getDate()+t),e.getTime()};for(;a<=e;)i.push(p(a,s)),a=n.call(a,1);return i}(this.intervalRange.begin,this.intervalRange.end,this.langs),d(t.target,e.IS_END_RANGE),this.intervalRange.begin>this.intervalRange.end&&(this.intervalRange={},this.removeStatesClass())),this.intervalRange.begin||(this.intervalRange.begin=this.days[i].date),d(t.target,e.IS_SELECTED)),this.options.onSelect(),s&&s());});}handleMouseInteraction(t){t.addEventListener("mouseover",t=>{const s=y(this.daysOfMonth,t.target);if(!(!this.intervalRange.begin||this.intervalRange.begin&&this.intervalRange.end)){this.removeStatesClass();for(let t=1;t<=Object.keys(this.days).length;t++)this.days[t].isSelected=!1,v(this.days[s].date,this.intervalRange.begin)&&v(this.days[t].date,this.intervalRange.begin)&&R(this.days[t].date,this.days[s].date)&&(d(this.days[t].element,e.IS_SELECTED),d(this.days[t].element,e.IS_RANGE),b(this.days[t].date,this.intervalRange.begin)&&d(this.days[t].element,e.IS_BEGIN_RANGE));}});}creatWeek(e){l(r("span",{class:t.DAY},e),this.calendar.week);}createMonth(){const t=this.date.getMonth();for(;this.date.getMonth()===t;)this.createDay(this.date),this.date.setDate(this.date.getDate()+1);this.date.setMonth(this.date.getMonth()-1),this.selectDay();}createDay(i){const a=i.getDate(),n=i.getDay();let o={day:a,date:D(i),isWeekend:!1,locked:!1,isToday:!1,isRange:!1,isSelected:!1,isHighlight:!1,attributes:{class:[t.DAY],style:{}},node:void 0,element:void 0};this.days=this.days||{},n!==s.SUNDAY&&n!==s.SATURDAY||(o.attributes.class.push(e.IS_WEEKEND),o.isWeekend=!0),(this.options.locked||this.options.disableDaysOfWeek&&this.options.disableDaysOfWeek.includes(n)||this.options.disablePastDays&&R(this.date,this.defaultDate)||this.options.minDate&&v(this.options.minDate,o.date)||this.options.maxDate&&R(this.options.maxDate,o.date))&&(o.attributes.class.push(e.IS_DISABLED),o.locked=!0),this.options.disableDates&&this.setDaysDisable(o),this.options.todayHighlight&&b(this.todayDate,o.date)&&(o.attributes.class.push(e.IS_TODAY),o.isToday=!0),this.daysSelected.find(t=>{b(t,o.date)&&(o.attributes.class.push(e.IS_SELECTED),o.isSelected=!0);}),function(t,e,s){return E(s,t)&&m(s,e)}(this.intervalRange.begin,this.intervalRange.end,o.date)&&(o.attributes.class.push(e.IS_RANGE),o.isRange=!0),b(o.date,this.intervalRange.begin)&&o.attributes.class.push(e.IS_BEGIN_RANGE),b(o.date,this.intervalRange.end)&&o.attributes.class.push(e.IS_END_RANGE),this.daysHighlight&&this.setDayHighlight(o),1===o.day&&(this.options.weekStart===s.SUNDAY?o.attributes.style[this.isRTL]=n*(100/Object.keys(s).length)+"%":n===s.SUNDAY?o.attributes.style[this.isRTL]=(Object.keys(s).length-this.options.weekStart)*(100/Object.keys(s).length)+"%":o.attributes.style[this.isRTL]=(n-1)*(100/Object.keys(s).length)+"%"),o.node=r("div",o.attributes,o.day.toString()),(o=this.options.beforeCreateDay(o)).element=l(o.node,this.calendar.month),this.days[o.day]=o;}setDaysDisable(t){o(this.options.disableDates[0])?this.options.disableDates.map(s=>{v(t.date,s[0])&&R(t.date,s[1])&&(t.attributes.class.push(e.IS_DISABLED),t.locked=!0);}):this.options.disableDates.map(s=>{b(t.date,s)&&(t.attributes.class.push(e.IS_DISABLED),t.locked=!0);});}setDayHighlight(t){for(const e in this.daysHighlight)this.daysHighlight[e].days[0]instanceof Array?this.daysHighlight[e].days.map(s=>{v(t.date,s[0])&&R(t.date,s[1])&&this.setStyleDayHighlight(e,t);}):this.daysHighlight[e].days.map(s=>{b(t.date,s)&&this.setStyleDayHighlight(e,t);});}setStyleDayHighlight(t,s){const{attributes:i}=this.daysHighlight[t];for(const t in i)s.attributes[t]&&i[t]?s.attributes[t]=u(s.attributes[t],i[t]):i[t]&&(s.attributes[t]=i[t]);s.attributes.class.push(e.IS_HIGHLIGHT),s.isHighlight=!0;}monthsAsString(t){return this.options.monthShort?this.langs.monthsShort[t]:this.langs.months[t]}weekAsString(t){return this.options.weekShort?this.langs.daysShort[t]:this.langs.days[t]}mounted(){const t=[];this.calendar.period&&(this.calendar.period.innerHTML=this.monthsAsString(this.date.getMonth())+" "+this.date.getFullYear()),this.calendar.week.textContent="";for(let e=this.options.weekStart;e<this.langs.daysShort.length;e++)t.push(e);for(let e=0;e<this.options.weekStart;e++)t.push(e);for(const e of t)this.creatWeek(this.weekAsString(e));this.createMonth();}clearCalendar(){this.calendar.month.textContent="";}removeStatesClass(){for(const t of Object.keys(this.daysOfMonth))c(this.daysOfMonth[t],e.IS_SELECTED),c(this.daysOfMonth[t],e.IS_RANGE),c(this.daysOfMonth[t],e.IS_BEGIN_RANGE),c(this.daysOfMonth[t],e.IS_END_RANGE),this.days[+t+1].isSelected=!1;}}const N=M;window.HelloWeek=N;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "* {\n  box-sizing: border-box; }\n\n.hello-week {\n  width: 100%;\n  margin: 0 auto;\n  user-select: none;\n  font-size: 1em; }\n  .hello-week .navigation {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 0; }\n  .hello-week .prev,\n  .hello-week .next {\n    padding: 1em;\n    cursor: pointer; }\n  .hello-week .period {\n    width: 100%;\n    font-size: 1.2em;\n    font-weight: 400;\n    text-align: center; }\n  .hello-week .week {\n    display: flex;\n    font-size: 0.9em; }\n    .hello-week .week.rtl {\n      flex-direction: row-reverse; }\n  .hello-week .month {\n    display: flex;\n    flex-wrap: wrap;\n    padding: .4em 0;\n    cursor: pointer; }\n    .hello-week .month.rtl {\n      flex-direction: row-reverse; }\n  .hello-week .day {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: calc(100% / 7);\n    padding: 1em;\n    cursor: pointer; }\n    .hello-week .day.is-disabled {\n      cursor: not-allowed;\n      opacity: 0.3; }\n";
styleInject(css);

var css$1 = ".default-theme .navigation { background-color: #f7f8f9;}\n.default-theme .navigation .prev {}\n.default-theme .navigation .period {}\n.default-theme .navigation .next {}\n.default-theme .week { background-color: #f7f8f9; color: #bcc3ce;}\n.default-theme .day { color: #66758c; }\n.default-theme .day.is-weekend { color: #ff3860; }\n.default-theme .day.is-highlight { background-color: #8fbc8f; color: #fff; }\n.default-theme .day.is-today { background-color: #444; color: #fff; }\n.default-theme .day.is-selected { background-color: #3634d2; color: #fff; }\n.default-theme .day.is-range { background-color: #f1f1fc; color: #5755d9; }\n.default-theme .day.is-begin-range,\n.default-theme .day.is-end-range { background-color: #3634d2; color: #fff; }\n";
styleInject(css$1);

//

var script = {
	name: 'v-hello-week',
	props: {
		theme: {
			required: false,
			default: 'default-theme'
		},
		options: {
			required: false,
			default: () => {}
		}
	},
	data () {
		return {
			instance: null,
			defaultOptions: {
				format: 'DD/MM/YYYY',
				weekShort: true,
				monthShort: false,
				multiplePick: false,
				defaultDate: null,
				todayHighlight: true,
				disablePastDays: false,
				disabledDaysOfWeek: null,
				disableDates: null,
				weekStart: 0, // week start on Sunday
				daysHighlight: null,
				daysSelected: null,
				range: false,
				rtl: false,
				locked: false,
				minDate: null,
				maxDate: null,
				nav: ['◀', '▶']
			}
		};
	},
	mounted () {
		this.instance = new M({
			...this.defaultOptions,
			...{
				selector: this.$el,
				onLoad: () => {
					this.$emit('load');
				},
				onChange: () => {
					this.$emit('change');
				},
				onSelect: () => {
					this.$emit('select');
				},
				onClear: () => {
					this.$emit('clear');
				}
			},
			...this.options
		});
	}
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "hello-week", class: [_vm.theme] })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

// Import vue component

var plugin = {
	install (Vue) {
		Vue.component(__vue_component__.name, __vue_component__);
	}
};

export default plugin;
