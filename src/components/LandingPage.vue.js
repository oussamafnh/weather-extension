export default (await import('vue')).defineComponent({
    data() {
        return {
            downloadLinks: {
                chrome: "/weather-extension-chrome.zip",
                firefox: "/weather-extension-firefox.zip",
                safari: "/weather-extension-safari.zip",
            },
            instructions: {
                Chrome: [
                    "Download and unzip the file.",
                    "Go to chrome://extensions in your browser.",
                    "Enable Developer Mode (top-right corner).",
                    "Click 'Load unpacked' and select the unzipped folder.",
                ],
                Firefox: [
                    "Download the file.",
                    "Go to about:addons in your browser.",
                    "Click the gear icon and select 'Install Add-on From File.'",
                    "Select the downloaded file.",
                ],
                Safari: [
                    "Follow Apple’s instructions for sideloading extensions via Xcode.",
                ],
            },
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['download-section'];
    __VLS_styleScopedClasses['instructions'];
    __VLS_styleScopedClasses['instructions'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("landing-page") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("download-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.downloadLinks.chrome)), download: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.downloadLinks.firefox)), download: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.downloadLinks.safari)), download: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("instructions") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    for (const [steps, browser] of __VLS_getVForSourceType((__VLS_ctx.instructions))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((browser)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
        (browser);
        __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({});
        for (const [step, index] of __VLS_getVForSourceType((steps))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), });
            (step);
        }
    }
    __VLS_styleScopedClasses['landing-page'];
    __VLS_styleScopedClasses['download-section'];
    __VLS_styleScopedClasses['instructions'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
