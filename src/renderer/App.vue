<template>
    <div id="app" class="window">
        <div class="window-content">
            <div class="pane-group">
                <div class="pane-mini sidebar app__sidebar" style="-webkit-app-region: drag;">

                </div>
                <div class="pane">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'electron-vue-demo'
    }
</script>

<style>
    /* CSS */
</style>
