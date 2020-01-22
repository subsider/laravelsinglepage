<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden" :class="{ 'px-6 py-4' : ! noPadding }">
        <div class="mb-6" v-if="title">
            <h1 class="text-gray-900 text-xl" v-text="title"></h1>
            <div class="text-gray-600 text-sm uppercase tracking-wide font-semibold mt-1" v-text="subtitle"></div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        noPadding: Boolean,
    }
}
</script>

<style>

</style>