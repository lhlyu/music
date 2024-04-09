<template>
    <UDashboardLayout>
        <UDashboardPanel
            :width="250"
            :resizable="{ min: 200, max: 300 }"
            collapsible
        >
            <UDashboardNavbar
                title="音乐"
                :badge="pkg.version"
            />

            <UDashboardSidebar>
                <UDashboardSidebarLinks :links="menus" />
            </UDashboardSidebar>
        </UDashboardPanel>

        <UDashboardPanel grow>
            <UDashboardNavbar :title="menus.find(value => value.to === $route?.path)?.label"></UDashboardNavbar>

            <UDashboardPanelContent>
                <slot />
            </UDashboardPanelContent>
        </UDashboardPanel>
    </UDashboardLayout>
</template>

<script lang="ts" setup>
import pkg from '../package.json'

const menus = [
    {
        id: 'search',
        label: '搜索音乐',
        icon: 'i-heroicons-magnifying-glass',
        to: '/'
    },
    {
        id: 'favorite',
        label: '我的最爱',
        icon: 'i-heroicons-heart',
        to: '/favorite'
        // badge: '40'
    },
    {
        id: 'history',
        label: '历史下载',
        icon: 'i-heroicons-clock',
        to: '/history'
    }
]
</script>
