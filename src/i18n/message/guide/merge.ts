/**
 * Copyright (c) 2023-present Hengyang Zhang
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export type MergeMessage = {
    title: string
    p1: string
    p2: string
    lookTitle: string
    p3: string
    sourceCol: string
    targetCol: string
    remarkCol: string
    source: {
        title: string
        p1: string
        exampleCol: string
        only: string
    }
    target: {
        title: string
        p1: string
        lookCol: string
        remark: {
            blank: string
            spec: string
            integer: string
            specFirst: string
            miss: string
        }
        p2: string
        originalCol: string
        mergedCol: string
        hitCol: string
    }
}

const _default: Messages<MergeMessage> = {
    en: {
        title: 'Summarize data of related sites',
        p1: 'This extension is counted by domain name, for example, {demo1} and {demo2} will be counted as 2 records. '
            + 'If you want to see aggregated data for both sites, you\'ll need to use the merge feature.',
        p2: 'On most data display pages, merged queries are supported. And users can customize the merge rules on the background page{link}.',
        lookTitle: 'What\'s rules look like?',
        p3: 'The rule consists of two parts, the source part and the target part. '
            + 'The source part declares which sites hit the rule, and the target part defines how those sites are merged. '
            + 'For example, {demo} is a common rule, the left is the source site, and the right is the target site.',
        sourceCol: 'Source part',
        targetCol: 'Target part',
        remarkCol: 'Remark',
        source: {
            title: 'How to define the source part?',
            p1: 'The source part can be a specific domain name or an Ant expression. Below are some examples.',
            exampleCol: 'Examples of matched site',
            only: "Only {source} can hit this rule"
        },
        target: {
            title: 'How to define the target part?',
            p1: 'The target part can be a specific domain name, a positive integer, or be left blank. '
                + 'They will be introduced one by one in conjunction with the source part in the table below.',

            lookCol: 'Look',
            remark: {
                blank: '{source} won\'t be merged cause of blank target part',
                spec: 'Sites hitting {source} will be merged into the specific {target}',
                integer: 'Sites hitting {source} will be merged into the last {target} level domain names',
                specFirst: 'When multiple rules are hit, the source part takes precedence for a specific domain name',
                miss: 'Merge to the before level of Public Suffix List{link} when no rules are hit',
            },
            p2: 'The following table is some merging examples after the above rules are set at the same time.',
            originalCol: 'Original site',
            mergedCol: 'Merged site',
            hitCol: 'Hitted rule',
        }
    },
    zh_CN: {
        title: '合并统计相关站点',
        p1: '这个扩展是按照域名进行统计的，比方说 {demo1} 和 {demo2} 会被统计到 2 个条目。'
            + '如果您想要查看这两个网站的数据汇总的话，就需要使用合并功能。',
        p2: '在大多数的数据展示界面，都支持站点合并查询。并且用户可以在后台页自定义合并规则{link}。',
        lookTitle: '规则长什么样？',
        p3: '规则由两部分组成，源和目标。源部分声明哪些站点会命中该规则，而目标部分定义如何合并这些站点。'
            + '比如 {demo} 就是一个常见的规则，左边的是源，右边的是目标。',
        source: {
            title: '如何定义源部分？',
            p1: '源部分可以是具体的域名，也可以是 Ant 表达式。下面是一些例子。',
            exampleCol: '匹配网站的示例',
            only: '只有 {source} 能够命中该规则',
        },
        sourceCol: '源部分',
        targetCol: '目标部分',
        remarkCol: '备注',
        target: {
            title: '如何定义目标部分？',
            p1: '目标部分可以是具体的域名，正整数，或者留空。将在下表中结合源部分一一介绍。',
            lookCol: '规则外观',
            remark: {
                blank: '{source} 不会被合并，因为目标部分为空',
                spec: '满足 {source} 的网站会被合并到指定条目 {target}',
                integer: '满足 {source} 的网站，在合并时会保留后 {target} 级域名',
                specFirst: '命中多个规则时，源部分是具体域名的优先',
                miss: '没有命中任何规则时，合并至 Public Suffix List{link} 的前一级',
            },
            p2: '下表是上述规则同时设置后的一些合并示例。',
            originalCol: '原始站点',
            mergedCol: '合并后站点',
            hitCol: '命中的规则',
        },
    },
    zh_TW: {
        title: '合併統計相關站點',
        p1: '這個擴展是按照域名進行統計的，比方說 {demo1} 和 {demo2} 會被統計到 2 個條目。如果您想要查看這兩個網站的數據匯總的話，就需要使用合併功能。',
        p2: '在大多數的數據展示界面，都支持站點合併查詢。並且用戶可以在後台頁自定義合併規則{link}。',
        lookTitle: '規則長什麼樣？',
        p3: '規則由兩部分組成，源和目標。源部分聲明哪些站點會命中該規則，而目標部分定義如何合併這些站點。比如 {demo} 就是一個常見的規則，左邊的是源，右邊的是目標。',
        source: {
            title: '如何定義源部分？',
            p1: '源部分可以是具體的域名，也可以是 Ant 表達式。下面是一些例子。',
            exampleCol: '匹配網站的示例',
            only: '只有 {source} 能够命中该规则',
        },
        sourceCol: '源部分',
        targetCol: '目標部分',
        remarkCol: '備註',
        target: {
            title: '如何定義目標部分？',
            p1: '目標部分可以是具體的域名，正整數，或者留空。將在下表中結合源部分一一介紹。',
            lookCol: '規則外觀',
            remark: {
                blank: '{source} 不会被合并，因为目标部分为空',
                spec: '滿足 {source} 的網站會被合併到指定條目 {target}',
                integer: '滿足 {source} 的網站，在合併時會保留後 {target} 級域名',
                specFirst: '命中多個規則時，源部分是具體域名的優先',
                miss: '沒有命中任何規則時，合併至 Public Suffix List{link} 的前一級',
            },
            p2: '下表是上述規則同時設置後的一些合併示例。',
            originalCol: '原始站點',
            mergedCol: '合併後站點',
            hitCol: '命中的規則',
        },
    },
    ja: {
        title: '関連サイトのデータをまとめます',
        p1: 'この拡張子はドメイン名でカウントされます。たとえば、{demo1} と {demo2} は 2 つのレコードとしてカウントされます。'
            + '両方のサイトの集計データを表示する場合は、マージ機能を使用する必要があります。',
        p2: 'ほとんどのデータ表示ページでは、マージされたクエリがサポートされています。 また、ユーザーはバックグラウンド ページ{link}でマージ ルールをカスタマイズできます。',
        lookTitle: 'ルールはどのように見えますか？',
        p3: 'ルールは、ソース部分とターゲット部分の 2 つの部分で構成されます。'
            + 'ソース部分はルールに一致するサイトを宣言し、ターゲット部分はそれらのサイトがどのようにマージされるかを定義します。'
            + 'たとえば、{demo} は一般的なルールで、左側がソース サイト、右側がターゲット サイトです。',
        sourceCol: 'ソース部分',
        targetCol: '対象部位',
        remarkCol: '述べる',
        source: {
            title: 'ソース パーツを定義する方法',
            p1: 'ソース部分は、特定のドメイン名または Ant 式にすることができます。 以下にいくつかの例を示します。',
            exampleCol: 'マッチしたサイトの例',
            only: "このルールに該当するのは {source} だけです"
        },
        target: {
            title: 'ターゲット パーツを定義する方法',
            p1: 'ターゲット部分は、特定のドメイン名、正の整数、または空白のままにすることができます。'
                + '下表のソース部分と合わせて順次紹介していきます。',

            lookCol: '外観',
            remark: {
                blank: '{source} はマージされません 空白のターゲット パーツが原因です',
                spec: '{source} にヒットしたサイトは、特定の {target} にマージされます',
                integer: '{source} にヒットしたサイトは、最後の {target} レベルのドメイン名にマージされます',
                specFirst: '複数のルールがヒットした場合、特定のドメイン名についてソース部分が優先されます',
                miss: 'ルールにヒットしない場合は、Public Suffix List{link} の前のレベルにマージします',
            },
            p2: '次の表は、上記のルールを同時に設定した後のいくつかのマージ例です。',
            originalCol: '元のサイト',
            mergedCol: '統合サイト',
            hitCol: 'ヒットルール',
        }
    },
}

export default _default
