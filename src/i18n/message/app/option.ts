/**
 * Copyright (c) 2021-present Hengyang Zhang
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import resource from './option-resource.json'

export type OptionMessage = {
    yes: string
    no: string
    popup: {
        title: string
        max: string
        defaultMergeDomain: string
        defaultDisplay: string
        displaySiteName: string
        durationWidth: string
        weekStart: string
        weekStartAsNormal: string
    }
    appearance: {
        title: string
        // whitelist
        displayWhitelist: string
        whitelistItem: string
        contextMenu: string
        // badge text
        displayBadgeText: string
        icon: string
        badgeTextContent: string
        locale: {
            label: string
            default: string
            changeConfirm: string
            reloadButton: string
        }
        printInConsole: {
            label: string
            console: string
            info: string
        },
        darkMode: {
            label: string
            options: Record<timer.option.DarkMode, string>
        }
        limitFilterType: Record<timer.limit.FilterType, string> & {
            label: string
        }
    }
    statistics: {
        title: string
        countWhenIdle: string
        idleTime: string
        idleTimeInfo: string
        countLocalFiles: string
        localFileTime: string
        localFilesInfo: string
        collectSiteName: string
        siteNameUsage: string
        siteName: string
    }
    backup: {
        title: string
        type: string
        client: string
        meta: {
            [type in timer.backup.Type]: {
                label: string
                auth?: string
                authInfo?: string
            }
        }
        alert: string
        test: string
        operation: string
        lastTimeTip: string
        auto: {
            label: string
            interval: string
        }
    }
    resetButton: string
    resetSuccess: string
    defaultValue: string
}

const _default: Messages<OptionMessage> = resource

export default _default