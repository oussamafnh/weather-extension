<template>
    <div class="landing-page">
        <header>
            <a href="https://github.com/oussamafnh/weather-extension" target="_blank" class="github-icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"
                    version="1.1" class="svg-icon">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path
                                    d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                    id="github-[#142]">
                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
            <img src="https://res.cloudinary.com/dq7kjds8s/image/upload/v1732482839/spbcasrlczembwlu9kji.png" class="bgimg">
            <div class="title">
                <h1>OFN</h1>
                <h1>Weather Extension</h1>
            </div>
        </header>

        <section class="download-section">
            <h2>Download</h2>
            <div class="download-buttons">
                <a :href="downloadLinks.chrome" download>
                    <i class="icon chrome-icon"></i>Download for Chrome
                </a>
                <a :href="downloadLinks.firefox" download>
                    <i class="icon firefox-icon"></i>Download for Firefox
                </a>
                <a :href="downloadLinks.safari" download>
                    <i class="icon safari-icon"></i>Download for Safari
                </a>
            </div>
        </section>

        <section class="instructions">
            <h3>Installation Instructions</h3>
            <div v-for="(steps, browser) in instructions" :key="browser" class="instruction">
                <h4>{{ browser }}</h4>
                <ol>
                    <li v-for="(step, index) in steps" :key="index">{{ step }}</li>
                </ol>
            </div>
        </section>

    </div>
</template>
  
<script>
export default {
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
};
</script>
  
<style scoped>
header {
    position: relative;
    height: 80vh;
    width: 100vw;
}

.bgimg {
    position: absolute;
    width: 100%;
    left: 0%;
    height: auto;
}

.title {
    top: 30%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;
    left: 10%;
}

.title h1 {
    font-size: 7vh;
    text-align: center;
}

.github-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    z-index: 10;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
}

.github-icon:hover {
    transform: scale(1.2);
}

.svg-icon {
    width: 100%;
    height: 100%;
    fill: #000;
    transition: fill 0.2s ease-in-out;
}

.github-icon:hover .svg-icon {
    fill: #007bff;
}


.landing-page {
    padding: 0px;
    width: 100vw;
}


.download-section {
    color: white;
    padding: 30px 20px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 20px;
}

.download-section h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: bold;
}

.download-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.download-buttons a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background-color: white;
    color: #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.download-buttons a:hover {
    background-color: #0056b3;
    color: white;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

.download-buttons a .icon {
    width: 24px;
    height: 24px;
}

.download-buttons a .chrome-icon {
    background: url('https://commons.wikimedia.org/wiki/Google_Chrome#/media/File:Google_Chrome_icon_(September_2014).svg') no-repeat center;
    background-size: contain;
}

.download-buttons a .firefox-icon {
    background: url('https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg') no-repeat center;
    background-size: contain;
}

.download-buttons a .safari-icon {
    background: url('https://en.wikipedia.org/wiki/Safari_(web_browser)#/media/File:Safari_2020_logo.svg') no-repeat center;
    background-size: contain;
}

/* Instructions Section */
.instructions {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
}

.instructions h3 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}

.instructions .instruction {
    margin-bottom: 20px;
}

.instructions h4 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 10px;
}

.instructions ol {
    margin: 0 auto;
    max-width: 600px;
    text-align: left;
    list-style: none;
    counter-reset: step-counter;
    padding-left: 0;
}

.instructions ol li {
    font-size: 1rem;
    color: #555;
    margin-bottom: 10px;
    padding-left: 30px;
    position: relative;
}

.instructions ol li::before {
    content: counter(step-counter) ".";
    counter-increment: step-counter;
    font-size: 1rem;
    color: #007bff;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
}
</style>
  