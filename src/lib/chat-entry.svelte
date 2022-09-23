<script>
  import { derivedLog, deviceWidth, animated } from './stores';
  import { afterUpdate, beforeUpdate } from 'svelte';
  import { fade } from 'svelte/transition';
  let lastEntry, animateThis, transitionHasEnded = false;

  beforeUpdate(() => {
    if(transitionHasEnded) {
      transitionHasEnded = false;
      animated.set(false);
    }
  })

  afterUpdate(() => {
    if(lastEntry) {
      lastEntry.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest'});
    }
    if(animateThis) {
      animated.set(true);
    }
  })

  function onTransitionEnd(e) {
    transitionHasEnded = true;
  }

</script>

{#if $derivedLog.length > 0}
  {#each $derivedLog as entry, i }
    {#if ($derivedLog.length === 2 && $deviceWidth <= 700 && i === 0)}
      <div class='chat-entry' bind:this={animateThis} class:animated={$animated} class:moderator={entry.isModerator} class:client={!entry.isModerator} on:transitionend|preventDefault={onTransitionEnd}>
        {#if i === $derivedLog.length -1}
          <p bind:this={lastEntry} class:moderator={entry.isModerator} class:client={!entry.isModerator}>{entry.message}</p>
        {:else}
          <p class:moderator={entry.isModerator} class:client={!entry.isModerator}>{entry.message}</p>
        {/if}
      </div>
    {:else}
      <div class="chat-entry" class:moderator={entry.isModerator} class:client={!entry.isModerator}>
        {#if i === $derivedLog.length - 1}
          <p bind:this={lastEntry} class:moderator={entry.isModerator} class:client={!entry.isModerator}>{entry.message}</p>
        {:else}
          <p class:moderator={entry.isModerator} class:client={!entry.isModerator}>{entry.message}</p>
        {/if}
      </div>
    {/if}
  {/each}
{/if}


<style>
  .chat-entry {
    opacity: 0.9;
    /* width: 100%; */
  }

  .client {
    width: fit-content;

  }

  .client > p {
    background-color: #9F8CAD;
    border-radius: 5px 5px 5px 0px ;
    opacity: 0.9;
  }

  p {
    margin: 2px 5px;
    padding: 3px;

  }

  .moderator {
    display: flow-root;
  }

  .moderator > p {
    float: right;
    background-color: #9BAD8C;
    border-radius: 5px 0px 5px 5px ;
    opacity: 0.9;
  }

  @media screen and (max-width: 700px) {
    .chat-entry {

    }
    .animated {
      opacity: 0;
      transition: opacity 2s;
      transition-delay: 0.5s;
      transition-duration: 1.5s;
      transition-timing-function: ease-out;
    }

  }
</style>
