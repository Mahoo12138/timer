/**
 * Copyright (c) 2022-present Hengyang Zhang
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

type _StoreKey =
    | 'title'
    | 'p1'
    | 'p2'
    | 'p3'


type RequiredScope = {
    name: string
    usage: string
}

type OptionalScope = RequiredScope & {
    optionalReason: string
}

export type Scope = RequiredScope & {
    optionalReason?: string
}

export type PrivacyMessage = {
    title: string
    alert: string
    scope: {
        title: string
        cols: {
            name: string
            usage: string
            required: string
        }
        rows: {
            website: RequiredScope
            tab: OptionalScope
            clipboard: OptionalScope
        }
    }
    storage: { [key in _StoreKey]: string }
}

const _default: Messages<PrivacyMessage> = {
    zh_CN: {
        title: '隐私声明',
        alert: '为了向您提供完整的服务，该扩展在使用过程中会必要地收集您的一些个人数据，详情见以下隐私声明。',
        scope: {
            title: '哪些数据会被收集？',
            cols: {
                name: '内容',
                usage: '用途',
                required: '是否必需',
            },
            rows: {
                website: {
                    name: '网站访问记录',
                    usage: '用于统计浏览时长和访问次数',
                },
                tab: {
                    name: '浏览器标签信息',
                    usage: '用于自动获取网站的名称和图标，展示数据时提升用户体验',
                    optionalReason: '只有在选项里开启自动获取功能后才会收集',
                },
                clipboard: {
                    name: '剪切板内容',
                    usage: '在设置每日时限规则时，为了操作方便，会读取剪切板内 URL',
                    optionalReason: '需要用户手动同意'
                },
            },
        },
        storage: {
            title: '如何处理这些数据？',
            p1: '我们保证该扩展收集的所有数据只会保存在您的浏览器本地存储中，绝不会将他们分发到其他地方。',
            p2: '不过您可以使用扩展提供的工具，以 JSON 或者 CSV 的文件格式，导出或者导入您的数据。扩展也支持您使用 GitHub Gist 等，您足以信任的第三方服务，备份您的数据。',
            p3: '我们只帮助您收集数据，但处置权一定在您。',
        },
    },
    zh_TW: {
        title: '隱私聲明',
        alert: '為了向您提供完整的服務，該擴展在使用過程中會必要地收集您的一些個人數據，詳情見以下隱私聲明。',
        scope: {
            title: '哪些數據會被收集？',
            cols: {
                name: '內容',
                usage: '用途',
                required: '是否必需',
            },
            rows: {
                website: {
                    name: '網站訪問記錄',
                    usage: '用於統計瀏覽時長和訪問次數',
                },
                tab: {
                    name: '瀏覽器標籤信息',
                    usage: '用於自動獲取網站的名稱和圖標，展示數據時提升用戶體驗',
                    optionalReason: '只有在選項裡開啟自動獲取功能後才會收集',
                },
                clipboard: {
                    name: '剪切板內容',
                    usage: '在設置每日時限規則時，為了操作方便，會讀取剪切板內 URL',
                    optionalReason: '需要用戶手動同意'
                },
            },
        },
        storage: {
            title: '如何處理這些數據？',
            p1: '我們保證該擴展收集的所有數據只會保存在您的瀏覽器本地存儲中，絕不會將他們分發到其他地方。',
            p2: '不過您可以使用擴展提供的工具，以 JSON 或者 CSV 的文件格式，導出或者導入您的數據。擴展也支持您使用 GitHub Gist 等，您足以信任的第三方服務，備份您的數據。',
            p3: '我們只幫助您收集數據，但處置權一定在您。',
        },
    },
    en: {
        title: 'Privacy statement',
        alert: 'In order to provide you with complete services, this extension will necessarily collect some of your personal data during use, see the following privacy statement for details.',
        scope: {
            title: 'What data is collected?',
            cols: {
                name: 'Content',
                usage: 'Usage',
                required: 'Required',
            },
            rows: {
                website: {
                    name: 'Website browsing history',
                    usage: 'Used to count browsing time and visits',
                },
                tab: {
                    name: 'Tab information',
                    usage: 'Used to automatically obtain the name and icon of the website, and improve user experience when displaying data',
                    optionalReason: 'Only if this function is enabled in the options',
                },
                clipboard: {
                    name: 'Clipboard content',
                    usage: 'When setting the daily time limit rule, for the convenience of operation, the URL in the clipboard will be read',
                    optionalReason: 'Only if user agreed'
                },
            },
        },
        storage: {
            title: 'How to do with this data?',
            p1: 'We guarantee that all data collected by this extension will only be saved in your browser\'s local storage and will never be distributed elsewhere.',
            p2: 'You can however use the tools provided by the extension to export or import your data in JSON or CSV file format. The extension also supports you to use GitHub Gist, etc., third-party services you trust enough to back up your data.',
            p3: 'We only help you collect data, but the right of disposal must be yours.',
        },
    },
    ja: {
        title: 'プライバシーに関する声明',
        alert: '完全なサービスを提供するために、この拡張機能は使用中に必ず個人データの一部を収集します。詳細については、次のプライバシーに関する声明を参照してください。',
        scope: {
            title: 'どのようなデータが収集されますか？',
            cols: {
                name: '収集データ',
                usage: '使用',
                required: 'それは必要ですか',
            },
            rows: {
                website: {
                    name: 'ウェブサイトの閲覧履歴',
                    usage: '閲覧時間と訪問をカウントするために使用されます',
                },
                tab: {
                    name: 'タブ情報',
                    usage: 'Web サイトの名前とアイコンを自動的に取得し、データを表示する際のユーザー エクスペリエンスを向上させるために使用されます',
                    optionalReason: 'この機能がオプションで有効になっている場合のみ',
                },
                clipboard: {
                    name: 'クリップボードの内容',
                    usage: '毎日の時間制限ルールを設定すると、操作の便宜上、クリップボードの URL が読み込まれます',
                    optionalReason: 'ユーザーが同意した場合のみ'
                },
            },
        },
        storage: {
            title: 'このデータをどうするか？',
            p1: 'この拡張機能によって収集されたすべてのデータは、ブラウザのローカル ストレージにのみ保存され、他の場所に配布されることはありません。',
            p2: 'ただし、拡張機能によって提供されるツールを使用して、データを JSON または CSV ファイル形式でエクスポートまたはインポートできます。 この拡張機能は、GitHub Gist など、データをバックアップするのに十分信頼できるサードパーティ サービスの使用もサポートします。',
            p3: '私たちはあなたがデータを収集するのを手伝うだけですが、処分する権利はあなたのものでなければなりません.',
        },
    },
}

export default _default