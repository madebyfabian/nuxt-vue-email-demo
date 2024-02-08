<template>
	<EHtml lang="en">
		<EText>Hi {{ props.username }}!</EText>
	</EHtml>
</template>

<script setup lang="ts">
	const props = defineProps<{
		username: string
	}>()
</script>
