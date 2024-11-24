import axios from "axios";
export default (await import('vue')).defineComponent({
    data() {
        return {
            weather: {
                city: "",
                temp: 0,
                description: "",
                icon: "",
            },
            backgroundImage: "https://res.cloudinary.com/dq7kjds8s/image/upload/v1732480042/kzowjvefcuarg6lhfek9.png",
            isLoading: true,
        };
    },
    methods: {
        async fetchWeather(city) {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6c003ed0b033fcf2a248fedd3f4ae01e`;
            const imageUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=MQQR49KeUxtcDFZst-IRF6kOcNyTk5Nfmb2skTznm1s`;
            try {
                const weatherResponse = await axios.get(weatherUrl);
                const imageResponse = await axios.get(imageUrl);
                console.log(imageUrl);
                const weatherData = weatherResponse.data;
                const imageData = imageResponse.data;
                this.weather = {
                    city: weatherData.name,
                    temp: weatherData.main.temp,
                    description: weatherData.weather[0].description,
                    icon: weatherData.weather[0].icon,
                };
                this.backgroundImage = imageData.results[0]?.urls?.regular || "";
                this.isLoading = false;
            }
            catch (error) {
                console.error(error);
                this.isLoading = false;
                alert("Unable to fetch weather for the specified city.");
            }
        },
        async fetchCityByIP() {
            const geoIpUrl = "https://ipwhois.app/json/";
            try {
                const response = await axios.get(geoIpUrl);
                const city = response.data.city;
                this.fetchWeather(city);
            }
            catch (error) {
                console.error("Failed to fetch IP location. Defaulting to Chicago.");
            }
        }
    },
    mounted() {
        this.fetchCityByIP();
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({ backgroundImage: `url(${__VLS_ctx.backgroundImage})` })) }, ...{ class: ("weather-container") }, });
    if (__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("loader") }, });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("weather-info") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        (__VLS_ctx.weather.city);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.weather.temp);
        (__VLS_ctx.weather.description);
        if (__VLS_ctx.weather.icon) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((`https://openweathermap.org/img/wn/${__VLS_ctx.weather.icon}@2x.png`)), alt: ("Weather Icon"), });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onKeyup: (...[$event]) => {
                    if (!(!((__VLS_ctx.isLoading))))
                        return;
                    __VLS_ctx.fetchWeather(__VLS_ctx.cityInput);
                } }, type: ("text"), value: ((__VLS_ctx.cityInput)), placeholder: ("   Enter city"), });
    }
    __VLS_styleScopedClasses['weather-container'];
    __VLS_styleScopedClasses['loader'];
    __VLS_styleScopedClasses['weather-info'];
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
