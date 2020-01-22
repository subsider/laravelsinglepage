<template>
    <div>
        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">Panels</h1>
            <base-panel class="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur commodi deserunt, eius
                eos eveniet laudantium libero molestiae mollitia, pariatur perspiciatis quibusdam saepe totam vel vero.
                Beatae doloribus iusto totam.
            </base-panel>
            <base-panel class="mb-8 flex" no-padding>
                <div class="bg-blue-500 w-64"></div>
                <div class="px-6 py-4 flex-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aperiam beatae earum et explicabo fugiat magnam mollitia qui sint temporibus ullam, vel voluptates voluptatibus voluptatum? Ab autem culpa optio?
                </div>
            </base-panel>
            <base-panel class="mb-8" title="My Title" subtitle="Some metadata">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur commodi deserunt, eius
                eos eveniet laudantium libero molestiae mollitia, pariatur perspiciatis quibusdam saepe totam vel vero.
                Beatae doloribus iusto totam.
            </base-panel>
        </section>
    </div>
</template>

<script>
    import BasePanel from "./BasePanel";

    export default {
        components: {
            BasePanel
        }
    }
</script>

<style>

</style>