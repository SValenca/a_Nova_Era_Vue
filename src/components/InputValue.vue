<template>
    <div class="mb-3">
        <label for="nameInput" class="form-label">Nome</label>
        <input
            type="text"
            class="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            name="nome"
            required
            v-model="value"
            @input="
                () => {
                    isValidate = isValue(value);
                }
            "
        />
        <div id="nameHelp" class="form-text">
            <span v-if="!isValidate"> Nome invalido</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps, defineEmits} from "vue";

import { isValue } from "@/core/helpers/validator";

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: undefined,
    },
});

const emit = defineEmits(["update:modelValue"]);

const isValidate = ref(true);
const value = computed({
    get(){
        return props.modelValue;
    },
    set(value){
        emit("update:modelValue",value);
    }
})
</script>

<style scoped></style>