const useDefaultConfig = async () => {
    const config = ref({
        id: '',
        token: ''
    })

    const result = await useFetch('/api/config')

    config.value.id = result.data.value?.id ?? ''
    config.value.token = result.data.value?.token ?? ''

    return config
}

export const useConfig = () => {
    return useAsyncData('config', async config => {
        const state = await useDefaultConfig()
        return state.value
    })
}
