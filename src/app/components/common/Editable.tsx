/**
 * Copyright (c) 2022 Hengyang Zhang
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Check, Close, Edit } from "@element-plus/icons-vue"
import { defineComponent, ref, nextTick } from "vue"
import { ElButton, ElIcon, ElInput, InputInstance } from "element-plus"
import { useShadow } from "@hooks"

/**
 * @since 0.7.1
 */
const _default = defineComponent({
    props: {
        modelValue: String
    },
    emits: {
        change: (_newVal: string) => true
    },
    setup(props, ctx) {
        const editing = ref(false)
        const [originVal] = useShadow(() => props.modelValue)
        const [inputVal, _, refreshInputVal] = useShadow(originVal)
        const input = ref<InputInstance>()
        const handleEnter = (ev: KeyboardEvent) => {
            if (ev.key !== 'Enter') return
            editing.value = false
            ctx.emit("change", inputVal.value)
        }
        const handleCancel = () => {
            editing.value = false
            refreshInputVal()
        }
        const handleSave = () => {
            editing.value = false
            ctx.emit("change", inputVal.value?.trim())
        }
        const handleEdit = () => {
            editing.value = true
            nextTick(() => input.value?.focus?.())
        }
        return () => editing.value
            ? <ElInput
                size="small"
                ref={input}
                modelValue={inputVal.value}
                onInput={val => inputVal.value = val?.trimStart()}
                onKeydown={handleEnter}
                v-slots={{
                    append: () => <>
                        <ElButton class="cancel-btn" icon={<Close />} onClick={handleCancel} />
                        <ElButton class="save-btn" icon={<Check />} onClick={handleSave} />
                    </>
                }}
            />
            : <>
                {inputVal.value && <span style={{ paddingRight: "4px" }}>{inputVal.value}</span>}
                <span onClick={handleEdit} style={{ marginTop: "-2px" }}>
                    <ElIcon class="edit-btn">
                        <Edit />
                    </ElIcon>
                </span>
            </>
    }
})

export default _default