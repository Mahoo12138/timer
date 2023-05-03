/**
 * Copyright (c) 2023-present Hengyang Zhang
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export type AppMessage = {
    title: string
    p1: string
    l1: string
    l2: string
    p2: string
}

const _default: Messages<AppMessage> = {
    en: {
        title: 'Enter the management page',
        p1: 'Based on icons, the extension provides a more convenient way to view data. '
            + 'But if you want to experience full functionality, '
            + 'you need to visit the management page of the extension, via one of the following two ways.',
        l1: 'You can right-click the icon of the extension, and click [{button}] in the pop-up menu.',
        l2: 'You can also find the [{button}] link at the bottom of the icon popup page, just click it.',
        p2: 'The popup page and management page are the main interaction methods of this extension. After you know how to open them, you can use it completely.',
    },
    zh_CN: {
        title: '进入后台管理页面',
        p1: '基于图标，扩展提供了比较便捷的数据查看方式。但是如果您想要体验它的全部功能，就需要访问扩展的后台管理页。进入后台页有以下两种方式。',
        l1: '您可以右击扩展的图标，在弹出的菜单中点击【{button}】。',
        l2: '您也可以在图标弹出页的页脚找到【{button}】链接，同样地，点击它即可。',
        p2: '弹出页和后台页是这个扩展最主要的交互方式，当你知道如何打开他们之后，就可以完整地使用它了。'
    },
    zh_TW: {
        title: '進入管理頁面',
        p1: '基於圖標，擴展提供了比較便捷的數據查看方式。但是如果您想要體驗它的全部功能，就需要訪問擴展的後台管理頁。進入後台頁有以下兩種方式。',
        l1: '您可以右擊擴展的圖標，在彈出的菜單中點擊【{button}】。',
        l2: '您也可以在圖標彈出頁的頁腳找到【{button}】鏈接，同樣地，點擊它即可。',
        p2: '彈出頁和後台頁是這個擴展最主要的交互方式，當你知道如何打開他們之後，就可以完整地使用它了。',
    },
    ja: {
        title: '管理ページに入る',
        p1: 'アイコンに基づいて、拡張機能はデータを表示するためのより便利な方法を提供します。 ただし、その完全な機能を体験したい場合は、拡張バックグラウンド管理ページにアクセスする必要があります. バックグラウンド ページに入る方法は 2 つあります。',
        l1: '拡張機能のアイコンを右クリックして、ポップアップ メニューの [{button}] をクリックします。',
        l2: 'アイコン ポップアップ ページのフッターに [{button}] リンクがあり、同じ方法でクリックすることもできます。',
        p2: 'ポップアップ ページと背景ページは、この拡張機能の主な対話方法であり、それらを開く方法を理解すれば、完全に使用できます。',
    },
}

export default _default