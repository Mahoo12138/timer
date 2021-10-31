import { IS_FIREFOX } from "../util/constant/environment"
import { OPTION_ROUTE } from "../app/router/constants"
import { getAppPageUrl, SOURCE_CODE_PAGE } from "../util/constant/url"
import { t2Chrome } from "../util/i18n/chrome/t"

const APP_PAGE_URL = getAppPageUrl(true)

const baseProps: Partial<chrome.contextMenus.CreateProperties> = {
    contexts: ['browser_action'],
    visible: true
}

const allFunctionProps: chrome.contextMenus.CreateProperties = {
    id: '_timer_menu_item_app_link_',
    title: '🏷️ ' + t2Chrome(msg => msg.contextMenus.allFunctions),
    onclick: () => chrome.tabs.create({ url: APP_PAGE_URL }),
    ...baseProps
}

const optionPageProps: chrome.contextMenus.CreateProperties = {
    id: '_timer_menu_item_option_link_',
    title: '🥰 ' + t2Chrome(msg => msg.contextMenus.optionPage),
    onclick: () => chrome.tabs.create({ url: APP_PAGE_URL + '#' + OPTION_ROUTE }),
    ...baseProps
}

const repoPageProps: chrome.contextMenus.CreateProperties = {
    id: '__timer_menu_item_repo_link',
    title: '🍻 ' + t2Chrome(msg => msg.contextMenus.repoPage),
    onclick: () => chrome.tabs.create({ url: SOURCE_CODE_PAGE }),
    ...baseProps
}

console.log(navigator.userAgent, IS_FIREFOX)

function init() {
    chrome.contextMenus.create(allFunctionProps)
    chrome.contextMenus.create(repoPageProps)
    chrome.contextMenus.create(optionPageProps)
}

export default init