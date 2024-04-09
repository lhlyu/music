<template>
    <UCard>
        <template #header>
            <UInput
                v-model="q"
                name="q"
                size="xl"
                placeholder="回车搜索音乐"
                icon="i-heroicons-magnifying-glass-20-solid"
                autocomplete="off"
                :ui="{ icon: { trailing: { pointer: '' } } }"
                @keydown.enter="search"
            >
                <template #trailing>
                    <UButton
                        v-show="q !== ''"
                        color="gray"
                        variant="link"
                        icon="i-heroicons-x-mark-20-solid"
                        :padded="false"
                        @click="q = ''"
                    />
                </template>
            </UInput>
        </template>

        <div style="overflow-y: auto; position: relative">
            <table class="w-full">
                <thead class="sticky top-0 z-50 bg-white">
                    <tr>
                        <th class="text-left py-2">#</th>
                        <th class="text-left py-2">歌曲</th>
                        <th class="text-left py-2">歌手</th>
                        <th class="text-left py-3">时长</th>
                        <th class="text-left p-2">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(item, index) in rows">
                        <tr>
                            <td class="py-1">{{ index + 1 }}</td>
                            <td class="py-1">{{ item.name }}</td>
                            <td class="py-1">{{ item.singer }}</td>
                            <td class="py-1">{{ item.duration }}</td>
                            <td class="py-1">
                                <UTooltip
                                    :text="play === index ? '暂停' : '播放'"
                                    :popper="{ placement: 'left' }"
                                >
                                    <UButton
                                        v-if="play === index"
                                        @click="setPlay(index)"
                                        variant="link"
                                        icon="i-heroicons-pause-circle"
                                    />
                                    <UButton
                                        v-else
                                        @click="setPlay(index)"
                                        variant="link"
                                        color="gray"
                                        icon="i-heroicons-play"
                                    />
                                </UTooltip>
                                <UTooltip
                                    text="下载"
                                    :popper="{ placement: 'right' }"
                                >
                                    <UButton
                                        variant="link"
                                        color="gray"
                                        class="ml-1"
                                        icon="i-heroicons-arrow-down-tray-solid"
                                    />
                                </UTooltip>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </UCard>
</template>

<script setup lang="ts">
const { data } = useConfig()

const q = ref('')

const play = ref(-1)

const setPlay = (index: number) => {
    if (index === play.value) {
        play.value = -1
        return
    }
    play.value = index
}

const rows = ref([
    {
        name: '暖暖',
        singer: '梁静茹',
        duration: 5000
    },
    {
        name: '暖暖',
        singer: '梁静茹',
        duration: 5000
    },
    {
        name: '暖暖',
        singer: '梁静茹',
        duration: 5000
    },
    {
        name: '暖暖',
        singer: '梁静茹',
        duration: 5000
    },
    {
        name: '暖暖',
        singer: '梁静茹',
        duration: 5000
    },
    {
        name: '暖暖',
        singer: '梁静茹',
        duration: 5000
    },
    {
        name: '暖暖',
        singer: '梁静茹',
        duration: 5000
    },
    {
        name: '暖暖',
        singer: '梁静茹',
        duration: 5000
    },
    {
        name: '暖暖',
        singer: '梁静茹',
        duration: 5000
    },
    {
        name: '暖暖',
        singer: '梁静茹',
        duration: 5000
    }
])

const search = async () => {
    const result = await $fetch(`/api/music?word=${q.value}&id=${data.value?.id}&token=${data.value?.token}`)
	console.log(result)
}
</script>

<style scoped></style>

<!--
$("[btn='play'").click(function () {
                    var mid = $(this).parent().parent().parent().attr('mid');
                    var td = $(this).parent().parent().parent().find("td");
                    var audio = {
                        "name": td.eq(1).find("div").eq(0).text(),
                        "artist": td.eq(2).text(),
                        "url": sign_url("api?type=url&mid=" + mid + '&token=' + token),
                        "cover": $(this).parent().parent().parent().attr('pic'),
                        "lrc": sign_url("api?type=lrc&mid=" + mid + '&token=' + token),
                    };
                    if (ap) {
                        var num = getplaynum(mid);
                        if (num != undefined) {
                            ap.list.switch(num);
                        } else {
                            ap.list.add(audio);
                            play.push(mid);
                            ap.list.switch(getplaynum(mid));
                        }
                    } else {
                        setplay(audio);
                        play.push(mid);
                        ap.list.switch(getplaynum(mid));
                    }
                    msg('开始播放 <b>' + td.eq(1).find("div").eq(0).text() + '</b>', '🔊');
                    ap.play();
                });
-->