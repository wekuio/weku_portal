// sometimes it's impossible to use html tags to style coin name, hence usage of _UPPERCASE modifier
export const APP_NAME = 'WEKU';
// sometimes APP_NAME is written in non-latin characters, but they are needed for technical purposes
// ie. "Голос" > "Golos"
export const APP_NAME_LATIN = 'WEKU';
export const APP_NAME_UPPERCASE = 'WEKU';
export const APP_ICON = 'steem';
// FIXME figure out best way to do this on both client and server from env
// vars. client should read $STM_Config, server should read config package.
export const APP_DOMAIN = 'weku.io';
export const LIQUID_TOKEN = 'WEKU';
// sometimes it's impossible to use html tags to style coin name, hence usage of _UPPERCASE modifier
export const LIQUID_TOKEN_UPPERCASE = 'WEKU';
export const VESTING_TOKEN = 'WEKU POWER';
export const INVEST_TOKEN_UPPERCASE = 'WEKU POWER';
export const INVEST_TOKEN_SHORT = 'WP';
export const DEBT_TOKEN = 'WEKU DOLLAR';
export const DEBT_TOKENS = 'WEKU DOLLARS';
export const CURRENCY_SIGN = '$';
export const WIKI_URL = ''; // http://wiki.weku.io/
export const LANDING_PAGE_URL = 'https://weku.io/';
export const TERMS_OF_SERVICE_URL = 'https://' + APP_DOMAIN + '/tos.html';
export const PRIVACY_POLICY_URL = 'https://' + APP_DOMAIN + '/privacy.html';
export const WHITEPAPER_URL = 'http:s//www.weku.io/weku_whitepaper_en.pdf';

// these are dealing with asset types, not displaying to client, rather sending data over websocket
export const LIQUID_TICKER = 'WEKU';
export const VEST_TICKER = 'VESTS';
export const DEBT_TICKER = 'WKD';
export const DEBT_TOKEN_SHORT = 'WKD';

// application settings
export const DEFAULT_LANGUAGE = 'en'; // used on application internationalization bootstrap
export const DEFAULT_CURRENCY = 'USD';
export const ALLOWED_CURRENCIES = ['USD'];
export const FRACTION_DIGITS = 2; // default amount of decimal digits
export const FRACTION_DIGITS_MARKET = 3; // accurate amount of deciaml digits (example: used in market)

// meta info
export const TWITTER_HANDLE = '@weku';
export const SHARE_IMAGE = 'http://' +
    APP_DOMAIN +
    '/images/weku-share.png';
export const TWITTER_SHARE_IMAGE = 'http://' +
    APP_DOMAIN +
    '/images/weku-twshare.png';
export const SITE_DESCRIPTION = 'WEKU is a social media platform where everyone gets paid for ' +
    'creating and curating content. It leverages a robust digital points system, called WEKU, that ' +
    'supports real value for digital rewards through market price discovery and liquidity';

// various
export const SUPPORT_EMAIL = 'support@' + APP_DOMAIN;

export const community_host_map = {
    localhost: "community-deals",
    "web2.weku.io": "community-deals",
    "news.weku.io": "community-news",
    "one.weku.io": "community-one",
    "deals.weku.io": "community-deals",
    "house.weku.io": "community-house",
    "code.weku.io": "community-code",
    "stock.weku.io": "community-stock",
    "test.weku.io": "community-test",
    "discount.weku.io": "community-discount",
    "cn.weku.io": "community-cn",
    "game.weku.io": "community-game",
    "destroy.weku.io": "community-destroy",
    "main.weku.io": "community-deals",
    "live.weku.io": false
};

export const community_language_map = {
    localhost: "en",
    "web2.weku.io": "en",
    "news.weku.io": "zh",
    "one.weku.io": "en",
    "deals.weku.io": "en",
    "house.weku.io": "zh",
    "code.weku.io": "en",
    "stock.weku.io": "en",
    "test.weku.io": "en",
    "discount.weku.io": "en",
    "cn.weku.io": "zh",
    "game.weku.io": "zh",
    "destroy.weku.io":"en",
    "main.weku.io":"en",
    "live.weku.io": "en"
};

// We need to set reacaptchaOption before recaptcha-wrapper loaded
// Set useRecaptchaNet true to avoid calling google.com which has been blocked in China
export const recaptchaOptions = {
    lang: 'en',
    useRecaptchaNet: true,
};
