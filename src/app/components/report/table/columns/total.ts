/**
 * Copyright (c) 2022 Hengyang Zhang
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { t } from "@app/locale"
import { ElTableColumn } from "element-plus"
import DataItem from "@entity/dto/data-item"
import { defineComponent, h } from "vue"
import { periodFormatter } from "../../formatter"

const columnLabel = t(msg => msg.item.total)

const _default = defineComponent({
    name: "TotalColumn",
    props: {
        displayBySecond: {
            type: Boolean
        }
    },
    setup(props) {
        return () => h(ElTableColumn, {
            prop: "total",
            label: columnLabel,
            minWidth: 130,
            align: "center",
            sortable: "custom"
        }, {
            default: ({ row }: { row: DataItem }) => periodFormatter(row.total, props.displayBySecond || false)
        })
    }
})

export default _default