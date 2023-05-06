# Hello @huyuchen/visual

This is a UI framework<n-button quaternary type="primary" @click="jump"> >>Home</n-button>

<script setup>
import { useRouter } from 'vitepress'
const router = useRouter()
const jump = () => {
router.go('/guild/introduce')
}
</script>
