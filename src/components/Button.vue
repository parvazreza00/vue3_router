<script setup>


</script>

<template>

    <div>
        <button class="btn btn-primary">
            <slot name="licon"></slot>
            <span>
                <slot></slot>
            </span>
            <slot name="ricon"></slot>
        </button>
    </div>
</template>

<style scoped>

</style>