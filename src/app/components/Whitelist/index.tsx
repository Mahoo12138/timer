/**
 * Copyright (c) 2021 Hengyang Zhang
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import '../common/editable-tag'
import { defineComponent } from "vue"
import ContentContainer from "../common/ContentContainer"
import AlertInfo from "./AlertInfo"
import WhitePanel from "./WhitePanel"
import { ElCard } from "element-plus"

const _default = defineComponent({
    render: () => (
        <ContentContainer>
            <ElCard>
                <AlertInfo />
                <WhitePanel />
            </ElCard>
        </ContentContainer>
    )
})

export default _default
