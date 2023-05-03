/**
 * Copyright (c) 2023-present Hengyang Zhang
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

type _Key =
    | 'p1'
    | 's1'
    | 's1p1'
    | 's2'
    | 's2p1'
    | 's3'
    | 's3p1'
    | 'alert'

export type StartMessage = {
    title: string
} & {
        [key in _Key]: string
    }

const _default: Messages<StartMessage> = {
    zh_CN: {
        title: '快速开始',
        p1: '只需简单三步，就可以快速开始使用这个扩展。',
        s1: '1. 固定扩展的图标',
        s1p1: '首先，为了更方便地使用这个扩展，你需要将图标固定到工具栏上。不同浏览器的操作方式不同，下图显示了在 Chrome 中的做法。',
        s2: '2. 浏览任何网站',
        s2p1: '然后你可以点开任何网站，扩展图标上会展示该网站的当日浏览时间，就像这样 {demo}。',
        s3: '3. 在弹出页中查看数据',
        s3p1: '最后，点击扩展的图标，你可以在弹出的页面里看到今天、本周以及本月的饼状图数据。',
        alert: '你已经学会了基本用法，赶紧试试！！',
    },
    en: {
        title: 'Get started',
        p1: 'You can quickly start using this extension in just 3 easy steps.',
        s1: '1. Pin the icon',
        s1p1: 'Firstly, to use this extension more conveniently, you\'d better pin the icon to toolbar. It\'s not the same in different browsers to do this, the following figure shows how in Chrome.',
        s2: '2. Browse any website',
        s2p1: 'Then, browse any website, and you will see that the time is beating on the icon, just like this {demo}.',
        s3: '3. Read data in the popup page',
        s3p1: 'Finally, click the icon to open the popup page, and you can read the data visualized with pie chart, of today, this week or this month.',
        alert: 'You have learned the basic usage, try it!!',
    },
    zh_TW: {
        title: '快速開始',
        p1: '只需簡單三步，就可以快速開始使用這個擴展。',
        s1: '1. 固定擴展的圖標',
        s1p1: '首先，為了更方便地使用這個擴展，你需要將圖標固定到工具欄上。不同瀏覽器的操作方式不同，下圖顯示了在 Chrome 中的做法。',
        s2: '2. 瀏覽任何網站',
        s2p1: '然後你可以點開任何網站，擴展圖標上會展示該網站的當日瀏覽時間，就像這樣 {demo}。',
        s3: '3. 在彈出頁中查看數據',
        s3p1: '最後，點擊擴展的圖標，你可以在彈出的頁面裡看到今天、本週以及本月的餅狀圖數據。',
        alert: '你已經學會了基本用法，趕緊試試！！',
    },
    ja: {
        title: '始めましょう',
        p1: 'この拡張機能は、わずか 3 つの簡単な手順ですぐに使い始めることができます。',
        s1: '1. アイコンを固定する',
        s1p1: 'まず、この拡張機能をより便利に使用するには、アイコンをツールバーにピン留めすることをお勧めします。 これを行う方法はブラウザーによって異なります。次の図は、Chrome での方法を示しています。',
        s2: '2. 任意の Web サイトを閲覧する',
        s2p1: '次に、任意の Web サイトを閲覧すると、この {demo} のように、時間がアイコンに刻み込まれていることがわかります。',
        s3: '3. ポップアップ ページでデータを読み取る',
        s3p1: '最後にアイコンをクリックしてポップアップページを開くと、今日、今週、今月のデータを円グラフで可視化して読むことができます。',
        alert: '基本的な使い方を学んだので、試してみてください！！',
    },
}

export default _default