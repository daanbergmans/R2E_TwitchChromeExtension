# R2E_TwitchChromeExtension
Chrome extension (bundled with the custom RESTful API) for translating Russian (but any other language works as well) into English in Twitch chat!

# Usability
- The extension is NOT available on the chrome store (yet :thinking: )
- You can run the extension locally by adding it to your chrome extensions. How? Google does a good job explaining this! https://developer.chrome.com/extensions/getstarted#unpacked
- Before you can actually use the application, you'll need to run the REST api! How? See below!

# Setting up the REST api
1. Make sure you have Git and NodeJs installed. (https://git-scm.com/ and https://nodejs.org/en/)
2. Clone this repository
3. Run 'npm install' in the 'RuskiiiToEngliskiii_API'-folder.
4. Run 'npm run start'
5. You're good to go!

# Sources
- Used translation library: https://github.com/matheuss/google-translate-api
- Source of the idea: The lovely chat @ https://www.twitch.tv/anaesthetlc

# Known issues
- Currently not working for messages which include BetterTTV (and probably FrankerFacez as well)

