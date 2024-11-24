<template>
    <div class="landing-page">
        <header>
            <h1>Weather Extension</h1>
            <p>Real-time weather updates with stunning city backgrounds.</p>
        </header>

        <section class="download-section">
            <h2>Download</h2>
            <a :href="downloadLinks.chrome" download>Download for Chrome</a>
            <a :href="downloadLinks.firefox" download>Download for Firefox</a>
            <a :href="downloadLinks.safari" download>Download for Safari</a>
        </section>

        <section class="instructions">
            <h3>Installation Instructions</h3>
            <div v-for="(steps, browser) in instructions" :key="browser">
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
.landing-page {
    text-align: center;
    padding: 20px;
}

.download-section a {
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    text-decoration: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
}

.download-section a:hover {
    background-color: #0056b3;
}

.instructions {
    margin-top: 30px;
}

.instructions h4 {
    margin-bottom: 10px;
}

.instructions ol {
    text-align: left;
    margin: 0 auto;
    max-width: 500px;
}</style>
  