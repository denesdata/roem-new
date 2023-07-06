<script lang="ts">
  import type { LayoutData } from './$types'
  import { onMount } from 'svelte'
  import { browser, dev } from '$app/environment'
  import { genTags } from '$lib/utils/posts'
  import { posts, tags } from '$lib/stores/posts'
  import { registerSW } from 'virtual:pwa-register'
  import Head from '$lib/components/head_static.svelte'
  import Header from '$lib/components/header.svelte'
  import Transition from '$lib/components/transition.svelte'
  import Explore from '$lib/components/explore.svelte'
  import Blog from '$lib/components/news.svelte'
  import 'uno.css'
  import '../app.pcss'
  import PostCard from '$lib/components/post_card.svelte'

  export let data: LayoutData

  let { res, path } = data

  $: if (data) path = data.path

  posts.set(res)
  tags.set(genTags(res))
  onMount(
    () =>
      !dev &&
      browser &&
      registerSW({
        immediate: true,
        onRegistered: r => r && setInterval(async () => await r.update(), 198964),
        onRegisterError: error => console.error(error)
      })
  )
  if (path[path.length - 1] == '/') path = path.slice(0, -1) //cut final slash
</script>

<Head />

<Header {path} />

<Transition {path}>
  {#if path == '/news' || path == '/news/'}
    <Blog />
  {:else if path == '/explore' || path == '/explore/'}
    <Explore />
  {:else}
    <!-- {path.split('/')[1]} -->
    <slot />
  {/if}
</Transition>
